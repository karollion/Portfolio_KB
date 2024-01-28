import styles from './Contact.module.scss';
import Icon from '../../common/Icon/Icon';
import ContainerSection from '../../common/ContainerSection/ContainerSection';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PageLabel from '../../common/PageLabel/PageLabel';
import FrameSectLeft from '../../common/FrameSectLeft/FrameSectLeft';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  AOS.init();
 
  return (
    <ContainerSection>
      <PageLabel>{t('contact.label')}</PageLabel>
      <div 
        data-aos="fade-right" 
        data-aos-delay="150"
        data-aos-once="true"
        className={`${styles.contact} `}
        >
        <FrameSectLeft>
          <div className={styles.container}>
            <h2 className={styles.title}>{t('contact.title')}</h2>
            <h2>{t('contact.phone')}</h2> 
            <p>{t('contact.phonenumber')}</p>
            <h2>{t('contact.emailtitle')}</h2> 
            <a href = "mailto: karol.bernatowicz@gmail.com">{t('contact.email')}</a>
            <span><Icon /></span>
          </div>
        </FrameSectLeft>
      </div>
    </ContainerSection>
  );
};

export default Contact;