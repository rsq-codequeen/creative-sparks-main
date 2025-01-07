import { useLocalStorage } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';

type ProductType = 'paintings' | 'artSupplies' | 'prints' | 'homeDecors';

export function useCart() {
  const [cart, setCart] = useLocalStorage<{ type: ProductType; id: number }[]>({
    key: 'cart',
    defaultValue: [],
  });

  function addToCart(item: { type: ProductType; id: number }) {
    setCart(current => [...current, item]);
    notifications.show({
      title: 'Success',
      message: 'Item was successfully added to cart',
      color: 'green',
    });
  }

  function removeFromCart(item: { type: ProductType; id: number }) {
    setCart(current => current.filter(i => i.id !== item.id));

    notifications.show({
      title: 'Success',
      message: 'Item was successfully removed from cart',
      color: 'red',
    });
  }

  return { cart, addToCart, removeFromCart };
}
