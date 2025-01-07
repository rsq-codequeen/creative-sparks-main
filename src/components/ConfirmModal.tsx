import { Button, Group, Modal } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import React from 'react';
export function ConfirmModal({
  text,
  okText,
  opened,
  onClose,
  successText,
}: {
  text: string;
  okText: string;
  opened: boolean;
  onClose: () => void;
  successText: string;
}) {
  return (
    <Modal opened={opened} onClose={onClose} title='Confirm Action' centered>
      {text}
      <Group mt='lg' justify='flex-end'>
        <Button onClick={onClose} variant='default'>
          Cancel
        </Button>
        <Button
          onClick={() => {
            onClose();
            notifications.show({
              title: 'Success',
              message: successText,
              color: 'green',
            });
          }}
        >
          {okText}
        </Button>
      </Group>
    </Modal>
  );
}
