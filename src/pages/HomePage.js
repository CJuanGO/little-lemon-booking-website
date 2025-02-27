import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Specials from '../components/Specials';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
      <>
        <NavBar />
        <main>
          <Hero />
          <Specials />
          <Testimonials />
          <About />
        </main>
        <Footer />
      </>
    );
  };
  
  export default HomePage;