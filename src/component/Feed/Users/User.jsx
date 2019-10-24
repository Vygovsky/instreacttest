import React, {Component} from 'react';


const User = (props) => {
    const {min, src, alt, name} = props;
    return (
        <div className="user">
            <a href="#" className={min ? "user min" : "user"}>
                <img src={src} alt={alt}/>
                <div>{name}</div>
            </a>
        </div>
    )
};
export default User;