import React from 'react';
import './mycard.css';
import myImage from '../../assets/myimages/11.jpg';
import userImage from '../../assets/myimages/user.png';
import mailImage from '../../assets/myimages/mail.png';
import phoneImage from '../../assets/myimages/smartphone.png';
import locationImage from '../../assets/myimages/location.png';
import earthImage from '../../assets/myimages/earth-globe.png';
import { useState, useEffect } from 'react';

const Mycard = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/card/fetch/1');
            const data = await response.json();
            setUserData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="mycard">
            <div className="mycard-left">
                <h1>My Business Card</h1>
                <div className="mycard-top-image" style={{ backgroundImage: `url(${myImage})` }}>
                    <strong>
                        <p>{userData ? userData.data.data.fullName : 'Loading...'}</p>
                    </strong>
                    <p>({userData ? userData.data.data.position : 'Loading...'})</p>
                </div>
            </div>
            <div className="mycard-right">
                <div className="mycard-data">
                    <strong>
                        <h1>{userData ? userData.data.data.fullName : 'Loading...'}</h1>
                    </strong>
                    <p2>{userData ? userData.data.data.position : 'Loading...'} . {userData ? userData.data.data.industries : 'Loading...'}</p2>
                    <p>
                        <img src={userImage} alt="user" style={{ width: '20px', height: '20px' }} /> <span>{userData ? userData.data.data.fullName : 'Loading...'}</span>
                    </p>

                    <p>
                        <img src={mailImage} alt="user" style={{ width: '20px', height: '20px' }} /> <span>{userData ? userData.data.data.email : 'Loading...'}</span>
                    </p>
                    <p>
                        <img src={phoneImage} alt="user" style={{ width: '20px', height: '20px' }} />{' '}
                        <span>{userData ? userData.data.data.mobile : 'Loading...'}</span>
                    </p>
                    <p>
                        <img src={locationImage} alt="user" style={{ width: '20px', height: '20px' }} /> <span>{userData ? userData.data.data.location : 'Loading...'}</span>
                    </p>
                    <p>
                        <img src={earthImage} alt="user" style={{ width: '20px', height: '20px' }} />{' '}
                        <span>{userData ? userData.data.data.url : 'Loading...'}</span>
                    </p>
                    <button>Create Card</button>
                </div>
            </div>
        </div>
    );
};

export default Mycard;
