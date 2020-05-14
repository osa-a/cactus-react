import React from 'react';

import './parallax.scss';

export class Parallax extends React.Component {
    render() {
        return (
            <div className="main__parallax-wrapper">
                <div className="main__parallax-info">
                    <h2 className="main__parallax-header">PLEASE BUY OUR PLANTS</h2>
                    <p className="main__parallax-description">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Repellat ipsum dolor sit amet consectetur adipisicing elit. 
                        Cupiditate commodi ab aut sed fugiat nisi perspiciatis possimus, 
                        voluptas sunt cum recusandae laudantium debitis cumque velit culpa 
                        quaerat molestiae repellendus! Laudantium debitis cumque velit culpa 
                        quaerat molestiae repellendus?
                        </p>
                    <button className="main__parallax-button">Learn More</button>
                </div>
            </div>
        )
    }
}