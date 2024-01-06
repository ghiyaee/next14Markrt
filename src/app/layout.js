import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SearchBr from '@/components/layout/SearchBr';
import {ContextStorProvider} from '@/context/contextStore';
const vazirFont = localFont({
  src: '../../public/font/Vazirmatn-Regular.woff2',
});

export const metadata = {
  title: 'Digital Market',
  description: 'Mobile Shopping',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" className="rtl-tag">
      <body
        className={`${vazirFont.className} bg-gradient-to-tr from-yellow-300 to-transparent `}
      >
        <ContextStorProvider>
          <main className="max-w-screen min-h-screen m-auto p-4 gap-10 flex flex-col justify-between">
            <Header />
            {children}
            <Footer />
          </main>
        </ContextStorProvider>
      </body>
    </html>
  );
}
