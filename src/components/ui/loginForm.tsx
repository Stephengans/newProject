import  { useState } from 'react';
import { Button } from './button';
import mailIcon from '../../assets/mail.svg';
import passwordIcon from '../../assets/lock-closed.svg';
import eye from '../../assets/eye-off.svg'


const LoginForm = () => {

const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Di sini, Anda bisa menambahkan logika pengiriman data login atau validasi
    // Sesuai kebutuhan aplikasi Anda.
    console.log(`Email: ${email}, Password: ${password}`);
  };

    return(
        <>
            <div className="loginForm">
                <div className="loginForm-title">
                    <h2>Port Server</h2>
                    <label> Welcome back! Enter your account details</label>
                </div>

                <div className="email">
                    <label htmlFor="Email">Email</label>
                    <div>
                    <img src={mailIcon} alt="Email Icon" width="16" height="16" />
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    </div>
                </div>

                <div className="password">
                    <label htmlFor="Password">Password</label>
                    <div>
                    <img src={passwordIcon} alt="Password Icon" width="16" height="16" />
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <img src={eye}></img>
                    </div>
                </div>
                
                <div className='forgetPass'> Forget password </div>
                <Button onClick={handleLogin}
                className='loginButton'
                >Log In</Button>
            </div>
        </>
    );

}

export default LoginForm;