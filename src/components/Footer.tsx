'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-gray-800 text-white py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{language === 'zh' ? '云脑科技' : 'Cloudbrain Tech'}</h3>
            <p className="text-gray-400 text-sm">
              {language === 'zh' ? '专业的服务器产品代理、销售及系统集成服务' : 'Professional Server Solutions'}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t.footer.services}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>{t.footer.serverSales}</li>
              <li>{t.footer.systemIntegration}</li>
              <li>{t.footer.technicalSupport}</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition">
                  {t.footer.about}
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition">
                  {t.footer.products}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition">
                  {t.footer.contact}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t.footer.company}</h4>
            <div className="text-sm text-gray-400 space-y-2">
              <p>{t.contact.emailAddress}</p>
              <p>{language === 'zh' ? '广东省广州市越秀区' : 'Yuexiu District, Guangzhou'}</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p className="mb-2">{t.footer.copyright}</p>
          <p>{t.footer.icp}</p>
        </div>
      </div>
    </footer>
  );
}
