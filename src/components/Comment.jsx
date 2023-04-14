import { ThumbsUp, Trash } from "@phosphor-icons/react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/geilinha.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Geile Giovana</strong>
              <time
                title="11 de Maio às 08:13h"
                dateTime="2022-05-11 08:13:30a"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
