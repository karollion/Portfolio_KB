import styles from './Home.module.scss';
import Icon from '../../common/Icon/Icon';
import ContainerSection from '../../common/ContainerSection/ContainerSection';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PageLabel from '../../common/PageLabel/PageLabel';
import FrameSectRight from '../../common/FrameSectRight/FrameSectRight'
import FrameSectLeft from '../../common/FrameSectLeft/FrameSectLeft';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  AOS.init();

  return (
    <ContainerSection>
      <PageLabel>{t('about.label')}</PageLabel>
      <div className={styles.home}>
        <div 
          data-aos="fade-right" 
          data-aos-delay="150"
          data-aos-once="true"
          className={styles.imageContainer}>
          <FrameSectLeft>
            <div className={styles.imageContainerUp}>
                <img 
                  className={styles.image}
                  alt={'profile'}
                  src={`${process.env.PUBLIC_URL}/images/profile.jpg`} />
                <h2>{t('about.firstname')}</h2>
                <h2 className={styles.line}>{t('about.lastname')}</h2>
                <p>{t('about.job')}</p>
              
            </div>
            <div className={styles.imageContainerDown}>
              <Icon />
            </div>
          </FrameSectLeft>
        </div>
        <div 
          data-aos="fade-left" 
          data-aos-delay="150"
          data-aos-once="true"
          className={styles.info}
          >
          <FrameSectRight>
            <div className={styles.infoContainer}>
              <p>{t('about.abouttext')}</p>
            </div>
          </FrameSectRight>
        </div>
      </div>
    </ContainerSection>
  );
};

export default Home;