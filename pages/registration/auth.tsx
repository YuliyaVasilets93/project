import styles from '../../components/Login/Auth.module.css'
import '../../styles/Home.module.css'
import { Input, Form } from 'antd';
import { FacebookOutlined, GoogleOutlined } from '@ant-design/icons';
import Link from 'next/link';


const Auth = () => {

  return (
<div className={styles.registrationBlock}>
<div className={styles.authBlockText}>


<h4>Вхід</h4>

<Form
      name="basic"
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Введіть ваше ім'я!" }]}
        
      >
        <Input placeholder="Ім'я" style={{height:'40px'}}/>
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: "Введіть ваш пароль!" }]}
      >
        <Input.Password placeholder="Пароль" style={{height:'40px'}}/>
      </Form.Item>
      <button className={styles.nextPage}>Далі</button>
      <p className={styles.textPage}>або увійти за допомогою</p>
      <div className={styles.iconLink}>

      <Link href="/" >
      
<GoogleOutlined style={{fontSize: '20px', color: 'black'}}/>
<span  style={{paddingLeft: '5px', color: 'black'}}>Google</span>

</Link>

      <Link href="/" >

<FacebookOutlined style={{fontSize: '20px', paddingLeft: '7px', color: 'black'}} />
<span style={{paddingLeft: '5px', color: 'black'}}>Facebook</span>

</Link>

</div>
<Link href='accaunt'>
  <div className={styles.addRegistration}>
  <p className={styles.registration}>Зареєструватися</p>
      
  </div>
  </Link>
    </Form>
  
    </div>
</div>
  )

}



export default Auth;