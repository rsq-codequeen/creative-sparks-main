import { Button, Image, SimpleGrid, Stack, Title, Group } from '@mantine/core';
import { IconShoppingCartPlus, IconHeart, IconShoppingBag } from '@tabler/icons-react';
import { useParams } from 'react-router-dom';
import React from 'react';
import { data } from '../config/data';
import { useCart } from '../hooks/useCart';
import { useWishlist } from '../hooks/useWishlist';
import { AnimateIn } from './AnimateIn';
import { Link } from 'react-router-dom';

export function ArtSupply() {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist(); // Ensure you have this hook correctly imported
  const { artSupplyId } = useParams();
  const artSupply = data.artSupplies.find(artSupply => artSupply.id === Number(artSupplyId));

  if (!artSupply) {
    return <div>Art Supply not found</div>;
  }

  return (
    <AnimateIn>
      <Stack>
        <SimpleGrid cols={2}>
          <Image src={artSupply.image} alt={artSupply.name} height={400} radius='md' className='hover-zoom' />
          <Stack>
            <Title order={2}>{artSupply.name}</Title>
            <Title order={3}>{artSupply.price}</Title>
            <div>{artSupply.description}</div>
            <Group>
              <Button
                leftSection={<IconShoppingCartPlus size={22} />}
                onClick={() =>
                  addToCart({
                    type: 'artSupplies', // Corrected type to 'artSupplies'
                    id: artSupply.id,
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
                    type: 'artSupplies', // Corrected type to 'artSupplies'
                    id: artSupply.id,
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
