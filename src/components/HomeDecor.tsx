import { Button, Image, SimpleGrid, Stack, Title, Group } from '@mantine/core';
import { IconShoppingCartPlus, IconHeart, IconShoppingBag } from '@tabler/icons-react';
import { useParams } from 'react-router-dom';
import React from 'react';
import { data } from '../config/data';
import { useCart } from '../hooks/useCart';
import { useWishlist } from '../hooks/useWishlist';
import { AnimateIn } from './AnimateIn';
import { Link } from 'react-router-dom';

export function HomeDecor() {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist(); // Ensure you have this hook correctly imported
  const { homeDecorId } = useParams();
  const homeDecor = data.homeDecors.find(homeDecor => homeDecor.id === Number(homeDecorId));

  if (!homeDecor) {
    return <div>Home Decor not found</div>;
  }

  return (
    <AnimateIn>
      <Stack>
        <SimpleGrid cols={2}>
          <Image src={homeDecor.image} alt={homeDecor.name} height={400} radius='md' className='hover-zoom' />
          <Stack>
            <Title order={2}>{homeDecor.name}</Title>
            <Title order={3}>{homeDecor.price}</Title>
            <div>{homeDecor.description}</div>
            <Group>
              <Button
                leftSection={<IconShoppingCartPlus size={22} />}
                onClick={() =>
                  addToCart({
                    type: 'homeDecors', // Corrected type to 'homeDecors'
                    id: homeDecor.id,
                  })
                }
              >
                Add to cart
              </Button>
              <Button leftSection={<IconShoppingBag size={22} />} component={Link} to='/buy'>
                Buy Now
              </Button>
              <Button
                leftSection={<IconHeart size={22} />}
                onClick={() =>
                  addToWishlist({
                    type: 'homeDecors', // Corrected type to 'homeDecors'
                    id: homeDecor.id,
                  })
                }
              >
                Add to wishlist
              </Button>
            </Group>
          </Stack>
        </SimpleGrid>
      </Stack>
    </AnimateIn>
  );
}
