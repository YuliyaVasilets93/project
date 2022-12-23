import styles from '../../components/Login/Registration.module.css';
import Link from 'next/link';
import { LockOutlined } from '@ant-design/icons';
import { Form, Input } from 'antd';


const Accaunt = () => {
   
  return (
    <div className={styles.regAccauntBlock}>
<div className={styles.regAccauntBlockText}>
<h4>Реєстрація</h4>
<Form style={{width: "80%", margin: "0px auto"}} size='large'>
<Form.Item style={{marginBottom: '10px'}} name="basic"
 labelCol={{ span: 2, offset: 2}} >
     
        <Input placeholder="Ім'я"/>
        </Form.Item>
        <Form.Item style={{marginBottom: '10px'}}> 
    <Input 
     
      placeholder="Номер телефона"
      maxLength={13}
    
    />
    </Form.Item>
   <Form.Item style={{marginBottom: '10px'}} name="basic">
     
        <Input placeholder="Email"/>
    
     </Form.Item>
      <Form.Item 
        name="password"
        rules={[
          {
            required: true,
            message: 'Будь ласка введіть пароль!',
          },
        ]}
      >
        <Input 
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Пароль"
        />
      </Form.Item>
      </Form>
      <button className={styles.addRegistration}>Зареєструватися</button>
      <div className={styles.registrationLink}>
      <p className='textPage' style={{paddingRight: '15px', fontSize: '16px'}}>Вже є аккаунт?</p>
      <Link href="auth">
      <p className='styles.registration' style={{color: 'black', fontSize: '16px'}}>Увійти</p>
      </Link>
      </div>
      </div>
      </div>
    
   
  )
}



export default Accaunt;