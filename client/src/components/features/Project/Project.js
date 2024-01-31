import styles from './Project.module.scss';
import Button from '../../common/Button/Button';
import Label from '../../common/Label/Label';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FrameSectLeft from '../../common/FrameSectLeft/FrameSectLeft';
import { useTranslation } from 'react-i18next';
import { FILES_URL } from '../../../config';

const Project = props => {
  const { t } = useTranslation();
  AOS.init();

  return (
    <div 
    data-aos="fade-right" 
    data-aos-delay="150"
    data-aos-once="true"
    className={styles.container}>
      <FrameSectLeft>
        <div className={styles.insidecontainer}>
          <div className={styles.toImage}>
            <img 
              className={styles.image}
              alt={props.title}
              href={props.link}
              src={`${FILES_URL}/images/projects/${props.img}.png`} />
          </div>
          <div className={styles.toDescription}>
            <h2>{t(`projects.project.${props.id}.title`)}</h2>
            <div className={styles.lebels}>
              {props.tech.map(tech => <Label key={tech.id} {...tech} />)}
            </div>
            <p>{t(`projects.project.${props.id}.about`)}</p>
            <a href={props.link}>
            <Button>{t('projects.gobutton')}</Button>
            </a>
          </div>
        </div>
      </FrameSectLeft>
    </div>
  );
};

export default Project;

