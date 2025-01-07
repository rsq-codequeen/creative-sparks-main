import { Button, Image, SimpleGrid, Stack, Title, Group } from '@mantine/core';
import { IconShoppingCartPlus, IconHeart, IconShoppingBag } from '@tabler/icons-react';
import { useParams } from 'react-router-dom';
import React from 'react';
import { data } from '../config/data';
import { useCart } from '../hooks/useCart';
import { useWishlist } from '../hooks/useWishlist'; // Import the useWishlist hook
import { AnimateIn } from './AnimateIn';
import { Link } from 'react-router-dom';
export function Painting() {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist(); // Destructure addToWishlist
  const { paintingId } = useParams();
  const painting = data.paintings.find(painting => painting.id === Number(paintingId));

  if (!painting) {
    return <div>Painting not found</div>;
  }

  return (
    <AnimateIn>
      <Stack>
        <SimpleGrid cols={2}>
          <Image src={painting.image} alt={painting.name} height={400} radius="md" className="hover-zoom" />
          <Stack>
            <Title order={2}>{painting.name}</Title>
            <Title order={3}>{painting.price}</Title>
            <div>{painting.description}</div>
            <Group>
              <Button
                leftSection={<IconShoppingCartPlus size={22} />}
                onClick={() =>
                  addToCart({
                    type: 'paintings',
                    id: painting.id,
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
                    type: 'paintings',
                    id: painting.id,
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
