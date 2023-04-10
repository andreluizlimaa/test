import Container from '../layout/Container';
import styles from './Sobremim.module.css'
import perfil_1 from '../../img/perfil_academico.png'
import perfil_2 from '../../img/perfil_pessoal.png'

const Sobremim = () => {
    return (
        <Container>
            <section className={styles.sobremim_container}>
                <div className={styles.sobremim_perfils}>
                    <div className={styles.title_perfil}><h3>Perfil Acadêmico</h3></div>
                    <div className={styles.info_perfil}>
                        <div className={styles.perfil_1}><img src={perfil_1} alt="perfil_1"/></div>
                        <p>Universidade: Universidade federal do rio grande do norte(UFRN)</p>
                        <p>Curso: Interdisciplinar em ciência e tecnologia(C&T)</p>
                        <p>Enfâse: Engenharia da computação</p>
                        <p>Duração: 2019.2 - 2023.2</p>
                        <p>Bolsa de apoio técnico e administrativo : 2021.1 - andamento</p>
                        <p>Linguagens : C, C++, Python, Go</p>
                    </div>


                    <div className={styles.title_perfil2}><h3>Perfil Pessoal</h3></div>
                    <div className={styles.info_perfil2}>
                        <div className={styles.perfil_2}><img src={perfil_2} alt="perfil_2"/></div>
                        <p>Nome: André Luiz Lima</p>
                        <p>Idade: 24 anos</p>
                        <p>Esporte preferido: Calistenia, Atlestimo</p>
                        <p>Passa-tempo: assistir anime, ler mangá</p>
                        <p>Interesse pessoal: Tecnologia, Games, Psicologia</p>
                    </div>
                </div>
            </section>
        </Container>
     );
}

export default Sobremim;