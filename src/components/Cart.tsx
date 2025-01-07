import { Button, Image, Stack, Table, Text, Title } from '@mantine/core';
import { IconShoppingBag, IconTrash } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import React from 'react';
import { data } from '../config/data';
import { useCart } from '../hooks/useCart';
import { AnimateIn } from './AnimateIn';

export function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <AnimateIn>
      <Stack>
        <Title>Your Cart</Title>
        {cart.length === 0 ? (
          <Text>Cart is empty</Text>
        ) : (
          <Table>
            {cart.map((item, idx) => {
              const product = data[item.type].find(product => product.id === item.id)!;
              return (
                <Table.Tr key={idx}>
                  <Table.Td h={80} w={80}>
                    <Image src={product.image} alt={product.name} width={40} height={40} radius='md' />
                  </Table.Td>
                  <Table.Td fw={500}>{product.name}</Table.Td>
                  <Table.Td>{product.price}</Table.Td>
                  <Table.Td>
                    <Button
                      leftSection={<IconTrash size={14} />}
                      size='xs'
                      color='red'
                      onClick={() =>
                        removeFromCart({
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
        <Button leftSection={<IconShoppingBag size={14} />} component={Link} to='/buy'>
          Checkout
        </Button>
      </Stack>
    </AnimateIn>
  );
}
