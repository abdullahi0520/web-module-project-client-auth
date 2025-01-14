import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password:''
        }
    };

    handleChange = (e) => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = (e) => {
        e.preventDefault();
        axios.post('http://localhost:9000/api/login', this.state.credentials)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('role', res.data.role)
            localStorage.setItem('username', res.data.username)
            this.props.history.push('/friends')
        })

    }
    render() {
        
        return (
            <div>
                <h2>Login</h2>
                <form onSubmit={this.login}>
                    <div>
                    <input 
                    type='text'
                    name='username'
                    value={this.state.credentials.username}
                    placeholder='Username'
                    onChange={this.handleChange}
                    />
                    </div>
                    <div>
                    <input 
                    type='password'
                    name='password'
                    placeholder='password'
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                    />
                    </div>
                    <button >Log in</button>
                </form>
            </div>
        )
    }
}

export default Login;