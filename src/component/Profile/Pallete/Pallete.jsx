import React, {Component} from 'react';
import Services from "../../Services/Services";
import Error from "../../Error/Error";

export default class Pallete extends Component {
    Services = new Services();
    state = {
        photo: [],
        error: false
    };

    componentDidMount() {
        this.updatePhotos();
    }

    updatePhotos() {
        this.Services.getAllPost()
            .then(this.onPhotoLoader)
            .catch(this.onError);
    };

    onPhotoLoader = (photo) => {
        this.setState({
            error: false,
            photo
        });
    };

    onError = () => {
        this.setState({
            error: true
        })
    };

    returnItemsPhoto = (array) => {
        return array.map(item => {
            const {src, alt} = item;

            return (
                <div>
                    <img src={src} alt={alt}/>
                </div>

            )
        })
    };


    render() {
        const {photo, error} = this.state;
        if (error) {
            return <Error/>
        }

        const itemsPhoto = this.returnItemsPhoto(photo);

        return (
            <div className="palette">
                {itemsPhoto}
            </div>
        )
    }
}