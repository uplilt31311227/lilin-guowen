'use client';

import Button from '@/components/ui/Button';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A1A35]">
      {/* Deep blue gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1A35] via-[#0d2341] to-[#071428]" />

      {/* Magical ambient light effects */}
      <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-gradient-radial from-amber-500/10 via-amber-400/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-blue-500/10 via-blue-400/5 to-transparent rounded-full blur-3xl" />

      {/* Xiangyun (Auspicious Clouds) Pattern - Top */}
      <div className="absolute top-20 left-10 opacity-20">
        <svg width="120" height="80" viewBox="0 0 120 80" fill="none" className="text-amber-400">
          <path d="M20 60C20 60 25 40 45 40C65 40 60 55 80 55C100 55 100 35 100 35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M10 70C10 70 20 50 40 55C60 60 70 45 90 50" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
        </svg>
      </div>

      {/* Xiangyun - Bottom Left */}
      <div className="absolute bottom-32 left-20 opacity-15">
        <svg width="150" height="100" viewBox="0 0 150 100" fill="none" className="text-amber-300">
          <path d="M10 70C10 70 30 30 60 50C90 70 100 40 130 50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M20 85C20 85 50 60 80 70C110 80 120 55 140 60" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
        </svg>
      </div>

      {/* Floating Ancient Book - Top Right */}
      <div className="absolute top-32 right-[15%] opacity-25 animate-float-slow">
        <svg width="60" height="50" viewBox="0 0 60 50" fill="none" className="text-amber-400">
          <path d="M5 10L30 5L55 10V45L30 40L5 45V10Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M30 5V40" stroke="currentColor" strokeWidth="1"/>
          <path d="M12 15H25" stroke="currentColor" strokeWidth="0.75" opacity="0.6"/>
          <path d="M12 20H22" stroke="currentColor" strokeWidth="0.75" opacity="0.6"/>
          <path d="M35 15H48" stroke="currentColor" strokeWidth="0.75" opacity="0.6"/>
          <path d="M35 20H45" stroke="currentColor" strokeWidth="0.75" opacity="0.6"/>
        </svg>
      </div>

      {/* Floating Parchment - Left */}
      <div className="absolute top-1/2 left-[8%] opacity-20 animate-float-medium">
        <svg width="40" height="55" viewBox="0 0 40 55" fill="none" className="text-amber-300 rotate-12">
          <path d="M5 5C5 5 8 3 20 3C32 3 35 5 35 5V50C35 50 32 52 20 52C8 52 5 50 5 50V5Z" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M10 15H30" stroke="currentColor" strokeWidth="0.75" opacity="0.5"/>
          <path d="M10 22H28" stroke="currentColor" strokeWidth="0.75" opacity="0.5"/>
          <path d="M10 29H25" stroke="currentColor" strokeWidth="0.75" opacity="0.5"/>
          <path d="M10 36H27" stroke="currentColor" strokeWidth="0.75" opacity="0.5"/>
        </svg>
      </div>

      {/* Floating Parchment - Right */}
      <div className="absolute bottom-1/3 right-[8%] opacity-15 animate-float-slow -rotate-6">
        <svg width="35" height="48" viewBox="0 0 35 48" fill="none" className="text-amber-400">
          <path d="M3 4C3 4 6 2 17.5 2C29 2 32 4 32 4V44C32 44 29 46 17.5 46C6 46 3 44 3 44V4Z" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M8 12H27" stroke="currentColor" strokeWidth="0.75" opacity="0.5"/>
          <path d="M8 18H24" stroke="currentColor" strokeWidth="0.75" opacity="0.5"/>
          <path d="M8 24H22" stroke="currentColor" strokeWidth="0.75" opacity="0.5"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Content - Left Side */}
          <div className="relative z-10 text-center lg:text-left order-2 lg:order-1">

            {/* Trust Badge with gold accent */}
            <div className="inline-flex items-center gap-2.5 bg-amber-400/10 border border-amber-400/30 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
              <div className="flex items-center justify-center w-5 h-5 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full">
                <svg className="w-3 h-3 text-[#0A1A35]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-amber-200 text-sm font-medium">素養教學領航者</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.15] mb-6 tracking-tight">
              人生沒有 Google
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-300">
                但有經典可循
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              帶你讀懂文章邏輯，寫出生命厚度。
              <br className="hidden sm:block" />
              用現代思維解讀經典智慧，讓國文成為思考的武器。
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Button
                href="/diagnosis"
                variant="primary"
                className="text-center px-8 py-4 text-base font-semibold !bg-gradient-to-r !from-amber-400 !to-amber-500 !text-[#0A1A35] shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:-translate-y-0.5 transition-all duration-200"
              >
                免費學習診斷
                <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
              <Button
                href="/methodology"
                variant="secondary"
                className="text-center px-8 py-4 text-base font-medium !border-amber-400/40 !text-amber-200 !bg-transparent hover:!bg-amber-400/10 hover:!border-amber-400/60 transition-all duration-200"
              >
                了解閱破系統
              </Button>
            </div>

            {/* Trust Metrics */}
            <div className="flex flex-wrap gap-x-8 gap-y-4 justify-center lg:justify-start">
              <div className="flex items-center gap-3 group cursor-default">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400/20 to-amber-500/20 border border-amber-400/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                  <span className="text-amber-400 font-bold text-lg">5+</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">500+</p>
                  <p className="text-sm text-slate-400">學員成功案例</p>
                </div>
              </div>
              <div className="flex items-center gap-3 group cursor-default">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400/20 to-emerald-500/20 border border-emerald-400/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                  <svg className="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">95%</p>
                  <p className="text-sm text-slate-400">學員滿意度</p>
                </div>
              </div>
              <div className="flex items-center gap-3 group cursor-default">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400/20 to-blue-500/20 border border-blue-400/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                  <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">A++</p>
                  <p className="text-sm text-slate-400">頂尖目標</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Section - Right Side with Golden Armillary Sphere */}
          <div className="relative flex justify-center items-center order-1 lg:order-2">
            <div className="relative w-full max-w-md lg:max-w-lg">

              {/* Armillary Sphere (混天儀) - Outer Ring */}
              <div className="absolute inset-[-20%] animate-spin-very-slow">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <defs>
                    <linearGradient id="goldGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.8"/>
                      <stop offset="50%" stopColor="#FBBF24" stopOpacity="1"/>
                      <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.8"/>
                    </linearGradient>
                    <filter id="glow1">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  <ellipse cx="200" cy="200" rx="180" ry="180" fill="none" stroke="url(#goldGradient1)" strokeWidth="1.5" filter="url(#glow1)" opacity="0.6"/>
                </svg>
              </div>

              {/* Armillary Sphere - Middle Ring (tilted) */}
              <div className="absolute inset-[-10%] animate-spin-slow-reverse">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <defs>
                    <linearGradient id="goldGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.6"/>
                      <stop offset="50%" stopColor="#FCD34D" stopOpacity="1"/>
                      <stop offset="100%" stopColor="#FBBF24" stopOpacity="0.6"/>
                    </linearGradient>
                  </defs>
                  <ellipse cx="200" cy="200" rx="160" ry="80" fill="none" stroke="url(#goldGradient2)" strokeWidth="2" filter="url(#glow1)" transform="rotate(-20, 200, 200)"/>
                </svg>
              </div>

              {/* Armillary Sphere - Inner Ring (opposite tilt) */}
              <div className="absolute inset-[5%] animate-spin-medium">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <defs>
                    <linearGradient id="goldGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.7"/>
                      <stop offset="50%" stopColor="#FBBF24" stopOpacity="1"/>
                      <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.7"/>
                    </linearGradient>
                  </defs>
                  <ellipse cx="200" cy="200" rx="140" ry="60" fill="none" stroke="url(#goldGradient3)" strokeWidth="2" filter="url(#glow1)" transform="rotate(35, 200, 200)"/>
                </svg>
              </div>

              {/* Vertical Golden Ring */}
              <div className="absolute inset-[0%]">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <ellipse cx="200" cy="200" rx="20" ry="170" fill="none" stroke="url(#goldGradient2)" strokeWidth="1.5" filter="url(#glow1)" opacity="0.5"/>
                </svg>
              </div>

              {/* Golden Halo Glow behind teacher */}
              <div className="absolute inset-[10%] bg-gradient-radial from-amber-400/30 via-amber-500/10 to-transparent rounded-full blur-2xl" />

              {/* Small floating golden particles */}
              <div className="absolute top-[15%] left-[20%] w-2 h-2 bg-amber-400 rounded-full animate-pulse-slow opacity-60 blur-[1px]" />
              <div className="absolute top-[25%] right-[15%] w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse-medium opacity-70 blur-[1px]" />
              <div className="absolute bottom-[30%] left-[15%] w-1 h-1 bg-amber-300 rounded-full animate-pulse-slow opacity-50 blur-[0.5px]" />
              <div className="absolute bottom-[20%] right-[25%] w-2 h-2 bg-amber-400 rounded-full animate-pulse-medium opacity-60 blur-[1px]" />

              {/* Teacher Image Container */}
              <div className="relative flex justify-center items-end min-h-[380px] sm:min-h-[440px] lg:min-h-[520px]">
                {/* Background glow to prevent transparent background issues */}
                <div className="absolute inset-x-[15%] bottom-0 h-[85%] bg-gradient-to-t from-[#0A1A35] via-transparent to-transparent rounded-full blur-xl" />
                <Image
                  src="/lilin-guowen/images/形象照 去背.png"
                  alt="立霖老師 - 專業國文家教"
                  width={420}
                  height={520}
                  className="object-contain object-bottom relative z-10 max-h-[360px] sm:max-h-[420px] lg:max-h-[500px] drop-shadow-[0_0_40px_rgba(251,191,36,0.3)]"
                  priority
                />
              </div>

              {/* Name plate with oriental design */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20">
                <div className="relative">
                  {/* Decorative lines */}
                  <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-6 h-[1px] bg-gradient-to-r from-transparent to-amber-400/60" />
                  <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-6 h-[1px] bg-gradient-to-l from-transparent to-amber-400/60" />

                  <div className="bg-[#0A1A35]/90 backdrop-blur-sm border border-amber-400/40 rounded-lg px-6 py-2.5 shadow-lg shadow-amber-500/10">
                    <p className="text-amber-300 font-bold tracking-wider">立霖老師</p>
                  </div>
                </div>
              </div>

              {/* Floating Skill Cards with Oriental Style - Hidden on very small screens */}
              {/* 閱讀理解 */}
              <div className="absolute left-0 sm:-left-8 top-[25%] z-30 hidden sm:block">
                <div className="bg-[#0A1A35]/90 backdrop-blur-sm border border-amber-400/30 rounded-xl p-2.5 sm:p-4 shadow-lg shadow-amber-500/10 cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-amber-400/50">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center">
                      <svg className="w-4 h-4 sm:w-6 sm:h-6 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-amber-200 font-bold text-xs sm:text-sm">閱讀理解</p>
                      <p className="text-slate-400 text-xs hidden sm:block">邏輯思考訓練</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 寫作表達 */}
              <div className="absolute right-0 sm:-right-6 top-[15%] z-30 hidden sm:block">
                <div className="bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl p-2.5 sm:p-4 shadow-lg shadow-amber-500/40 cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg bg-[#0A1A35]/30 flex items-center justify-center">
                      <svg className="w-4 h-4 sm:w-6 sm:h-6 text-[#0A1A35]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#0A1A35] font-bold text-xs sm:text-sm">寫作表達</p>
                      <p className="text-[#0A1A35]/70 text-xs hidden sm:block">創意思維培養</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 古文素養 */}
              <div className="absolute right-0 sm:-right-8 bottom-[32%] z-30 hidden sm:block">
                <div className="bg-[#0A1A35]/90 backdrop-blur-sm border border-amber-400/30 rounded-xl p-2.5 sm:p-4 shadow-lg shadow-amber-500/10 cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-amber-400/50">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center">
                      <svg className="w-4 h-4 sm:w-6 sm:h-6 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-amber-200 font-bold text-xs sm:text-sm">古文素養</p>
                      <p className="text-slate-400 text-xs hidden sm:block">經典智慧傳承</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 考試策略 */}
              <div className="absolute left-0 sm:-left-6 bottom-[22%] z-30 hidden sm:block">
                <div className="bg-[#0A1A35]/90 backdrop-blur-sm border border-amber-400/30 rounded-xl p-2.5 sm:p-4 shadow-lg shadow-amber-500/10 cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-amber-400/50">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center">
                      <svg className="w-4 h-4 sm:w-6 sm:h-6 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-amber-200 font-bold text-xs sm:text-sm">考試策略</p>
                      <p className="text-slate-400 text-xs hidden sm:block">精準答題技巧</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative wave with gold accent */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#0A1A35"/>
          <path d="M0 120L60 112C120 104 240 88 360 80C480 72 600 72 720 76C840 80 960 88 1080 92C1200 96 1320 96 1380 96L1440 96" stroke="url(#waveGold)" strokeWidth="1" opacity="0.4"/>
          <defs>
            <linearGradient id="waveGold" x1="0" y1="0" x2="1440" y2="0">
              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0"/>
              <stop offset="50%" stopColor="#FBBF24" stopOpacity="1"/>
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 text-amber-400/60">
          <span className="text-xs font-medium tracking-wider uppercase">探索更多</span>
          <div className="w-6 h-10 rounded-full border-2 border-amber-400/30 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-2.5 bg-amber-400/60 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
