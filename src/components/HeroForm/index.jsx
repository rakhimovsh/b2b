import CountrySelect from '@components/CountrySelect/index.jsx'
import styles from './styles.module.css'
import {createApplicationForPlacement} from "@/redux/actions/application.js";
import {useDispatch, useSelector} from "react-redux";
import {useToast} from "@/hooks/useToast.jsx";
import {useEffect, useState} from "react";


const HeroForm = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const { applicationForPlacement } = useSelector((state) => state.application);
  const [isFormBtnDisabled, setIsFormBtnDisabled] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formElements = evt.target.elements;
    const request = {
      name: formElements.name.value,
      phone_number: formElements.phone_number.value,
      lacation: formElements.lacation.value,
      campany_name: formElements.campany_name.value,
    };
    if(request.name && request.phone_number && request.lacation && request.campany_name) {
      dispatch(createApplicationForPlacement(request));
      evt.target.reset()
    } else {
      toast("Все поля формы должны быть заполнены", "warning", {position: "top-center"})
    }
  };

  useEffect(() => {
    if (applicationForPlacement.response) {
      toast("Заявка отправлена успешно", "success", {position: "top-center"})
    }
    setIsFormBtnDisabled(applicationForPlacement.loading);
  }, [applicationForPlacement.response]);
  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
        <h3 className={styles.heroForm_title}> Подать заявку на размещение продукта на оптовом рынке</h3>
        <div style={{textAlign: 'start'}}>
          <p className={styles.formInput_name}>Ваше имя</p>
          <input name='name' type="text" placeholder='Ваше имя' className={styles.formClient_name} />
        </div>
        <div style={{textAlign: 'start'}}>
          <p className={styles.formInput_name}>Страна</p>
          <CountrySelect name="lacation" />
        </div>
        <div style={{textAlign: 'start'}}>
          <p className={styles.formInput_name}>Номер телефона</p>
          <input name="phone_number" type="text" placeholder='(+998)' className={styles.formClient_name} />
        </div>
        <div style={{textAlign: 'start'}}>
          <p className={styles.formInput_name}>Название компании</p>
          <input name="campany_name" type="text" placeholder='Название компании' className={styles.formClient_name} />
        </div>
        
        <button disabled={isFormBtnDisabled} className={styles.heroForm_button} >Отправить</button>
    </form>
  )
}

export default HeroForm