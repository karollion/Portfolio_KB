import styles from './Resume.module.scss';
import Element from '../../common/Element/Element';
import { useSelector } from 'react-redux';
import { getAllEducation, getAllExperience } from '../../../redux/store';
import Lists from '../../features/Lists/Lists';
import ContainerSection from '../../common/ContainerSection/ContainerSection';
import PageLabel from '../../common/PageLabel/PageLabel';
import FrameSectLeft from '../../common/FrameSectLeft/FrameSectLeft';
import FrameSectRight from '../../common/FrameSectRight/FrameSectRight';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const Resume = () => {
  const experience = useSelector(getAllExperience);
  const education = useSelector(getAllEducation);
  const { t } = useTranslation();
  AOS.init();

  return (
    <ContainerSection>
      <PageLabel>{t('resume.label')}</PageLabel>
      <div className={styles.resume}>
        <section className={styles.section}>
          <Lists />
        </section>
        <section className={styles.eduexp}>
          <div 
            data-aos="fade-right" 
            data-aos-delay="150"
            data-aos-once="true"
            className={styles.left}>
            <FrameSectLeft>
              <div className={styles.edu}>
                <h2 className={styles.title}>{t('resume.education.label')}</h2>
                {education.map(education => <Element key={education.id} {...education} cat={"education"} />)}
              </div>
            </FrameSectLeft>
          </div>
          <div 
            data-aos="fade-left" 
            data-aos-delay="150"
            data-aos-once="true"
            className={styles.right}>
            <FrameSectRight>
              <div className={styles.exp}>
                <h2 className={styles.title}>{t('resume.experience.label')}</h2>
                {experience.map(experience => <Element key={experience.id} {...experience} cat={"experience"} />)}
              </div>
            </FrameSectRight>
          </div>
        </section>
      </div>
    </ContainerSection>
  );
};

export default Resume;