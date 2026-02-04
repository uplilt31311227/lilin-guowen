'use client';

import Button from '@/components/ui/Button';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Subtle grid pattern - professional feel */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.15) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Accent gradient blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-amber-100/40 via-orange-50/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-100/30 via-slate-100/20 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Content - Left Side */}
          <div className="relative z-10 text-center lg:text-left order-2 lg:order-1">

            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2.5 bg-white border border-slate-200 shadow-sm px-4 py-2 rounded-full mb-8">
              <div className="flex items-center justify-center w-5 h-5 bg-amber-400 rounded-full">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-slate-700 text-sm font-medium">專業國文素養教學</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-slate-900 leading-[1.15] mb-6 tracking-tight">
              人生沒有 Google
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500">
                但有經典可循
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              帶你讀懂文章邏輯，寫出生命厚度。用現代思維解讀經典智慧，讓國文成為思考的武器。
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Button
                href="/diagnosis"
                variant="primary"
                className="text-center px-8 py-4 text-base font-semibold shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                免費學習診斷
                <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
              <Button
                href="/methodology"
                variant="secondary"
                className="text-center px-8 py-4 text-base font-medium !border-slate-300 !text-slate-700 hover:!bg-slate-50 hover:!border-slate-400 transition-all duration-200"
              >
                了解閱破系統
              </Button>
            </div>

            {/* Trust Metrics */}
            <div className="flex flex-wrap gap-x-8 gap-y-4 justify-center lg:justify-start">
              <div className="flex items-center gap-3 group cursor-default">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-200">
                  <span className="text-white font-bold text-lg">5+</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">500+</p>
                  <p className="text-sm text-slate-500">學員成功案例</p>
                </div>
              </div>
              <div className="flex items-center gap-3 group cursor-default">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-200">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">95%</p>
                  <p className="text-sm text-slate-500">學員滿意度</p>
                </div>
              </div>
              <div className="flex items-center gap-3 group cursor-default">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">A++</p>
                  <p className="text-sm text-slate-500">頂尖目標</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Section - Right Side */}
          <div className="relative flex justify-center items-center order-1 lg:order-2">
            <div className="relative w-full max-w-md lg:max-w-lg">

              {/* Background card */}
              <div className="absolute inset-4 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 rounded-[2.5rem] shadow-2xl" />

              {/* Decorative ring */}
              <div className="absolute inset-0 border-2 border-amber-400/20 rounded-[3rem]" />

              {/* Main card container */}
              <div className="relative bg-gradient-to-b from-[#1e3a5f] via-[#1a365d] to-[#0f2744] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-900/50">

                {/* Gold accent line */}
                <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

                {/* Inner glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-500/5 via-transparent to-white/5" />

                {/* Teacher Image */}
                <div className="relative flex justify-center items-end min-h-[380px] sm:min-h-[440px] lg:min-h-[500px] px-6 pt-10">
                  <Image
                    src="/lilin-guowen/images/形象照 去背.png"
                    alt="立霖老師 - 專業國文家教"
                    width={380}
                    height={480}
                    className="object-contain object-bottom relative z-10 max-h-[340px] sm:max-h-[400px] lg:max-h-[460px] drop-shadow-2xl"
                    priority
                  />
                </div>

                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0f2744] to-transparent" />

                {/* Name plate */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
                  <div className="bg-white/95 backdrop-blur-sm rounded-full px-6 py-2 shadow-lg flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    <p className="text-slate-800 font-bold">立霖老師</p>
                  </div>
                </div>
              </div>

              {/* Floating Skill Cards */}
              {/* 閱讀 */}
              <div className="absolute -left-4 sm:-left-8 top-[20%] z-30 group">
                <div className="bg-white rounded-2xl p-3 sm:p-4 shadow-xl shadow-slate-900/10 border border-slate-100 cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"/>
                      </svg>
                    </div>
                    <div className="hidden sm:block">
                      <p className="text-slate-900 font-bold text-sm">閱讀理解</p>
                      <p className="text-slate-500 text-xs">邏輯思考</p>
                    </div>
                    <p className="sm:hidden text-slate-900 font-bold text-sm">閱讀</p>
                  </div>
                </div>
              </div>

              {/* 寫作 */}
              <div className="absolute -right-4 sm:-right-6 top-[10%] z-30 group">
                <div className="bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl p-3 sm:p-4 shadow-xl shadow-amber-500/30 cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-500/40">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/20 flex items-center justify-center">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                      </svg>
                    </div>
                    <div className="hidden sm:block">
                      <p className="text-white font-bold text-sm">寫作表達</p>
                      <p className="text-white/70 text-xs">創意思維</p>
                    </div>
                    <p className="sm:hidden text-white font-bold text-sm">寫作</p>
                  </div>
                </div>
              </div>

              {/* 邏輯 */}
              <div className="absolute -right-4 sm:-right-8 bottom-[30%] z-30 group">
                <div className="bg-white rounded-2xl p-3 sm:p-4 shadow-xl shadow-slate-900/10 border border-slate-100 cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-purple-50 flex items-center justify-center">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/>
                      </svg>
                    </div>
                    <div className="hidden sm:block">
                      <p className="text-slate-900 font-bold text-sm">邏輯推理</p>
                      <p className="text-slate-500 text-xs">解題策略</p>
                    </div>
                    <p className="sm:hidden text-slate-900 font-bold text-sm">邏輯</p>
                  </div>
                </div>
              </div>

              {/* 古文 */}
              <div className="absolute -left-4 sm:-left-6 bottom-[20%] z-30 group">
                <div className="bg-white rounded-2xl p-3 sm:p-4 shadow-xl shadow-slate-900/10 border border-slate-100 cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                      </svg>
                    </div>
                    <div className="hidden sm:block">
                      <p className="text-slate-900 font-bold text-sm">古文素養</p>
                      <p className="text-slate-500 text-xs">經典智慧</p>
                    </div>
                    <p className="sm:hidden text-slate-900 font-bold text-sm">古文</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 text-slate-400">
          <span className="text-xs font-medium tracking-wider uppercase">探索更多</span>
          <div className="w-6 h-10 rounded-full border-2 border-slate-300 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-2.5 bg-slate-400 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
