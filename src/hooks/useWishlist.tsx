import { useLocalStorage } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';

type ProductType = 'paintings' | 'artSupplies' | 'prints' | 'homeDecors';

export function useWishlist() {
  const [wishlist, setWishlist] = useLocalStorage<{ type: ProductType; id: number }[]>({
    key: 'wishlist',
    defaultValue: [],
  });

  function addToWishlist(item: { type: ProductType; id: number }) {
    // Avoid adding duplicate items to the wishlist
    if (!wishlist.some(i => i.id === item.id && i.type === item.type)) {
      setWishlist(current => [...current, item]);
      notifications.show({
        title: 'Success',
        message: 'Item was successfully added to wishlist',
        color: 'green',
      });
    } else {
      notifications.show({
        title: 'Notice',
        message: 'Item is already in the wishlist',
        color: 'yellow',
      });
    }
  }

  function removeFromWishlist(item: { type: ProductType; id: number }) {
    setWishlist(current => current.filter(i => i.id !== item.id || i.type !== item.type));
    notifications.show({
      title: 'Success',
      message: 'Item was successfully removed from wishlist',
      color: 'red',
    });
  }

  return { wishlist, addToWishlist, removeFromWishlist };
}
