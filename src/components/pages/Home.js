import styles from './Home.module.css'
import bbb_bg from '../../img/Logo-bbb.png'
import Container from '../layout/Container'
import brother_1 from '../../img/brother_1.png'
import brother_2 from '../../img/brother_2.png'
import brother_3 from '../../img/brother_3.png'
import brother_4 from '../../img/brother_4.png'
import brother_5 from '../../img/brother_5.png'
import brother_6 from '../../img/brother_6.png'
import brother_7 from '../../img/brother_7.png'
import brother_8 from '../../img/brother_8.png'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const Home = () => {
    return (
        <Container>
            <section className={styles.home_container}>
                 <img src={bbb_bg} alt="Logo do bbb" />
            </section>

            <div className={styles.quem_somos}>
                <div className={styles.quem_somos_title}><h3> Quem somos ?</h3></div>
                <div className={styles.quem_somos_text}>
                    <p>
                    A Include Engenharia é uma empresa júnior dos cursos de Ciências e Tecnologia,
                    Engenharia de Computação, Mecatrônica e Telecomunicações da UFRN. A empresa
                    surgiu em agosto de 2015, a partir do desejo de um grupo de alunos em desenvolver
                     uma vivência profissional plena e voluntária. A Include Engenharia é uma resposta
                     à lacuna comum dos cursos de engenharia: a falta de formação em gestão,
                     empreendedorismo e liderança. Neste sentido, nos propomos a oferecer uma formação
                     prática em computação, mecatrônica e telecomunicações, dando oportunidade de
                     aprendizado para os futuros engenheiros formados pela nossa universidade.
                    </p>
                    <Link to= "https://www.google.com"><button > Saiba mais ?</button></Link>
                </div>
            </div>
            <div className={styles.container_brothers}>
                <div className={styles.container_brothers_perfils}>
                    <div className={styles.brothers_title}><h3>Brothers</h3></div>
                    <div className={styles.brothers.perfils}>
                    <div className={styles.brother_1}><img src={brother_1} alt="logo_brother_1" /></div>
                    <div className={styles.brother_2}><img src={brother_2} alt="logo_brother_2" /></div>
                    <div className={styles.brother_3}><img src={brother_3} alt="logo_brother_3" /></div>
                    <div className={styles.brother_4}><img src={brother_4} alt="logo_brother_4" /></div>
                    <div className={styles.brother_5}><img src={brother_5} alt="logo_brother_5" /></div>
                    <div className={styles.brother_6}><img src={brother_6} alt="logo_brother_6" /></div>
                    <div className={styles.brother_7}><img src={brother_7} alt="logo_brother_7" /></div>
                    <div className={styles.brother_8}><img src={brother_8} alt="logo_brother_8" /></div>
                    </div>


                </div>
            </div>
            <div className={styles.container_include}>
                <div className={styles.include_title}><h3>Porque devo entrar na Include?</h3></div>
                <div className={styles.video_include}>
                    <iframe width="810" height="521" src="https://www.youtube.com/embed/DPI8ivJjIkU" title="Raça Negra - Cheia de Manias (Deezer Sessions)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>

        </Container>

     );
}

export default Home;