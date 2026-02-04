'use client';

import Button from '@/components/ui/Button';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-gradient-to-br from-[#1a365d] via-[#1e3a5f] to-[#0f2744]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        <div className="absolute top-20 left-[10%] w-2 h-2 bg-[var(--gold)]/40 rounded-full animate-pulse" />
        <div className="absolute top-40 left-[20%] w-1 h-1 bg-white/30 rounded-full animate-ping" style={{ animationDuration: '2s' }} />
        <div className="absolute top-60 left-[15%] w-1.5 h-1.5 bg-[var(--gold)]/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-40 left-[25%] w-1 h-1 bg-white/20 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
        <div className="absolute top-32 right-[15%] w-1.5 h-1.5 bg-[var(--gold)]/50 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-60 right-[20%] w-2 h-2 bg-white/20 rounded-full animate-ping" style={{ animationDuration: '2.5s' }} />

        {/* Decorative book icons */}
        <svg className="absolute top-16 left-8 w-24 h-24 text-[var(--gold)]/10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
        </svg>
        <svg className="absolute bottom-20 left-16 w-20 h-20 text-white/5 rotate-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"/>
        </svg>
        <svg className="absolute top-1/3 right-8 w-16 h-16 text-[var(--gold)]/10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
        </svg>

        {/* Cloud decorations */}
        <div className="absolute top-8 right-24 w-32 h-12 bg-white/5 rounded-full blur-xl" />
        <div className="absolute top-12 right-32 w-24 h-8 bg-white/5 rounded-full blur-lg" />

        {/* Star decorations */}
        <svg className="absolute bottom-32 right-12 w-8 h-8 text-white/20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="relative z-10 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-[var(--gold)]/50 bg-[var(--gold)]/10 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-[var(--gold)] rounded-full animate-pulse" />
              <span className="text-[var(--gold)] text-sm font-medium">素養教學領航者</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              人生沒有 Google
              <br />
              <span className="text-[var(--gold)]">但有經典可循</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-[var(--cream)] mb-6 max-w-lg mx-auto lg:mx-0">
              帶你讀懂文章邏輯，寫出生命厚度。
            </p>

            {/* Description */}
            <p className="text-white/70 mb-8 max-w-lg leading-relaxed mx-auto lg:mx-0">
              將「閱讀」定義為「邏輯思考的原現」；將「古文」定義為「跨時空的生命諮詢」。
              在數位時代，我們用現代思維解讀經典智慧。
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button href="/diagnosis" variant="primary" className="text-center">
                立即預約：5 分鐘學習診斷
              </Button>
              <Button href="/methodology" variant="secondary" className="text-center !border-white/50 !text-white hover:!bg-white/10">
                了解閱破系統
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-white/60">學員成功案例</div>
                <div className="w-12 h-1 bg-[var(--gold)] mt-2 mx-auto lg:mx-0 rounded-full" />
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">95%</div>
                <div className="text-sm text-white/60">滿意度</div>
                <div className="w-12 h-1 bg-[var(--gold)] mt-2 mx-auto lg:mx-0 rounded-full" />
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">A++</div>
                <div className="text-sm text-white/60">頂尖目標</div>
                <div className="w-12 h-1 bg-[var(--gold)] mt-2 mx-auto lg:mx-0 rounded-full" />
              </div>
            </div>
          </div>

          {/* Image/Visual - Golden Ring Design */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-md lg:max-w-lg aspect-square">
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--gold)]/20 via-[var(--gold)]/10 to-[var(--gold)]/20 rounded-full blur-3xl scale-110" />

              {/* Animated Golden Rings */}
              <div className="absolute inset-0">
                {/* Outer Ring */}
                <div
                  className="absolute inset-0 rounded-full border-2 border-[var(--gold)]/30"
                  style={{
                    background: 'conic-gradient(from 0deg, transparent, rgba(214, 158, 46, 0.3), transparent, rgba(214, 158, 46, 0.2), transparent)',
                    animation: 'spin 20s linear infinite'
                  }}
                />
                {/* Middle Ring */}
                <div
                  className="absolute inset-8 rounded-full border border-[var(--gold)]/40"
                  style={{
                    background: 'conic-gradient(from 180deg, transparent, rgba(214, 158, 46, 0.2), transparent, rgba(214, 158, 46, 0.3), transparent)',
                    animation: 'spin 15s linear infinite reverse'
                  }}
                />
                {/* Inner Ring */}
                <div
                  className="absolute inset-16 rounded-full border border-[var(--gold)]/20"
                  style={{
                    background: 'conic-gradient(from 90deg, transparent, rgba(214, 158, 46, 0.15), transparent)',
                    animation: 'spin 25s linear infinite'
                  }}
                />
              </div>

              {/* Skill Labels */}
              {/* 閱讀 - Left */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20">
                <div className="bg-[var(--cream)] rounded-full w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-center shadow-xl border-2 border-[var(--gold)]/30">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-[var(--navy)] mb-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"/>
                  </svg>
                  <span className="text-[var(--navy)] font-bold text-sm md:text-base">閱讀</span>
                </div>
              </div>

              {/* 寫作 - Top Right */}
              <div className="absolute right-4 top-4 z-20">
                <div className="bg-[var(--gold)] rounded-full w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-center shadow-xl">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-[var(--navy)] mb-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                  </svg>
                  <span className="text-[var(--navy)] font-bold text-sm md:text-base">寫作</span>
                </div>
              </div>

              {/* 邏輯 - Right */}
              <div className="absolute right-0 top-2/3 -translate-y-1/2 translate-x-4 z-20">
                <div className="bg-[var(--cream)] rounded-full w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-center shadow-xl border-2 border-[var(--gold)]/30">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-[var(--navy)] mb-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
                  </svg>
                  <span className="text-[var(--navy)] font-bold text-sm md:text-base">邏輯</span>
                </div>
              </div>

              {/* 古文 - Bottom Left */}
              <div className="absolute left-8 bottom-8 z-20">
                <div className="bg-[var(--cream)] rounded-full w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-center shadow-xl border-2 border-[var(--gold)]/30">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-[var(--navy)] mb-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                  </svg>
                  <span className="text-[var(--navy)] font-bold text-sm md:text-base">古文</span>
                </div>
              </div>

              {/* Teacher Image - Center */}
              <div className="absolute inset-0 flex items-end justify-center">
                <Image
                  src="/lilin-guowen/images/形象照 去背.png"
                  alt="立霖老師"
                  width={380}
                  height={480}
                  className="object-contain relative z-10 drop-shadow-2xl"
                  style={{ maxHeight: '95%' }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--cream)] to-transparent" />

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      {/* CSS for spin animation */}
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
