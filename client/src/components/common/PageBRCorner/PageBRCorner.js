import styles from './PageBRCorner.module.scss';

const PageBRCorner = props => {
    return (<div className={styles.root}>{props.children}</div>);
};

export default PageBRCorner;