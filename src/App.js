import React from 'react';

import Header from './component/Header/Header';
import Feed from './component/Feed/Feed';
import Profile from './component/Profile/Profile';
import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Route path='/' component={Feed} exact/>
                <Route path='/profile' component={Profile} exact/>

                {/*<Feed/>*/}
             {/*   <Profile/>*/}
            </div>
        </Router>
    );
}

export default App;
