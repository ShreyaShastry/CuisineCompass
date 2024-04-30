//import Axios from 'axios';
import { useState } from 'react';
import { AuthData } from '../auth/AuthWrapper';


export default function Login({ setToken }) {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const { login } = AuthData();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('before login');
            await login(username, password);
            console.log('after login');
        } catch (error) {
            console.error('Error during login', error);
        }

    }


    return (
        <div className='greenBox'>
            <div className='adminPanel'><h3>ADMIN PANEL</h3></div>
            <form >
                <div className='loginBox'>
                    <table>
                        <tbody>
                            <tr><td><label htmlFor='username' >USERNAME</label></td></tr>
                            <tr><td><input type='text' id='username' onChange={(e) => { setUsername(e.target.value) }} placeholder='Username' /></td></tr>
                            <tr><td><label htmlFor='password'>PASSWORD</label></td></tr>
                            <tr><td><input type='password' id='password' placeholder='*******' onChange={(e) => { setPassword(e.target.value) }} /></td></tr>
                        </tbody>
                    </table>
                    <button type='submit' className='loginButton' onClick={handleSubmit}>LOGIN</button>
                </div>
            </form>
        </div>
    )
}
