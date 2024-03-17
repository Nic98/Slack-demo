import './App.css'
import Header from './components/header/Header.js'
import Sidebar from './components/sidebar/Sidebar.js'
import Channel from './screens/channel/Channel'
import Login from './screens/login/Login'
import User from './screens/user/User'
import Home from './screens/home/Home'
import Add from './screens/add/Add'
import { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom'
import { auth } from './firebase'

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)

    // add header and siderbar
    const addStructure = (Component, props) => {
        return (
        <>
            <Header />
            <main className="app__body">
                <Sidebar />
                <Component {...props} />
            </main>
        </>
        )
    }

    // Check if the user is authenticated
    // if the user is logged in then add structure to the component
    // if not, will be redirect to the login page 
    const GuardedRoute = ({ component: Component, auth, ...rest }) => (
        <Route
            {...rest}
            render={(props) =>
                auth ?
                (addStructure(Component, props)) :
                (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />)
            }
        />
    )
    

    // check if the user is logged in (authenticated)
    // if not, logged in the user 
    useEffect(() => {
        const data = localStorage.getItem('user')
        if (data) {
            setIsLoggedIn(true)
            console.log('user is logged in', data)
        } else {
            auth.onAuthStateChanged((user) => {
                if (user) {
                setIsLoggedIn(true)
                }
            })
        }
        setIsLoaded(true)
    }, [])

    if (!isLoaded) return null
    
    // main compoenent
    return (
        <div className="app">
            <Router>
                <Switch>
                    <GuardedRoute
                        path="/channels/:id"
                        auth={isLoggedIn}
                        component={Channel} />

                    <GuardedRoute
                        path="/users/:id"
                        auth={isLoggedIn}
                        component={User} />

                    <GuardedRoute
                        path="/add/channel"
                        auth={isLoggedIn}
                        component={Add} />

                    <Route path="/login">
                        <Login />
                    </Route>

                    <GuardedRoute
                        path="/"
                        auth={isLoggedIn}
                        component={Home} />

                </Switch>
            </Router>
        </div>
    )
}

export default App
