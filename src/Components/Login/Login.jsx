import React,{useState} from 'react';
import {usePostSignInMutation} from '../redux/UserApi'
import { toast } from 'react-toastify';
import './Login.scss'

const Login = () => {
    const [username, setUsername] = useState('john32');
  const [password, setPassword] = useState('12345678');
  let [signUp, {data, isLoading, isSuccess, isError}] = usePostSignInMutation()
  if(isSuccess){
    localStorage.setItem("x-auth-token", data.token)
    // toast.success('Welcome');
  }
  if(isError){
    // toast.error('Something went wrong');
  }
  const handelSubmit = (e) => {
    e.preventDefault();
    signUp({
      UserName:username,
      password:password
    }) 
   }
    return (
        <div>
          <div className="login container">
           <form onSubmit={handelSubmit}>
           <div className="login_all">
                <label htmlFor="">Username</label> <br />
              <div className="login_row">
                <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"  placeholder='Username'/>
              </div>
                <label htmlFor="">Password</label> <br />
              <div className="login_row">
                <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"  placeholder='Password'/>
              </div>

              <div className="login_row1">
                <button>
                  {
                    isLoading ? "Loading..." 
                      : 
                    "Login"
              
                  }
                </button>
              </div>
              
            </div>
           </form>
          </div> 
        </div>
    );
}

export default Login;