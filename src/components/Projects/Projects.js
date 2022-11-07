import SecondaryHeading from '../UI/SecondaryHeading';
import ProjectGridItem from './ProjectGridItem';
import exImg from '../../assets/img/ex-img.png';
import ProjectBG from '../../assets/svg/section-bg/ProjectBG';
import classes from './Projects.module.css';

// Icons
import HtmlIcon from '../../assets/svg/languages/HtmlIcon';
import CssIcon from '../../assets/svg/languages/CssIcon';
import JavaScriptIcon from '../../assets/svg/languages/JavaScriptIcon';
import ReactIcon from '../../assets/svg/languages/ReactIcon';
import NodeJSIcon from '../../assets/svg/languages/NodeJSIcon';
import MySQLIcon from '../../assets/svg/languages/MySQLIcon';
import JavaIcon from '../../assets/svg/languages/JavaIcon';
import PythonIcon from '../../assets/svg/languages/PythonIcon';
import SassIcon from '../../assets/svg/languages/SassIcon';
import NpmIcon from '../../assets/svg/languages/NpmIcon';
import GitIcon from '../../assets/svg/languages/GitIcon';

// Project Images
import projectImage1 from '../../assets/img/payroll-sorter-image.webp';
import projectImage2 from '../../assets/img/pdf-word-converter-image.webp';
import projectImage3 from '../../assets/img/mgh-menu-image.webp';
import projectImage4 from '../../assets/img/my-coding-tracker-image.webp';

const Projects = props => {
  const projectGridItem = PROJECTS_DATA.map(project => (
    <ProjectGridItem
      key={project.id}
      image={project.image}
      altText={project.altText + (project.id + 1)}
      title={project.title}
      description={project.description}
      tags={project.tags}
      gitHubPath={project.gitHubPath}
      liveSitePath={project.liveSitePath}
    />
  ));

  return (
    <section className={classes[`project-section`]} ref={props.refProp}>
      <ProjectBG class={classes[`project-bg`]} />

      <SecondaryHeading>Projects</SecondaryHeading>
      <div className={classes.grid}>{projectGridItem}</div>
    </section>
  );
};

/* 
    Proper tags to input into array:
      HtmlIcon, CssIcon, JavaScriptIcon, ReactIcon, 
      NodeJSIcon, MySQLIcon, JavaIcon, PythonIcon, 
      SassIcon, NpmIcon, GitIcon,
*/

const PROJECTS_DATA = [
  {
    id: 0,
    image: projectImage1,
    altText: 'alt text here',
    title: 'Payroll Report Sorter',
    description: 'test',
    tags: [JavaIcon],
    gitHubPath: 'https://github.com/AndrewKohn/PayrollReportSorter',
    liveSitePath: '',
  },
  {
    id: 1,
    image: projectImage2,
    altText: 'alt text here',
    title: 'PDF/Word Converter',
    description:
      'Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?',
    tags: [JavaIcon],
    gitHubPath: 'https://github.com/AndrewKohn/PDFWordConverter',
    liveSitePath: '',
  },
  {
    id: 2,
    image: projectImage3,
    altText: 'alt text here',
    title: 'MGH Menu',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?',
    tags: [HtmlIcon, CssIcon, JavaScriptIcon],
    gitHubPath: 'https://github.com/AndrewKohn/MGH-menu',
    liveSitePath: 'https://mghmenu.netlify.app/',
  },
  {
    id: 3,
    image: projectImage4,
    altText: 'alt text here',
    title: 'My Coding Tracker',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?',
    tags: [JavaIcon],
    gitHubPath: 'https://github.com/AndrewKohn/MyCodingTracker',
    liveSitePath: '',
  },
  {
    id: 4,
    image: exImg,
    altText: 'alt text here',
    title: 'Project 5',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?',
    tags: [],
    gitHubPath: '',
    liveSitePath: '',
  },
  {
    id: 5,
    image: exImg,
    altText: 'alt text here',
    title: 'Project 6',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?',
    tags: [],
    gitHubPath: '',
    liveSitePath: '',
  },
];

export default Projects;
