import { Header } from './components/Header'
import '../styles/global.css'
import styles from './App.module.css'
import Post from './Post'

function App() {
  return (
    <div>
      <Header />
    
      <div className={styles.wrapper}>
        <aside>
          sidebar
        </aside>

        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque nam ab pariatur inventore quod officia architecto odio, repellendus reiciendis natus blanditiis sunt reprehenderit iure iste, mollitia, repellat in ipsum sed."
          />
          <Post
            author="Geile Giovana"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque nam ab pariatur inventore quod officia architecto odio, repellendus reiciendis natus blanditiis sunt reprehenderit iure iste, mollitia, repellat in ipsum sed."
          />
        </main>

      </div>
    </div>

  )
}

export default App
