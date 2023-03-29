import styles from "./Post.module.css";

export function Post() {
  return (
        <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <img
                    className={styles.avatar}
                    src="https://github.com/geilinha.png"
                />
                <div className={styles.authorInfo}>
                    <strong>Geile Giovana</strong>
                    <span>Web Developer</span>
                </div>
            </div>
        

            <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30a">
            Publicado há 1h
            </time>
        </header>

            <div className={styles.content}>
            <p>Fala pessoal 👋</p>
            <p>
                Finalmente finalizei meu novo site/portfólio. Foi um baita desafio
                criar todo o design e codar na unha, mas consegui 💪🏻{" "}
            </p>
            <p>
                Acesse e deixe seu feedback 👉<a href=""> devonlane.design</a>
            </p>
            <p>
                <a href="">#uiux</a>{'   '} 
                <a href="">#userexperience </a>
            </p>
            </div>
        </article>
  )
}
