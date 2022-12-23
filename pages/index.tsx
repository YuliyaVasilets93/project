import Layout from '../components/Layout'
import Brands from '../components/Brands/Brands'
import MenuItems from '../components/MainMenu/MenuItems'
import DetailsInfo from '../components/DetailsInfo/DetailsInfo'

const Index = () => {
    return (
       
           <Layout>
      <MenuItems />
    <Brands />
    <DetailsInfo />
        </Layout>
    )
}

export default Index;