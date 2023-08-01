import Hero from './components/Hero';
import B2bSolution from './components/B2bSolution';
import About from './components/About';
import Trust from './components/Trust/index.jsx';
import NewProduct from './components/NewProduct/index.jsx';
import PopularProduct from './components/PopularProduct/index.jsx';
import ProductCategory from './components/ProductCategory/index.jsx';
import WhyMadeInKokand from './components/WhyMadeInKokand/index.jsx';
import ProductSearch from './components/ProductSearch/index.jsx';
import FAQ from './components/FAQ/index.jsx';
import Useful from './components/Useful/index.jsx';
import Contact from "./components/Contact/index.jsx";

const Home = () => {
  return (
    <>
      <Hero />
      <B2bSolution />
      <About />
      <Trust />
      <NewProduct />
      <PopularProduct />
      <ProductCategory />
      <WhyMadeInKokand />
      <ProductSearch />
      <FAQ />
      <Useful />
      <Contact/>
    </>
  );
};

export default Home;
