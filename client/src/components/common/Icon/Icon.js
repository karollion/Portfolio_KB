import styles from './Icon.module.scss';

const Icon = () => {
  return (
    <div className={styles.icons}>
      <ul>
        <li className={styles.shadowBox}>
          <a href='https://github.com/karollion'  target="_blank" rel='noreferrer' title="github">
            <i className="fa fa-github"></i><span>github</span></a>
        </li>
        <li className={styles.shadowBox}>
          <a href='https://www.linkedin.com/in/karol-bernatowicz'  target="_blank" rel='noreferrer' title="linkedin">
            <i className="fa fa-linkedin"></i><span>linkedln</span></a>
        </li>
      </ul>
    </div>
  );
};

export default Icon;