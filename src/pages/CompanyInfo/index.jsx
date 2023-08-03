import styles from './styles.module.css'
import Breadcrumb from "@components/Breadcrumb/index.jsx";
import Company from "./components/Company/index.jsx";

const CompanyInfo = () =>{
 return (
   <div className='container'>
     {/*<Breadcrumb/>*/}
     <Company/>
   </div>
 )
}


export default CompanyInfo