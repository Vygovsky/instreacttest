import React, {Component} from 'react';
import User from "../Feed/Users/User";
import Pallete from "./Pallete/Pallete";


const Profile = () => {
    return (
        <div className="container profile">
            <User
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjYn3Y0V_2ZyxXbAHWT9GZB9mwV4WaeGSNe7FgPB9jdok5b36OeQ&s"
                alt="foto"
                name="Dog"
            />
            <Pallete/>
        </div>
    )
};
export default Profile;