import { Header } from './Header'
import { Sidebar } from './Sidebar'
import '../styles/global.css'
import styles from './App.module.css'
import { Post } from './Post'

function App() {
  return (
    <div>
      <Header />
    
      <div className={styles.whapper}>
        <Sidebar />

        <main>
          <Post
          />
          <Post
          />
        </main>

      </div>
    </div>

  )
}

export default App
