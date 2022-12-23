import styles from './Header.module.css'
import Link from "next/link";
import { ShoppingCartOutlined, MenuUnfoldOutlined, SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <div className={styles.header}>

            <Link className={styles.headerLogo} href='/'>DIXI</Link>  
       
        <div className={styles.gender}>
        <Link href='/'>Жінкам</Link>
        <Link href='/'>Чоловікам</Link>
        </div>
        <Input className={styles.searchInput} type="text" placeholder="Пошук" />
        <div className={styles.searchInputIcon}><Link href='/'>
            <SearchOutlined style={{color: 'rgb(105, 105, 105)'}}/></Link></div>
        <div className={styles.headerIcon}>
        <Link href='/'><MenuUnfoldOutlined style={{color:'#141414'}} /></Link>
        <Link href='/'><ShoppingCartOutlined style={{color:'#141414'}}/></Link>
        </div>
       
            </div>
            <Navbar />
            </div>
    )
}


export default Header;