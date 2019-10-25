export default class Services {
    constructor() {
        this._apiBase = "http://localhost:3000";
    }

    getResource = async (url) => {
        const response = await fetch(`${this._apiBase}${url}`);
        if (!response.ok) {
            throw new Error(`Cloud not fetch ${url}; received ${response.status} `)
        }
        return await response.json();
    };

    getAllPost = async () => {
        return await this.getResource('/posts/');
    };

    getAllPhoto = async () => {
        const response = await this.getResource('/posts');
        return response.map(this._transformPost);
    };

    _transformPost = (post) => {
        return {
            src: post.src,
            alt: post.alt
        }
    }
}


