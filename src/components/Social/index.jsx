import React from 'react'
import styles from './style.module.css'
import FcbookIcon from '../../assets/svg/akar-icons_facebook-fill.svg'
import InstIcon from '../../assets/svg/ant-design_instagram-filled.svg'
import TgIcon from '../../assets/svg/akar-icons_telegram-fill.svg'
import YoutubeIcon from '../../assets/svg/akar-icons_youtube-fill.svg'

const Social = () => {
  return (
    <div className={styles.socialBox}>
      <img src={FcbookIcon} alt="facebook" />
      <img src={InstIcon} alt="facebook" />
      <img src={TgIcon} alt="facebook" />
      <img src={YoutubeIcon} alt="facebook" />
    </div>
  )
}

export default Social