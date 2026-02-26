'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export default function HomePage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">{t.home.title}</h1>
          <p className="text-xl mb-8">{t.home.subtitle}</p>
          <Link
            href="/about"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
          >
            {t.home.learnMore}
          </Link>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">{t.home.welcome}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{t.home.description}</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t.home.ourServices}</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold mb-3">{t.home.agency}</h3>
              <p className="text-gray-600">{t.home.agencyDesc}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-xl font-semibold mb-3">{t.home.sales}</h3>
              <p className="text-gray-600">{t.home.salesDesc}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold mb-3">{t.home.integration}</h3>
              <p className="text-gray-600">{t.home.integrationDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t.home.whyChooseUs}</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center p-6">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="font-semibold mb-2">{t.home.experience}</h3>
              <p className="text-sm text-gray-600">{t.home.experienceDesc}</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-3">👥</div>
              <h3 className="font-semibold mb-2">{t.home.professionalTeam}</h3>
              <p className="text-sm text-gray-600">{t.home.professionalTeamDesc}</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-3">💡</div>
              <h3 className="font-semibold mb-2">{t.home.customerService}</h3>
              <p className="text-sm text-gray-600">{t.home.customerServiceDesc}</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="font-semibold mb-2">{t.home.reliablePartner}</h3>
              <p className="text-sm text-gray-600">{t.home.reliablePartnerDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {language === 'zh' ? '需要咨询服务器解决方案？' : 'Need Server Solutions?'}
          </h2>
          <p className="text-xl mb-8">
            {language === 'zh' ? '我们随时为您提供专业的技术咨询服务' : 'We are ready to provide professional technical consulting'}
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
          >
            {t.nav.contact}
          </Link>
        </div>
      </section>
    </div>
  );
}
