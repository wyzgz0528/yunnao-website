'use client';

import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

function ContactContent() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen">
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">{t.contact.title}</h1>
          <p className="text-center text-xl mt-4">{t.contact.contactIntro}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-blue-600">{t.contact.getInTouch}</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-3xl mr-4">🏢</div>
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-1">{t.contact.company}</h3>
                    <p className="text-gray-600">{t.contact.companyName}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-3xl mr-4">📍</div>
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-1">{t.contact.address}</h3>
                    <p className="text-gray-600">{t.contact.addressText}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-3xl mr-4">📧</div>
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-1">{t.contact.email}</h3>
                    <a href="mailto:admin@cloudbraintech.cn" className="text-blue-600 hover:text-blue-800">
                      {t.contact.emailAddress}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-3xl mr-4">🕐</div>
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-1">{t.contact.businessHours}</h3>
                    <p className="text-gray-600">{t.contact.businessHoursText}</p>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">
                  {language === 'zh' ? '服务说明' : 'Service Notice'}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {language === 'zh' 
                    ? '我们提供专业的技术咨询服务。如有业务需求，请通过邮箱与我们联系，我们会在工作时间内尽快回复。'
                    : 'We provide professional technical consulting services. For business inquiries, please contact us via email, and we will respond promptly during business hours.'}
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-blue-600">{t.contact.sendMessage}</h2>
              <p className="text-gray-600 mb-6">{t.contact.messageIntro}</p>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">{t.contact.name}</label>
                  <input
                    type="text"
                    placeholder={t.contact.namePlaceholder}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">{t.contact.contactWay}</label>
                  <input
                    type="text"
                    placeholder={t.contact.contactPlaceholder}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">{t.contact.message}</label>
                  <textarea
                    rows={6}
                    placeholder={t.contact.messagePlaceholder}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md hover:shadow-lg"
                >
                  {t.contact.send}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <ContactContent />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
