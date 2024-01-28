import styles from './Element.module.scss';
import { useTranslation } from 'react-i18next';

const Element = props => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <h2>{t(`resume.${props.cat}.${props.id}.years`)}</h2>
      <p>{t(`resume.${props.cat}.${props.id}.institution`)}</p>
      <p>{t(`resume.${props.cat}.${props.id}.position`)}</p>
      <p>{t(`resume.${props.cat}.${props.id}.details`)}</p>
    </div>
  );
};

export default Element;
