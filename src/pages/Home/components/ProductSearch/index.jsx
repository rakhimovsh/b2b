import styles from './styles.module.css'
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