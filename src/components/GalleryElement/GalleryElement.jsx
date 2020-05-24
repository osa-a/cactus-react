import React from 'react';

import './galleryElement.scss';

export default class GalleryElement extends React.Component {

    render() {
        const id = this.props.id;
        const name = this.props.name;
        const description = this.props.description;
        const caption = this.props.caption;
        const img = this.props.img;
        const alt = this.props.alt;
        return (
            <div data-id={id} className="main__gallery-element" >
                <img className="main__gallery-element-img" src={require(`./img/${img}.jpg`)} alt={alt} />
                <div className="main__gallery-element-text">
                    <h4 className="main__gallery-element-header">{name}</h4>
                    <p className="main__gallery-element-caption">{caption}</p>
                </div>
                <p className="main__gallery-element-description" data-description={id}>{description}</p>
            </div>
        );
    }
}