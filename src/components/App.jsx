import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import "../styles/global.css";
import styles from "./App.module.css";
import { Post } from "./Post";

//author = {url, name, office} = string
//content = {conteudo} = string
//publishAt = {data} = date

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/geilinha.png',
      name: 'Geile Giovana',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal 👋' },
      { type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻', },
      { type: 'paragraph', content: 'Acesse e deixe seu feedback' },
      { type: 'link', content: 'devonlane.design' },
    ],
    publishedAt: new Date("2023-03-11 20:00:00"),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/geilinha.png',
      name: 'Geile Giovana',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal 👋' },
      { type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻', },
      { type: 'paragraph', content: 'Acesse e deixe seu feedback' },
      { type: 'link', content: 'devonlane.design' },
    ],
    publishedAt: new Date("2023-04-11 20:00:00"),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.whapper}>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return (
              (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              ))})}
        </main>
      </div>
    </div>
  );
}

export default App;
