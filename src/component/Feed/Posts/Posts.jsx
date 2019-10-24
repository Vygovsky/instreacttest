import React, {Component} from 'react';
import Post from "./Post/Post";


export default class Posts extends Component {
    render() {
        return (
            <div className="left">
                <Post src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuqQF2Amgjfgy_NXXu5NtE6Bxxv1KPmDAQCH3dVtKIxy1yYOO-gQ&s" alt="one"/>
                <Post src="https://pbs.twimg.com/profile_images/845267152017993728/K52TEujW_400x400.jpg" alt="two"/>
            </div>
        )


    }
}