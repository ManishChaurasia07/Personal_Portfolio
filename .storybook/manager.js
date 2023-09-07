import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: 'https://manishw.com/icon.svg',
    brandTitle: 'MANISH CHAURASIA Components',
    brandUrl: 'https://manishw.com',
  },
});
