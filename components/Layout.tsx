import { ReactNode } from 'react'
import styles from '../styles/Home.module.css'
import FirstHeader from './Header/FirstHeader'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Carusel from './Carusel/Carusel'
import InfoBlock from './Info/InfoBlock'


interface LayoutProps {
  children: ReactNode
};


const Layout = ({children}: LayoutProps) => {
  return (
    <>
    <FirstHeader />
<Header /> 
<Carusel />
<main className={styles.main}>{children}</main>
<InfoBlock />
<Footer />
</>
);
}



export default Layout;