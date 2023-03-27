import project1Img from '../assets/dynein.png';
import project2Img from '../assets/caliber.png';
import project3Img from '../assets/portfolio.png';
import project4Img from '../assets/blog.png';
import project5Img from '../assets/gpt.png';
import project6Img from '../assets/fuff.png';

const ProjectData = [
    {
      key: 1,
      imgSrc: project1Img,
      title: "Dynein Analysis",
      description: "Using Python scripts which utilize the OpenCV library and the ImageJ interface to perform an analysis of cell images containing dynein proteins.",
      githubLink: "https://www.github.com/force10269/DyneinProtein"
    },
    {
      key: 2,
      imgSrc: project2Img,
      title: "Caliber Marketplace",
      description: "Working with Caliber Public Safety, me and a group of five other students are working on creating a marketplace for Caliber's products and features using the MEAN stack.",
      githubLink: ""
    },
    {
      key: 3,
      imgSrc: project3Img,
      title: "Personal Portfolio Website",
      description: "This page! Everything you see here was created with the ReactJS framework and Bootstrap. Deployment achieved through Netlify.",
      githubLink: "https://github.com/force10269/portfolioProject"
    },
    {
      key: 4,
      imgSrc: project4Img,
      title: "The Tunnicliff Blog",
      description: "A software development blog I made to keep track of personal software dev fiascos or tidbits of information I could really use in the future. Deployed at: ",
      githubLink: "https://github.com/force10269/TunnicliffBlog"
    },
    {
      key: 5,
      imgSrc: project5Img,
      title: "GPT Discord Bots",
      description: "Discord bots utilizing the OpenAI API to interface with ChatGPT in Discord. Also utilizes the Tiktoken library to see how many tokens any given prompt is, including images and .txt files.",
      githubLink: "https://github.com/force10269/Basic_GPT_Bots"
    },
    {
      key: 6,
      imgSrc: project6Img,
      title: "Fuff: Fit Buffs",
      description: "A React Native iOS application intended to be a hi-fi prototype for a redesign of CU Boulder's Recreation Center app. Currently in development.",
      githubLink: "https://github.com/force10269/Fuff"
    }
];

export default ProjectData;