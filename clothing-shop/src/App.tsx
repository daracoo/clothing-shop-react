import './App.css'
import Footer from './components/Footer'
import { Header } from './components/Header'
import Shop from './components/Shop'

function App() {
  return (
    <div className='App'>
        <Header />
        <main style={{padding: '20px'}}>
           <Shop />    
        </main>
        <Footer />
    </div>
  )
}

export default App
