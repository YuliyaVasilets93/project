import Link from "next/link";
import styles from './Navbar.module.css'

const navigation = [
    { id: 1, title: 'Взуття', path: './shoes' },
    { id: 2, title: 'Сумки', path: './bags' },
    { id: 3, title: 'Аксесуари', path: './acssesuaries' },
    { id: 4, title: 'Догляд', path: './care' },
    { id: 5, title: 'Бренди', path: './brands' },
    { id: 6, title: 'Розпродаж', path: './sale' },
]

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbarLink}>
          {navigation.map(({ id, title, path }) => (
            <Link key={id} href={path}>{title}</Link>
          )
          
          )}
        </div>
        </div>
    )
}


export default Navbar;