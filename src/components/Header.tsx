'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            {language === 'zh' ? '云脑科技' : 'Cloudbrain Tech'}
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
              {t.nav.home}
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
              {t.nav.about}
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-blue-600 transition">
              {t.nav.products}
            </Link>
            <Link href="/solutions" className="text-gray-700 hover:text-blue-600 transition">
              {t.nav.solutions}
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">
              {t.nav.contact}
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setLanguage('zh')}
              className={`px-3 py-1 rounded ${
                language === 'zh' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              中文
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded ${
                language === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
