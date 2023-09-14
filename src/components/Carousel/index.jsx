import AliceCarousel from 'react-alice-carousel';
import styles from './styles.module.css'
import 'react-alice-carousel/lib/alice-carousel.css';

import  { ReactComponent as ArrowIconLeft} from '@assets/svg/arrowIcon-left.svg'
import  { ReactComponent as ArrowIconRight} from '@assets/svg/arrowIcon-right.svg'



// const responsive = {
//   0: {
//     items: 1,
//   },
//   500: {
//     items: 2,
//   },
//   840: {
//     items: 3,
//   },
//   950: {
//     items: 4,
//   },
// };

const CustomPrevButton = () => (
  <button className={styles.customPrevButton}>
    <ArrowIconLeft />
  </button>
);

const CustomNextButton = () => (
  <button className={styles.customNextButton}>
    <ArrowIconRight />
  </button>
);
const Carousel = ({ slides, responsive }) => {
  return (
    <div className={styles.carouselContainer}>
      <AliceCarousel
        mouseTracking
        // infinite
        responsive={responsive}
        items={slides}
        disableDotsControls
        renderPrevButton={CustomPrevButton}
        renderNextButton={CustomNextButton}
        controlsStrategy='alternate'
      />
    </div>
  );
};

export default Carousel;
