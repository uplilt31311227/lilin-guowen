---
name: image-editor
description: 編輯和處理專案中的圖片。支持調整大小、裁剪、壓縮、格式轉換、去背等操作。當用戶提到「編輯圖片」、「調整圖片大小」、「壓縮圖片」、「圖片處理」時使用此 skill。
allowed-tools: Bash, Write, Read, Glob
argument-hint: "[image-path] [operation]"
---

# 圖片編輯工具

你擁有完整的圖片編輯能力。使用 Python 和 Pillow 庫來處理圖片。

## 環境設置

首次使用前，確保已安裝 Pillow：
```bash
uv pip install Pillow
```

## 支持的操作

| 操作 | 命令範例 |
|------|---------|
| 調整大小 | `/image-editor photo.jpg resize 800x600` |
| 裁剪 | `/image-editor photo.jpg crop 100,100,500,400` |
| 旋轉 | `/image-editor photo.jpg rotate 90` |
| 壓縮 | `/image-editor photo.jpg compress 80` |
| 格式轉換 | `/image-editor photo.jpg convert png` |
| 批量處理 | `/image-editor ./images resize 800x600` |
| 縮圖生成 | `/image-editor photo.jpg thumbnail 200x200` |

## 工作流程

當用戶請求圖片編輯時：

1. **確認圖片路徑** - 使用 Glob 搜尋專案中的圖片
2. **檢查圖片格式** - 確認支援的格式（JPEG, PNG, GIF, WebP, BMP）
3. **執行操作** - 使用 Python + Pillow 執行
4. **保存結果** - 保存到原目錄或指定位置
5. **回報結果** - 顯示處理前後的資訊

## Python 範例代碼

### 調整大小
```python
from PIL import Image

def resize_image(input_path, output_path, size):
    with Image.open(input_path) as img:
        img.thumbnail(size, Image.Resampling.LANCZOS)
        img.save(output_path, quality=95)
```

### 壓縮圖片
```python
from PIL import Image

def compress_image(input_path, output_path, quality=80):
    with Image.open(input_path) as img:
        if img.mode in ('RGBA', 'P'):
            img = img.convert('RGB')
        img.save(output_path, 'JPEG', quality=quality, optimize=True)
```

### 批量處理
```python
from PIL import Image
from pathlib import Path

def batch_resize(directory, size):
    path = Path(directory)
    for img_file in path.glob('*.{jpg,jpeg,png,gif,webp}'):
        with Image.open(img_file) as img:
            img.thumbnail(size, Image.Resampling.LANCZOS)
            output = img_file.stem + '_resized' + img_file.suffix
            img.save(path / output, quality=95)
```

## 專案圖片位置

本專案的圖片通常位於：
- `public/images/` - 網站使用的圖片

## 注意事項

- 處理前會自動備份原始圖片（加上 `_backup` 後綴）
- 批量處理時會顯示進度
- 支援中文檔名
- 預設保持原始比例（除非明確指定不保持）
