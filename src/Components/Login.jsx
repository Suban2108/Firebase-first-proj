import React , {useState} from 'react'
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import { app } from '../FireBase'
import { useNavigate } from 'react-router-dom'
import SocialLink from '../Components/SocialLinks/SocialLinks'
import { FacebookAuthProvider, TwitterAuthProvider } from 'firebase/auth/web-extension'



const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()

    const submitHandler = (event) =>{
        event.preventDefault();
        const auth = getAuth(app)
        signInWithEmailAndPassword(auth,email,password)
        .then(userData=>{
            console.log(userData.user)
            navigate('/dashboard')
        })
        .catch(error => {
            console.log(error)
        })
    }

    //Google Login
    const loginWithGoogle = () =>{
        const auth = getAuth(app)
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth,provider)
        .then((result)=>{
            console.log(result);
            navigate('/dashboard')
        })
        .catch(err=>{
            console.log(err)
        })
    }


    //Facebook Login
    const loginWithFacebook = () =>{
        const auth = getAuth(app)
        const provider = new FacebookAuthProvider()
        signInWithPopup(auth,provider)
        .then((result)=>{
            console.log(result);
            navigate('/dashboard')
        })
        .catch(err=>{
            console.log(err)
        })
    }

    //Twitter Login
    const loginWithTwitter = () =>{
        const auth = getAuth(app)
        const provider = new TwitterAuthProvider()
        signInWithPopup(auth,provider)
        .then((result)=>{
            console.log(result);
            navigate('/dashboard')
        })
        .catch(err=>{
            console.log(err)
        })
    }


    return (
        <div style={{justifyContent:'left'}}>
            <h1>Login</h1>
            <form onSubmit={submitHandler} style={{display:'flex'}}>
                <input onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder='email' />
                <input onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='password' />
                <button type='Submit'>Login</button>
                <br />
            <SocialLink 
                loginWithGoogle = {loginWithGoogle}
                loginWithFacebook = {loginWithFacebook}
                loginWithTwitter = {loginWithTwitter}
            />
            </form>
        </div>
    )
}

export default Login
