import {
  ActionIcon,
  AppShell,
  Burger,
  Group,
  Indicator,
  NavLink,
  ScrollArea,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import {
  IconArtboard,
  IconBrush,
  IconCamera,
  IconGauge,
  IconHeart,
  IconHome,
  IconLibraryPhoto,
  IconPaint,
  IconSettings,
  IconShoppingBag,
  IconShoppingCart,
  IconUser,
  IconUsers,
  IconWallpaper,
} from '@tabler/icons-react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

import { Search } from '../components/Search';
import { useCart } from '../hooks/useCart';

export function Layout() {
  const [opened, { toggle }] = useDisclosure();
  const { colorScheme } = useMantineColorScheme({});
  const theme = useMantineTheme();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { cart } = useCart();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding='md'
    >
      <AppShell.Header bg={colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0]}>
        <Group h='100%' px='md'>
          <Burger opened={opened} onClick={toggle} hiddenFrom='sm' size='sm' />
          <Group justify='space-between' style={{ flex: 1 }}>
            <Link
              style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'inline-flex',
                alignItems: 'center',
              }}
              to='/'
            >
              <Group align='center' gap={2}>
                <IconArtboard />
                <Title order={3}>Creative Spark</Title>
              </Group>
            </Link>
            <Group gap={8}>
              <Search />
              <ActionIcon variant='subtle' color='gray' component={Link} to='/register'>
                <IconUser size={22} />
              </ActionIcon>
              <ActionIcon variant='subtle' color='gray' component={Link} to='/Wishlist'>
                <IconHeart size={22} />
              </ActionIcon>
              <Indicator label={cart.length} size={16}>
                <ActionIcon variant='subtle' color='gray' component={Link} to='/cart'>
                  <IconShoppingCart size={22} />
                </ActionIcon>
              </Indicator>
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p='md' bg={colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0]}>
        <AppShell.Section grow mb='md' component={ScrollArea}>
          <NavLink
            to='/'
            label='Home'
            active={'/' === pathname}
            leftSection={<IconHome size={16} />}
            component={Link}
          />
          <NavLink
            to='/shop'
            label={
              <div style={{ width: '100%' }} onClick={() => navigate('/shop')}>
                Shop
              </div>
            }
            active={'/shop' === pathname}
            leftSection={<IconShoppingBag size={16} />}
            component={Link}
          >
            <NavLink
              to='/paintings'
              label='Paintings'
              active={'/paintings' === pathname}
              leftSection={<IconLibraryPhoto size={16} />}
              component={Link}
            />
            <NavLink
              to='/prints'
              label='Prints'
              active={'/prints' === pathname}
              leftSection={<IconPaint size={16} />}
              component={Link}
            />
            <NavLink
              to='/home-decor'
              label='Home Decor'
              active={'/home-decor' === pathname}
              leftSection={<IconWallpaper size={16} />}
              component={Link}
            />
            <NavLink
              to='/art-supplies'
              label='Art Supplies'
              active={'/art-supplies' === pathname}
              leftSection={<IconBrush size={16} />}
              component={Link}
            />
          </NavLink>
          <NavLink
            to='/artists'
            label='Artists'
            active={'/artists' === pathname}
            leftSection={<IconUsers size={16} />}
            component={Link}
          />
          <NavLink
            to='/exhibition-schedule'
            label='Exhibition Schedule'
            active={'/exhibition-schedule' === pathname}
            leftSection={<IconCamera size={16} />}
            component={Link}
          />
          <NavLink
            to='/dashboard'
            label='Dashboard'
            active={'/dashboard' === pathname}
            leftSection={<IconGauge size={16} />}
            component={Link}
          />
          <NavLink
            to='/settings'
            label='Settings'
            active={'/settings' === pathname}
            leftSection={<IconSettings size={16} />}
            component={Link}
          />
        </AppShell.Section>
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
