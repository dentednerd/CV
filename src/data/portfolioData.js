export default [
  {
    link: 'https://apple.co/2DDLgTu',
    image: 'LADAPP1',
    thumb: null,
    title: 'LADbible mobile app',
    caption: 'An app serving videos, and recently articles too, on iOS and Android devices. We took our cues from a legacy app built in Swift, and rebuilt in React Native for both mobile platforms using Expo.',
    stack: ['React Native', 'GraphQL'],
    mobile: true,
    illustration: 'MobileSvg',
  },
  {
    link: 'https://www.ladbible.com',
    image: 'LAD',
    thumb: null,
    title: 'LADbible',
    caption: 'Part of the LADbible Group family of sites. A single React-based platform powers all the channels. Different variants of the LADbible channel are visible in Australia and Ireland.',
    stack: ['React', 'Apollo', 'Koa', 'GraphQL'],
    mobile: false,
    illustration: 'ReactSvg',
  },
  {
    link: 'https://www.unilad.co.uk',
    image: 'UNILAD',
    thumb: null,
    title: 'UNILAD',
    caption: 'Part of the LADbible Group family of sites. A single React-based platform powers all the channels. UNILAD differs from our other channels in that the backend is powered by a headless Wordpress CMS.',
    stack: ['React', 'Apollo', 'Koa', 'GraphQL'],
    mobile: false,
    illustration: 'ProudSvg',
  },
  {
    link: 'https://www.tyla.com',
    image: 'Tyla',
    thumb: null,
    title: 'Tyla',
    caption: 'Part of the LADbible Group family of sites. A single React-based platform powers all the channels. Tyla was the first channel to move onto the new platform.',
    stack: ['React', 'Apollo', 'Koa', 'GraphQL'],
    mobile: false,
    illustration: 'WebSvg',
  },
  {
    link: 'https://www.sportbible.com',
    image: 'SPORT',
    thumb: null,
    title: 'SPORTbible',
    caption: 'Part of the LADbible Group family of sites. A single React-based platform powers all the channels. SPORTbible was the first channel to which we added video and Twitter feeds.',
    stack: ['React', 'Apollo', 'Koa', 'GraphQL'],
    mobile: false,
    illustration: 'ImageSvg',
  },
  {
    link: 'https://codeninjas-v2.herokuapp.com',
    image: 'CodeNinjas2',
    thumb: 'CodeNinjasThumb',
    title: 'Code Ninjas v2',
    caption: 'A reskin of the original project, some time after graduating Northcoders. I kept the accessibility of the original design, but stripped many elements back whilst adding new features to show progress.',
    stack: ['React', 'Redux', 'Bulma', 'Express', 'MongoDB'],
    mobile: false,
    illustration: 'DeveloperSvg',
    relatedPosts: [
      {
        name: 'Code Ninjas: revisiting Northcoders project phase',
        slug: '/posts/code-ninjas/'
      }
    ]
  },
  {
    link: 'https://codeninjas-nc5.herokuapp.com',
    image: 'CodeNinjas',
    thumb: 'CodeNinjasThumb',
    title: 'Code Ninjas v1',
    caption: 'An educational multiple-choice game, created during the final project phase at Northcoders in a team of four. Accessibility was important to our design approach in this project.',
    stack: ['React', 'Redux', 'Bulma', 'Express', 'MongoDB'],
    mobile: false,
    illustration: 'CodeSvg',
    relatedPosts: [
      {
        name: 'Code Ninjas: revisiting Northcoders project phase',
        slug: '/posts/code-ninjas/'
      }
    ]
  },
  {
    link: 'https://northcoders-news-dentednerd-v2.herokuapp.com',
    image: 'NCNewsv2',
    thumb: 'NCNewsThumb',
    title: 'Northcoders News v2',
    caption: 'I used this Northcoders MERN project to demonstrate Docker containerisation to some colleagues. It was a good opportunity to add some new functionality, refactor, redesign (without Bulma this time), and redeploy.',
    stack: ['React', 'Redux', 'Express', 'MongoDB'],
    mobile: false,
    illustration: 'MobileSvg',
    relatedPosts: [
      {
        name: 'Northcoders News, revisited',
        slug: '/posts/northcoders-news-revisited/'
      }
    ]
  },
  {
    link: 'https://northcoders-news-dentednerd.herokuapp.com',
    image: 'NCNews',
    thumb: 'NCNewsThumb',
    title: 'Northcoders News v1',
    caption: 'A MERN-stack Reddit clone. I opted for a simple design with this project in order to let the content speak for itself, but I spent a long time wanting to revisit it.',
    stack: ['React', 'Redux', 'Bulma', 'Express', 'MongoDB'],
    mobile: false,
    illustration: 'ReactSvg',
    relatedPosts: [
      {
        name: 'Northcoders News, revisited',
        slug: '/posts/northcoders-news-revisited/'
      }
    ]
  },
  {
    link: 'https://dentednerd.github.io/Trell-Jo/',
    image: 'TrellJo',
    thumb: 'TrellJoThumb',
    title: 'TrellJo',
    caption: 'Most developers starting out in React end up building a to-do list. The next level up from this was to build a basic Trello clone. I tried not to deviate the design too much from the original site.',
    stack: ['React', 'Bulma'],
    mobile: false,
    illustration: 'ProudSvg'
  },
  {
    link: 'https://dentednerd.github.io/Northwitter/',
    image: 'Northwitter',
    thumb: 'NorthwitterThumb',
    title: 'Northwitter',
    caption: 'A Twitter clone, based on a mock API. I really liked the idea of a cute, pastel version of Twitter. This was the first project in which I\'d ever used a CSS framework.',
    stack: ['React', 'Bootstrap'],
    mobile: false,
    illustration: 'WebSvg',
  },
  {
    link: 'https://dentednerd.github.io/precourse-section-3/',
    image: 'DNReviews',
    thumb: 'DNReviewsThumb',
    title: 'Dented Nerd Reviews',
    caption: 'A small pre-Northcoders project to showcase my HTML and CSS design skills, with a little jQuery animation on the navigation menu. Based on a Tumblr theme I\'d built a couple of years previously, of which I\'m still very fond.',
    stack: ['HTML', 'CSS', 'jQuery'],
    mobile: false,
    illustration: 'ImageSvg',
  },
];
