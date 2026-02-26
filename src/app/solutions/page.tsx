'use client';

import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

function SolutionsContent() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen">
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">{t.solutions.title}</h1>
          <p className="text-center text-xl mt-4">{t.solutions.intro}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Enterprise Office */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-blue-500">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600">{t.solutions.enterprise}</h3>
              <p className="text-gray-700 leading-relaxed">{t.solutions.enterpriseDesc}</p>
            </div>

            {/* Data Center */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-green-500">
              <div className="text-5xl mb-4">🏭</div>
              <h3 className="text-2xl font-bold mb-4 text-green-600">{t.solutions.dataCenter}</h3>
              <p className="text-gray-700 leading-relaxed">{t.solutions.dataCenterDesc}</p>
            </div>

            {/* Virtualization */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-purple-500">
              <div className="text-5xl mb-4">☁️</div>
              <h3 className="text-2xl font-bold mb-4 text-purple-600">{t.solutions.virtualization}</h3>
              <p className="text-gray-700 leading-relaxed">{t.solutions.virtualizationDesc}</p>
            </div>

            {/* Backup & DR */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-red-500">
              <div className="text-5xl mb-4">💾</div>
              <h3 className="text-2xl font-bold mb-4 text-red-600">{t.solutions.备份容灾}</h3>
              <p className="text-gray-700 leading-relaxed">{t.solutions.备份容灾Desc}</p>
            </div>

            {/* Education */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-yellow-500">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-600">{t.solutions.education}</h3>
              <p className="text-gray-700 leading-relaxed">{t.solutions.educationDesc}</p>
            </div>

            {/* Manufacturing */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-indigo-500">
              <div className="text-5xl mb-4">🏗️</div>
              <h3 className="text-2xl font-bold mb-4 text-indigo-600">{t.solutions.manufacturing}</h3>
              <p className="text-gray-700 leading-relaxed">{t.solutions.manufacturingDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {language === 'zh' ? '需要定制化解决方案？' : 'Need Customized Solutions?'}
          </h2>
          <p className="text-xl mb-8">
            {language === 'zh' ? '联系我们，获取专业的技术咨询服务' : 'Contact us for professional technical consulting'}
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
          >
            {language === 'zh' ? '立即咨询' : 'Contact Now'}
          </a>
        </div>
      </section>
    </div>
  );
}

export default function SolutionsPage() {
  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <SolutionsContent />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
