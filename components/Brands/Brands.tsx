import styles from './Brands.module.css'
import Image from 'next/image';
import { Col, Row } from 'antd';
import Link from 'next/link';





const Brands = () => {

        const items = [{
            img: "/images/converse-299.svg",
            id: 1
            
        },
        {
            img: "/images/ecco-192.svg",
            id: 2
            
        },
        {
            img: "/images/adidas-13 (1).svg",
            id: 3
            
        },
        {
            img: "/images/christian louboutin-504.svg",
            id: 4
            
        },
        {
            img: "/images/nike-12.svg",
            id: 5
               
        },
        {
            img: "/images/fila-193.svg",
            id: 6
            
        },
        {
            img: "/images/prada-173.svg",
            id: 7
           
        },
        {
            img: "/images/puma-26.svg",
            id: 8
            
        },
        {
            img: "/images/steve madden-896.svg",
            id: 9
           
        },
        {
            img: "/images/tallan.svg",
            id: 10
    },
    {
        img: "/images/under armour-180.svg",
        id: 11
        
    },
    {
        img: "/images/vans-177.svg",
        id: 12
       
    }
    ]
    return (
       <div className={styles.mainBrands}>
  
  <Row gutter={[100, 10]}>{items.map(({ id,img }) => 
  <Col className="gutter-row"   key={id} span={4}>
           <div className={styles.brandsIcon}>
        <Link href="/"><Image src={img} height={200} width={150} alt='/'></Image></Link>
    
            </div>
            </Col>
          )  }
          </Row>
         
       
        </div>
   
          
    )
}


export default Brands;