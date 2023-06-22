import self from '../img/self.png';
import tripagerPic from '../img/Tripager.png'
import spike from '../img/spikeSite.jpeg'
import nebula from '../img/nebula.png'
import { colors } from '../colors/mainGradient';

export const info = {
  firstName: 'Kyle',
  lastName: 'Tran',
  initials: 'KT', // the example uses first and last, but feel free to use three or more if you like.
  position: 'a Full Stack Developer',
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: '🇺🇸',
      text: 'based in Massachusetts, United States',
    },
    {
      emoji: '💻',
      text: 'Full Stack Developer: Currently looking for employment',
    },
    {
      emoji: '📧',
      text: 'ktrann03@gmail.com',
    },
  ],
  socials: [
    {
      link: 'https://www.linkedin.com/in/kyle-trann/overlay/1635530001635/single-media-viewer/?profileId=ACoAADnCqVkB0iyCMPcf9VlaCmjXzjDfJwMJY6M', // this should be https://yourname.com/resume.pdf once you've deployed
      icon: 'fa fa-file',
      label: 'resume',
    },
    {
      link: 'https://github.com/kyultrn',
      icon: 'fa fa-github',
      label: 'github',
    },
    {
      link: 'https://www.linkedin.com/in/kyle-trann/',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
  ],
  bio: "Hello! I'm Kyle Tran. I'm a Full Stack Developer. I studied Software Engineering at Hack Reactor and am currently studying Bachelor of Science: Software Engineering at WGU, I enjoy building web applications and learning new technologies. I'm currently looking for employment as a Full Stack Developer. I love to workout whether it is lifting or intense cardio. I'm currently based in Lowell, Massachusetts.",
  skills: {
    // you dont havew to strictly follow the 'languages', 'frameworks', 'databases', 'cloudServices', and 'tools' categories. You can add your own if you'd like.
    // but the structure should be the same, an array of strings and the key should be one word, no spaces.
    languages: [ 'JavaScript', 'Java', 'Python', 'HTML/CSS', 'SQL'],
    frameworks: [
      'React',
      'Redux',
      'Material UI',
      'Bootstrap',
      'FastAPI',
      'Django',
    ],
    databases: ['MongoDB', 'PostgreSQL'],
    // cloudServices: ['AWS S3', 'AWS EC2', 'AWS SNS', 'Google Analytics', 'Heroku', 'Netlify'],
    tools: [
      'Git',
      'Postman',
      'Docker',
      'Swagger',
      'Insomnia',
    ],
  },
  hobbies: [
    {
      label: 'Lifting',
      emoji: '🏋️',
    },
    {
      label: 'Video Games',
      emoji: '🎮',
    },
    {
      label: 'Basketball',
      emoji: '🏀',
    },
    {
      label: 'Anime',
      emoji: '🎞',
    },
    {
      label: 'Cooking',
      emoji: '🍳',
    },
    {
      label: 'Tennis',
      emoji: '🎾',
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    //   for the null ones, the button will not show up
    {
      title: 'Tripager - A personal Trip Planner with Events',
      live: 'https://tripager-group.gitlab.io/tripager/', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/kyultrn/Tripager', // this should be a link to the **repository** of the project, where the code is hosted.
      image: tripagerPic,
    },
    {
      title: 'Spike - An Anime Search Engine/Database',
      live: 'https://spike-kyul.vercel.app/',
      source: 'https://github.com/kyultrn/Spike',
      image: spike,
    },
    {
      title: 'Nebula - Full-service car dealership application',
      live: null,
      source: null,
      image: nebula,
    },
  ],
};
