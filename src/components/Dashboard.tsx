import { LineChart, PieChart } from '@mantine/charts';
import { Card, Flex, Group, SimpleGrid, Stack, Table, Text, Title } from '@mantine/core';
import { IconArrowDown, IconArrowUp } from '@tabler/icons-react';
import React from 'react';
import { AnimateIn } from './AnimateIn';

export function Dashboard() {
  return (
    <AnimateIn>
      <Stack>
        <SimpleGrid cols={4}>
          <Card shadow='sm' padding='lg' radius='md' withBorder className='hover-zoom'>
            <Text fw={500}>Paintings Sold</Text>
            <Group gap='xs'>
              <Title order={2}>54</Title>
              <IconArrowUp color='green' />
            </Group>
          </Card>
          <Card shadow='sm' padding='lg' radius='md' withBorder className='hover-zoom'>
            <Text fw={500}>Prints Sold</Text>
            <Group gap='xs'>
              <Title order={2}>32</Title>
              <IconArrowDown color='red' />
            </Group>
          </Card>
          <Card shadow='sm' padding='lg' radius='md' withBorder className='hover-zoom'>
            <Text fw={500}>Home Decor Sold</Text>
            <Group gap='xs'>
              <Title order={2}>45</Title>
              <IconArrowUp color='green' />
            </Group>
          </Card>
          <Card shadow='sm' padding='lg' radius='md' withBorder className='hover-zoom'>
            <Text fw={500}>Art Supplies Sold</Text>
            <Group gap='xs'>
              <Title order={2}>12</Title>
              <IconArrowDown color='red' />
            </Group>
          </Card>
        </SimpleGrid>

        <Flex justify='space-evenly' align='center'>
          <PieChart
            size={300}
            data={[
              { name: 'Paintings', value: 54, color: 'indigo.6' },
              { name: 'Prints', value: 32, color: 'yellow.6' },
              { name: 'Home Decor', value: 45, color: 'teal.6' },
              { name: 'Art Supplies', value: 12, color: 'gray.6' },
            ]}
            withTooltip
            withLabels
          />
          <LineChart
            h={300}
            w={700}
            data={[
              {
                date: 'Dec 22',
                Paintings: 2890,
                Prints: 2338,
                HomeDecor: 2452,
                ArtSupplies: 1452,
              },
              {
                date: 'Dec 23',
                Paintings: 2756,
                Prints: 2103,
                HomeDecor: 2402,
                ArtSupplies: 1402,
              },
              {
                date: 'Dec 24',
                Paintings: 3322,
                Prints: 986,
                HomeDecor: 1821,
                ArtSupplies: 821,
              },
              {
                date: 'Dec 25',
                Paintings: 3470,
                Prints: 2108,
                HomeDecor: 2809,
                ArtSupplies: 1809,
              },
              {
                date: 'Dec 26',
                Paintings: 3129,
                Prints: 1726,
                HomeDecor: 2290,
                ArtSupplies: 1290,
              },
            ]}
            dataKey='date'
            series={[
              { name: 'Paintings', color: 'indigo.6' },
              { name: 'Prints', color: 'blue.6' },
              { name: 'HomeDecor', color: 'teal.6' },
              { name: 'ArtSupplies', color: 'gray.6' },
            ]}
            curveType='linear'
          />
        </Flex>
        <Table
          data={{
            head: ['Customer', 'Items Bought', 'Artists Hired'],
            body: [
              ['Alice', 12, 3],
              ['Bob', 14, 1],
              ['Charlie', 88, 0],
              ['Diana', 137, 4],
              ['Eve', 140, 4],
            ],
          }}
          striped
          withTableBorder
          withRowBorders
          withColumnBorders
        />
      </Stack>
    </AnimateIn>
  );
}
