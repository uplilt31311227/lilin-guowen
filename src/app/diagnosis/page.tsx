'use client';

import { useState } from 'react';
import Section, { SectionHeader } from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import {
  submitToGoogleSheets,
  gradeLabels,
  symptomLabels,
  goalLabels,
  calculateLevel,
} from '@/lib/googleSheets';

type FormData = {
  name: string;
  phone: string;
  email: string;
  grade: string;
  correctQuestions: string;
  symptoms: string[];
  goal: string;
};

const symptoms = [
  { id: 'logic-writing', label: '理科直男型', description: '寫作枯燥，缺乏感性表達' },
  { id: 'classical-barrier', label: '文白障礙型', description: '古文排斥，看到文言文就頭痛' },
  { id: 'formula-writing', label: '罐頭公式型', description: '寫作公式化，缺乏個人風格' },
  { id: 'reading-slow', label: '閱讀龜速型', description: '閱讀速度慢，時間不夠用' },
  { id: 'structure-weak', label: '架構薄弱型', description: '文章結構鬆散，邏輯不清' },
];

const goals = [
  { id: 'rush-a', label: '衝 A 策略', description: '目標精熟等級，追求卓越' },
  { id: 'escape-c', label: '脫 C 策略', description: '穩固基礎，確保通過' },
  { id: 'writing-boost', label: '寫作加強', description: '專攻作文，提升表達能力' },
  { id: 'comprehensive', label: '全面提升', description: '閱讀寫作同步加強' },
];

