import React, { useState, useEffect } from "react";
import axios from 'axios'; // Import Axios
import "./VisitingCardList.css";
import Popup from 'reactjs-popup';


export default function VisitingCardList() {

    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState([]);
    const [bytags, setTags] = useState([]);
    const [byEventtags, setEventTags] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/card/list');
                console.log('Response data:', response.data); // Log the response data
                // Filter and map the response data to extract only the required fields
                const filteredData = response.data.data.map(user => ({
                    id: user.Id,
                    name: user.name,
                    email: user.email,
                    contactnumber: user.contactnumber,
                    position: user.position,
                    liked: user.like_status
                }));
                setUserData(filteredData); // Set user data
                setLoading(false); // Set loading to false once data is fetched
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false); // Set loading to false in case of error
            }
        };

        const fetchTags = async () => {
            try {
                // Make a GET request to fetch tags from the API
                const tagdataresponse = await axios.get('http://localhost:3001/api/filter/bytag');
                const eventdataresponse = await axios.get('http://localhost:3001/api/filter/byevent');
                console.log('By tag data:', tagdataresponse.data);
                console.log('By event data:', eventdataresponse.data);
                // Update the tags state with the fetched data
                setTags(tagdataresponse.data.data);
                setEventTags(eventdataresponse.data.data);
            } catch (error) {
                console.error('Error fetching tags:', error);

            }
        };


        fetchData(); // Call fetchData function on component mount
        fetchTags();
    }, []);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredUserData = userData.filter(user =>
        user.name.toLowerCase().startsWith(searchQuery.toLowerCase())
        // || user.position.toLowerCase().startsWith(searchQuery.toLowerCase())
    );


    // Empty dependency array to run only once on component mount
    const toggleLike = async (userId) => {
        console.log(userId)
        try {
            // Send PUT request to toggle like status
            await axios.put(`http://localhost:3001/api/card/like/${userId}`);
            console.log("likeunlike called", userId);

            // Update the liked status in the local state
            setUserData(userData.map(user => {
                if (user.id === userId) {
                    // Toggle the liked status
                    return { ...user, liked: !user.liked };
                }

                return user;

            }));

        } catch (error) {
            console.error('Error toggling like:', error);
        }
    };


    return (
        <div>
            <div className="menubar">
                <div className="menu">
                    <div className="navigation">
                        <div className="heading">
                            Digital <br />
                            Signature
                        </div>
                        <div className="navBtns">
                            <div className="btn" id="homebutton">
                                {/* <img src={require("../../assets/img/vistingcard/homeIcon.svg")}alt="" /> */}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Icons">
                                        <path id="Vector" d="M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z" stroke="white" stroke-width="1.25" />
                                        <path id="Vector_2" d="M12 15L12 18" stroke="white" stroke-width="1.25" stroke-linecap="round" />
                                    </g>
                                </svg>

                                Home
                            </div>
                            <div className="btn">
                                {/* <img src={require("../../assets/img/vistingcard/teamsIcon.svg")}alt="" /> */}
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
                            </div>
                            <div className="btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M8.96173 18.9106L9.27127 18.518L8.96173 18.9106ZM12 5.50039L11.6398 5.84712C11.734 5.94505 11.8641 6.00039 12 6.00039C12.1359 6.00039 12.266 5.94505 12.3602 5.84712L12 5.50039ZM15.0383 18.9106L15.3478 19.3033L15.0383 18.9106ZM9.27127 18.518C7.77045 17.3348 6.08543 16.1477 4.75136 14.6455C3.43443 13.1626 2.5 11.4123 2.5 9.13685H1.5C1.5 11.7244 2.57528 13.7012 4.00365 15.3096C5.41487 16.8986 7.21071 18.1669 8.65219 19.3033L9.27127 18.518ZM2.5 9.13685C2.5 6.89245 3.76859 4.99734 5.52043 4.19658C7.24074 3.41022 9.5178 3.64249 11.6398 5.84712L12.3602 5.15365C9.98236 2.68312 7.25942 2.30216 5.1047 3.28709C2.98149 4.25761 1.5 6.51832 1.5 9.13685H2.5ZM8.65219 19.3033C9.16673 19.7089 9.70317 20.1284 10.243 20.4438C10.7826 20.7592 11.3731 20.9998 12 20.9998V19.9998C11.6269 19.9998 11.2174 19.855 10.7475 19.5804C10.2777 19.3059 9.79501 18.9308 9.27127 18.518L8.65219 19.3033ZM15.3478 19.3033C16.7893 18.1669 18.5851 16.8986 19.9964 15.3096C21.4247 13.7012 22.5 11.7244 22.5 9.13685H21.5C21.5 11.4123 20.5656 13.1626 19.2486 14.6455C17.9146 16.1477 16.2295 17.3348 14.7287 18.518L15.3478 19.3033ZM22.5 9.13685C22.5 6.51832 21.0185 4.25761 18.8953 3.28709C16.7406 2.30216 14.0176 2.68312 11.6398 5.15365L12.3602 5.84712C14.4822 3.64249 16.7593 3.41022 18.4796 4.19658C20.2314 4.99734 21.5 6.89245 21.5 9.13685H22.5ZM14.7287 18.518C14.205 18.9308 13.7223 19.3059 13.2525 19.5804C12.7826 19.855 12.3731 19.9998 12 19.9998V20.9998C12.6269 20.9998 13.2174 20.7591 13.757 20.4438C14.2968 20.1284 14.8333 19.7089 15.3478 19.3033L14.7287 18.518Z" fill="white" />
                                </svg>
                                Fav Cards
                            </div>
                            <div className="btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="3" stroke="white" />
                                    <path d="M13.7658 2.15224C13.3983 2 12.9324 2 12.0005 2C11.0686 2 10.6027 2 10.2351 2.15224C9.74505 2.35523 9.35571 2.74458 9.15272 3.23463C9.06005 3.45834 9.02379 3.7185 9.0096 4.09799C8.98875 4.65568 8.70274 5.17189 8.21943 5.45093C7.73612 5.72996 7.14608 5.71954 6.65268 5.45876C6.31693 5.2813 6.07349 5.18262 5.83342 5.15102C5.30753 5.08178 4.77567 5.22429 4.35485 5.5472C4.03923 5.78938 3.80626 6.1929 3.34032 6.99993C2.87438 7.80697 2.64141 8.21048 2.58948 8.60491C2.52025 9.1308 2.66276 9.66266 2.98566 10.0835C3.13305 10.2756 3.34019 10.437 3.66167 10.639C4.13429 10.936 4.43838 11.4419 4.43835 12C4.43832 12.5581 4.13424 13.0639 3.66167 13.3608C3.34013 13.5629 3.13297 13.7244 2.98557 13.9165C2.66266 14.3373 2.52015 14.8691 2.58938 15.395C2.64131 15.7894 2.87428 16.193 3.34022 17C3.80616 17.807 4.03913 18.2106 4.35475 18.4527C4.77557 18.7756 5.30743 18.9181 5.83333 18.8489C6.07338 18.8173 6.31681 18.7186 6.65253 18.5412C7.14596 18.2804 7.73605 18.27 8.21939 18.549C8.70273 18.8281 8.98874 19.3443 9.0096 19.9021C9.0238 20.2815 9.06006 20.5417 9.15272 20.7654C9.35571 21.2554 9.74505 21.6448 10.2351 21.8478C10.6027 22 11.0686 22 12.0005 22C12.9324 22 13.3983 22 13.7658 21.8478C14.2559 21.6448 14.6452 21.2554 14.8482 20.7654C14.9409 20.5417 14.9772 20.2815 14.9914 19.902C15.0122 19.3443 15.2982 18.8281 15.7815 18.549C16.2648 18.2699 16.8549 18.2804 17.3484 18.5412C17.6841 18.7186 17.9275 18.8172 18.1675 18.8488C18.6934 18.9181 19.2253 18.7756 19.6461 18.4527C19.9617 18.2105 20.1947 17.807 20.6606 16.9999C21.1266 16.1929 21.3595 15.7894 21.4115 15.395C21.4807 14.8691 21.3382 14.3372 21.0153 13.9164C20.8679 13.7243 20.6607 13.5628 20.3392 13.3608C19.8666 13.0639 19.5626 12.558 19.5626 11.9999C19.5626 11.4418 19.8667 10.9361 20.3392 10.6392C20.6608 10.4371 20.868 10.2757 21.0154 10.0835C21.3383 9.66273 21.4808 9.13087 21.4116 8.60497C21.3596 8.21055 21.1267 7.80703 20.6607 7C20.1948 6.19297 19.9618 5.78945 19.6462 5.54727C19.2254 5.22436 18.6935 5.08185 18.1676 5.15109C17.9276 5.18269 17.6841 5.28136 17.3484 5.4588C16.855 5.71959 16.2649 5.73002 15.7816 5.45096C15.2982 5.17191 15.0122 4.65566 14.9914 4.09794C14.9772 3.71848 14.9409 3.45833 14.8482 3.23463C14.6452 2.74458 14.2559 2.35523 13.7658 2.15224Z" stroke="white" />
                                </svg>
                                Settings
                            </div>
                        </div>
                    </div>
                    <div className="btn" >
                        {/* <img src={require("../../assets/img/vistingcard/homeIcon.svg")}alt="" /> */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Icons">
                                <path id="Vector" d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.2429 22 18.8286 22 16.0002 22H15.0002C12.1718 22 10.7576 22 9.87889 21.1213C9.11051 20.3529 9.01406 19.175 9.00195 17" stroke="white" stroke-linecap="round" />
                                <path id="Vector_2" d="M15 12L2 12M2 12L5.5 9M2 12L5.5 15" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                        </svg>

                        Logout
                    </div>
                </div>
            </div>
            <div className="contents">
                <div className="profile">
                    <div className="person">
                        <img className="profileimage" src={require("../../assets/img/profile.png")} alt="" />
                        <div className="persondetail">Hi, Tony Stark</div>
                        <div className="namedetail">Create and share your business card</div>
                    </div>
                    <div className="notificationbar">
                        {/* <img src={require("../../assets/img/vistingcard/cardIcon.svg")} alt="cardIcon" /> */}
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Icons">
                                <path id="Vector" d="M2.66699 16.0002C2.66699 10.9718 2.66699 8.45769 4.22909 6.89559C5.79119 5.3335 8.30534 5.3335 13.3337 5.3335H18.667C23.6953 5.3335 26.2095 5.3335 27.7716 6.89559C29.3337 8.45769 29.3337 10.9718 29.3337 16.0002C29.3337 21.0285 29.3337 23.5426 27.7716 25.1047C26.2095 26.6668 23.6953 26.6668 18.667 26.6668H13.3337C8.30534 26.6668 5.79119 26.6668 4.22909 25.1047C2.66699 23.5426 2.66699 21.0285 2.66699 16.0002Z" stroke="#413D7B" />
                                <path id="Vector_2" d="M13.3333 22H8" stroke="#413D7B" stroke-linecap="round" />
                                <path id="Vector_3" d="M10.6667 18H8" stroke="#413D7B" stroke-linecap="round" />
                                <path id="Vector_4" d="M2.66699 13.3335L29.3337 13.3335" stroke="#413D7B" stroke-linecap="round" />
                                <path id="Vector_5" d="M18.667 20.0002C18.667 18.7431 18.667 18.1145 19.0575 17.724C19.448 17.3335 20.0766 17.3335 21.3337 17.3335C22.5907 17.3335 23.2193 17.3335 23.6098 17.724C24.0003 18.1145 24.0003 18.7431 24.0003 20.0002C24.0003 21.2572 24.0003 21.8858 23.6098 22.2763C23.2193 22.6668 22.5907 22.6668 21.3337 22.6668C20.0766 22.6668 19.448 22.6668 19.0575 22.2763C18.667 21.8858 18.667 21.2572 18.667 20.0002Z" stroke="#413D7B" />
                            </g>
                        </svg>
                        {/* <img src={require("../../assets/img/vistingcard/notificationIcon.svg")} className="icons" alt="cardIcon" /> */}
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Icons">
                                <path id="Vector" d="M25.3331 12.9386V11.9998C25.3331 6.84518 21.1544 2.6665 15.9998 2.6665C10.8451 2.6665 6.66643 6.84518 6.66643 11.9998V12.9386C6.66643 14.0653 6.33294 15.1667 5.70798 16.1042L4.17651 18.4014C2.77766 20.4996 3.84557 23.3517 6.27851 24.0153C12.6431 25.7511 19.3564 25.7511 25.721 24.0153C28.154 23.3517 29.2219 20.4997 27.823 18.4014L26.2915 16.1042C25.6666 15.1667 25.3331 14.0653 25.3331 12.9386Z" stroke="#413D7B" />
                                <path id="Vector_2" d="M10 25.3335C10.8734 27.6639 13.2299 29.3335 16 29.3335C18.7701 29.3335 21.1266 27.6639 22 25.3335" stroke="#413D7B" stroke-linecap="round" />
                            </g>
                        </svg>

                    </div>
                </div>

                <div className="visitingcard_search">
                    <div className="visitingcard_searchbar">
                        <input
                            type="text"
                            id="searchbar"
                            placeholder="Search Cards"
                            value={searchQuery}
                            onChange={handleSearch}
                        />
                        {/* <img src={require("../../assets/img/vistingcard/searchIcon.svg")} id="serachlogo" alt="search icon" /> */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" id="serachlogo" xmlns="http://www.w3.org/2000/svg">
                            <g id="Icons">
                                <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M11.5 2.75C6.66751 2.75 2.75 6.66751 2.75 11.5C2.75 16.3325 6.66751 20.25 11.5 20.25C16.3325 20.25 20.25 16.3325 20.25 11.5C20.25 6.66751 16.3325 2.75 11.5 2.75ZM1.25 11.5C1.25 5.83908 5.83908 1.25 11.5 1.25C17.1609 1.25 21.75 5.83908 21.75 11.5C21.75 14.0605 20.8111 16.4017 19.2589 18.1982L22.5303 21.4697C22.8232 21.7626 22.8232 22.2374 22.5303 22.5303C22.2374 22.8232 21.7626 22.8232 21.4697 22.5303L18.1982 19.2589C16.4017 20.8111 14.0605 21.75 11.5 21.75C5.83908 21.75 1.25 17.1609 1.25 11.5Z" fill="#413D7B" />
                            </g>
                        </svg>

                    </div>
                    <div>
                        <div>
                            <Popup trigger=
                                {<button className="filterbutton"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    style={{ cursor: 'pointer' }}>
                                    <g id="Icons" className="filtericon">
                                        <path id="Vector" d="M18.667 19.3335C18.667 17.1244 20.4578 15.3335 22.667 15.3335C24.8761 15.3335 26.667 17.1244 26.667 19.3335C26.667 21.5426 24.8761 23.3335 22.667 23.3335C20.4578 23.3335 18.667 21.5426 18.667 19.3335Z" stroke="#413D7B" />
                                        <path id="Vector_2" d="M5.33298 12.6665C5.33298 14.8756 7.12384 16.6665 9.33298 16.6665C11.5421 16.6665 13.333 14.8756 13.333 12.6665C13.333 10.4574 11.5421 8.6665 9.33298 8.6665C7.12384 8.6665 5.33298 10.4574 5.33298 12.6665Z" stroke="#413D7B" />
                                        <path id="Vector_3" d="M22.6113 12L22.6113 2.66667" stroke="#413D7B" stroke-linecap="round" />
                                        <path id="Vector_4" d="M9.27832 20L9.27832 29.3333" stroke="#413D7B" stroke-linecap="round" />
                                        <path id="Vector_5" d="M22.6113 29.3335L22.6113 26.6668" stroke="#413D7B" stroke-linecap="round" />
                                        <path id="Vector_6" d="M9.27832 2.6665L9.27832 5.33317" stroke="#413D7B" stroke-linecap="round" />
                                    </g>
                                </svg> </button>

                                }
                                modal nested>
                                {
                                    close => (

                                        <div className="visitingcard_popup">
                                            <div className="visitingcard_popupcontent" id="visitingcard_popupcontent">
                                                {/* By Date */}
                                                <div className="filtername">
                                                    <div className="filtername">By Date</div>
                                                    <div className="popupline"></div>
                                                </div>
                                                <div className="menu">
                                                    <div className="menuitem">
                                                        <div className="filterselected">Today</div>
                                                        <div className="filters">Yesterday</div>
                                                        <div className="filters">This Month</div>
                                                    </div>
                                                    <div className="daterange">
                                                        <div className="visitingcard_datename">Date Range :</div>
                                                        <input type="date" placeholder="From Date" className="filterdate" />
                                                        <input type="date" placeholder="To Date" className="filterdate" />
                                                    </div>
                                                </div>

                                                {/* By Tag 1 */}
                                                <div className="filtername">
                                                    <div className="filtername">By Tag</div>
                                                    <div className="popupline "></div>
                                                </div>
                                                <div className="menu">
                                                    <div className="menuitem">
                                                        {/* Map over the tags data and render each tag */}
                                                        {bytags.map(tag => {
                                                            console.log(tag.tag_name); // Log the tag name
                                                            return (
                                                                <div key={tag.tag_id} className="filters">{tag.tag_name}</div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                                {/* {tags.map((tagSection, index) => (
                                                    <div key={index} className="filtername">
                                                        <div className="filtername">By Tag</div>
                                                        <div className="popupline"></div>
                                                        <div className="menu">
                                                            <div className="menuitem">
                                                           
                                                                {tagSection.tags.map((tag, tagIndex) => (
                                                                    <div key={tagIndex} className="filters">
                                                                        {tag.tag_name}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))} */}

                                                {/* By Event 2 */}
                                                <div className="filtername">
                                                    <div className="filtername">By Event</div>
                                                    <div className="popupline"></div>
                                                </div>
                                                <div className="menu">
                                                    <div className="menuitem">
                                                        {/* Map over the tags data and render each tag */}
                                                        {byEventtags.map(tag => {
                                                            console.log(tag.event_name); // Log the tag name
                                                            return (
                                                                <div key={tag.event_id} className="filters">{tag.event_name}</div>
                                                            );
                                                        })}
                                                        {/* <div className="filterselected">Designer</div>
                                                        <div className="filters">PHP Developer</div>
                                                        <div className="filters">Interior</div>
                                                        <div className="filters">Web Developer</div>
                                                        <div className="filters">Accountant</div>
                                                        <div className="filters">Carpenter</div> */}
                                                    </div>
                                                </div>

                                                {/* By Team */}
                                                <div className="filtername">
                                                    <div className="filtername">By Team</div>
                                                    <div className="popupline"></div>
                                                </div>
                                                <div className="menu">
                                                    <div className="menuitem">
                                                        <div className="filterselected">Technotex 2023</div>
                                                        <div className="filters">Rajasthan International Expo</div>
                                                        <div className="filters">Interior India Expo</div>
                                                        <div className="filters">Prime Print</div>
                                                    </div>
                                                </div>

                                                {/* Action buttons */}
                                                <div className="action">
                                                    <button className="apply" onClick=
                                                        {() => close()}>
                                                        <div className="actionapply">Apply</div>
                                                    </button>
                                                    <button className="cancel" onClick=
                                                        {() => close()}>
                                                        <div className="actioncancel">Cancel</div>
                                                    </button>
                                                </div>




                                            </div>
                                        </div>
                                    )
                                }
                            </Popup>
                        </div>
                    </div>
                </div>

                <div className="visitingcard_data">
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <div className="visitingcard_cards">
                            {filteredUserData.map(user => (
                                <div key={user.id}>
                                    <div key={user.name} className="visitingcard_card">
                                        <div className="carddetail">
                                            <div className="cardimages">
                                                <img className="cardimage" src={require("../../assets/img/image1.png")} alt="frontview" />


                                                <img className="cardimage" src={require("../../assets/img/image1.png")} alt="backview" />
                                            </div>
                                            <div className="carddata">
                                                <div className="info">
                                                    <div className="infodata">
                                                        <div className="visitingcard_name">{user.name}</div>
                                                        <div className="visitingcard_like">                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="20"
                                                            height="20"
                                                            viewBox="0 0 25 25"
                                                            
                                                            fill={user.liked ? "#DE051F" : "none"}
                                                            stroke={user.liked ? "none" : "#DE051F"}
                                                            onClick={() => toggleLike(user.id)}
                                                            style={{ cursor: 'pointer' }}
                                                        >
                                                            <path d="M12.954 21.3101C12.614 21.4301 12.054 21.4301 11.714 21.3101C8.81398 20.3201 2.33398 16.1901 2.33398 9.1901C2.33398 6.1001 4.82398 3.6001 7.89398 3.6001C9.71398 3.6001 11.324 4.4801 12.334 5.8401C13.344 4.4801 14.964 3.6001 16.774 3.6001C19.844 3.6001 22.334 6.1001 22.334 9.1901C22.334 16.1901 15.854 20.3201 12.954 21.3101Z" />
                                                        </svg></div>

                                                    </div>
                                                    <div className="position">{user.position} : DREAMPLEX</div>
                                                    <div className="visitingcard_line"></div>
                                                </div>

                                                <div className="emailconatct">
                                                    <div className="visitingcard_email">
                                                        {/* <img src="./assets/mailIcon.svg" className="emaillogo" alt="mail" /> */}
                                                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g id="Icons">
                                                                <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M5.80075 2.396H8.1999C9.27193 2.39599 10.121 2.39598 10.7856 2.48532C11.4695 2.57727 12.0231 2.77101 12.4596 3.20755C12.8961 3.6441 13.0899 4.19765 13.1818 4.88157C13.2712 5.54611 13.2712 6.39523 13.2712 7.46726V7.53307C13.2712 8.6051 13.2712 9.45422 13.1818 10.1188C13.0899 10.8027 12.8961 11.3562 12.4596 11.7928C12.0231 12.2293 11.4695 12.4231 10.7856 12.515C10.121 12.6043 9.27193 12.6043 8.1999 12.6043H5.80075C4.72872 12.6043 3.8796 12.6043 3.21506 12.515C2.53115 12.4231 1.9776 12.2293 1.54105 11.7928C1.10451 11.3562 0.910771 10.8027 0.818821 10.1188C0.729476 9.45422 0.729483 8.6051 0.729492 7.53307V7.46725C0.729483 6.39523 0.729476 5.54611 0.818821 4.88157C0.910771 4.19765 1.10451 3.6441 1.54105 3.20755C1.9776 2.77101 2.53115 2.57727 3.21506 2.48532C3.8796 2.39598 4.72872 2.39599 5.80075 2.396ZM3.33165 3.35252C2.74477 3.43143 2.40664 3.5794 2.15977 3.82627C1.9129 4.07315 1.76492 4.41127 1.68602 4.99816C1.60542 5.59763 1.60449 6.38785 1.60449 7.50016C1.60449 8.61248 1.60542 9.4027 1.68602 10.0022C1.76492 10.5891 1.9129 10.9272 2.15977 11.1741C2.40664 11.4209 2.74477 11.5689 3.33165 11.6478C3.93112 11.7284 4.72135 11.7293 5.83366 11.7293H8.16699C9.2793 11.7293 10.0695 11.7284 10.669 11.6478C11.2559 11.5689 11.594 11.4209 11.8409 11.1741C12.0878 10.9272 12.2357 10.5891 12.3146 10.0022C12.3952 9.4027 12.3962 8.61248 12.3962 7.50016C12.3962 6.38785 12.3952 5.59763 12.3146 4.99816C12.2357 4.41127 12.0878 4.07315 11.8409 3.82627C11.594 3.5794 11.2559 3.43143 10.669 3.35252C10.0695 3.27193 9.2793 3.271 8.16699 3.271H5.83366C4.72135 3.271 3.93113 3.27193 3.33165 3.35252ZM3.16423 4.88675C3.31891 4.70113 3.59479 4.67605 3.78041 4.83073L5.03976 5.8802C5.58399 6.33372 5.96183 6.64757 6.28083 6.85274C6.58963 7.05134 6.79903 7.11801 7.00033 7.11801C7.20162 7.11801 7.41103 7.05134 7.71982 6.85274C8.03882 6.64757 8.41666 6.33372 8.96089 5.8802L10.2202 4.83073C10.4059 4.67605 10.6817 4.70113 10.8364 4.88675C10.9911 5.07237 10.966 5.34824 10.7804 5.50293L9.49912 6.57067C8.98208 7.00155 8.56301 7.35078 8.19314 7.58867C7.80785 7.83647 7.43262 7.99301 7.00033 7.99301C6.56803 7.99301 6.1928 7.83647 5.80751 7.58867C5.43764 7.35079 5.01858 7.00155 4.50154 6.57067L3.22025 5.50293C3.03462 5.34824 3.00954 5.07237 3.16423 4.88675Z" fill="#413D7B" />
                                                            </g>
                                                        </svg>

                                                        <div className="useremail">{user.email}</div>
                                                    </div>
                                                    <div className="contactinfo">
                                                        <div className="contacts">
                                                            <div className="mobilelogo">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M6.96701 0.729004H7.03283C8.10486 0.728995 8.95397 0.728987 9.61852 0.818333C10.3024 0.910282 10.856 1.10402 11.2925 1.54056C11.7291 1.97711 11.9228 2.53066 12.0148 3.21457C12.1041 3.87912 12.1041 4.72824 12.1041 5.80026V8.19941C12.1041 9.27144 12.1041 10.1206 12.0148 10.7851C11.9228 11.469 11.7291 12.0226 11.2925 12.4591C10.856 12.8957 10.3024 13.0894 9.61852 13.1813C8.95397 13.2707 8.10485 13.2707 7.03283 13.2707H6.96701C5.89499 13.2707 5.04586 13.2707 4.38132 13.1813C3.69741 13.0894 3.14386 12.8957 2.70731 12.4591C2.27077 12.0226 2.07703 11.469 1.98508 10.7851C1.89574 10.1206 1.89574 9.27144 1.89575 8.19941V5.80026C1.89574 4.72823 1.89574 3.87912 1.98508 3.21457C2.07703 2.53066 2.27077 1.97711 2.70731 1.54056C3.14386 1.10402 3.69741 0.910282 4.38132 0.818333C5.04586 0.728987 5.89498 0.728995 6.96701 0.729004ZM3.97474 1.79252C3.68947 1.87778 3.48809 1.99722 3.32603 2.15928C3.07916 2.40615 2.93118 2.74428 2.85228 3.33117C2.77168 3.93064 2.77075 4.72086 2.77075 5.83317V8.1665C2.77075 9.27882 2.77168 10.069 2.85228 10.6685C2.93118 11.2554 3.07916 11.5935 3.32603 11.8404C3.5729 12.0873 3.91103 12.2352 4.49791 12.3141C5.09739 12.3947 5.88761 12.3957 6.99992 12.3957C8.11223 12.3957 8.90245 12.3947 9.50192 12.3141C10.0888 12.2352 10.4269 12.0873 10.6738 11.8404C10.9207 11.5935 11.0687 11.2554 11.1476 10.6685C11.2282 10.069 11.2291 9.27882 11.2291 8.1665V5.83317C11.2291 4.72086 11.2282 3.93064 11.1476 3.33117C11.0687 2.74428 10.9207 2.40615 10.6738 2.15928C10.5117 1.99722 10.3104 1.87778 10.0251 1.79252C9.63909 2.37217 9.3692 2.77513 8.96791 3.0245C8.88785 3.07425 8.80466 3.11877 8.71886 3.15779C8.28592 3.35466 7.79736 3.3544 7.0935 3.35404C7.06272 3.35402 7.03153 3.354 6.99992 3.354C6.9683 3.354 6.93711 3.35402 6.90634 3.35404C6.20248 3.3544 5.71391 3.35466 5.28098 3.15779C5.19518 3.11877 5.11199 3.07425 5.03193 3.0245C4.63063 2.77513 4.36075 2.37217 3.97474 1.79252ZM4.92984 1.64255C5.18888 2.01796 5.32453 2.17614 5.49375 2.2813C5.54179 2.31115 5.5917 2.33786 5.64318 2.36127C5.88171 2.46974 6.16434 2.479 6.99992 2.479C7.8355 2.479 8.11813 2.46974 8.35665 2.36127C8.40814 2.33786 8.45805 2.31115 8.50608 2.2813C8.67531 2.17615 8.81096 2.01795 9.07 1.64255C8.5332 1.60456 7.86367 1.604 6.99992 1.604C6.13617 1.604 5.46664 1.60456 4.92984 1.64255ZM4.81242 11.0832C4.81242 10.8415 5.00829 10.6457 5.24992 10.6457H8.74992C8.99154 10.6457 9.18742 10.8415 9.18742 11.0832C9.18742 11.3248 8.99154 11.5207 8.74992 11.5207H5.24992C5.00829 11.5207 4.81242 11.3248 4.81242 11.0832Z" fill="#413D7B" />
                                                                </svg>
                                                            </div>
                                                            <div className="mobilenumber">+91 {user.contactnumber}</div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="relation">
                                                    <p className="realation_tag">Friend</p>
                                                    <p className="realation_tag">Businessmen</p>
                                                    <p className="realation_tag">Rajasthan Expo</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    <div className="camera">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Icons" >
                            <circle id="Vector" cx="20" cy="21.6665" r="5" stroke="white" stroke-width="2" />
                            <path id="Vector_2" d="M16.2969 34.9995H23.7044C28.9061 34.9995 31.5069 34.9995 33.3752 33.7738C34.1841 33.2432 34.8785 32.5614 35.4189 31.7673C36.6673 29.9329 36.6673 27.3794 36.6673 22.2722C36.6673 17.1651 36.6673 14.6115 35.4189 12.7772C34.8785 11.9831 34.1841 11.3012 33.3752 10.7706C32.1747 9.98307 30.6718 9.70156 28.3707 9.60094C27.2726 9.60094 26.3271 8.78398 26.1118 7.72678C25.7887 6.14099 24.3706 4.99951 22.7234 4.99951H17.2779C15.6307 4.99951 14.2126 6.14099 13.8895 7.72678C13.6742 8.78398 12.7287 9.60094 11.6306 9.60094C9.32954 9.70156 7.82657 9.98307 6.62606 10.7706C5.81724 11.3012 5.12279 11.9831 4.58236 12.7772C3.33398 14.6115 3.33398 17.1651 3.33398 22.2722C3.33398 27.3794 3.33398 29.9329 4.58236 31.7673C5.12279 32.5614 5.81724 33.2432 6.62606 33.7738C8.49438 34.9995 11.0952 34.9995 16.2969 34.9995Z" stroke="white" stroke-width="2" />
                            <path id="Vector_3" d="M31.6667 16.6665H30" stroke="white" stroke-width="2" stroke-linecap="round" />
                        </g>
                    </svg>

                </div>
                </div>



                

            </div>
        </div>
    );
}