module.exports = {
  stories: ["../packages/**/src/**/*.stories.@(js|tsx|mdx)"],
  // staticDirs: [
  //   {from: '../packages/core/storybook-static/stories.json', to: '/core/stories.json'},
  //   {from: '../packages/form/storybook-static/stories.json', to: '/form/stories.json'},
  // ],
  // refs: {
  //   'core': {
  //     title: 'core',
  //     url:"/core",
  //   },
  //   'form': {
  //     title: 'form',
  //     url:"/form",
  //   }
  // },
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-essentials",
    "@storybook/addon-links"
  ],
  core: {
    builder: "webpack5"
  }
};
