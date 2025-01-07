import { Button, Checkbox, SimpleGrid, Stack, TextInput, Title } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { useDisclosure } from '@mantine/hooks';
import { IconBriefcase } from '@tabler/icons-react';
import React from 'react';
import { AnimateIn } from './AnimateIn';
import { ConfirmModal } from './ConfirmModal';

export function Hire() {
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
          <Title>Hire Artist</Title>
          <TextInput label='Full Name' placeholder='Enter Full Name' required />
          <TextInput label='Email' placeholder='Enter Email' type='email' required />
          <TextInput label='Phone Number' placeholder='Enter Phone Number' type='tel' required />
          <TextInput label='Event Name' placeholder='Enter Event Name' required />
          <DateInput label='Event Date' placeholder='Enter Event Date' required />
          <TextInput label='Address' placeholder='Enter Address' required />
          <TextInput label='Country' placeholder='Enter Country' required />
          <SimpleGrid cols={3}>
            <TextInput label='City' placeholder='Enter City' required />
            <TextInput label='State' placeholder='Enter State' required />
            <TextInput label='Zip Code' placeholder='Enter Zip Code' required />
          </SimpleGrid>
          <Checkbox label='I have read the terms and conditions' />
          <Button leftSection={<IconBriefcase size={14} />} type='submit'>
            Hire Artist
          </Button>
        </Stack>
        <ConfirmModal
          text='Are you sure you want to hire this artist?'
          okText='Hire Artist'
          successText='Artist has been hired successfully'
          onClose={close}
          opened={opened}
        />
      </form>
    </AnimateIn>
  );
}
