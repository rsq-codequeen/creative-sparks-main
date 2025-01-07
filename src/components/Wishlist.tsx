import React from 'react';
import { Button, Image, Stack, Table, Text, Title } from '@mantine/core';
import { IconHeartMinus, IconTrash } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { data } from '../config/data';
import { useWishlist } from '../hooks/useWishlist'; // Assumes a custom hook for wishlist management
import { AnimateIn } from './AnimateIn';

export function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <AnimateIn>
      <Stack>
        <Title>Your Wishlist</Title>
        {wishlist.length === 0 ? (
          <Text>Your wishlist is empty</Text>
        ) : (
          <Table>
            {wishlist.map((item, idx) => {
              const product = data[item.type].find(product => product.id === item.id)!;
              return (
                <Table.Tr key={idx}>
                  <Table.Td h={80} w={80}>
                    <Image src={product.image} alt={product.name} width={40} height={40} radius="md" />
                  </Table.Td>
                  <Table.Td fw={500}>{product.name}</Table.Td>
                  <Table.Td>{product.price}</Table.Td>
                  <Table.Td>
                    <Button
                      leftSection={<IconHeartMinus size={14} />}
                      size="xs"
                      color="red"
                      onClick={() =>
                        removeFromWishlist({
                          type: item.type,
                          id: item.id,
                        })
                      }
                    >
                      Remove
                    </Button>
                  </Table.Td>
                </Table.Tr>
              );
            })}
          </Table>
        )}
      </Stack>
    </AnimateIn>
  );
}
