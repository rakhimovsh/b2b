import React from 'react'
import styles from './styles.module.css'
import { ReactComponent as StarIcon } from '@assets/svg/bigStarIcon.svg'
import { ReactComponent as LittleStarIcon } from '@assets/svg/littleStarIcon.svg'
import { ReactComponent as UserIcon } from '@assets/svg/userIcon.svg'


const Comments = () => {
  return (
    <div>
        <h3 className={styles.commentsTitle}>Будьте первым, кто оставил отзыв на “Бейсболки – оптовая цена”</h3>
        <p className={styles.commentNote}>Ваш адрес email не будет опубликован. Обязательные поля помечены *</p>
        <p className={styles.clientNote}>Ваша оценка *</p>
        <div className={styles.productMark}>
            <div className={styles.stars}>
                <StarIcon className={styles.starIcon} />
                <StarIcon className={styles.starIcon} />
                <StarIcon className={styles.starIcon} />
                <StarIcon  />
                <StarIcon  />
            </div>
        </div>
        
        <p className={styles.clientNote}>Ваш отзыв *</p>
        <textarea className={styles.commentTextarea} name="comment"  cols="30" rows="10"></textarea>
        <div className={styles.contactInputs_box}>
            <div>
                <p className={styles.clientNote}>Имя *</p>
                <input className={styles.contactInput} type="text" />
            </div>
            <div>
                <p className={styles.clientNote}>Email *</p>
                <input className={styles.contactInput} type="text" />
            </div>
        </div>
        <div className={styles.saveData_checkbox}> 
            <input className={styles.checkbox} type="checkbox" name='saveMyData'/>
            <label className={styles.checkboxText} htmlFor="saveMyData">Сохранить моё имя, email и адрес сайта в этом браузере для последующих моих комментариев.</label>
        </div>
        <button className={styles.sendButton}>Отправить</button>
        <div>
            <div className={styles.userComment}>
                <div className={styles.userBox}>
                    <div className={styles.userImage}><UserIcon /></div>
                    <p>Шахриер Орипов</p>
                </div>
                <div className={styles.littleStars}>
                    <div className={styles.stars}>
                        <LittleStarIcon className={styles.littleStarIcon} />
                        <LittleStarIcon className={styles.starIcon} />
                        <LittleStarIcon className={styles.starIcon} />
                        <LittleStarIcon  />
                        <LittleStarIcon  />
                        <p className={styles.commentDate}> 24.06.2023</p>
                    </div>  
                </div>
                <p className={styles.userCommentText}>believe I would be lost if you weren't in the office, and I'm happy to say that I don't even know if I'm right. Thank you for always being there.”</p>
            </div>
            <div className={styles.userComment}>
                <div className={styles.userBox}>
                    <div className={styles.userImage}><UserIcon /></div>
                    <p>Шахриер Орипов</p>
                </div>
                <div className={styles.littleStars}>
                    <div className={styles.stars}>
                        <LittleStarIcon className={styles.littleStarIcon} />
                        <LittleStarIcon className={styles.starIcon} />
                        <LittleStarIcon className={styles.starIcon} />
                        <LittleStarIcon  />
                        <LittleStarIcon  />
                        <p className={styles.commentDate}> 24.06.2023</p>
                    </div>
                    
                </div>
                <p className={styles.userCommentText}>believe I would be lost if you weren't in the office, and I'm happy to say that I don't even know if I'm right. Thank you for always being there.”</p>
            </div>
        </div>
        
    </div>
  )
}

export default Comments