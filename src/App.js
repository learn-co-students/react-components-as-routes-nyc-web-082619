import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProtectedPage from './components/ProtectedPage'
import PrivateRoute from './components/PrivateRoute'
export default class App extends React.Component {

    state = {
        loggedIn: false
    }
 

    render = () => {
        return(
        <Router>
            <div>
                <Navbar />
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/login" component={Login} />
                <PrivateRoute path='/protected' component={ProtectedPage} loggedIn={this.state.loggedIn}/>
            </div>
        </Router>)
    }
} // end of App


