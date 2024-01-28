import styles from './FrameSectRight.module.scss';

const FrameSectRight = props => {
    return (
        <div className={styles.root}>
            <div className={styles.top}>
                <div className={styles.frameTop}></div>
                <div className={styles.cornerTop}></div>
                <div className={styles.corner45deg}></div>
            </div>
            <div className={styles.body}>
                {props.children}
            </div>
            <div className={styles.bottom}>
                <div className={styles.corner45deg}></div>
                <div className={styles.frameBottom}></div>
                <div className={styles.cornerBottom}></div>
            </div>
        </div>
    );
};

export default FrameSectRight;