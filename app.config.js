export default ({ config }) => {
  return {
    ...config,
    name: 'Storybook Tutorial Template',
    slug: 'storybook-tutorial-template',
    extra: {
      storybookEnabled: process.env.STORYBOOK_ENABLED,
    },
  };
};
