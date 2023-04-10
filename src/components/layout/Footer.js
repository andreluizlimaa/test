import {FaLinkedin, FaInstagram, FaGithub} from 'react-icons/fa'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <span>André Luiz Lima</span>
         <ul className={styles.social_list}>
            <li>
                <FaLinkedin/>
            </li>
            <li>
                <FaInstagram/>
            </li>
            <li>
                <FaGithub/>
            </li>
        </ul>
        <p className={styles.copy_right}>&copy; 2023 Copyright all right reserved</p>
        </footer>

     );
}

export default Footer;