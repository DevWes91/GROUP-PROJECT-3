import { useState } from "react";

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: ''
    });
   const [error, setError] = useState('');

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
    event.preventDefault();

        if (!formData.email || !formData.username || !formData.password) {
        setError('Please enter all fields');
        return;
    }

    setError('');
};  
    return (
        <div className='login'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                {error && <p className='error'>{error}</p>}
                 <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <label>Username</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}


export default Login;
