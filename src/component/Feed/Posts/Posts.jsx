import React, {Component} from 'react';
import Services from "../../Services/Services";
import User from "../Users/User";
import Error from "../../Error/Error";

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
            .catch(this.onError);
    };

    onPostLoader = (posts) => {  // єтот метод та я вижу что делает этот метод
        this.setState({
            posts, // or  posts: posts
            error: false
        });
        console.log(this.state.posts);// при попытки загрузить эти джеймоны у меня получантся пустой массив
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
                <div key={id} className="post">
                    <User
                        src={photo}
                        alt={altname}
                        name={name}
                        min={true}
                    />
                    <img src={src} alt={alt}/>
                    <div className="post__name">
                        {name}
                    </div>
                    <div className="post__descr">
                        {descr}
                    </div>
                </div>
            )
        })
    };


    render() {
        const {posts, error} = this.state;
        if (error) {
            return <Error/>
        }

        const items = this.returnItems(posts);

        return (
            <div className="left">
                {items}
            </div>
        )


    }
}