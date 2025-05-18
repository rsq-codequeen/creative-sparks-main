import { Button, Checkbox, SimpleGrid, Stack, TextInput, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconCurrencyDollar } from '@tabler/icons-react';
import React from 'react';
import { AnimateIn } from './AnimateIn';
import { ConfirmModal } from './ConfirmModal';

export function JoinExhibition() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <AnimateIn>
      <form
        onSubmit={e => {
          e.preventDefault();
          console.log('first');
          open();
        }}
      >
        <Stack>
          <Title>Buy Exhibition Ticket</Title>
          <Title order={2}>Contact Information</Title>
          <TextInput label='Full Name' placeholder='Enter Full Name' required />
          <TextInput label='Email' placeholder='Enter Email' type='email' required />
          <TextInput label='Phone Number' placeholder='Enter Phone Number' type='tel' required />
          <TextInput label='Address' placeholder='Enter Address' required />
          <TextInput label='Country' placeholder='Enter Country' required />
          <SimpleGrid cols={3}>
            <TextInput label='City' placeholder='Enter City' required />
            <TextInput label='State' placeholder='Enter State' required />
            <TextInput label='Zip Code' placeholder='Enter Zip Code' required />
          </SimpleGrid>

          <Title order={2}>Payment Information</Title>
          <SimpleGrid cols={2}>
          <TextInput label='Cardholder Name' placeholder='Enter Cardholder Name' required />
          <TextInput label='xyz Name' placeholder='Enter xyz Name' required /><TextInput label='Card Number' placeholder='Enter Card Number' type='text' required />
          </SimpleGrid>
          <SimpleGrid cols={2}>
            <TextInput label='Expiry Date' placeholder='MM/YY' type='text' required />
            <TextInput label='CVV' placeholder='Enter CVV' type='password' required />
          </SimpleGrid>

          <Checkbox label='I have read the terms and conditions' />
          <Button leftSection={<IconCurrencyDollar size={14} />} type='submit'>
            Buy Ticket
          </Button>
        </Stack>
        <ConfirmModal
          text='Are you sure you want to buy this ticket?'
          okText='Buy Ticket'
          successText='Ticket has been bought successfully'
          onClose={close}
          opened={opened}
        />
      </form>
    </AnimateIn>
  );
}
