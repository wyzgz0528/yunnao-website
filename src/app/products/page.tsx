'use client';

import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

function ProductsContent() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen">
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">{t.products.title}</h1>
          <p className="text-center text-xl mt-4">{t.products.overviewText}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Server Sales */}
          <div className="mb-16">
            <div className="flex items-center mb-6">
              <div className="text-5xl mr-4">🖥️</div>
              <div>
                <h2 className="text-3xl font-bold text-blue-600">{t.products.serverSales}</h2>
              </div>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed text-lg">{t.products.serverSalesDesc}</p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 whitespace-pre-line">{t.products.serverSalesDetail}</p>
            </div>
          </div>

          {/* Storage & Network */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-blue-600">
              <div className="text-4xl mb-4">💾</div>
              <h3 className="text-2xl font-bold mb-4">{t.products.storageSales}</h3>
              <p className="text-gray-700 leading-relaxed">{t.products.storageSalesDesc}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-blue-600">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-2xl font-bold mb-4">{t.products.networkEquipment}</h3>
              <p className="text-gray-700 leading-relaxed">{t.products.networkEquipmentDesc}</p>
            </div>
          </div>

          {/* System Integration */}
          <div className="mb-16 bg-blue-50 p-8 rounded-lg">
            <div className="flex items-center mb-6">
              <div className="text-5xl mr-4">⚙️</div>
              <div>
                <h2 className="text-3xl font-bold text-blue-600">{t.products.systemIntegration}</h2>
              </div>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed text-lg">{t.products.systemIntegrationDesc}</p>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-gray-700 whitespace-pre-line">{t.products.systemIntegrationDetail}</p>
            </div>
          </div>

          {/* Technical Support & Consulting */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-600">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-2xl font-bold mb-4">{t.products.technicalSupport}</h3>
              <p className="text-gray-700 leading-relaxed">{t.products.technicalSupportDesc}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-600">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-2xl font-bold mb-4">{t.products.consulting}</h3>
              <p className="text-gray-700 leading-relaxed">{t.products.consultingDesc}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <ProductsContent />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
