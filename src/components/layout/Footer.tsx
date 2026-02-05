import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src="/lilin-guowen/images/立霖國文書法字 去背.png"
                alt="立霖國文"
                width={140}
                height={40}
                className="h-9 w-auto object-contain brightness-0 invert"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <p className="text-[var(--cream)]/80 mb-4 max-w-md">
              人生沒有 Google，但有經典可循。
              <br />
              帶你讀懂文章邏輯，寫出生命厚度。
            </p>
            <p className="text-[var(--cream)]/60 text-sm">
              素養教學領航者 | 家長與學生之間的溝通橋樑
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[var(--gold)] font-semibold mb-4">快速連結</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/methodology" className="text-[var(--cream)]/80 hover:text-[var(--gold)] transition-colors">
                  閱破實驗室
                </Link>
              </li>
              <li>
                <Link href="/exam-strategy" className="text-[var(--cream)]/80 hover:text-[var(--gold)] transition-colors">
                  考試策略
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-[var(--cream)]/80 hover:text-[var(--gold)] transition-colors">
                  學員見證
                </Link>
              </li>
              <li>
                <Link href="/diagnosis" className="text-[var(--cream)]/80 hover:text-[var(--gold)] transition-colors">
                  免費診斷
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[var(--gold)] font-semibold mb-4">聯絡資訊</h3>
            <ul className="space-y-2 text-[var(--cream)]/80">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contact@lilin-guowen.tw</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>台灣</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--cream)]/20 mt-8 pt-8 text-center text-[var(--cream)]/60 text-sm">
          <p>&copy; {new Date().getFullYear()} 立霖國文. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
