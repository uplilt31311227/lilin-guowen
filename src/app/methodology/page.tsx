import Section, { SectionHeader } from '@/components/ui/Section';
import Card, { CardTitle, CardDescription } from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export const metadata = {
  title: '閱破實驗室 | 立霖國文',
  description: '獨家閱破劍法，科學化解題方法論。將感性學習轉化為解題工程學。',
};

const tripleSlash = [
  {
    step: '01',
    name: '刪除',
    fullName: '刪除干擾',
    description: '快速辨識並剔除題目中的無關資訊，讓思考聚焦在真正重要的內容上。',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
  },
  {
    step: '02',
    name: '歸納',
    fullName: '歸納整合',
    description: '將散落的資訊點連結成線，再將線編織成面，形成完整的理解框架。',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
      </svg>
    ),
  },
  {
    step: '03',
    name: '關鍵句',
    fullName: '定位關鍵',
    description: '精準找出文章的核心句子，這往往就是答案的所在地。',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
];

const swordMoves = [
  { number: '一式', name: '來者何人', hint: '辨識文體與作者意圖' },
  { number: '二式', name: '小心暗器', hint: '警覺題目陷阱' },
  { number: '三式', name: '見招拆招', hint: '靈活應對變化題型' },
  { number: '四式', name: '五行規律', hint: '掌握文章結構模式' },
  { number: '五式', name: '借力使力', hint: '運用題目提供的線索' },
  { number: '六式', name: '以退為進', hint: '策略性跳過再回頭' },
  { number: '七式', name: '圖窮匕見', hint: '直擊答案核心' },
];

export default function MethodologyPage() {
  return (
    <>
      {/* Hero */}
      <Section background="navy">
        <div className="text-center py-12">
          <span className="inline-block px-4 py-1 bg-[var(--gold)] text-[var(--navy)] text-sm font-bold rounded-full mb-6">
            METHODOLOGY LAB
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--cream)] mb-4">
            閱破實驗室
          </h1>
          <p className="text-xl text-[var(--cream)]/80 max-w-2xl mx-auto">
            將感性學習轉化為「解題工程學」
            <br />
            科學化的方法，精準化的結果
          </p>
        </div>
      </Section>

      {/* Triple Slash Detailed */}
      <Section background="white">
        <SectionHeader
          title="基本三連斬"
          subtitle="邏輯演算法的核心運作模型"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {tripleSlash.map((item, index) => (
            <div key={index} className="relative">
              <Card className="h-full">
                <div className="absolute -top-4 left-6 w-12 h-12 bg-[var(--gold)] rounded-full flex items-center justify-center text-[var(--navy)] font-bold text-xl">
                  {item.step}
                </div>
                <div className="pt-8">
                  <div className="w-16 h-16 bg-[var(--navy)]/10 rounded-xl flex items-center justify-center text-[var(--navy)] mb-4">
                    {item.icon}
                  </div>
                  <CardTitle>{item.fullName}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </div>
              </Card>
              {index < 2 && (
                <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-8 bg-[var(--gold)] rounded-full items-center justify-center text-[var(--navy)] font-bold z-10">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-[var(--cream)] rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-[var(--navy)] mb-4">降維打擊策略</h3>
          <p className="text-lg text-[var(--navy-light)] max-w-2xl mx-auto">
            「把大段變小段，長句變短句」
            <br />
            複雜的文章經過三連斬處理後，化繁為簡，答案自然浮現。
          </p>
        </div>
      </Section>

      {/* Seven Sword Moves */}
      <Section background="cream">
        <SectionHeader
          title="閱破劍法七式"
          subtitle="進階招式名錄 — 詳細心法需親自修煉"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {swordMoves.map((move, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border-l-4 border-[var(--gold)] hover:shadow-lg transition-shadow"
            >
              <div className="text-[var(--gold)] text-sm font-semibold mb-1">{move.number}</div>
              <div className="text-xl font-bold text-[var(--navy)] mb-2">{move.name}</div>
              <div className="text-sm text-[var(--navy-light)]">{move.hint}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-[var(--navy-light)] mb-6">
            每一式皆有獨門心法，需要實戰演練才能領悟精髓
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section background="navy">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[var(--cream)] mb-4">
            準備好開始修煉了嗎？
          </h2>
          <p className="text-[var(--cream)]/80 mb-8 max-w-xl mx-auto">
            先進行學習診斷，讓我們了解你目前的程度，
            為你量身打造最適合的學習路徑。
          </p>
          <Button href="/diagnosis" variant="primary">
            開始 5 分鐘學習診斷
          </Button>
        </div>
      </Section>
    </>
  );
}
