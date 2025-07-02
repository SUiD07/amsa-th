'use client';

import React, { createContext, useState, useContext, useEffect } from 'react';

type Lang = 'en' | 'th';

interface LanguageContextType {
  lang: Lang;
  setLang: React.Dispatch<React.SetStateAction<Lang>>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>('th'); // ตั้งค่า default เป็น 'th'

  // โหลดค่าภาษาเดิมจาก localStorage (ถ้ามี)
  useEffect(() => {
    const storedLang = localStorage.getItem('lang') as Lang | null;
    if (storedLang && (storedLang === 'en' || storedLang === 'th')) {
      setLang(storedLang);
    }
  }, []);

  // บันทึกค่าภาษาเมื่อเปลี่ยน
  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
