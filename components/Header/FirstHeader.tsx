import Link from 'next/link';
import styles from './FirstHeader.module.css'






const FirstHeader = () => {

    return (
      
      
        <div className={styles.firstHeader}>
          <Link href='/'>+38 (099) 400 96 86</Link>
          <Link href='/'>Доставка по Україні</Link>
          <div className={styles.langBlock}>
          <Link href='/'>укр</Link>
          <Link href='/'>рус</Link>
          
          </div>
          
        </div>
    )
}



export default FirstHeader;