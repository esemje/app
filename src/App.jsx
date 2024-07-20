import './App.css'
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <div className='bg-[#F5F5F5]'>
        <Header />
        <main className='mx-auto'>
          <Home />
          <Products />
          <Services />
          <Reviews />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
