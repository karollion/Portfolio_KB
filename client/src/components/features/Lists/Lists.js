import styles from './Lists.module.scss';
import ListElement from '../../common/ListElement/ListElement';
import { useSelector } from 'react-redux';
import { getTechnologies, getSkills} from '../../../redux/store';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FrameSectLeft from '../../common/FrameSectLeft/FrameSectLeft';
import FrameSectRight from '../../common/FrameSectRight/FrameSectRight';
import { useTranslation } from 'react-i18next';

const Lists = props => {
  const skills = useSelector(getSkills);
  const technologies = useSelector(getTechnologies);
  const { t } = useTranslation();
  AOS.init();

  return (
    <div className={styles.container}>
      <div 
        data-aos="fade-right" 
        data-aos-delay="150"
        data-aos-once="true"
        className={styles.left}>
        <FrameSectLeft>
          <div className={styles.techs}>
            <h2 className={styles.title}>{t('resume.technologies')}</h2>
            <div className={styles.lefttech}>
              <ul>
                {technologies.filter((item, index) => index < 11).map(tech => <ListElement key={tech.id} {...tech} />)}
              </ul>
            </div>
            <div className={styles.righttech}>
              <ul>
                {technologies.filter((item, index) => index > 10).map(tech => <ListElement key={tech.id} {...tech} />)}
              </ul>
            </div>
          </div>
        </FrameSectLeft>
      </div>
      <div 
        data-aos="fade-left" 
        data-aos-delay="500"
        data-aos-once="true"
        className={styles.right}>
        <FrameSectRight>
          <div className={styles.skills}>
          <h2 className={styles.title}>{t('resume.skills.label')}</h2>
            <ul>
              {skills.map(skill => <ListElement key={skill.id} {...skill} />)}
            </ul>
          </div>
        </FrameSectRight>
      </div>
    </div>
  );
};

export default Lists;
