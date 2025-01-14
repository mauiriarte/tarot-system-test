import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    onPinButton: { action: 'onPinButton' },
    onArchiveButton: { action: 'onArchiveButton' },
  },
};

export const Default = {
  args: {
    Button: {
      id: '1',
      title: 'Test Button',
      state: 'Button_INBOX',
    },
  },
};

export const Pinned = {
  args: { Button: { ...Default.args.Button, state: 'Button_PINNED' } },
};

export const Archived = {
  args: { Button: { ...Default.args.Button, state: 'Button_ARCHIVED' } },
};