export default function DiagnosisPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    grade: '',
    correctQuestions: '',
    symptoms: [],
    goal: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSymptomToggle = (symptomId: string) => {
    setFormData(prev => ({
      ...prev,
      symptoms: prev.symptoms.includes(symptomId)
        ? prev.symptoms.filter(s => s !== symptomId)
        : [...prev.symptoms, symptomId],
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      // 提交到 Google Sheets
      const result = await submitToGoogleSheets(formData);

      if (result.success) {
        setIsSubmitted(true);
      } else {
        console.error('提交失敗:', result.error);
        alert('提交失敗，請稍後再試。');
      }
    } catch (error) {
      console.error('提交錯誤:', error);
      alert('提交時發生錯誤，請稍後再試。');
    } finally {
      setIsSubmitting(false);
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.name && formData.phone && formData.grade;
      case 2:
        return formData.correctQuestions !== '';
      case 3:
        return formData.symptoms.length > 0;
      case 4:
        return formData.goal !== '';
      default:
        return false;
    }
  };

  if (isSubmitted) {
    return (
      <Section background="cream">
        <div className="max-w-2xl mx-auto text-center py-16">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-[var(--navy)] mb-4">診斷表單已送出！</h1>
          <p className="text-[var(--navy-light)] mb-8">
            感謝您的填寫，我們將在 24 小時內與您聯繫，
            <br />
            提供專屬的學習診斷建議。
          </p>
          <Button href="/" variant="secondary">
            返回首頁
          </Button>
        </div>
      </Section>
    );
  }

  return (
    <>
      {/* Hero */}
      <Section background="navy">
        <div className="text-center py-8">
          <span className="inline-block px-4 py-1 bg-[var(--gold)] text-[var(--navy)] text-sm font-bold rounded-full mb-6">
            FREE DIAGNOSIS
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--cream)] mb-4">
            5 分鐘學習診斷
          </h1>
          <p className="text-xl text-[var(--cream)]/80 max-w-2xl mx-auto">
            了解你的學習現狀，找出最適合的突破策略
          </p>
        </div>
      </Section>

      {/* Progress Bar */}
      <div className="bg-white py-6 sticky top-16 z-40 border-b">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex justify-between mb-2">
            {['基本資料', '學習現況', '症狀分析', '目標設定'].map((label, index) => (
              <div
                key={index}
                className={`text-sm font-medium ${step > index + 1 ? 'text-[var(--gold)]' : step === index + 1 ? 'text-[var(--navy)]' : 'text-gray-400'}`}
              >
                {label}
              </div>
            ))}
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[var(--gold)] transition-all duration-500"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Form Steps */}
      <Section background="cream">
        <div className="max-w-2xl mx-auto">
          {/* Step 1: Basic Info */}
          {step === 1 && (
            <Card>
              <h2 className="text-2xl font-bold text-[var(--navy)] mb-6">基本資料</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-[var(--navy)] font-medium mb-2">
                    學生姓名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent"
                    placeholder="請輸入姓名"
                  />
                </div>
                <div>
                  <label className="block text-[var(--navy)] font-medium mb-2">
                    聯絡電話 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent"
                    placeholder="請輸入聯絡電話"
                  />
                </div>
                <div>
                  <label className="block text-[var(--navy)] font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent"
                    placeholder="請輸入 Email（選填）"
                  />
                </div>
                <div>
                  <label className="block text-[var(--navy)] font-medium mb-2">
                    目前年級 <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent"
                  >
                    <option value="">請選擇年級</option>
                    <option value="junior-1">國一</option>
                    <option value="junior-2">國二</option>
                    <option value="junior-3">國三</option>
                    <option value="senior-1">高一</option>
                    <option value="senior-2">高二</option>
                    <option value="senior-3">高三</option>
                  </select>
                </div>
              </div>
            </Card>
          )}

          {/* Step 2: Current Status */}
          {step === 2 && (
            <Card>
              <h2 className="text-2xl font-bold text-[var(--navy)] mb-6">學習現況</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-[var(--navy)] font-medium mb-2">
                    最近一次模考答對題數（選擇題共 48 題）<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="48"
                    value={formData.correctQuestions}
                    onChange={(e) => setFormData({ ...formData, correctQuestions: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent"
                    placeholder="請輸入答對題數（0-48）"
                  />
                </div>
                {formData.correctQuestions && (
                  <div className="p-4 bg-[var(--cream)] rounded-lg">
                    <div className="text-sm text-[var(--navy-light)] mb-1">預估等級</div>
                    <div className="text-2xl font-bold text-[var(--navy)]">
                      {parseInt(formData.correctQuestions) >= 46 ? 'A++' :
                        parseInt(formData.correctQuestions) >= 44 ? 'A+' :
                          parseInt(formData.correctQuestions) >= 42 ? 'A' :
                            parseInt(formData.correctQuestions) >= 38 ? 'B++' :
                              parseInt(formData.correctQuestions) >= 34 ? 'B+' :
                                parseInt(formData.correctQuestions) >= 29 ? 'B' : 'C'}
                    </div>
                  </div>
                )}
              </div>
            </Card>
          )}

          {/* Step 3: Symptoms */}
          {step === 3 && (
            <Card>
              <h2 className="text-2xl font-bold text-[var(--navy)] mb-2">症狀分析</h2>
              <p className="text-[var(--navy-light)] mb-6">請選擇符合的學習困境（可複選）</p>
              <div className="space-y-4">
                {symptoms.map((symptom) => (
                  <div
                    key={symptom.id}
                    onClick={() => handleSymptomToggle(symptom.id)}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${formData.symptoms.includes(symptom.id)
                        ? 'border-[var(--gold)] bg-[var(--gold)]/10'
                        : 'border-gray-200 hover:border-[var(--navy-light)]'
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${formData.symptoms.includes(symptom.id)
                          ? 'border-[var(--gold)] bg-[var(--gold)]'
                          : 'border-gray-300'
                        }`}>
                        {formData.symptoms.includes(symptom.id) && (
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <div className="font-semibold text-[var(--navy)]">{symptom.label}</div>
                        <div className="text-sm text-[var(--navy-light)]">{symptom.description}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Step 4: Goals */}
          {step === 4 && (
            <Card>
              <h2 className="text-2xl font-bold text-[var(--navy)] mb-2">目標設定</h2>
              <p className="text-[var(--navy-light)] mb-6">請選擇你的學習目標</p>
              <div className="space-y-4">
                {goals.map((goal) => (
                  <div
                    key={goal.id}
                    onClick={() => setFormData({ ...formData, goal: goal.id })}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${formData.goal === goal.id
                        ? 'border-[var(--gold)] bg-[var(--gold)]/10'
                        : 'border-gray-200 hover:border-[var(--navy-light)]'
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${formData.goal === goal.id
                          ? 'border-[var(--gold)] bg-[var(--gold)]'
                          : 'border-gray-300'
                        }`}>
                        {formData.goal === goal.id && (
                          <div className="w-2 h-2 bg-white rounded-full" />
                        )}
                      </div>
                      <div>
                        <div className="font-semibold text-[var(--navy)]">{goal.label}</div>
                        <div className="text-sm text-[var(--navy-light)]">{goal.description}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            {step > 1 ? (
              <Button variant="secondary" onClick={() => setStep(step - 1)}>
                上一步
              </Button>
            ) : (
              <div />
            )}
            {step < 4 ? (
              <Button
                variant="primary"
                onClick={() => setStep(step + 1)}
                disabled={!canProceed()}
                className={!canProceed() ? 'opacity-50 cursor-not-allowed' : ''}
              >
                下一步
              </Button>
            ) : (
              <Button
                variant="primary"
                onClick={handleSubmit}
                disabled={!canProceed() || isSubmitting}
              >
                {isSubmitting ? '送出中...' : '送出診斷'}
              </Button>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
