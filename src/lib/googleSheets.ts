/**
 * Google Sheets API 整合
 *
 * 使用方式：
 * 1. 在 Google Cloud Console 建立專案
 * 2. 啟用 Google Sheets API
 * 3. 建立服務帳號並下載 JSON 金鑰
 * 4. 將金鑰內容設定為環境變數
 * 5. 在 Google Sheets 中將試算表分享給服務帳號的 email
 */

// 表單資料類型
export interface DiagnosisFormData {
  name: string;
  phone: string;
  email: string;
  grade: string;
  correctQuestions: string;
  symptoms: string[];
  goal: string;
  submittedAt: string;
  estimatedLevel: string;
}

// 計算預估等級
export function calculateLevel(correctQuestions: number): string {
  if (correctQuestions >= 46) return 'A++';
  if (correctQuestions >= 44) return 'A+';
  if (correctQuestions >= 42) return 'A';
  if (correctQuestions >= 38) return 'B++';
  if (correctQuestions >= 34) return 'B+';
  if (correctQuestions >= 29) return 'B';
  return 'C';
}

// 年級對照
export const gradeLabels: Record<string, string> = {
  'junior-1': '國一',
  'junior-2': '國二',
  'junior-3': '國三',
  'senior-1': '高一',
  'senior-2': '高二',
  'senior-3': '高三',
};

// 症狀對照
export const symptomLabels: Record<string, string> = {
  'logic-writing': '理科直男型',
  'classical-barrier': '文白障礙型',
  'formula-writing': '罐頭公式型',
  'reading-slow': '閱讀龜速型',
  'structure-weak': '架構薄弱型',
};

// 目標對照
export const goalLabels: Record<string, string> = {
  'rush-a': '衝 A 策略',
  'escape-c': '脫 C 策略',
  'writing-boost': '寫作加強',
  'comprehensive': '全面提升',
};

/**
 * 提交表單資料到 Google Sheets
 *
 * 注意：由於是靜態導出，這裡使用 Google Sheets API 的 Web App 方式
 * 您需要：
 * 1. 建立 Google Apps Script Web App
 * 2. 設定接收 POST 請求並寫入試算表
 * 3. 將 Web App URL 設定在下方
 */
const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || '';

export async function submitToGoogleSheets(formData: Omit<DiagnosisFormData, 'submittedAt' | 'estimatedLevel'>): Promise<{ success: boolean; error?: string }> {
  if (!GOOGLE_SCRIPT_URL) {
    console.warn('Google Script URL 未設定，表單資料僅在本地記錄');
    console.log('Form data:', formData);
    return { success: true };
  }

  const data: DiagnosisFormData = {
    ...formData,
    submittedAt: new Date().toISOString(),
    estimatedLevel: calculateLevel(parseInt(formData.correctQuestions) || 0),
  };

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Google Apps Script 需要
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        phone: data.phone,
        email: data.email || '未填寫',
        grade: gradeLabels[data.grade] || data.grade,
        correctQuestions: data.correctQuestions,
        estimatedLevel: data.estimatedLevel,
        symptoms: data.symptoms.map(s => symptomLabels[s] || s).join(', '),
        goal: goalLabels[data.goal] || data.goal,
        submittedAt: data.submittedAt,
      }),
    });

    return { success: true };
  } catch (error) {
    console.error('提交表單失敗:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : '未知錯誤'
    };
  }
}

/**
 * Google Apps Script 範例程式碼
 * 請在 Google Apps Script 中建立新專案並貼上以下程式碼：
 *
 * function doPost(e) {
 *   const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *   const data = JSON.parse(e.postData.contents);
 *
 *   sheet.appendRow([
 *     data.submittedAt,
 *     data.name,
 *     data.phone,
 *     data.email,
 *     data.grade,
 *     data.correctQuestions,
 *     data.estimatedLevel,
 *     data.symptoms,
 *     data.goal
 *   ]);
 *
 *   return ContentService.createTextOutput(JSON.stringify({ success: true }))
 *     .setMimeType(ContentService.MimeType.JSON);
 * }
 *
 * function doGet() {
 *   return ContentService.createTextOutput('Google Sheets API is running');
 * }
 */
