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
            this.props.history.push('/friendsList')
        })

    }
    render() {
        
        return (
            <div>
                <form onSubmit={this.login}>
                    <input 
                    type='text'
                    name='username'
                    value={this.state.credentials.username}
                    placeholder='Username'
                    onChange={this.handleChange}
                    />
                    <input 
                    type='password'
                    name='password'
                    placeholder='password'
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                    />
                    <button >Log in</button>
                </form>
            </div>
        )
    }
}

export default Login;