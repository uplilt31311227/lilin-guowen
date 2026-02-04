import Section, { SectionHeader } from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export const metadata = {
  title: '學員見證 | 立霖國文',
  description: '真實學員的成功故事。從及格邊緣到 A++，從排斥寫作到學測滿分。',
};

const testimonials = [
  {
    category: '逆轉勝',
    name: '小明',
    grade: '國三',
    before: 'B+',
    after: 'A++',
    story: '原本國文總是在及格邊緣徘徊，對閱讀測驗更是毫無頭緒。接觸閱破系統後，學會了「基本三連斬」的拆解方法，才發現原來閱讀理解是有邏輯可循的。',
    quote: '「以前看到長文就頭痛，現在反而期待解題的過程。」',
    highlight: '從 B+ 直衝 A++',
    avatar: '明',
  },
  {
    category: '理科救星',
    name: '阿傑',
    grade: '高三',
    before: '13 分',
    after: '20 分',
    story: '身為理組學生，數學物理都難不倒我，唯獨國文作文讓我束手無策。老師教我用「邏輯架構」來組織文章，把我擅長的推理思維轉化成寫作優勢。',
    quote: '「原來寫作也可以很科學，不只是感覺。」',
    highlight: '學測國寫滿分',
    avatar: '傑',
  },
  {
    category: '心靈重建',
    name: '小芸',
    grade: '國二',
    before: '拒學',
    after: 'B++',
    story: '曾經因為國文成績低落而產生嚴重的學習焦慮，甚至一度拒絕上學。老師用耐心和適合我的學習節奏，讓我重新找回對學習的信心。',
    quote: '「不只是成績進步，更重要的是我不再害怕面對考試了。」',
    highlight: '重拾學習信心',
    avatar: '芸',
  },
];

const stats = [
  { number: '500+', label: '成功案例' },
  { number: '95%', label: '滿意度' },
  { number: '85%', label: '達標率' },
  { number: '3+', label: '平均進步等級' },
];

const moreStories = [
  { name: '小華', result: 'C → B++', type: '國中會考' },
  { name: '阿宏', result: 'B+ → A+', type: '國中會考' },
  { name: '小雯', result: '14 → 18', type: '學測國寫' },
  { name: '志明', result: 'B → A', type: '國中會考' },
  { name: '美玲', result: '12 → 17', type: '學測國寫' },
  { name: '小凱', result: 'A → A++', type: '國中會考' },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <Section background="navy">
        <div className="text-center py-12">
          <span className="inline-block px-4 py-1 bg-[var(--gold)] text-[var(--navy)] text-sm font-bold rounded-full mb-6">
            HALL OF FAME
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--cream)] mb-4">
            學員見證
          </h1>
          <p className="text-xl text-[var(--cream)]/80 max-w-2xl mx-auto">
            每一個成功故事，都從相信開始
            <br />
            真實案例，真實改變
          </p>
        </div>
      </Section>

      {/* Stats */}
      <Section background="white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[var(--navy)]">{stat.number}</div>
              <div className="text-[var(--navy-light)]">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Featured Testimonials */}
      <Section background="cream">
        <SectionHeader
          title="代表性案例"
          subtitle="不同類型的學習困境，相同的突破成功"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <Card key={index} className="relative overflow-hidden">
              {/* Category Badge */}
              <div className="absolute top-0 right-0 bg-[var(--gold)] text-[var(--navy)] px-4 py-1 text-sm font-bold rounded-bl-xl">
                {item.category}
              </div>

              {/* Avatar */}
              <div className="flex items-center gap-4 mb-6 pt-4">
                <div className="w-16 h-16 bg-[var(--navy)] rounded-full flex items-center justify-center text-[var(--gold)] text-2xl font-bold">
                  {item.avatar}
                </div>
                <div>
                  <div className="font-bold text-[var(--navy)] text-lg">{item.name}</div>
                  <div className="text-sm text-[var(--navy-light)]">{item.grade}</div>
                </div>
              </div>

              {/* Progress */}
              <div className="flex items-center gap-4 mb-6 p-4 bg-[var(--cream)] rounded-xl">
                <div className="text-center flex-1">
                  <div className="text-sm text-[var(--navy-light)]">Before</div>
                  <div className="text-2xl font-bold text-red-500">{item.before}</div>
                </div>
                <div className="text-[var(--gold)] text-2xl">→</div>
                <div className="text-center flex-1">
                  <div className="text-sm text-[var(--navy-light)]">After</div>
                  <div className="text-2xl font-bold text-green-500">{item.after}</div>
                </div>
              </div>

              {/* Story */}
              <p className="text-[var(--navy)] mb-4 leading-relaxed">
                {item.story}
              </p>

              {/* Quote */}
              <blockquote className="border-l-4 border-[var(--gold)] pl-4 italic text-[var(--navy-light)]">
                {item.quote}
              </blockquote>

              {/* Highlight */}
              <div className="mt-6 pt-4 border-t border-[var(--navy)]/10">
                <span className="text-sm font-semibold text-[var(--gold)]">
                  {item.highlight}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* More Stories */}
      <Section background="white">
        <SectionHeader
          title="更多成功案例"
          subtitle="每一位都是從相信自己開始"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {moreStories.map((story, index) => (
            <div
              key={index}
              className="bg-[var(--cream)] rounded-xl p-4 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-[var(--navy)] rounded-full flex items-center justify-center text-[var(--gold)] font-bold mx-auto mb-3">
                {story.name.charAt(0)}
              </div>
              <div className="font-semibold text-[var(--navy)]">{story.name}</div>
              <div className="text-[var(--gold)] font-bold my-1">{story.result}</div>
              <div className="text-xs text-[var(--navy-light)]">{story.type}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="navy">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[var(--cream)] mb-4">
            下一個成功故事，由你書寫
          </h2>
          <p className="text-[var(--cream)]/80 mb-8 max-w-xl mx-auto">
            無論你現在的程度如何，我們都有方法幫助你進步。
            第一步，從了解自己開始。
          </p>
          <Button href="/diagnosis" variant="primary">
            開始你的診斷之旅
          </Button>
        </div>
      </Section>
    </>
  );
}
