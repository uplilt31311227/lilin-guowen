'use client';

import Button from '@/components/ui/Button';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-[var(--cream)] to-[var(--cream-dark)]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 border-2 border-[var(--navy)] rounded-full" />
        <div className="absolute bottom-20 right-10 w-96 h-96 border-2 border-[var(--navy)] rounded-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[var(--navy)] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[var(--navy)]/10 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-[var(--gold)] rounded-full animate-pulse" />
              <span className="text-[var(--navy)] text-sm font-medium">素養教學領航者</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--navy)] leading-tight mb-6">
              人生沒有 Google
              <br />
              <span className="text-[var(--gold)]">但有經典可循</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-[var(--navy-light)] mb-8 max-w-lg">
              帶你讀懂文章邏輯，寫出生命厚度。
            </p>

            {/* Description */}
            <p className="text-[var(--navy)]/70 mb-8 max-w-lg leading-relaxed">
              將「解題」定義為「邏輯思考的展現」；將「古文」定義為「跨時空的生命諮詢」。
              在數位時代，我們用現代思維解讀經典智慧。
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/diagnosis" variant="primary" className="text-center">
                立即預約：5 分鐘學習診斷
              </Button>
              <Button href="/methodology" variant="secondary" className="text-center">
                了解閱破系統
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12">
              <div>
                <div className="text-3xl font-bold text-[var(--navy)]">500+</div>
                <div className="text-sm text-[var(--navy-light)]">學員成功案例</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--navy)]">95%</div>
                <div className="text-sm text-[var(--navy-light)]">滿意度</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--navy)]">A++</div>
                <div className="text-sm text-[var(--navy-light)]">頂尖目標</div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative lg:pl-8">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Background Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[var(--gold)]/20 to-[var(--navy)]/10 rounded-3xl blur-2xl" />

              {/* Main Card */}
              <div className="relative bg-gradient-to-b from-[var(--navy)] via-[var(--navy)] to-[var(--navy-dark)] rounded-3xl overflow-hidden shadow-2xl">
                {/* Decorative Top Bar */}
                <div className="h-2 bg-gradient-to-r from-[var(--gold)] via-[var(--gold-light)] to-[var(--gold)]" />

                {/* Teacher Image Container */}
                <div className="relative pt-8 pb-0 px-8">
                  {/* Floating Labels */}
                  <div className="absolute top-12 left-4 bg-[var(--gold)] text-[var(--navy)] px-3 py-1 rounded-full text-sm font-bold shadow-lg z-10">
                    閱讀
                  </div>
                  <div className="absolute top-12 right-4 bg-[var(--gold)] text-[var(--navy)] px-3 py-1 rounded-full text-sm font-bold shadow-lg z-10">
                    邏輯
                  </div>
                  <div className="absolute bottom-24 left-4 bg-[var(--cream)] text-[var(--navy)] px-3 py-1 rounded-full text-sm font-bold shadow-lg z-10">
                    古文
                  </div>
                  <div className="absolute bottom-24 right-4 bg-[var(--cream)] text-[var(--navy)] px-3 py-1 rounded-full text-sm font-bold shadow-lg z-10">
                    寫作
                  </div>

                  {/* Teacher Image */}
                  <div className="relative flex justify-center">
                    <Image
                      src="/lilin-guowen/images/形象照 去背.png"
                      alt="立霖老師"
                      width={320}
                      height={400}
                      className="object-contain relative z-0"
                      priority
                    />
                  </div>
                </div>

                {/* Bottom Info Bar */}
                <div className="bg-[var(--navy-dark)] px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[var(--gold)] font-bold text-lg">立霖老師</p>
                      <p className="text-[var(--cream)]/70 text-sm">素養教學專家</p>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-[var(--gold)] rounded-full animate-pulse" />
                      <div className="w-3 h-3 bg-[var(--gold)]/60 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                      <div className="w-3 h-3 bg-[var(--gold)]/30 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Accent Elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-[var(--gold)]/20 rounded-full blur-xl" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[var(--navy)]/30 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-[var(--navy)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
