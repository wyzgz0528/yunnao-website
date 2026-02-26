'use client';

import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

function AboutContent() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen">
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">{t.about.title}</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Company Intro */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-blue-600">{t.about.intro}</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-8">{t.about.introText}</p>
          </div>

          {/* Business Scope */}
          <div className="mb-12 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">{t.about.businessScope}</h2>
            <p className="text-gray-700 leading-relaxed">{t.about.businessScopeText}</p>
          </div>

          {/* Service Philosophy & Values */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">{t.about.mission}</h3>
              <p className="text-gray-700 leading-relaxed">{t.about.missionText}</p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">{t.about.values}</h3>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{t.about.valuesText}</p>
            </div>
          </div>

          {/* Team */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">{t.about.team}</h2>
            <p className="leading-relaxed">{t.about.teamText}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function AboutPage() {
  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <AboutContent />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
