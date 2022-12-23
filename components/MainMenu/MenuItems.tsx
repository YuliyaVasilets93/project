import styles from './MenuItems.module.css';
import Image from 'next/image';
import { Col, Row } from 'antd';
import Link from 'next/link';

const MenuItems = () => {
    const categories = [{
        img: '/images/1165x1600_product_media_30001-31000_0000083897-j.webp',
        name: 'Черевики',
        id: '1'
    },
    {
        img: "/images/f492b8543cdc4161d467aba1eb711c54527a02fa.webp",
        name: 'Чоботи',
        id: '2' 
    },
    {
        img: "/images/16c46b9c51fef686cabe122eb254498c7427a590.webp",
        name: 'Кросівки',
        id: '3'  
    },
    {
        img: "/images/800x1098_product_media_2001-3000_0000082465-j.webp",
        name: 'Туфлі',
        id: '4'    
    },
    {
        img: "/images/6c133d5374679e9a0048c73784c97dea226ccc81.webp",
        name: 'Капці',
        id: '5'    
    },
    {
        img: "/images/800x1098_product_media_29001-30000_0000083039-j.webp",
        name: 'Сумки',
        id: '6'  
    },
    {
        img: "/images/ee6ac7a3d87b0a421eb6ea7c447cf8c5a8cc0c4d.webp",
        name: 'Гаманці',
        id: '7'  
    },
    {
        img: "/images/37a4a44cf49b5d6cff9141a9152c7f40f7eca47d.webp",
        name: 'Ремені',
        id: '8'  
    }]
  return (
 
    <div className={styles.mainMenu}>
            <Row gutter={[110, 70]}>{categories.map(({img, id, name}) => (
                <Col className="gutter-row"   key={id} span={6}>
                    <div className={styles.menuIcon}>
                        
                <Link href="/"><Image src={img} key={id} width={250} height={350} alt='/'></Image><p>{name}</p></Link>
                
                </div>
                </Col>
                ))
            }
            </Row>
                </div>
         
  )
}



export default MenuItems;