import { Box, Button, Image, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import React from 'react';
import heroImage from '~/assets/svgs/hero.svg';
import { AnimateIn } from './AnimateIn';
import { useLanguage } from '../LanguageContext'; // Assuming Hero.tsx is in src/
 // Import the custom hook
 
export function Hero() {
  const { t } = useLanguage(); // Use the translation function from context

  return (
    <AnimateIn>
      <SimpleGrid cols={2} px='lg' style={{ position: 'relative' }}>
        {/* Left Section */}
        <Stack mt={160} style={{ opacity: 0, animation: 'fadeIn 1s forwards' }}>
          <Title style={{ animation: 'scaleIn 1s ease-out' }}>{t('BuyArt')}</Title>
          <Title order={2} style={{ animation: 'scaleIn 1.2s ease-out' }}>
            {t('Haven')}
          </Title>
          <Text style={{ animation: 'fadeIn 1.5s forwards' }}>
            {t('WelcomeMessage')}
          </Text>
          <div>
            <Button
              leftSection={<IconArrowRight size={14} />}
              component={Link}
              to='/shop'
              style={{
                transition: 'transform 0.3s',
                ':hover': { transform: 'scale(1.05)' }, // Hover effect on the button
              }}
            >
              {t('ShopNow')} {/* Translate the button text */}
            </Button>
          </div>
        </Stack>

        {/* Right Section (Hero Image) */}
        <Box mt={100} className='hover-zoom' style={{ animation: 'zoomIn 2s ease-in-out infinite alternate' }}>
          <Image src={heroImage} alt='creative spark' h={500} fit='contain' />
        </Box>
      </SimpleGrid>

      {/* Add CSS animation styles */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          @keyframes scaleIn {
            0% { transform: scale(0.5); }
            100% { transform: scale(1); }
          }
          @keyframes zoomIn {
            0% { transform: scale(1); }
            100% { transform: scale(1.10); }
          }
        `}
      </style>
    </AnimateIn>
  );
}
