import React, { useState } from 'react';
import './TeamList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faBell, faSearch } from '@fortawesome/free-solid-svg-icons';
import profileImage from "../TeamList/images/profileimage.png"

const TeamList = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const teamData = [
        { team_id: 1, name: 'Designers', data: "Total Members : 10 | Total Cards : 15", imgSrc: profileImage },
        { team_id: 2, name: 'Printing Industry', data: "Total Members : 10 | Total Cards : 15", imgSrc: profileImage },
        { team_id: 3, name: 'IT Company', data: "Total Members : 10 | Total Cards : 15", imgSrc: profileImage },
        { team_id: 4, name: 'Furniture Store', data: "Total Members : 10 | Total Cards : 15", imgSrc: profileImage },
        { team_id: 5, name: 'Jewelry Store', data: "Total Members : 10 | Total Cards : 15", imgSrc: profileImage },
        { team_id: 6, name: 'Designers', data: "Total Members : 10 | Total Cards : 15", imgSrc: profileImage },
        // Add more team data as needed
    ];

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    }
    const filteredTeamData = teamData.filter(team =>
        team.name.toLowerCase().includes(searchQuery.toLowerCase())
    );


    return (
        <div>
            <div>
                <div className="sidebar">
                    <div className="sidemenu">
                        <div className="header">
                            <div className="heading">
                                Digital <br />
                                HandShake
                            </div>
                            <div className="sideBtns">
                                <button className="btn" id='homebtn' >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Icons">
                                            <path id="Vector" d="M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z" stroke="white" stroke-width="1.25" />
                                            <path id="Vector_2" d="M12 15L12 18" stroke="white" stroke-width="1.25" stroke-linecap="round" />
                                        </g>
                                    </svg>
                                    Home
                                </button>
                                <button className="btn">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Icons">
                                            <circle id="Vector" cx="12" cy="6" r="4" stroke="white" />
                                            <path id="Vector_2" d="M18 9C19.6569 9 21 7.88071 21 6.5C21 5.11929 19.6569 4 18 4" stroke="white" stroke-linecap="round" />
                                            <path id="Vector_3" d="M6 9C4.34315 9 3 7.88071 3 6.5C3 5.11929 4.34315 4 6 4" stroke="white" stroke-linecap="round" />
                                            <ellipse id="Vector_4" cx="12" cy="17" rx="6" ry="4" stroke="white" />
                                            <path id="Vector_5" d="M20 19C21.7542 18.6153 23 17.6411 23 16.5C23 15.3589 21.7542 14.3847 20 14" stroke="white" stroke-linecap="round" />
                                            <path id="Vector_6" d="M4 19C2.24575 18.6153 1 17.6411 1 16.5C1 15.3589 2.24575 14.3847 4 14" stroke="white" stroke-linecap="round" />
                                        </g>
                                    </svg>
                                    Teams
                                </button>
                                <button className="btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M8.96173 18.9106L9.27127 18.518L8.96173 18.9106ZM12 5.50039L11.6398 5.84712C11.734 5.94505 11.8641 6.00039 12 6.00039C12.1359 6.00039 12.266 5.94505 12.3602 5.84712L12 5.50039ZM15.0383 18.9106L15.3478 19.3033L15.0383 18.9106ZM9.27127 18.518C7.77045 17.3348 6.08543 16.1477 4.75136 14.6455C3.43443 13.1626 2.5 11.4123 2.5 9.13685H1.5C1.5 11.7244 2.57528 13.7012 4.00365 15.3096C5.41487 16.8986 7.21071 18.1669 8.65219 19.3033L9.27127 18.518ZM2.5 9.13685C2.5 6.89245 3.76859 4.99734 5.52043 4.19658C7.24074 3.41022 9.5178 3.64249 11.6398 5.84712L12.3602 5.15365C9.98236 2.68312 7.25942 2.30216 5.1047 3.28709C2.98149 4.25761 1.5 6.51832 1.5 9.13685H2.5ZM8.65219 19.3033C9.16673 19.7089 9.70317 20.1284 10.243 20.4438C10.7826 20.7592 11.3731 20.9998 12 20.9998V19.9998C11.6269 19.9998 11.2174 19.855 10.7475 19.5804C10.2777 19.3059 9.79501 18.9308 9.27127 18.518L8.65219 19.3033ZM15.3478 19.3033C16.7893 18.1669 18.5851 16.8986 19.9964 15.3096C21.4247 13.7012 22.5 11.7244 22.5 9.13685H21.5C21.5 11.4123 20.5656 13.1626 19.2486 14.6455C17.9146 16.1477 16.2295 17.3348 14.7287 18.518L15.3478 19.3033ZM22.5 9.13685C22.5 6.51832 21.0185 4.25761 18.8953 3.28709C16.7406 2.30216 14.0176 2.68312 11.6398 5.15365L12.3602 5.84712C14.4822 3.64249 16.7593 3.41022 18.4796 4.19658C20.2314 4.99734 21.5 6.89245 21.5 9.13685H22.5ZM14.7287 18.518C14.205 18.9308 13.7223 19.3059 13.2525 19.5804C12.7826 19.855 12.3731 19.9998 12 19.9998V20.9998C12.6269 20.9998 13.2174 20.7591 13.757 20.4438C14.2968 20.1284 14.8333 19.7089 15.3478 19.3033L14.7287 18.518Z" fill="white" />
                                    </svg>
                                    Fav Cards
                                </button>
                                <button className="btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="12" r="3" stroke="white" />
                                        <path d="M13.7658 2.15224C13.3983 2 12.9324 2 12.0005 2C11.0686 2 10.6027 2 10.2351 2.15224C9.74505 2.35523 9.35571 2.74458 9.15272 3.23463C9.06005 3.45834 9.02379 3.7185 9.0096 4.09799C8.98875 4.65568 8.70274 5.17189 8.21943 5.45093C7.73612 5.72996 7.14608 5.71954 6.65268 5.45876C6.31693 5.2813 6.07349 5.18262 5.83342 5.15102C5.30753 5.08178 4.77567 5.22429 4.35485 5.5472C4.03923 5.78938 3.80626 6.1929 3.34032 6.99993C2.87438 7.80697 2.64141 8.21048 2.58948 8.60491C2.52025 9.1308 2.66276 9.66266 2.98566 10.0835C3.13305 10.2756 3.34019 10.437 3.66167 10.639C4.13429 10.936 4.43838 11.4419 4.43835 12C4.43832 12.5581 4.13424 13.0639 3.66167 13.3608C3.34013 13.5629 3.13297 13.7244 2.98557 13.9165C2.66266 14.3373 2.52015 14.8691 2.58938 15.395C2.64131 15.7894 2.87428 16.193 3.34022 17C3.80616 17.807 4.03913 18.2106 4.35475 18.4527C4.77557 18.7756 5.30743 18.9181 5.83333 18.8489C6.07338 18.8173 6.31681 18.7186 6.65253 18.5412C7.14596 18.2804 7.73605 18.27 8.21939 18.549C8.70273 18.8281 8.98874 19.3443 9.0096 19.9021C9.0238 20.2815 9.06006 20.5417 9.15272 20.7654C9.35571 21.2554 9.74505 21.6448 10.2351 21.8478C10.6027 22 11.0686 22 12.0005 22C12.9324 22 13.3983 22 13.7658 21.8478C14.2559 21.6448 14.6452 21.2554 14.8482 20.7654C14.9409 20.5417 14.9772 20.2815 14.9914 19.902C15.0122 19.3443 15.2982 18.8281 15.7815 18.549C16.2648 18.2699 16.8549 18.2804 17.3484 18.5412C17.6841 18.7186 17.9275 18.8172 18.1675 18.8488C18.6934 18.9181 19.2253 18.7756 19.6461 18.4527C19.9617 18.2105 20.1947 17.807 20.6606 16.9999C21.1266 16.1929 21.3595 15.7894 21.4115 15.395C21.4807 14.8691 21.3382 14.3372 21.0153 13.9164C20.8679 13.7243 20.6607 13.5628 20.3392 13.3608C19.8666 13.0639 19.5626 12.558 19.5626 11.9999C19.5626 11.4418 19.8667 10.9361 20.3392 10.6392C20.6608 10.4371 20.868 10.2757 21.0154 10.0835C21.3383 9.66273 21.4808 9.13087 21.4116 8.60497C21.3596 8.21055 21.1267 7.80703 20.6607 7C20.1948 6.19297 19.9618 5.78945 19.6462 5.54727C19.2254 5.22436 18.6935 5.08185 18.1676 5.15109C17.9276 5.18269 17.6841 5.28136 17.3484 5.4588C16.855 5.71959 16.2649 5.73002 15.7816 5.45096C15.2982 5.17191 15.0122 4.65566 14.9914 4.09794C14.9772 3.71848 14.9409 3.45833 14.8482 3.23463C14.6452 2.74458 14.2559 2.35523 13.7658 2.15224Z" stroke="white" />
                                    </svg>
                                    Settings
                                </button>
                            </div>
                        </div>
                        <form>
                            <button className="btn" >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Icons">
                                        <path id="Vector" d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.2429 22 18.8286 22 16.0002 22H15.0002C12.1718 22 10.7576 22 9.87889 21.1213C9.11051 20.3529 9.01406 19.175 9.00195 17" stroke="white" stroke-linecap="round" />
                                        <path id="Vector_2" d="M15 12L2 12M2 12L5.5 9M2 12L5.5 15" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                </svg>
                                Logout
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="containerteam">
                <div className="containerteamnavbar">
                    <div className="containervector">
                        <button><FontAwesomeIcon icon={faCreditCard} ></FontAwesomeIcon></button>
                        <button><FontAwesomeIcon icon={faBell} ></FontAwesomeIcon></button>
                    </div>
                    <div className="teamheaderprofile">
                        <div className='headerimg'>
                        </div>
                        <div className="teamprofiletext">
                            <span className="profile-name">Hi, Toney Stark</span><br />
                            <span className="teamprofile-status">Create and share your business card</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="teammiddlelist">
                <div className='teamsearch'>
                    <input
                        type="text"
                        placeholder="Search Cards"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                    <FontAwesomeIcon icon={faSearch} className="teamsearch-icon" />
                </div>

                <div className='teamGrid'>
                    {filteredTeamData.map((team, index) => (
                        <div className="grid-item" key={index}>
                            <div className="border-box">
                                <div className="profile">
                                    <div className='teamlistimg'>
                                        <div className="profile-img" style={{ backgroundImage: `url(${team.imgSrc})` }}></div>
                                    </div>
                                    <div className="profiletext">
                                        <div className="teamlistprofile-name">{team.name}</div>
                                        <div className="Teamdata">{team.data}</div>
                                    </div>
                                </div>
                                <div className='share-icon'>
                                    <svg width="30" height="30" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.3327 16.0003C12.3327 17.8413 10.8403 19.3337 8.99935 19.3337C7.1584 19.3337 5.66602 17.8413 5.66602 16.0003C5.66602 14.1594 7.1584 12.667 8.99935 12.667C10.8403 12.667 12.3327 14.1594 12.3327 16.0003Z" stroke="#413D7B" stroke-width="1.5" />
                                        <path d="M18.9997 8.66699L12.333 13.3337" stroke="#413D7B" stroke-width="1.5" stroke-linecap="round" />
                                        <path d="M18.9997 23.333L12.333 18.6663" stroke="#413D7B" stroke-width="1.5" stroke-linecap="round" />
                                        <path d="M25.6667 24.6663C25.6667 26.5073 24.1743 27.9997 22.3333 27.9997C20.4924 27.9997 19 26.5073 19 24.6663C19 22.8254 20.4924 21.333 22.3333 21.333C24.1743 21.333 25.6667 22.8254 25.6667 24.6663Z" stroke="#413D7B" stroke-width="1.5" />
                                        <path d="M25.6667 7.33333C25.6667 9.17428 24.1743 10.6667 22.3333 10.6667C20.4924 10.6667 19 9.17428 19 7.33333C19 5.49238 20.4924 4 22.3333 4C24.1743 4 25.6667 5.49238 25.6667 7.33333Z" stroke="#413D7B" stroke-width="1.5" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


export default TeamList;

