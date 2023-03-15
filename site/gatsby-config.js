module.exports = {
  flags: {
    DEV_SSR: false
  },
  plugins: [
    {
      resolve: '@elegantstack/gatsby-theme-flexiblocks',
      options: {
        createDemoPages: false,
        colorMode: false
      }
    }
  ],
  // Customize your site metadata
  siteMetadata: {
    title: 'BigaPay',
    name: 'FlexiBlocks',
    description: 'BigaPay...'
  }
}
