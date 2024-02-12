import React from 'react';
import './login.css'; // Assuming you have your CSS file in the same directory
import { useState } from 'react';

const Login: React.FC = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="loginbg">
        <div className="main">
            <input type="checkbox" id="chk" aria-hidden="true" checked={isChecked} onChange={handleCheckboxChange} />

            <div className="signup">
                <form>
                    <label htmlFor="chk" aria-hidden="true">Sign up</label>
                    <input type="text" name="txt" placeholder="User name" required />
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="password" name="pswd" placeholder="Password" required />
                    <button>Sign up</button>
                </form>
            </div>

            <div className="login">
                <form>
                    <label htmlFor="chk" aria-hidden="true">Login</label>
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="password" name="pswd" placeholder="Password" required />
                    <button>Login</button>
                </form>
            </div>
        </div>
        </div>
    );
};

export default Login;
