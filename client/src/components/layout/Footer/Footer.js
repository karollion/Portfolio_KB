import styles from './Footer.module.scss';
import Icon from '../../common/Icon/Icon';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <img 
        className={styles.image}
        alt={'earth'}
        src={`${process.env.PUBLIC_URL}/images/earth.png`} />
      <div className={styles.footer}>
          <Icon /> 
        <div  className={styles.shadowBox}>
          <p>{t('footer.phone')}</p>
        </div>
        <div className={styles.shadowBox}>
          <p>{t('footer.email')}</p>
        </div>
        <div className={styles.shadowBox}>
          <p>{t('footer.rights')}</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;