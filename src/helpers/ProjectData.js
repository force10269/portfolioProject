import project1Img from '../assets/dynein.png';
import project2Img from '../assets/caliber.png';
import project3Img from '../assets/portfolio.png';

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
    }
];

export default ProjectData;