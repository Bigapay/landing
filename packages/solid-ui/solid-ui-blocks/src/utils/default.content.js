import icon from '../../assets/placeholder.svg'
import image from '../../assets/placeholder.jpg'

const placeholderImage = {
  isPlaceholder: true,
  objectFit: 'none',
  medium: {
    src: image,
    maxWidth: 500,
    aspectRatio: 1,
    sizes: '',
    srcSet: ''
  }
}

export default {
  text: [
    { text: 'Lets build something together', variant: 'h4' },
    { text: 'Title Text', variant: 'h2' },
    { text: 'Lets build something together', variant: 'h2' },
    { text: 'Book a call with us to discover how Biga can help you get to market in no time.', variant: 'medium' }
  ],
  images: [
    {
      src: placeholderImage
    }
  ],
  collection: [
    {
      text: [{ text: 'Text Content No.1' }, { text: 'Text Content No.2' }],
      description: 'Lorem ipsum dolor sit amet, dopi se contetur adicing elit.',
      icon: {
        src: icon,
        color: '#667eea',
        bg: 'transparent'
      }
    },
    {
      text: [{ text: 'Text Content No.1' }, { text: 'Text Content No.2' }],
      description: 'Lorem ipsum dolor sit amet, dopi se contetur adicing elit.',
      icon: {
        src: icon,
        color: '#667eea',
        bg: 'transparent'
      }
    },
    {
      text: [{ text: 'Text Content No.1' }, { text: 'Text Content No.2' }],
      description: 'Lorem ipsum dolor sit amet, dopi se contetur adicing elit.',
      icon: {
        src: icon,
        color: '#667eea',
        bg: 'transparent'
      }
    }
  ],
  buttons: [
    {
      text: 'Button One',
      link: '/'
    },
    {
      text: 'Button Two',
      link: '/'
    }
  ]
}
