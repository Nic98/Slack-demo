import './Login.css'
import { Button } from '@material-ui/core'
import { auth, provider } from '../../firebase'
import { CometChat } from '@cometchat-pro/chat'
import { cometChat } from '../../app.config'
import { useState } from 'react'

const userData = {
    uid: "superhero1",
    name: "Test user",
}

const testUser = new CometChat.User(userData.uid);

function Login() {
    const [loading, setLoading] = useState(false)

    const signIn = () => {
        setLoading(true)
        auth
        .signInWithPopup(provider)
        .then((res) => loginCometChat(res.user))
        .catch((error) => {
            setLoading(false)
            alert(error.message)
        })
    }

    // login the user to CometChat,and save the user data in local storage
    // if the user is not found, sign up the user to CometChat
    const loginCometChat = (data) => {
        const authKey = cometChat.AUTH_KEY

        CometChat.login(data.uid, authKey)
            .then((u) => {
            console.log(u)
            localStorage.setItem('user', JSON.stringify(data))
            window.location.href = '/'
            console.log(u)
            setLoading(false)
        })
        .catch((error) => {
            if (error.code === 'ERR_UID_NOT_FOUND') {
            signUpWithCometChat(data)
            } else {
            console.log(error)
            setLoading(false)
            alert(error.message)
            }
        })
    }
    // sign up the user to CometChat
    const signUpWithCometChat = (data) => {
        const authKey = cometChat.AUTH_KEY
        const user = new CometChat.User(data.uid)

        user.setName(data.displayName)
        user.setAvatar(data.photoURL)

        CometChat.createUser(user, authKey)
        .then(() => {
            setLoading(false)
            alert('You are now signed up, click the button again to login')
        })
        .catch((error) => {
            console.log(error)
            setLoading(false)
            alert(error.message)
        })
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src={'/logo.png'} alt="Slack Logo" />

                <h4>Sign in to CometChat</h4>
                <p>cometchat.slack.com</p>
                <div className="third_party_login">
                    <Button className="google" onClick={signIn}>
                        <img src={"/icons8-google-48.png"} alt="Google Logo Icon" />
                        {!loading ? 'Sign In With Google' : <div id="loading"></div>}
                    </Button>
                        
                    <Button className="apple" onClick={() => loginCometChat(testUser)}>
                        <img src={"/icons8-apple-logo-30.png"} alt="Apple Logo Icon" />
                        {!loading ? "Continue With Apple" : <div id="loading"></div>}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Login
