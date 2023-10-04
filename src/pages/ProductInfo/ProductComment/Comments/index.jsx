import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { ReactComponent as UserIcon } from '@assets/svg/userIcon.svg';
import RatingStars from '@components/RatingStars/index.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useToast } from '@/hooks/useToast.jsx';
import { createProductComment } from '@/redux/actions/product.js';
import { formatDate } from '@/utils/formDate.js';

const initialFormValues = {
  review_comment: '',
  email: '',
  star: 0,
  product: null,
  name: '',
};
const Comments = ({ comments }) => {
  const [rating, setRating] = useState(0);
  const [formValues, setFormValues] = useState(initialFormValues);
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const {t} = useTranslation()
  const lang = i18n.language;
  const toast = useToast();
  const { singleProduct, productComment } = useSelector((state) => state.product);

  useEffect(() => {
    if (productComment.response) {
      toast('Комментарий успешно отправлен', 'success', { position: 'top-center' });
    }
  }, [productComment.response]);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleFormBtn = () => {
    const { review_comment, email, name } = formValues;
    const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/;
    if (!regex.test(email)) {
      toast('Электронная почта должна быть заполнена правильно', 'warning', {
        position: 'top-center',
      });
      return;
    }
    if (review_comment && email && name) {
      dispatch(
        createProductComment({
          review_comment,
          name,
          email,
          product: singleProduct.item?.id,
          star: rating,
        }),
      );
    } else {
      toast('Все поля формы должны быть заполнены', 'warning', { position: 'top-center' });
    }
    setFormValues({ ...initialFormValues });
    setRating(0);
  };
  return (
    <div >
      {!comments?.length && (
        <>
          <h3 className={styles.commentsTitle}>
            {t('products.productInfo.comments.beFirst')} “{singleProduct.item?.translations[lang]?.name}”
          </h3>
          <p className={styles.commentNote}>
            {t('products.productInfo.comments.text')}
          </p>
        </>
      )}
      <p className={styles.clientNote}>{t('products.productInfo.comments.mark')}</p>
      <div className={styles.productMark}>
        <RatingStars rating={rating} setRating={setRating} isEditable />
      </div>
       
      
      <div className={styles.contactInputs_box} >
        <div>
          <p className={styles.clientNote}>{t('products.productInfo.comments.comment')}</p>
          <textarea
            onChange={handleChange}
            value={formValues.review_comment}
            className={styles.commentTextarea}
            name='review_comment'
            cols='30'
            rows='10'
          ></textarea>
        </div>
        <div>
        <div>
          <p className={styles.clientNote}>{t('products.productInfo.comments.name')}</p>
          <input
            value={formValues.name}
            name='name'
            onChange={handleChange}
            className={styles.contactInput}
            type='text'
          />
        </div>
        <div>
          <p className={styles.clientNote}>{t('products.productInfo.comments.email')}</p>
          <input
            value={formValues.email}
            name='email'
            onChange={handleChange}
            className={styles.contactInput}
            type='email'
          />
        </div>
        </div>
        
      </div>
      {/*<div className={styles.saveData_checkbox}>*/}
      {/*  <input className={styles.checkbox} type='checkbox' name='saveMyData' />*/}
      {/*  <label className={styles.checkboxText} htmlFor='saveMyData'>*/}
      {/*    Сохранить моё имя, email и адрес сайта в этом браузере для последующих моих комментариев.*/}
      {/*  </label>*/}
      {/*</div>*/}
      <button
        disabled={productComment.loading}
        onClick={handleFormBtn}
        className={styles.sendButton}
      >
        {t('products.productInfo.comments.send')}
      </button>
      <div>
        {comments?.map((comment) => (
          <div key={comment?.id} className={styles.userComment}>
            <div className={styles.userBox}>
              <div className={styles.userImage}>
                <UserIcon />
              </div>
              <p>{comment?.email}</p>
            </div>
            <div className={styles.littleStars}>
              <div className={styles.stars}>
                <RatingStars isEditable={false} rating={comment?.star} />
                <p className={styles.commentDate}>{formatDate(comment?.review_date)}</p>
              </div>
            </div>
            <p className={styles.userCommentText}>{comment?.review_comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
