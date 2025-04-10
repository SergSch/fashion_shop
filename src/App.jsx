import About from './components/About';
import Category from './components/Category';
import Header from './components/Header';
import Hero from './components/Hero';
import Offers from './components/Offers';
import Other from './components/Other';
import Products from './components/Products';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Category />
      <Products />
      <Offers />
      <Other />
      <About />
      <Footer />
    </div>
  );
};
export default App;
