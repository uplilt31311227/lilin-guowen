---
name: gemini-ai
description: 使用 Google Gemini AI 進行文本生成、圖片分析、內容創作。當用戶提到「Gemini」、「AI 生成」、「Google AI」、「內容創作」、「文案生成」時使用此 skill。
allowed-tools: Bash, Write, Read, Glob
argument-hint: "[task-type] [content]"
---

# Google Gemini AI 集成

此 skill 讓你能夠使用 Google Gemini AI 模型執行各種 AI 任務。

## 環境設置

### 1. 獲取 API 金鑰
前往 https://aistudio.google.com/app/apikeys 獲取免費的 Gemini API 金鑰

### 2. 設置環境變數
```bash
# Windows (PowerShell)
$env:GEMINI_API_KEY="your_api_key_here"

# Windows (CMD)
set GEMINI_API_KEY=your_api_key_here

# Linux/Mac
export GEMINI_API_KEY=your_api_key_here
```

### 3. 安裝依賴
```bash
uv pip install google-generativeai
```

## 支持的任務

| 任務類型 | 說明 | 命令範例 |
|---------|------|---------|
| 文本生成 | 生成文章、文案 | `/gemini-ai generate 寫一段產品介紹` |
| 圖片分析 | 描述、分析圖片 | `/gemini-ai analyze image.jpg` |
| 代碼生成 | 生成程式碼 | `/gemini-ai code 寫一個排序函數` |
| 翻譯 | 多語言翻譯 | `/gemini-ai translate 你好 to English` |
| 摘要 | 文章摘要 | `/gemini-ai summarize article.txt` |
| 改寫 | 改寫文本 | `/gemini-ai rewrite 使這段更專業` |

## 可用模型

| 模型 | 用途 | 特點 |
|------|------|------|
| gemini-2.0-flash | 通用任務 | 快速、高效 |
| gemini-1.5-pro | 複雜任務 | 更強大、支援長文本 |
| gemini-1.5-flash | 快速回應 | 速度優先 |

## Python 使用範例

### 基本文本生成
```python
import google.generativeai as genai
import os

genai.configure(api_key=os.environ.get('GEMINI_API_KEY'))
model = genai.GenerativeModel('gemini-2.0-flash')

response = model.generate_content("你的提示詞")
print(response.text)
```

### 圖片分析
```python
import google.generativeai as genai
from PIL import Image
import os

genai.configure(api_key=os.environ.get('GEMINI_API_KEY'))
model = genai.GenerativeModel('gemini-2.0-flash')

img = Image.open('image.jpg')
response = model.generate_content([img, "描述這張圖片"])
print(response.text)
```

### 多輪對話
```python
import google.generativeai as genai
import os

genai.configure(api_key=os.environ.get('GEMINI_API_KEY'))
model = genai.GenerativeModel('gemini-2.0-flash')

chat = model.start_chat(history=[])
response = chat.send_message("你好！")
print(response.text)

response = chat.send_message("繼續上一個話題")
print(response.text)
```

### 內容創作（適用於立霖國文）
```python
import google.generativeai as genai
import os

genai.configure(api_key=os.environ.get('GEMINI_API_KEY'))
model = genai.GenerativeModel('gemini-2.0-flash')

# 生成教學文案
prompt = """
你是立霖國文的文案撰寫專家。請根據以下主題生成吸引人的教學文案：
主題：{topic}
目標對象：{audience}
風格：專業、親切、有深度
"""

response = model.generate_content(prompt.format(
    topic="閱讀理解技巧",
    audience="國中生家長"
))
print(response.text)
```

## 工作流程

當用戶請求 Gemini AI 任務時：

1. **確認 API 金鑰** - 檢查環境變數是否已設置
2. **解析任務類型** - 文本生成、圖片分析、翻譯等
3. **準備輸入** - 文本或圖片
4. **選擇模型** - 根據任務複雜度選擇
5. **調用 API** - 執行生成
6. **處理結果** - 格式化並展示

## 適用場景（立霖國文）

- 生成教學文案和宣傳內容
- 分析學生作文並提供建議
- 生成練習題目
- 翻譯古文為白話文
- 創作教學素材

## 注意事項

- API 有使用配額限制（免費版每分鐘 60 次請求）
- 敏感內容可能被過濾
- 建議保存重要生成結果
- 圖片分析支援 JPEG、PNG、GIF、WebP 格式
