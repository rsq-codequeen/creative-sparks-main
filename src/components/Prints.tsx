import { Button, Card, Group, Image, SimpleGrid, Stack, Text, Title, Select } from '@mantine/core';
import { IconEye } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';  // Ensure `useState` is imported
import { data } from '../config/data';
import { AnimateIn } from './AnimateIn';

export function Prints() {
  // Initializing the state for sorting order
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  // Sort the prints based on the selected sortOrder
  const sortedPrints = [...data.prints].sort((a, b) => {
    const priceA = parseFloat(a.price.replace(/[^\d.-]/g, ''));
    const priceB = parseFloat(b.price.replace(/[^\d.-]/g, ''));

    if (sortOrder === 'asc') {
      return priceA - priceB;  // Ascending order
    } else {
      return priceB - priceA;  // Descending order
    }
  });

  return (
    <AnimateIn>
      <Stack>
        {/* Container for Title and Select dropdown */}
        <div style={{ position: 'relative' }}>
          <Title>Prints</Title>
          <Select
            value={sortOrder}
            onChange={(value) => setSortOrder(value as 'asc' | 'desc')}
            data={[
              { value: 'asc', label: 'Price: Low to High' },
              { value: 'desc', label: 'Price: High to Low' },
            ]}
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: 200,
            }}  // Position the dropdown at the top right
          />
        </div>

        {/* Display prints */}
        <SimpleGrid cols={4}>
          {sortedPrints.map((print) => (
            <Card key={print.id} shadow="sm" padding="lg" radius="md" withBorder className="hover-zoom">
              <Card.Section>
                <Image src={print.image} height={160} alt={print.name} />
              </Card.Section>
              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>{print.name}</Text>
                <Text fw={500}>{print.price}</Text>
              </Group>
              <Text size="sm" c="dimmed" mb="md">
                {print.description}
              </Text>
              <Button
                color="blue"
                fullWidth
                mt="auto"
                radius="md"
                component={Link}
                to={`/prints/${print.id}`}
                leftSection={<IconEye size={14} />}
              >
                View
              </Button>
            </Card>
          ))}
        </SimpleGrid>
      </Stack>
    </AnimateIn>
  );
}
