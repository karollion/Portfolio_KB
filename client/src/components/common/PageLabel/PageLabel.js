import styles from './PageLabel.module.scss';

const PageLabel = props => {
    return (<div className={styles.root}>{props.children}</div>);
};

export default PageLabel;