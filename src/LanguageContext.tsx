import React, { createContext, useContext, useState, ReactNode } from 'react';
import translations from './translation'; // Assuming LanguageContext.tsx is in src/components/
 // Import translations

// Context types
interface LanguageContextProps {
  language: string;
  setLanguage: (language: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key, // Default translation function
});

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<string>('en'); // Default to 'en'

  // Translation function
  const t = (key: string) => {
    return translations[language][key] || key; // Return translation or fallback to key
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the Language Context
export const useLanguage = () => useContext(LanguageContext);
