import React, {Component} from 'react';
import User from "./User";


export default function Users() {

    return (
        <div className="right">
            <User
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjYn3Y0V_2ZyxXbAHWT9GZB9mwV4WaeGSNe7FgPB9jdok5b36OeQ&s"
                alt="foto"
                name="Dog"
            />
            <div className="users__block">
                <User
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjYn3Y0V_2ZyxXbAHWT9GZB9mwV4WaeGSNe7FgPB9jdok5b36OeQ&s"
                    alt="foto"
                    name="Dog"
                    min
                />
                <User
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjYn3Y0V_2ZyxXbAHWT9GZB9mwV4WaeGSNe7FgPB9jdok5b36OeQ&s"
                    alt="foto"
                    name="Dog"
                    min
                />
                <User
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjYn3Y0V_2ZyxXbAHWT9GZB9mwV4WaeGSNe7FgPB9jdok5b36OeQ&s"
                    alt="foto"
                    name="Dog"
                    min
                />
                <User
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjYn3Y0V_2ZyxXbAHWT9GZB9mwV4WaeGSNe7FgPB9jdok5b36OeQ&s"
                    alt="foto"
                    name="Dog"
                    min
                />
            </div>
        </div>
    )
};
