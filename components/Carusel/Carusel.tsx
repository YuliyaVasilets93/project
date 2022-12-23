import styles from './Carusel.module.css';
import Image from 'next/image';
import profilePic from '../../public/images/1920x800.webp'
import { Carousel } from 'antd';



const Carusel = () => {
    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
      };
    return (
            <Carousel afterChange={onChange}>
               
                    <Image src={profilePic} height={550} alt=""/>
               
            </Carousel>
       
    );
}



export default Carusel;