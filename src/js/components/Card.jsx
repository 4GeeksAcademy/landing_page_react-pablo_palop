import React from "react";

const Card = ({title, image, color}) => {
    return (
        <div className="card" style={{ 'width': '18rem' , 'margin' : '10px' }}>
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body" style={{backgroundColor : color}}>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
};

export default Card;