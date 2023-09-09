import Hero from './components/Hero';
import B2bSolution from './components/B2bSolution';
import About from './components/About';
import PopularProduct from './components/PopularProduct/index.jsx';
import ProductCategory from './components/ProductCategory/index.jsx';
import WhyMadeInKokand from './components/WhyMadeInKokand/index.jsx';
import ProductSearch from './components/ProductSearch/index.jsx';

const Home = () => {
  return (
    <>
      <Hero />
      <B2bSolution />
      <About />
      {/*<Trust />*/}
      {/* <NewProduct /> */}
      <PopularProduct />
      <ProductCategory />
      <WhyMadeInKokand />
      <ProductSearch />
      {/* <FAQHome /> */}
      {/* <Useful /> */}
      {/* <Contact/> */}
    </>
  );
};

export default Home;
