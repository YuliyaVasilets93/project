import styles from './InfoBlock.module.css';
 
 
const InfoBlock = () => {
  return (
    <div>
    <div className={styles.blockInfo}>
        <div>Доставка 1-2 дні по Україні</div>
        <div>Примірка перед оплатою</div>
        <div>Відправлення до 3-х товарів на вибір</div>
    </div>
    </div>
  );
}



export default InfoBlock;