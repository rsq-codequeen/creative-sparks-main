import { Button, Card, Group, Image, SimpleGrid, Space, Stack, Text, Title } from '@mantine/core';
import { IconUsersPlus } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import React from 'react';
import { data } from '../config/data';
import { AnimateIn } from './AnimateIn';

export function ExhibitionSchedule() {
  return (
    <AnimateIn>
      <Stack>
        <Title>Exhibition Schedule</Title>
        <SimpleGrid cols={4}>
          {data.exhibitions.map(exhibition => (
            <Card shadow='sm' padding='lg' radius='md' withBorder className='hover-zoom'>
              <Card.Section>
                <Image src={exhibition.image} height={160} alt='' />
              </Card.Section>
              <Group justify='space-between' mt='md' mb='xs'>
                <Text fw={600}>{exhibition.name}</Text>
              </Group>
              <Group gap='xs'>
                <Text size='sm' fw={500}>
                  Date:
                </Text>
                <Text size='sm' c='dimmed' fw={500}>
                  {exhibition.date}
                </Text>
              </Group>
              <Group gap='xs'>
                <Text size='sm' fw={500}>
                  Timings:
                </Text>
                <Text size='sm' c='dimmed' fw={500}>
                  {exhibition.timings}
                </Text>
              </Group>
              <Group gap='xs'>
                <Text size='sm' fw={500}>
                  Location:
                </Text>
                <Text size='sm' c='dimmed' fw={500}>
                  {exhibition.location}
                </Text>
              </Group>
              <Space mt='md' />
              <Button
                color='blue'
                fullWidth
                mt='auto'
                radius='md'
                component={Link}
                to='/join-exhibition'
                leftSection={<IconUsersPlus size={14} />}
              >
                Join
              </Button>
            </Card>
          ))}
        </SimpleGrid>
      </Stack>
    </AnimateIn>
  );
}
