import { Badge, Button, Card, Group, Image, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { IconEye } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

import { AnimateIn } from './AnimateIn';
import artSuppliesImg from '/images/art-supplies.jpg';
import homeDecorImg from '/images/home-decor.jpg';
import paintingsImg from '/images/paintings.jpg';
import printsImg from '/images/prints.jpg';
import React from 'react';
export function Shop() {
  return (
    <AnimateIn>
      <Stack>
        <Title>Shop</Title>
        <SimpleGrid cols={4}>
          <Card shadow='sm' padding='lg' radius='md' withBorder className='hover-zoom'>
            <Card.Section>
              <Image src={paintingsImg} height={160} alt='' />
            </Card.Section>
            <Group justify='space-between' mt='md' mb='xs'>
              <Text fw={500}>Paintings</Text>
              <Badge color='pink'>On Sale</Badge>
            </Group>
            <Text size='sm' c='dimmed' mb='md'>
              Discover one-of-a-kind paintings that bring emotion and creativity to your walls. Find the perfect piece
              to inspire your space.
            </Text>
            <Button
              color='blue'
              fullWidth
              mt='auto'
              radius='md'
              component={Link}
              to='/paintings'
              leftSection={<IconEye size={14} />}
            >
              View
            </Button>
          </Card>

          <Card shadow='sm' padding='lg' radius='md' withBorder className='hover-zoom'>
            <Card.Section>
              <Image src={printsImg} height={160} alt='' />
            </Card.Section>
            <Group justify='space-between' mt='md' mb='xs'>
              <Text fw={500}>Prints</Text>
              <Badge color='pink'>On Sale</Badge>
            </Group>
            <Text size='sm' c='dimmed' mb='md'>
              Explore stunning art prints that blend affordability with beauty. Choose from a variety of styles to add
              character and charm to any room.
            </Text>
            <Button
              color='blue'
              fullWidth
              mt='auto'
              radius='md'
              component={Link}
              to='/prints'
              leftSection={<IconEye size={14} />}
            >
              View
            </Button>
          </Card>

          <Card shadow='sm' padding='lg' radius='md' withBorder className='hover-zoom'>
            <Card.Section>
              <Image src={homeDecorImg} height={160} alt='' />
            </Card.Section>
            <Group justify='space-between' mt='md' mb='xs'>
              <Text fw={500}>Home Decor</Text>
              <Badge color='pink'>On Sale</Badge>
            </Group>
            <Text size='sm' c='dimmed' mb='md'>
              Elevate your interiors with our curated home decor collection. Unique, artistic accents to transform your
              house into a gallery-worthy space.
            </Text>
            <Button
              color='blue'
              fullWidth
              mt='auto'
              radius='md'
              component={Link}
              to='/home-decor'
              leftSection={<IconEye size={14} />}
            >
              View
            </Button>
          </Card>

          <Card shadow='sm' padding='lg' radius='md' withBorder className='hover-zoom'>
            <Card.Section>
              <Image src={artSuppliesImg} height={160} alt='' />
            </Card.Section>
            <Group justify='space-between' mt='md' mb='xs'>
              <Text fw={500}>Art Supplies</Text>
              <Badge color='pink'>On Sale</Badge>
            </Group>
            <Text size='sm' c='dimmed' mb='md'>
              Unleash your inner artist with premium art supplies. From brushes to canvases, find everything you need to
              create your next masterpiece.
            </Text>
            <Button
              color='blue'
              fullWidth
              mt='auto'
              radius='md'
              component={Link}
              to='/art-supplies'
              leftSection={<IconEye size={14} />}
            >
              View
            </Button>
          </Card>
        </SimpleGrid>
      </Stack>
    </AnimateIn>
  );
}
