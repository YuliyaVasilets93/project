import styles from './Footer.module.css';
import Link from 'next/link';
import { InstagramOutlined, FacebookOutlined } from '@ant-design/icons';

const Footer = () => {
    return (
        <div className={styles.mainFooter}>
          <div className={styles.footerMenu}>
          <div className={styles.footerTitle}>
            <p>DIXI</p>
          </div>
                 <div>
                     <Link href="/">+38 (099) 400 96 86</Link>
                 </div>
                 <div>
                     <Link href="/">Пн - Нд з 9.00 - 18.00</Link>
                 </div>
                 <div>
                     <Link href="/">dixi.shoes@gmail.com</Link>
                 </div>
                 <div>
                     <Link href="/">dixi.shoes@gmail.com</Link>
                 </div>
                 <span>
                 <Link href='/'></Link><InstagramOutlined  style={{fontSize: '15px'}} />
                 </span>
                 <span className={styles.footerContacts}>
                 <FacebookOutlined style={{fontSize: '15px'}} />
                 </span>
                
             </div>
             
      <div className={styles.footerMenu}>
      <div className={styles.footerTitle}>
        <p>Про нас</p>
      </div>
                 <div>
                     <Link href="/">Наші магазини</Link>
                 </div>
                 <div>
                     <Link href="/">Гарантії</Link>
                 </div>
                 <div>
                     <Link href="/">Контакти</Link>
                 </div>
                 <div>
                     <Link href="/">Надіслати відкгук</Link>
                 </div>
                 <div>
                     <Link href="/">Питання та відповіді</Link>
                 </div>
             </div>
             
      <div className={styles.footerMenu}>
      <div className={styles.footerTitle}>
        <p>Покупцеві</p>
      </div>
                <div>
                    <Link href="/">Акції</Link>
                </div>
                <div>
                    <Link href="/">Доставка і оплата</Link>
                </div>
                <div>
                    <Link href="/">Оплата частинами</Link>
                </div>
                <div>
                    <Link href="/">Бонусна програма</Link>
                </div>
                <div>
                    <Link href="/">Повернення та обмін</Link>
                </div>
             
        </div>
        
      <div className={styles.footerMenu}>
      <div className={styles.footerTitle}>
        <p>Каталог товару</p>
      </div>
                <div>
                    <Link href="/">Жіноче взуття</Link>
                </div>
                <div>
                    <Link href="/">Чоловіче взуття</Link>
                </div>
                <div>
                    <Link href="/">Жіночі сумки</Link>
                </div>
                <div>
                    <Link href="/">Чоловічі сумки</Link>
                </div>
                <div>
                    <Link href="/">Аксесуари</Link>
                </div>
                <div>
                    <Link href="/">Засоби догляду</Link>
                </div>
            </div>
        </div>
        
    )
}


export default Footer;