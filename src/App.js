import React from 'react';

import Header from './component/Header/Header';
import Feed from './component/Feed/Feed';
import Profile from './component/Profile/Profile';

function App() {
    return (
        <div className="App">
            <Header/>
            <Feed/>
            <Profile/>
        </div>
    );
}

export default App;
