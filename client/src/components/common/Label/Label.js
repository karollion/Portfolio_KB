import styles from './Label.module.scss';

const Label = props => {
  return (
    <div className={styles.label}>
      {props.name}
    </div>
  );
};

export default Label;
