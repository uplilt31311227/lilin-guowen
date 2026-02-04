'use client';

import Button from '@/components/ui/Button';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-gradient-to-br from-[#1a365d] via-[#1e4976] to-[#0f2744]">
      {/* Warm gradient overlay for friendly feel */}
      <div className="absolute inset-0 bg-gradient-to-tr from-amber-900/10 via-transparent to-orange-900/5" />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      {/* Animated light particles - reduced motion friendly */}
      <div className="absolute inset-0 overflow-hidden motion-safe:block motion-reduce:hidden">
        <div className="absolute top-[15%] left-[8%] w-2 h-2 bg-amber-400/30 rounded-full animate-pulse" style={{ animationDuration: '3s' }} />
        <div className="absolute top-[25%] left-[18%] w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        <div className="absolute top-[45%] left-[5%] w-1 h-1 bg-amber-300/40 rounded-full animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }} />
        <div className="absolute bottom-[35%] left-[12%] w-1.5 h-1.5 bg-white/15 rounded-full animate-pulse" style={{ animationDuration: '4.5s', animationDelay: '2s' }} />
        <div className="absolute top-[20%] right-[10%] w-2 h-2 bg-amber-400/25 rounded-full animate-pulse" style={{ animationDuration: '3s', animationDelay: '1.5s' }} />
        <div className="absolute bottom-[45%] right-[8%] w-1 h-1 bg-white/20 rounded-full animate-pulse" style={{ animationDuration: '5s' }} />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-8 w-32 h-32 border border-white/5 rounded-full" />
      <div className="absolute bottom-32 left-16 w-24 h-24 border border-amber-500/10 rounded-full" />
      <div className="absolute top-1/4 right-12 w-20 h-20 border border-white/5 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Content */}
          <div className="relative z-10 text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2.5 rounded-full mb-8 transition-all duration-300 ease-out hover:bg-white/15">
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              <span className="text-amber-200 text-sm font-medium tracking-wide">素養教學領航者</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.15] mb-6 tracking-tight">
              人生沒有 Google
              <br />
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">
                但有經典可循
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-blue-100/90 mb-6 max-w-xl mx-auto lg:mx-0 font-light">
              帶你讀懂文章邏輯，寫出生命厚度。
            </p>

            {/* Description Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 mb-8 max-w-xl mx-auto lg:mx-0">
              <p className="text-white/80 leading-relaxed text-[15px]">
                將「閱讀」定義為「邏輯思考的展現」；將「古文」定義為「跨時空的生命諮詢」。
                在數位時代，我們用現代思維解讀經典智慧。
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button
                href="/diagnosis"
                variant="primary"
                className="text-center px-8 py-4 text-base font-semibold shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-300 ease-out"
              >
                立即預約：5 分鐘學習診斷
              </Button>
              <Button
                href="/methodology"
                variant="secondary"
                className="text-center px-8 py-4 text-base !border-white/30 !text-white hover:!bg-white/10 hover:!border-white/50 transition-all duration-300 ease-out"
              >
                了解閱破系統
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-6 sm:gap-10 justify-center lg:justify-start">
              <div className="text-center lg:text-left group cursor-default">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1 group-hover:text-amber-300 transition-colors duration-300">500+</div>
                <div className="text-sm text-blue-200/70">學員成功案例</div>
                <div className="w-10 h-1 bg-gradient-to-r from-amber-400 to-amber-500 mt-3 mx-auto lg:mx-0 rounded-full group-hover:w-14 transition-all duration-300" />
              </div>
              <div className="text-center lg:text-left group cursor-default">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1 group-hover:text-amber-300 transition-colors duration-300">95%</div>
                <div className="text-sm text-blue-200/70">滿意度</div>
                <div className="w-10 h-1 bg-gradient-to-r from-amber-400 to-amber-500 mt-3 mx-auto lg:mx-0 rounded-full group-hover:w-14 transition-all duration-300" />
              </div>
              <div className="text-center lg:text-left group cursor-default">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1 group-hover:text-amber-300 transition-colors duration-300">A++</div>
                <div className="text-sm text-blue-200/70">頂尖目標</div>
                <div className="w-10 h-1 bg-gradient-to-r from-amber-400 to-amber-500 mt-3 mx-auto lg:mx-0 rounded-full group-hover:w-14 transition-all duration-300" />
              </div>
            </div>
          </div>

          {/* Visual Section */}
          <div className="relative flex justify-center items-center order-1 lg:order-2">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">

              {/* Outer glow effect */}
              <div className="absolute -inset-8 bg-gradient-to-br from-amber-400/20 via-amber-500/10 to-transparent rounded-full blur-3xl" />

              {/* Animated decorative rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-[110%] h-[110%] rounded-full border border-amber-400/20 motion-safe:animate-[spin_40s_linear_infinite]" />
                <div className="absolute w-[95%] h-[95%] rounded-full border border-dashed border-white/10 motion-safe:animate-[spin_30s_linear_infinite_reverse]" />
              </div>

              {/* Main image container with gradient background */}
              <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-b from-[#1e3a5f] via-[#1a365d] to-[#0f2744] shadow-2xl shadow-black/30">
                {/* Inner glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 via-transparent to-white/5" />

                {/* Decorative top accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

                {/* Teacher Image - properly contained */}
                <div className="relative flex justify-center items-end min-h-[350px] sm:min-h-[420px] lg:min-h-[480px] px-4 pt-8">
                  <Image
                    src="/lilin-guowen/images/形象照 去背.png"
                    alt="立霖老師 - 專業國文家教"
                    width={360}
                    height={450}
                    className="object-contain object-bottom relative z-10 max-h-[320px] sm:max-h-[380px] lg:max-h-[440px]"
                    priority
                  />
                </div>

                {/* Bottom gradient overlay for smooth blend */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0f2744] to-transparent" />
              </div>

              {/* Skill badges - floating around the card */}
              {/* 閱讀 - Left */}
              <div className="absolute -left-3 sm:-left-6 top-1/4 z-20 group cursor-pointer">
                <div className="bg-white rounded-2xl w-16 h-16 sm:w-20 sm:h-20 flex flex-col items-center justify-center shadow-xl shadow-black/15 border border-gray-100 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#1a365d] mb-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"/>
                  </svg>
                  <span className="text-[#1a365d] font-bold text-sm">閱讀</span>
                </div>
              </div>

              {/* 寫作 - Top Right */}
              <div className="absolute -right-2 sm:-right-4 top-4 sm:top-6 z-20 group cursor-pointer">
                <div className="bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl w-16 h-16 sm:w-20 sm:h-20 flex flex-col items-center justify-center shadow-xl shadow-amber-500/40 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#1a365d] mb-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                  </svg>
                  <span className="text-[#1a365d] font-bold text-sm">寫作</span>
                </div>
              </div>

              {/* 邏輯 - Right Bottom */}
              <div className="absolute -right-3 sm:-right-6 bottom-1/4 z-20 group cursor-pointer">
                <div className="bg-white rounded-2xl w-16 h-16 sm:w-20 sm:h-20 flex flex-col items-center justify-center shadow-xl shadow-black/15 border border-gray-100 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#1a365d] mb-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/>
                  </svg>
                  <span className="text-[#1a365d] font-bold text-sm">邏輯</span>
                </div>
              </div>

              {/* 古文 - Bottom Left */}
              <div className="absolute -left-2 sm:-left-4 bottom-8 sm:bottom-12 z-20 group cursor-pointer">
                <div className="bg-white rounded-2xl w-16 h-16 sm:w-20 sm:h-20 flex flex-col items-center justify-center shadow-xl shadow-black/15 border border-gray-100 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#1a365d] mb-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                  </svg>
                  <span className="text-[#1a365d] font-bold text-sm">古文</span>
                </div>
              </div>

              {/* Name badge at bottom */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20">
                <div className="bg-white/95 backdrop-blur-sm rounded-full px-6 py-2.5 shadow-lg border border-gray-100">
                  <p className="text-[#1a365d] font-bold text-base">立霖老師</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#faf5ef] to-transparent" />

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 motion-safe:animate-bounce motion-reduce:animate-none">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-2.5 bg-white/50 rounded-full motion-safe:animate-pulse" />
        </div>
      </div>
    </section>
  );
}
