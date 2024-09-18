import React, { useState } from 'react';
import './CreateTeam.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes, faImage } from '@fortawesome/free-solid-svg-icons';

const CreateTeam = ({ onClose }) => {
    const [teamName, setTeamName] = useState('');
    const [maxMembers, setMaxMembers] = useState('');
    const [members, setMembers] = useState(['']);
    const [profileImage, setProfileImage] = useState(null);
    const [inputCount, setInputCount] = useState(1);
    const [formHeight, setFormHeight] = useState('600px');

    const handleAddMember = () => {
        setMembers([...members, '']);
        setInputCount(prevCount => prevCount + 1);
        setFormHeight(prevHeight => `${parseInt(prevHeight) + 50}px`);
    };

    const handleProfileImageChange = (event) => {
        const file = event.target.files[0];
        setProfileImage(file);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className='createteamcontainer' style={{ height: formHeight }}>
            <button className="close-button" onClick={onClose}>
                <FontAwesomeIcon icon={faTimes} />
            </button>
            <form onSubmit={handleSubmit} >
                <div className='form'>
                    <h1>Create Team</h1>
                    <div className="profile-container">
                        <label htmlFor="profileImage" className="profile-label">
                            {profileImage ? (
                                <img src={URL.createObjectURL(profileImage)} alt="Profile" className="profile-image" />
                            ) : (
                                <FontAwesomeIcon icon={faImage} className="gallery-icon" />
                            )}
                            <input type="file" accept="image/*" id="profileImage" onChange={handleProfileImageChange} className="profile-input" />
                            <FontAwesomeIcon icon={faPlus} className="add-profile-icon" />
                        </label>
                    </div>
                    <div>
                        <div className="form-group">
                            <label htmlFor="teamName">Team Name</label>
                            <input
                                type="text"
                                placeholder='Enter team name'
                                id="teamName"
                                value={teamName}
                                onChange={(e) => setTeamName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="maxMembers">Max. People Allowed</label>
                            <input
                                type="number"
                                placeholder='Enter Number of member allowed'
                                id="maxMembers"
                                value={maxMembers}
                                onChange={(e) => setMaxMembers(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Add Member</label>
                            {[...Array(inputCount)].map((_, index) => (
                                <div key={index}>
                                    <input key={index} type="email" placeholder={`Enter email id of member ${index + 1}`} />
                                    <br />
                                </div>
                            ))}
                            <button type="button" onClick={handleAddMember}>
                                <FontAwesomeIcon icon={faPlus} /> Add Member
                            </button>
                        </div>
                        <button type="submit">Create Team</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CreateTeam;