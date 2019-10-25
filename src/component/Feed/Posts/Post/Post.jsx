import React, {Component} from 'react';
import User from "../../Users/User"

export default class Posts extends Component {
    render() {
        return (

            <div className="post">
                <User
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjYn3Y0V_2ZyxXbAHWT9GZB9mwV4WaeGSNe7FgPB9jdok5b36OeQ&s"
                    alt="foto"
                    name="Dog"
                    min={true}
                />
                <img src={this.props.src} alt={this.props.alt}/>
                <div className="post__name">
                    some account
                </div>
                <div className="post__descr">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim id est laborum.
                </div>
            </div>
        )
    }
}