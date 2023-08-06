import styles from './styles.module.css'


import BoxImage from '@assets/images/box-image.png'
import GraphChartImage from '@assets/images/graphChartImage.png'
import Searchproduct from '@components/SearchProduct'
import CreateCompany from '@components/CreateCompany'
const ProductSearch = () => {
  return (
    <div className={'container ' + styles.productSearch_container}>
      <Searchproduct />
      <CreateCompany />
    </div>
  )
}

export default ProductSearch