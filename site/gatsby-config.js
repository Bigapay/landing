module.exports = {
  flags: {
    DEV_SSR: false
  },
  plugins: [
    {
      resolve: '@elegantstack/gatsby-theme-flexiblocks',
      options: {
        createDemoPages: false,
        colorMode: false,
        name: 'BigaPay Technology',
        short_name: 'BigaPay',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#594B97',
        display: 'minimal-ui',
        icon: 'content/assets/favicon.png'
      }
    }
  ],
  // Customize your site metadata
  siteMetadata: {
    title: 'Biga Technologies Ltd',
    name: 'Biga Technologies Ltd',
    description: 'BigaPay...',
    icon: 'content/assets/favicon.ico'
  }
}
