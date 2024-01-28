import styles from './Button.module.scss';

const Button = props => {
    return (<button className={styles.button} href={props.link}>{props.children}</button>);
};

export default Button;