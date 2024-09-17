import React from 'react';
import './card.css';
import myImage from '../../assets/myimages/11.jpg';

const Card = () => {
  return (
    <div className="container">
      <div id="d1"></div>
      <div className="box" >
        <div className="top">
          <h1>My Business Card</h1>
          <div className="top-image" style={{ backgroundImage: `url(${myImage})` }}>
            <b>
              <p>User Name</p>
            </b>
            <p>(CEO)</p>
          </div>
        </div>
        <div className="bottom">
          <h3 className="first-p">Create And Share Your Digital Business Card</h3>
          <p className="second-p">Create Your Card in 1 minute</p>
          <p className="third-p">Edit Your Card And Style With our dedicated app. share your card with one tap and go completely paperless!</p>
          <button className="button-create">Create Card</button>
          <br />
          <button className="button-skip">skip&gt;&gt;</button>
        </div>
      </div>
    </div>
  );
}
export default Card;
