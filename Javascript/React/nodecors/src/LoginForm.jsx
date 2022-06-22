import React from 'react'

const LoginForm = () => {
    return (
        <div className='m-40'>
            <form action="">
                <div>
                    <label htmlFor="username" />
                    <input type="text" placeholder='Username' name='username' />
                </div>
                <div>
                    <label htmlFor="password" />
                    <input type="text" placeholder='Password' name='password' />
                </div>
                <button>Login</button>

            </form>
        </div>
    )
}

export default LoginForm