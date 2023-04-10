import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import Container from './Container';
import styles from './NavBar.module.css'
import logo from '../../img/include.png'

const NavBar = () => {
    return (
        <nav className={styles.navbar}>
          <Container>
            <Link to= "/">
                <img src={logo} alt="include" />
            </Link>
            <div className={styles.list}>
                <button className={styles.item}><Link to= "/">Home</Link></button>
                <button className={styles.item}><Link to= "/Sobremim">Sobre mim</Link></button>
                <button className={styles.item}><Link to= "/Blog">Blog</Link></button>
            </div>
          </Container>
        </nav>

     );
}

export default NavBar;