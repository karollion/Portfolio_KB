import styles from './Projects.module.scss';
import { useSelector } from 'react-redux';
import { getAllProjects } from '../../../redux/store';
import Project from '../../features/Project/Project';
import ContainerSection from '../../common/ContainerSection/ContainerSection';
import PageLabel from '../../common/PageLabel/PageLabel';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();
  const projects = useSelector(getAllProjects);
  
  return (
    <ContainerSection>
      <PageLabel>{t('projects.label')}</PageLabel>
      <div className={styles.projects}>
        {projects.map(project => <Project key={project.id} {...project}  />)}
      </div>
    </ContainerSection>
  );
};

export default Projects;