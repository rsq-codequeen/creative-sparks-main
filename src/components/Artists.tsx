import { Button, Card, Group, Image, SimpleGrid, Space, Stack, Text, Title } from '@mantine/core';
import { IconBriefcase } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

import { data } from '../config/data';
import { AnimateIn } from './AnimateIn';

export function Artists() {
  return (
    <AnimateIn>
      <Stack>
        <Title>Artists</Title>
        <SimpleGrid cols={4}>
          {data.artists.map(artist => (
            <Card key={artist.name} shadow='sm' padding='lg' radius='md' withBorder className='hover-zoom'>
              <Card.Section>
                <Image src={artist.image} height={160} alt='' />
              </Card.Section>
              <Group justify='space-between' mt='md' mb='xs'>
                <Text fw={600}>{artist.name}</Text>
              </Group>
              <Group gap='xs'>
                <Text size='sm' fw={500}>
                  Specialization:
                </Text>
                <Text size='sm' c='dimmed' fw={500}>
                  {artist.specialization}
                </Text>
              </Group>
              <Group gap='xs'>
                <Text size='sm' fw={500}>
                  Art Pieces Sold:
                </Text>
                <Text size='sm' c='dimmed' fw={500}>
                  {artist.artPiecesSold}
                </Text>
              </Group>
              <Group gap='xs'>
                <Text size='sm' fw={500}>
                  Event Charges (PKR):
                </Text>
                <Text size='sm' c='dimmed' fw={500}>
                  {artist.eventCharges}
                </Text>
              </Group>
              <Space mt='md' />
              <Button
                color='blue'
                fullWidth
                mt='auto'
                radius='md'
                component={Link}
                to='/hire'
                leftSection={<IconBriefcase size={14} />}
              >
                Hire
              </Button>
            </Card>
          ))}
        </SimpleGrid>
      </Stack>
    </AnimateIn>
  );
}
