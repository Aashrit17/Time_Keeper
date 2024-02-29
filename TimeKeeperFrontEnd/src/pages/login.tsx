import React, { useState } from 'react';
import './css/login.css';
import axios from 'axios';

const Login: React.FC = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/user/save', formData);
            setSuccessMessage('Signup successful!');
            setFormData({
                username: '',
                email: '',
                password: ''
            });
            setError('');
        } catch (error) {
            setSuccessMessage('');
            setError('Failed to sign up');
        }
    };

    return (
        <div className="loginbg">
            <div className="main">
                <input type="checkbox" id="chk" aria-hidden="true" checked={isChecked} onChange={handleCheckboxChange} />
                <div className="signup">
                    <form onSubmit={handleSignup}>
                        <label htmlFor="chk" aria-hidden="true" className="logsi">Sign up</label>
                        <input type="text" name="username" placeholder="User name" value={formData.username} onChange={handleInputChange} required />
                        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
                        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} required />
                        <button type="submit" className="btn">Sign up</button>
                        {successMessage && <p className="success">{successMessage}</p>}
                        {error && <p className="error">{error}</p>}
                    </form>
                </div>
                <div className="login">
                    <form>
                        <label htmlFor="chk" aria-hidden="true" className="logsi">Login</label>
                        <input type="email" name="email" placeholder="Email" required />
                        <input type="password" name="password" placeholder="Password" required />
                        <button className="btn">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
