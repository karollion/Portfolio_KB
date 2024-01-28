import styles from './DisplayButton.module.scss';

const DisplayButton = props => {
    return (<div className={styles.button}>{props.children}</div>);
};

export default DisplayButton;