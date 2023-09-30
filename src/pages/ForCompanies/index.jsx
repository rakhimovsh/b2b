import styles from './styles.module.css';
import ContactUs from '@components/ContactUs/index.jsx';

import Box from '@assets/images/box-2.png'
import { useTranslation } from 'react-i18next';

const ForCompanies = () => {
  const {t} = useTranslation()
  return (
    <div className={'container ' + styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h1 style={{marginBottom: '20px'}}>{t('privacyPolicy.title')}</h1>
          <p>{t('privacyPolicy.date')}</p>
          <p>{t('privacyPolicy.text1')}</p>
          <p>{t('privacyPolicy.text2')}</p>
          <h2 style={{margin: '20px 0'}}>{t('privacyPolicy.internDef.title')}</h2>
          <h3 style={{marginBottom: '15px'}}>{t('privacyPolicy.internDef.name')}</h3>
          <p>{t('privacyPolicy.internDef.text')}</p>
          <h3 style={{margin: '15px 0'}}>{t('privacyPolicy.defenitions')}</h3>
          <p>
          {t('privacyPolicy.defText')}
          </p>
          <ul >
            <li style={{marginBottom: '5px'}}>
              <strong>{t('privacyPolicy.defList.account.name')}</strong> {t('privacyPolicy.defList.account.text')}
            </li>
            <li style={{marginBottom: '5px'}}>
              <strong>{t('privacyPolicy.defList.Affiliate.name')}</strong> {t('privacyPolicy.defList.Affiliate.text')}
            </li>
            <li style={{marginBottom: '5px'}}>
              <strong>{t('privacyPolicy.defList.Company.name')}</strong> {t('privacyPolicy.defList.Company.text')}
            </li>
            <li style={{marginBottom: '5px'}}>
              <strong>{t('privacyPolicy.defList.Cookies.name')}</strong> {t('privacyPolicy.defList.Cookies.text')}
            </li>
            <li style={{marginBottom: '5px'}}>
              <strong>{t('privacyPolicy.defList.Country.name')}</strong> {t('privacyPolicy.defList.Country.text')}
            </li>
            <li style={{marginBottom: '5px'}}>
              <strong>{t('privacyPolicy.defList.Device.name')}</strong> {t('privacyPolicy.defList.Device.text')}
            </li>
            <li style={{marginBottom: '5px'}}>
              <strong>{t('privacyPolicy.defList.PersonalData.name')}</strong> {t('privacyPolicy.defList.PersonalData.text')}
            </li >
            <li style={{marginBottom: '5px'}}>
              <strong>{t('privacyPolicy.defList.Service.name')}</strong> {t('privacyPolicy.defList.Service.text')}
            </li>
            <li style={{marginBottom: '5px'}}>
              <strong>{t('privacyPolicy.defList.ServiceProvider.name')}</strong> {t('privacyPolicy.defList.ServiceProvider.text')}
            </li>
            <li style={{marginBottom: '5px'}}>
              <strong>{t('privacyPolicy.defList.UsageData.name')}</strong> {t('privacyPolicy.defList.UsageData.text')}
            </li>
            <li style={{marginBottom: '5px'}}>
              <strong>{t('privacyPolicy.defList.Website.name')}</strong> {t('privacyPolicy.defList.Website.text')}
            </li>
            <li style={{marginBottom: '5px'}}>
              <strong>{t('privacyPolicy.defList.You.name')}</strong> {t('privacyPolicy.defList.You.text')}
            </li>
          </ul>

          <h2 style={{margin: '20px 0'}}>{t('privacyPolicy.colUseData')}</h2>
          <h3 style={{marginBottom: '10px'}}>{t('privacyPolicy.typOfData')}</h3>
          <p style={{marginBottom: '5px'}}>
            <strong>{t('privacyPolicy.persData.name')}</strong>
            <br />
            {t('privacyPolicy.persData.text')}
          </p>
          <ul>
            <li style={{marginBottom: '5px'}}>{t('privacyPolicy.persData.list.item1')}</li>
            <li style={{marginBottom: '5px'}}>{t('privacyPolicy.persData.list.item2')}</li>
            <li style={{marginBottom: '5px'}}>{t('privacyPolicy.persData.list.item3')}</li>
            <li style={{marginBottom: '5px'}}>{t('privacyPolicy.persData.list.item4')}</li>
          </ul>

          {/* <p>
            <strong>Usage Data</strong>
          </p> */}
          <h2 style={{margin: "20px 0"}}>{t('privacyPolicy.usageData.name')}</h2>
          <p>{t('privacyPolicy.usageData.text')}</p>
          <h2 style={{margin: "20px 0"}}>{t('privacyPolicy.trackCook.name')}</h2>
          <p style={{marginBottom: '10px'}}>{t('privacyPolicy.trackCook.text')}</p>
          <ul >
            <li style={{marginBottom: '5px'}}>
              <strong>{t('privacyPolicy.trackCook.list.strong1')}</strong> {t('privacyPolicy.trackCook.list.text1')}          
            </li>
            <li style={{marginBottom: '5px'}}>
              <strong>{t('privacyPolicy.trackCook.list.strong2')} </strong> {t('privacyPolicy.trackCook.list.text2')}
              <p>{t('privacyPolicy.trackCook.list.innerList.text1')}</p>
              <p>{t('privacyPolicy.trackCook.list.innerList.text2')}</p>
            </li>
            <li style={{marginBottom: '5px'}}>
              <strong>{t('privacyPolicy.trackCook.list.strong3')}</strong> 
              <p>{t('privacyPolicy.trackCook.list.innerList2.text1')}</p>
              <p>{t('privacyPolicy.trackCook.list.innerList2.text2')}</p>
              <p>{t('privacyPolicy.trackCook.list.innerList2.text3')}</p>
            </li>
            <li style={{marginBottom: '5px'}}>
              <strong>{t('privacyPolicy.trackCook.list.strong4')}</strong> 
              <p>{t('privacyPolicy.trackCook.list.innerList3.text1')}</p>
              <p>{t('privacyPolicy.trackCook.list.innerList3.text2')}</p>
              <p>{t('privacyPolicy.trackCook.list.innerList3.text3')}</p>
            </li>
            <li style={{marginBottom: '5px'}}>
              <strong>{t('privacyPolicy.trackCook.list.strong5')}</strong> 
              <p>{t('privacyPolicy.trackCook.list.innerList4.text1')}</p>
              <p>{t('privacyPolicy.trackCook.list.innerList4.text2')}</p>
              <p>{t('privacyPolicy.trackCook.list.innerList4.text3')}</p>
              <p>{t('privacyPolicy.trackCook.list.innerList4.text4')}</p>
            </li>            
          </ul>
          <h2 style={{margin: "20px 0"}}>{t('privacyPolicy.useUPerData.title')}</h2>
          <p>{t('privacyPolicy.useUPerData.text')}</p>
          <ul>
            <li>
              <strong>{t('privacyPolicy.useUPerData.list.item1.strong')} </strong> {t('privacyPolicy.useUPerData.list.item1.text')}
            </li>
            <li>
              <strong>{t('privacyPolicy.useUPerData.list.item2.strong')} </strong> {t('privacyPolicy.useUPerData.list.item2.text')}
            </li>
            <li>
              <strong>{t('privacyPolicy.useUPerData.list.item3.strong')}</strong> {t('privacyPolicy.useUPerData.list.item3.text')}
            </li>
            <li>
              <strong>{t('privacyPolicy.useUPerData.list.item4.strong')}</strong> {t('privacyPolicy.useUPerData.list.item4.text')}
            </li>
            <li>
              <strong>{t('privacyPolicy.useUPerData.list.item5.strong')}</strong> {t('privacyPolicy.useUPerData.list.item5.text')}
            </li>
            <li>
              <strong>{t('privacyPolicy.useUPerData.list.item6.strong')}</strong> {t('privacyPolicy.useUPerData.list.item6.text')}
            </li>
            <li>
              <strong>{t('privacyPolicy.useUPerData.list.item7.strong')}</strong> {t('privacyPolicy.useUPerData.list.item7.text')}
            </li>
            <li>
              <strong>{t('privacyPolicy.useUPerData.list.item8.strong')}</strong> {t('privacyPolicy.useUPerData.list.item8.text')}
            </li>
            <li>
              <strong>{t('privacyPolicy.useUPerData.list.item9.strong')}</strong> {t('privacyPolicy.useUPerData.list.item9.text')}
            </li>
            <li>
              <strong>{t('privacyPolicy.useUPerData.list.item10.strong')}</strong> {t('privacyPolicy.useUPerData.list.item10.text')}
            </li>
            <li>
              <strong>{t('privacyPolicy.useUPerData.list.item11.strong')}</strong> {t('privacyPolicy.useUPerData.list.item11.text')}
            </li>
            <li>
              <strong>{t('privacyPolicy.useUPerData.list.item12.strong')}</strong> {t('privacyPolicy.useUPerData.list.item12.text')}
            </li>
            <li>
              <strong>{t('privacyPolicy.useUPerData.list.item13.strong')}</strong> {t('privacyPolicy.useUPerData.list.item13.text')}
            </li>
            <li>
              <strong>{t('privacyPolicy.useUPerData.list.item14.strong')}</strong> {t('privacyPolicy.useUPerData.list.item14.text')}
            </li>
          </ul>
          <h2 style={{margin: "20px 0"}}>{t('privacyPolicy.RetenPerData')}</h2>
          <p>{t('privacyPolicy.RetenPerDataText')}</p>
          <h2 style={{margin: "20px 0"}}>{t('privacyPolicy.TransPerData')}</h2>
          <p>{t('privacyPolicy.TransPerDataText')}</p>
          <h2 style={{margin: "20px 0"}}>{t('privacyPolicy.DelPerData')}</h2>
          <p>{t('privacyPolicy.DelPerDataText')}</p>
          <h2 style={{margin: "20px 0"}}>{t('privacyPolicy.DiscPerData.title')}</h2>
          <h3>{t('privacyPolicy.DiscPerData.list.item1')}</h3>
          <p style={{marginBottom: '10px'}}>{t('privacyPolicy.DiscPerData.list.item1Text')}</p>
          <h3>{t('privacyPolicy.DiscPerData.list.item2')}</h3>
          <p style={{marginBottom: '10px'}}>{t('privacyPolicy.DiscPerData.list.item2Text')}</p>
          <h3>{t('privacyPolicy.DiscPerData.list.item3')}</h3>
          <p style={{marginBottom: '10px'}}>{t('privacyPolicy.DiscPerData.list.item3Text')}</p>
          <h3>{t('privacyPolicy.DiscPerData.list.item4')}</h3>
          <p style={{marginBottom: '10px'}}>{t('privacyPolicy.DiscPerData.list.item4Text')}</p>
          <h3>{t('privacyPolicy.DiscPerData.list.item5')}</h3>
          <p style={{marginBottom: '10px'}}>{t('privacyPolicy.DiscPerData.list.item5Text')}</p>
          <h3>{t('privacyPolicy.DiscPerData.list.item6')}</h3>
          <p style={{marginBottom: '10px'}}>{t('privacyPolicy.DiscPerData.list.item6Text')}</p>
          <h3>{t('privacyPolicy.DiscPerData.list.item7')}</h3>
          <p style={{marginBottom: '10px'}}>{t('privacyPolicy.DiscPerData.list.item7Text')}</p>
          <h3 style={{marginBottom: '10px'}}>{t('privacyPolicy.DiscPerData.list.item8')}</h3>
          <p style={{marginBottom: '10px'}}>{t('privacyPolicy.DiscPerData.list.item8Text1')}</p>
          <p style={{marginBottom: '10px'}}>{t('privacyPolicy.DiscPerData.list.item8Text2')}</p>
          <p style={{marginBottom: '10px'}}>{t('privacyPolicy.DiscPerData.list.item8Text3')}</p>
        </div>
        {/* <div className={styles.right}>
          <img src={Box} alt='box' width={332}/>
        </div> */}
      </div>
      <ContactUs />
    </div>
    
  );
};

export default ForCompanies;
