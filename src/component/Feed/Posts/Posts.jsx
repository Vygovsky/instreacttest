import React, {Component} from 'react';
import Services from "../../Services/Services";
import User from "../Users/User";


export default class Posts extends Component {
    Services = new Services();
    state = {
        posts: [],
        error: false
    };

    componentDidMount() {
        this.updatePosts();
    }

    updatePosts() {
        this.Services.getAllPost()
            .then(this.onPostLoader)
            .catch(this.onError)

    };

    onPostLoader = (posts) => {
        this.setState({
            posts, // or  posts: posts
            error: false
        });
        console.log(this.state.posts);
    };

    onError = () => {
        this.setState({
            error: true
        })
    };

    returnItems = (array) => {
        return array.map(item => {
            const {name, altname, photo, src, alt, descr, id} = item;

            return (
                <div className="post">
                    <User
                        src={photo}
                        alt={altname}
                        name={name}
                        min={true}
                    />
                    <img src={src} alt={alt}/>
                    <div className={name}>
                        some account
                    </div>
                    <div className={descr}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi
                        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                        esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui
                        officia deserunt mollit anim id est laborum.
                    </div>
                </div>
            )
        })
    };


    render() {
        return (
            <div className="left">

            </div>
        )


    }
}