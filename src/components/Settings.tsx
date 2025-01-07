import React, { useContext } from 'react';
import { Stack, Title, Select } from '@mantine/core';
import { useLanguage } from '../LanguageContext'; // Import the custom hook

export function Settings() {
  
  const { t } = useLanguage();
  const { language, setLanguage } = useLanguage(); // Use language context

  const handleLanguageChange = (value: string | null) => {
    if (value) {
      setLanguage(value); // Update language in context
    }
  };

  return (
    <Stack>
      <Title>{t('Settings')}</Title>
      <Select
        label="Change Language"
        value={language} // Set current language as value
        onChange={handleLanguageChange} // Handle change
        data={[
          { value: 'en', label: 'English' },
          { value: 'es', label: 'Spanish' },
          { value: 'fr', label: 'French' },
          { value: 'de', label: 'German' },
          // Add more languages as needed
        ]}
      />
    </Stack>
  );
}
