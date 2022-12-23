import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import '../styles/Home.module.css'
import Brands from '../components/Brands/Brands'
import MenuItems from '../components/MainMenu/MenuItems'
import DetailsInfo from '../components/DetailsInfo/DetailsInfo'





 export default function App({ Component, pageProps }: AppProps) {
  return (

 <>
 
    
<Component {...pageProps} />


 
 </>

  )
}

