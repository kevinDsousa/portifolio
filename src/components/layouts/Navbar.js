import {Link} from 'react-router-dom';
import Container from './Container';
import styles from './Navbar.module.css'
import icone_principal from "../../img/icone_principal.png";

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <img className={styles.img} src={icone_principal} alt="logo viking"/>
            <Container>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/abautme">Abaut Me</Link></li>
                    <li className={styles.item}><Link to="/projects">Projects</Link></li>
                    <li className={styles.item}><Link to="/experiences">Experiences</Link></li>
                </ul>
            </Container>       
        </div>
    )
}