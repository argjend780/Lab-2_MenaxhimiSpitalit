import React from 'react';

// Footer.jsx
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Logo dhe përshkrimi */}
          <div>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Spitali Mrekullueshëm</h2>
            <p className="text-gray-400">
              Kujdes i dedikuar për shëndetin tuaj, 24/7 me staf profesionist dhe teknologji moderne.
            </p>
          </div>

          {/* Kontaktet */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Kontakti</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Adresa: Rruga Kryesore 123, Prishtinë, Kosovë</li>
              <li>Telefoni: +383 44 123 456</li>
              <li>Email: info@spitalimrekullueshem.com</li>
              <li>Orari: H-P 08:00 - 20:00</li>
            </ul>
          </div>

          {/* Lidhjet e shpejta */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Lidhjet e shpejta</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-cyan-400 transition">Faqja Kryesore</a></li>
              <li><a href="/shërbimet" className="hover:text-cyan-400 transition">Shërbimet</a></li>
              <li><a href="/mjeket" className="hover:text-cyan-400 transition">Mjekët</a></li>
              <li><a href="/kontakti" className="hover:text-cyan-400 transition">Kontakti</a></li>
            </ul>
          </div>

          {/* Rrjetet sociale */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Na Ndiqni</h3>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-cyan-400 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12.07c0-5.5-4.47-9.97-9.98-9.97S2.05 6.58 2.05 12.07c0 4.97 3.66 9.08 8.44 9.9v-7h-2.54v-2.9h2.54v-2.22c0-2.5 1.48-3.9 3.75-3.9 1.08 0 2.22.2 2.22.2v2.45h-1.26c-1.24 0-1.63.78-1.63 1.57v1.9h2.77l-.44 2.9h-2.33v7c4.78-.82 8.44-4.93 8.44-9.9z" /></svg>
              </a>
              {/* Twitter */}
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-cyan-400 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.68a4.3 4.3 0 001.88-2.37 8.52 8.52 0 01-2.7 1.04 4.27 4.27 0 00-7.27 3.9 12.11 12.11 0 01-8.79-4.46 4.25 4.25 0 001.32 5.7 4.21 4.21 0 01-1.94-.54v.05a4.27 4.27 0 003.43 4.18 4.3 4.3 0 01-1.93.07 4.28 4.28 0 003.99 2.97A8.57 8.57 0 012 19.54a12.08 12.08 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.19 0-.19-.01-.38-.02-.57A8.48 8.48 0 0022.46 6z" /></svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-cyan-400 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zm8.12 2.62a1.12 1.12 0 110 2.25 1.12 1.12 0 010-2.25zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" /></svg>
              </a>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        <p className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Spitali Mrekullueshëm. Të gjitha të drejtat e rezervuara.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
