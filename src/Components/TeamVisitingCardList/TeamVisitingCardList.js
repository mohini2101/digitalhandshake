import React, { useState } from 'react';
import './TeamVisitingCardList.css';

const TeamVisitingCardList = () => { 

    const [cardData, setCardData] = useState([
        {
            name: 'Tony Stark',
            position: 'CEO',
            company: 'DREAMPIX',
            email: 'tony@dreampix.com',
            mobile: '+91 12345 67890',
            otherDetails: ['Friend', 'Businessmen', 'Rajasthan Expo'],
            liked: false,
        },
        {
            name: 'Steve Rogers',
            position: 'Super Soldier',
            company: 'Avengers',
            email: 'captain.america@avengers.com',
            mobile: '+1 987-654-3210',
            otherDetails: ['Super Soldier', 'Leader', 'Patriot'],
            liked: false,
        },
        {
            name: 'Natasha Romanoff',
            position: 'Spy',
            company: 'S.H.I.E.L.D.',
            email: 'natasha.romanoff@shield.com',
            mobile: '+1 555-123-4567',
            otherDetails: ['Black Widow', 'Espionage', 'Martial Artist'],
            liked: false,
        },
        {
            name: 'Bruce Banner',
            position: 'Scientist',
            company: 'Genius Labs',
            email: 'bruce.banner@geniuslabs.com',
            mobile: '+1 111-222-3333',
            otherDetails: ['The Hulk', 'Scientific Research'],
            liked: false,
        },
        {
            name: 'Thor Odinson',
            position: 'God of Thunder',
            company: 'Asgard',
            email: 'thor@asgard.com',
            mobile: '+1 999-888-7777',
            otherDetails: ['Mjolnir', 'Asgardian Prince'],
            liked: false,
        },
        {
            name: 'Wanda Maximoff',
            position: 'Scarlet Witch',
            company: 'WandaVision Inc.',
            email: 'wanda@wandavision.com',
            mobile: '+1 444-555-6666',
            otherDetails: ['Reality Warper', 'Sorceress'],
            liked: false,
        },
        
    ]);

    const chunkArray = (arr, chunkSize) => {
        const result = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            result.push(arr.slice(i, i + chunkSize));
        }
        return result;
    };

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCardData, setFilteredCardData] = useState([]);
    const [chunkedCardData, setChunkedCardData] = useState(chunkArray(cardData, 3));

    const handleSearch = (query) => {
        setSearchQuery(query);
        
        const filteredData = cardData.filter((card) =>
            card.name.toLowerCase().startsWith(query.toLowerCase())
        );
    
        const updatedFilteredData = filteredData.map((filteredCard) => {
            const originalCard = cardData.find(
                (card) => card.name === filteredCard.name
            );
            return originalCard ? { ...originalCard } : filteredCard;
        });
    
        const updatedChunkedCardData = chunkArray(updatedFilteredData, 3);
        setChunkedCardData(updatedChunkedCardData);
    };
    

    const handleInputChange = (event) => {
        const input = event.target.value;
        setSearchQuery(input);

        if (!input.trim()) {
            setFilteredCardData([]);
            setChunkedCardData(chunkArray(cardData, 3));
        } else {
            setTimeout(() => {
                handleSearch(input);
            }, 20);
        }
    };

    const toggleLike = (rowIndex, cardIndex) => {
        const cardName = chunkedCardData[rowIndex][cardIndex].name;
        handleLike(cardName);
    };
    
    const handleLike = (cardName) => {
        const updatedCardData = cardData.map((card) => {
            if (card.name === cardName) {
                return {
                    ...card,
                    liked: !card.liked,
                };
            }
            return card;
        });
    
        setCardData(updatedCardData);
        updateFilteredData(updatedCardData); // Add a function to update filtered data
    
        // Other logic for chunking data and updating state as needed
        const updatedChunkedCardData = chunkArray(updatedCardData, 3);
        setChunkedCardData(updatedChunkedCardData);
        
    };

    const updateFilteredData = (updatedCardData) => {
        const updatedFilteredData = filteredCardData.map((filteredCard) => {
            const originalCard = updatedCardData.find(
                (card) => card.name === filteredCard.name
            );
            if (originalCard) {
                return { ...originalCard }; // Use the updated card data with correct liked status
            }
            return filteredCard;
        });
    
        setFilteredCardData(updatedFilteredData);
    };
    
    const [showPopup, setShowPopup] = useState(false);

    const handleFilterButtonClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    

    return (
        <>
            <div className="team-visiting-card-list">

                <div className="menubar">
                    <div className="menu">

                        <div className="navigation">

                            <div className="heading">Digital <br/>HandShake</div>

                            <div className="nav-btns">

                                <div className="btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z" stroke="white" strokeWidth="1.25"/>
                                    <path d="M12 15L12 18" stroke="white" strokeWidth="1.25" strokeLinecap="round"/>
                                    </svg>
                                    Home
                                </div>

                                <div className="btn" id="teams-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="6" r="4" stroke="white"/>
                                    <path d="M18 9C19.6569 9 21 7.88071 21 6.5C21 5.11929 19.6569 4 18 4" stroke="white" strokeLinecap="round"/>
                                    <path d="M6 9C4.34315 9 3 7.88071 3 6.5C3 5.11929 4.34315 4 6 4" stroke="white" strokeLinecap="round"/>
                                    <ellipse cx="12" cy="17" rx="6" ry="4" stroke="white"/>
                                    <path d="M20 19C21.7542 18.6153 23 17.6411 23 16.5C23 15.3589 21.7542 14.3847 20 14" stroke="white" strokeLinecap="round"/>
                                    <path d="M4 19C2.24575 18.6153 1 17.6411 1 16.5C1 15.3589 2.24575 14.3847 4 14" stroke="white" strokeLinecap="round"/>
                                    </svg>
                                    Teams
                                </div>

                                <div className="btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M8.96173 18.9111L9.27127 18.5185L8.96173 18.9111ZM12 5.50088L11.6398 5.84761C11.734 5.94554 11.8641 6.00088 12 6.00088C12.1359 6.00088 12.266 5.94554 12.3602 5.84761L12 5.50088ZM15.0383 18.9111L15.3478 19.3038L15.0383 18.9111ZM9.27127 18.5185C7.77045 17.3353 6.08543 16.1482 4.75136 14.646C3.43443 13.1631 2.5 11.4128 2.5 9.13734H1.5C1.5 11.7249 2.57528 13.7017 4.00365 15.31C5.41487 16.8991 7.21071 18.1674 8.65219 19.3038L9.27127 18.5185ZM2.5 9.13734C2.5 6.89294 3.76859 4.99783 5.52043 4.19706C7.24074 3.4107 9.5178 3.64298 11.6398 5.84761L12.3602 5.15414C9.98236 2.68361 7.25942 2.30265 5.1047 3.28758C2.98149 4.2581 1.5 6.51881 1.5 9.13734H2.5ZM8.65219 19.3038C9.16673 19.7094 9.70317 20.1289 10.243 20.4443C10.7826 20.7596 11.3731 21.0002 12 21.0002V20.0002C11.6269 20.0002 11.2174 19.8555 10.7475 19.5809C10.2777 19.3064 9.79501 18.9313 9.27127 18.5185L8.65219 19.3038ZM15.3478 19.3038C16.7893 18.1674 18.5851 16.8991 19.9964 15.31C21.4247 13.7017 22.5 11.7249 22.5 9.13734H21.5C21.5 11.4128 20.5656 13.1631 19.2486 14.646C17.9146 16.1482 16.2295 17.3353 14.7287 18.5185L15.3478 19.3038ZM22.5 9.13734C22.5 6.51881 21.0185 4.2581 18.8953 3.28758C16.7406 2.30265 14.0176 2.68361 11.6398 5.15414L12.3602 5.84761C14.4822 3.64298 16.7593 3.4107 18.4796 4.19706C20.2314 4.99783 21.5 6.89294 21.5 9.13734H22.5ZM14.7287 18.5185C14.205 18.9313 13.7223 19.3064 13.2525 19.5809C12.7826 19.8555 12.3731 20.0002 12 20.0002V21.0002C12.6269 21.0002 13.2174 20.7596 13.757 20.4443C14.2968 20.1289 14.8333 19.7094 15.3478 19.3038L14.7287 18.5185Z" fill="white"/>
                                    </svg>
                                    Fav Cards
                                </div>

                                <div className="btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="3" stroke="white"/>
                                    <path d="M13.7658 2.15224C13.3983 2 12.9324 2 12.0005 2C11.0686 2 10.6027 2 10.2351 2.15224C9.74505 2.35523 9.35571 2.74458 9.15272 3.23463C9.06005 3.45834 9.02379 3.7185 9.0096 4.09799C8.98875 4.65568 8.70274 5.17189 8.21943 5.45093C7.73612 5.72996 7.14608 5.71954 6.65268 5.45876C6.31693 5.2813 6.07349 5.18262 5.83342 5.15102C5.30753 5.08178 4.77567 5.22429 4.35485 5.5472C4.03923 5.78938 3.80626 6.1929 3.34032 6.99993C2.87438 7.80697 2.64141 8.21048 2.58948 8.60491C2.52025 9.1308 2.66276 9.66266 2.98566 10.0835C3.13305 10.2756 3.34019 10.437 3.66167 10.639C4.13429 10.936 4.43838 11.4419 4.43835 12C4.43832 12.5581 4.13424 13.0639 3.66167 13.3608C3.34013 13.5629 3.13297 13.7244 2.98557 13.9165C2.66266 14.3373 2.52015 14.8691 2.58938 15.395C2.64131 15.7894 2.87428 16.193 3.34022 17C3.80616 17.807 4.03913 18.2106 4.35475 18.4527C4.77557 18.7756 5.30743 18.9181 5.83333 18.8489C6.07338 18.8173 6.31681 18.7186 6.65253 18.5412C7.14596 18.2804 7.73605 18.27 8.21939 18.549C8.70273 18.8281 8.98874 19.3443 9.0096 19.9021C9.0238 20.2815 9.06006 20.5417 9.15272 20.7654C9.35571 21.2554 9.74505 21.6448 10.2351 21.8478C10.6027 22 11.0686 22 12.0005 22C12.9324 22 13.3983 22 13.7658 21.8478C14.2559 21.6448 14.6452 21.2554 14.8482 20.7654C14.9409 20.5417 14.9772 20.2815 14.9914 19.902C15.0122 19.3443 15.2982 18.8281 15.7815 18.549C16.2648 18.2699 16.8549 18.2804 17.3484 18.5412C17.6841 18.7186 17.9275 18.8172 18.1675 18.8488C18.6934 18.9181 19.2253 18.7756 19.6461 18.4527C19.9617 18.2105 20.1947 17.807 20.6606 16.9999C21.1266 16.1929 21.3595 15.7894 21.4115 15.395C21.4807 14.8691 21.3382 14.3372 21.0153 13.9164C20.8679 13.7243 20.6607 13.5628 20.3392 13.3608C19.8666 13.0639 19.5626 12.558 19.5626 11.9999C19.5626 11.4418 19.8667 10.9361 20.3392 10.6392C20.6608 10.4371 20.868 10.2757 21.0154 10.0835C21.3383 9.66273 21.4808 9.13087 21.4116 8.60497C21.3596 8.21055 21.1267 7.80703 20.6607 7C20.1948 6.19297 19.9618 5.78945 19.6462 5.54727C19.2254 5.22436 18.6935 5.08185 18.1676 5.15109C17.9276 5.18269 17.6841 5.28136 17.3484 5.4588C16.855 5.71959 16.2649 5.73002 15.7816 5.45096C15.2982 5.17191 15.0122 4.65566 14.9914 4.09794C14.9772 3.71848 14.9409 3.45833 14.8482 3.23463C14.6452 2.74458 14.2559 2.35523 13.7658 2.15224Z" stroke="white"/>
                                    </svg>
                                    Settings
                                </div>

                            </div>

                        </div>

                        <div className="logout-nav">

                            <div className="logout-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.2429 22 18.8286 22 16.0002 22H15.0002C12.1718 22 10.7576 22 9.87889 21.1213C9.11051 20.3529 9.01406 19.175 9.00195 17" stroke="white" strokeLinecap="round"/>
                                <path d="M15 12L2 12M2 12L5.5 9M2 12L5.5 15" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Logout
                            </div>

                        </div>

                    </div>
                </div>

                <div className="main-content">

                    <div className="profile-bar">

                        <div className="profile-info">

                            <div className="profile-image">
                                {/* <img className="profile-image" src="./assets/img/profile.svg" alt="" /> */}     
                            </div>
                            
                            <div className="profile-details">
                                <div className="details-body">Hi, Toney Stark</div>
                                <div className="details-lable">Create and share your business card</div>
                            </div>

                        </div>

                        <div className="profile-bar-buttons">
                            
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M2.66699 15.9997C2.66699 10.9714 2.66699 8.4572 4.22909 6.8951C5.79119 5.33301 8.30534 5.33301 13.3337 5.33301H18.667C23.6953 5.33301 26.2095 5.33301 27.7716 6.8951C29.3337 8.4572 29.3337 10.9714 29.3337 15.9997C29.3337 21.028 29.3337 23.5421 27.7716 25.1042C26.2095 26.6663 23.6953 26.6663 18.667 26.6663H13.3337C8.30534 26.6663 5.79119 26.6663 4.22909 25.1042C2.66699 23.5421 2.66699 21.028 2.66699 15.9997Z" stroke="#413D7B" strokeWidth="1.5"/>
                            <path d="M13.3333 22H8" stroke="#413D7B" strokeWidth="1.5" strokeLinecap="round"/>
                            <path d="M10.6667 18H8" stroke="#413D7B" strokeWidth="1.5" strokeLinecap="round"/>
                            <path d="M2.66699 13.333L29.3337 13.333" stroke="#413D7B" strokeWidth="1.5" strokeLinecap="round"/>
                            <path d="M18.667 19.9997C18.667 18.7426 18.667 18.1141 19.0575 17.7235C19.448 17.333 20.0766 17.333 21.3337 17.333C22.5907 17.333 23.2193 17.333 23.6098 17.7235C24.0003 18.1141 24.0003 18.7426 24.0003 19.9997C24.0003 21.2568 24.0003 21.8853 23.6098 22.2758C23.2193 22.6663 22.5907 22.6663 21.3337 22.6663C20.0766 22.6663 19.448 22.6663 19.0575 22.2758C18.667 21.8853 18.667 21.2568 18.667 19.9997Z" stroke="#413D7B" strokeWidth="1.5"/>
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M25.3331 12.9391V12.0003C25.3331 6.84567 21.1544 2.66699 15.9998 2.66699C10.8451 2.66699 6.66643 6.84567 6.66643 12.0003V12.9391C6.66643 14.0658 6.33294 15.1672 5.70798 16.1047L4.17651 18.4019C2.77766 20.5001 3.84557 23.3522 6.27851 24.0157C12.6431 25.7515 19.3564 25.7515 25.721 24.0157C28.154 23.3522 29.2219 20.5001 27.823 18.4019L26.2915 16.1047C25.6666 15.1672 25.3331 14.0658 25.3331 12.9391Z" stroke="#413D7B" strokeWidth="1.5"/>
                            <path d="M10 25.333C10.8734 27.6634 13.2299 29.333 16 29.333C18.7701 29.333 21.1266 27.6634 22 25.333" stroke="#413D7B" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>

                        </div>

                    </div>

                    <div className="content-area">

                        <div className="search-bar">

                            <div className="search-box">

                                <input className="search-input-field" type="text" placeholder="Search Cards" value={searchQuery} onChange={handleInputChange}/>

                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.5 2.75C6.66751 2.75 2.75 6.66751 2.75 11.5C2.75 16.3325 6.66751 20.25 11.5 20.25C16.3325 20.25 20.25 16.3325 20.25 11.5C20.25 6.66751 16.3325 2.75 11.5 2.75ZM1.25 11.5C1.25 5.83908 5.83908 1.25 11.5 1.25C17.1609 1.25 21.75 5.83908 21.75 11.5C21.75 14.0605 20.8111 16.4017 19.2589 18.1982L22.5303 21.4697C22.8232 21.7626 22.8232 22.2374 22.5303 22.5303C22.2374 22.8232 21.7626 22.8232 21.4697 22.5303L18.1982 19.2589C16.4017 20.8111 14.0605 21.75 11.5 21.75C5.83908 21.75 1.25 17.1609 1.25 11.5Z" fill="#413D7B"/>
                                </svg>

                            </div>

                            <div className="filter-button" onClick={handleFilterButtonClick}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M18.667 19.333C18.667 17.1239 20.4578 15.333 22.667 15.333C24.8761 15.333 26.667 17.1239 26.667 19.333C26.667 21.5421 24.8761 23.333 22.667 23.333C20.4578 23.333 18.667 21.5421 18.667 19.333Z" stroke="#413D7B"/>
                                <path d="M5.33298 12.667C5.33298 14.8761 7.12384 16.667 9.33298 16.667C11.5421 16.667 13.333 14.8761 13.333 12.667C13.333 10.4579 11.5421 8.66699 9.33298 8.66699C7.12384 8.66699 5.33298 10.4579 5.33298 12.667Z" stroke="#413D7B"/>
                                <path d="M22.6113 12L22.6113 2.66667" stroke="#413D7B" strokeLinecap="round"/>
                                <path d="M9.27832 20L9.27832 29.3333" stroke="#413D7B" strokeLinecap="round"/>
                                <path d="M22.6113 29.333L22.6113 26.6663" stroke="#413D7B" strokeLinecap="round"/>
                                <path d="M9.27832 2.66699L9.27832 5.33366" stroke="#413D7B" strokeLinecap="round"/>
                                </svg>
                            </div>

                            {showPopup && (
                                <div className={`popup ${showPopup ? 'show' : ''}`}>
                                    <div className="popupcontent" id="popupcontent">
                                        <div className="filtername">
                                            <div className="filtername">By Date</div>
                                            <div className="popupline"></div>
                                        </div>
                                        <div className="menu">
                                            <div className="menuitem">
                                                <div className="filterselected">Today</div>
                                                <div className="filters">Yeasterday</div>
                                                <div className="filters">This Month</div>
                                            </div>
                                            <div className="daterange">
                                                <div className="datename">Date Range :</div>
                                                <input type="date" placeholder="From Date" className="filterdate"/>
                                                <input type="date" placeholder="To Date" className="filterdate"/>
                                            </div>
                                        </div>
                        

                                        <div className="filtername">
                                            <div className="filtername">By Tag</div>
                                            <div className="popupline "></div>
                                        </div>
                                        <div className="menu">
                                            <div className="menuitem">
                                                <div className="filterselected">Designer</div>
                                                <div className="filters">PHP Developer</div>
                                                <div className="filters">Interior</div>
                                                <div className="filters">Web Developer</div>
                                                <div className="filters">Accountant</div>
                                                <div className="filters">Carpenter</div>
                                            </div>
                                        </div>
                        
                                        <div className="filtername">
                                            <div className="filtername">By Tag</div>
                                            <div className="popupline"></div>
                                        </div>
                                        <div className="menu">
                                            <div className="menuitem">
                                                <div className="filterselected">Designer</div>
                                                <div className="filters">PHP Developer</div>
                                                <div className="filters">Interior</div>
                                                <div className="filters">Web Developer</div>
                                                <div className="filters">Accountant</div>
                                                <div className="filters">Carpenter</div>
                                            </div>
                                        </div>
                        
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
                                        <div className="action">
                                            <button className="apply">
                                                <div className="actionapply">Apply</div>
                                            </button>
                                            <button className="cancel" onClick={handleClosePopup}>
                                                <div className="actioncancel">Cancel</div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                            
                        </div>

                        <div className="card-container">
                            {chunkedCardData.map((row, rowIndex) => (
                                <div key={rowIndex} className="container-row">
                                    <div className="card-row">
                                        {row.map((card, cardIndex) => (
                                            <div key={card.name} className="card">
                                                <div className="card-image-frame">
                                                    <div className="card-image">
                                                        {/* <img src={card.image} alt="" /> */}
                                                    </div>
                                                    <div className="card-image"></div>
                                                </div>

                                                <div className="card-details-frame">

                                                    <div className="details-frame1">
                                                        <div className="person-name-details">

                                                            <div className="person-name">{card.name}</div>

                                                            <div className="like-button" onClick={() => toggleLike(rowIndex, cardIndex)}>
                                                                {card.liked ? (
                                                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">\                           
                                                                        <path id="Vector" d="M7.59969 4.35309L8.00004 4.88822L8.4004 4.35309C8.9838 3.57329 9.91828 3.06689 10.96 3.06689C12.7282 3.06689 14.1667 4.50736 14.1667 6.29356C14.1667 7.03251 14.0489 7.71398 13.8443 8.34631L13.8433 8.34957C13.3524 9.90294 12.3444 11.1607 11.2483 12.1027C10.15 13.0466 8.99211 13.6485 8.25232 13.9002L8.25231 13.9002L8.24696 13.9021C8.20379 13.9173 8.1143 13.9336 8.00004 13.9336C7.88579 13.9336 7.79629 13.9173 7.75312 13.9021L7.75313 13.902L7.74776 13.9002C7.00797 13.6485 5.85004 13.0466 4.75177 12.1027C3.6557 11.1607 2.64767 9.90294 2.1568 8.34957L2.15681 8.34957L2.15576 8.34632C1.95118 7.71398 1.83337 7.03251 1.83337 6.29356C1.83337 4.50736 3.27185 3.06689 5.04004 3.06689C6.0818 3.06689 7.01628 3.57329 7.59969 4.35309Z" fill="#DE051F" stroke="#DE051F"/>
                                                                    </svg>
                                                                ) : (
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                                                        <path d="M12.953 21.3096C12.613 21.4296 12.053 21.4296 11.713 21.3096C8.81301 20.3196 2.33301 16.1896 2.33301 9.18961C2.33301 6.09961 4.82301 3.59961 7.89301 3.59961C9.71301 3.59961 11.323 4.47961 12.333 5.83961C13.343 4.47961 14.963 3.59961 16.773 3.59961C19.843 3.59961 22.333 6.09961 22.333 9.18961C22.333 16.1896 15.853 20.3196 12.953 21.3096Z" stroke="#DE051F" strokeLinecap="round" strokeLinejoin="round"/>
                                                                    </svg>
                                                                )}
                                                            </div>

                                                        </div>

                                                        <div className="person-position-details">
                                                            <div className="position-details-text">{card.position}</div>
                                                            <div className="position-details-text">:</div>
                                                            <div className="position-details-text">{card.company}</div>
                                                        </div>

                                                        <div className="line"></div>
                                                    </div>

                                                    <div className="details-frame2">
                                                        <div className="person-email-details">
                                                            <div className="email-icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M6.62873 2.16699H9.37062C10.5958 2.16698 11.5662 2.16697 12.3257 2.26908C13.1073 2.37417 13.7399 2.59558 14.2388 3.09449C14.7378 3.5934 14.9592 4.22603 15.0643 5.00764C15.1664 5.76712 15.1664 6.73754 15.1663 7.96272V8.03793C15.1664 9.26311 15.1664 10.2335 15.0643 10.993C14.9592 11.7746 14.7378 12.4073 14.2388 12.9062C13.7399 13.4051 13.1073 13.6265 12.3257 13.7316C11.5662 13.8337 10.5958 13.8337 9.37062 13.8337H6.62873C5.40356 13.8337 4.43314 13.8337 3.67366 13.7316C2.89204 13.6265 2.25941 13.4051 1.7605 12.9062C1.26159 12.4073 1.04018 11.7746 0.935098 10.993C0.832989 10.2335 0.832997 9.26311 0.833008 8.03794V7.96271C0.832997 6.73754 0.832989 5.76712 0.935098 5.00764C1.04018 4.22603 1.26159 3.5934 1.7605 3.09449C2.25941 2.59558 2.89205 2.37417 3.67366 2.26908C4.43314 2.16697 5.40356 2.16698 6.62873 2.16699ZM3.80691 3.26017C3.13618 3.35034 2.74975 3.51945 2.46761 3.80159C2.18547 4.08373 2.01636 4.47017 1.92618 5.14089C1.83407 5.826 1.83301 6.72911 1.83301 8.00033C1.83301 9.27154 1.83407 10.1747 1.92618 10.8598C2.01636 11.5305 2.18547 11.9169 2.46761 12.1991C2.74975 12.4812 3.13618 12.6503 3.80691 12.7405C4.49202 12.8326 5.39513 12.8337 6.66634 12.8337H9.33301C10.6042 12.8337 11.5073 12.8326 12.1924 12.7405C12.8632 12.6503 13.2496 12.4812 13.5317 12.1991C13.8139 11.9169 13.983 11.5305 14.0732 10.8598C14.1653 10.1747 14.1663 9.27154 14.1663 8.00033C14.1663 6.72911 14.1653 5.826 14.0732 5.14089C13.983 4.47017 13.8139 4.08373 13.5317 3.80159C13.2496 3.51945 12.8632 3.35034 12.1924 3.26017C11.5073 3.16805 10.6042 3.16699 9.33301 3.16699H6.66634C5.39513 3.16699 4.49202 3.16805 3.80691 3.26017ZM3.61556 5.01357C3.79235 4.80143 4.10763 4.77277 4.31977 4.94955L5.75903 6.14894C6.381 6.66725 6.81283 7.02594 7.1774 7.26041C7.5303 7.48739 7.76963 7.56358 7.99968 7.56358C8.22972 7.56358 8.46905 7.48739 8.82195 7.26041C9.18652 7.02594 9.61835 6.66725 10.2403 6.14893L11.6796 4.94955C11.8917 4.77277 12.207 4.80143 12.3838 5.01357C12.5606 5.22571 12.5319 5.54099 12.3198 5.71777L10.8554 6.93804C10.2645 7.43048 9.7856 7.82961 9.36289 8.10148C8.92256 8.38468 8.49373 8.56358 7.99968 8.56358C7.50562 8.56358 7.07679 8.38468 6.63646 8.10148C6.21375 7.82961 5.73482 7.43048 5.14392 6.93805L3.67958 5.71777C3.46744 5.54099 3.43878 5.22571 3.61556 5.01357Z" fill="#413D7B"/>
                                                                </svg>
                                                            </div>
                                                            <div className="email-text">{card.email}</div>
                                                        </div>

                                                        <div className="person-mobileNo-details">
                                                            <div className="mobileNo-icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M7.96271 0.833008H8.03794C9.26311 0.832997 10.2335 0.832989 10.993 0.935098C11.7746 1.04018 12.4073 1.26159 12.9062 1.7605C13.4051 2.25941 13.6265 2.89205 13.7316 3.67366C13.8337 4.43314 13.8337 5.40356 13.8337 6.62873V9.37062C13.8337 10.5958 13.8337 11.5662 13.7316 12.3257C13.6265 13.1073 13.4051 13.7399 12.9062 14.2388C12.4073 14.7378 11.7746 14.9592 10.993 15.0643C10.2335 15.1664 9.26311 15.1664 8.03793 15.1663H7.96272C6.73754 15.1664 5.76712 15.1664 5.00764 15.0643C4.22603 14.9592 3.5934 14.7378 3.09449 14.2388C2.59558 13.7399 2.37417 13.1073 2.26908 12.3257C2.16697 11.5662 2.16698 10.5958 2.16699 9.37062V6.62873C2.16698 5.40356 2.16697 4.43314 2.26908 3.67366C2.37417 2.89204 2.59558 2.25941 3.09449 1.7605C3.5934 1.26159 4.22603 1.04018 5.00764 0.935098C5.76712 0.832989 6.73754 0.832997 7.96271 0.833008ZM4.54298 2.04845C4.21696 2.14589 3.98681 2.2824 3.80159 2.46761C3.51945 2.74975 3.35034 3.13618 3.26017 3.80691C3.16805 4.49202 3.16699 5.39513 3.16699 6.66634V9.33301C3.16699 10.6042 3.16805 11.5073 3.26017 12.1924C3.35034 12.8632 3.51945 13.2496 3.80159 13.5317C4.08373 13.8139 4.47017 13.983 5.14089 14.0732C5.826 14.1653 6.72911 14.1663 8.00033 14.1663C9.27154 14.1663 10.1747 14.1653 10.8598 14.0732C11.5305 13.983 11.9169 13.8139 12.1991 13.5317C12.4812 13.2496 12.6503 12.8632 12.7405 12.1924C12.8326 11.5073 12.8337 10.6042 12.8337 9.33301V6.66634C12.8337 5.39513 12.8326 4.49202 12.7405 3.80691C12.6503 3.13618 12.4812 2.74975 12.1991 2.46761C12.0138 2.2824 11.7837 2.14589 11.4577 2.04845C11.0165 2.71091 10.7081 3.17144 10.2495 3.45643C10.158 3.51329 10.0629 3.56417 9.96483 3.60876C9.47005 3.83376 8.91169 3.83346 8.10728 3.83305C8.0721 3.83303 8.03646 3.83301 8.00033 3.83301C7.9642 3.83301 7.92855 3.83303 7.89337 3.83305C7.08896 3.83346 6.53061 3.83376 6.03582 3.60876C5.93777 3.56417 5.84269 3.51329 5.7512 3.45643C5.29257 3.17144 4.98413 2.71092 4.54298 2.04845ZM5.63452 1.87707C5.93057 2.3061 6.08559 2.48688 6.27899 2.60706C6.33389 2.64118 6.39094 2.6717 6.44977 2.69846C6.72238 2.82242 7.04538 2.83301 8.00033 2.83301C8.95527 2.83301 9.27828 2.82242 9.55088 2.69846C9.60972 2.6717 9.66676 2.64117 9.72166 2.60706C9.91506 2.48688 10.0701 2.30609 10.3661 1.87707C9.75264 1.83365 8.98747 1.83301 8.00033 1.83301C7.01318 1.83301 6.24801 1.83365 5.63452 1.87707ZM5.50033 12.6663C5.50033 12.3902 5.72418 12.1663 6.00033 12.1663H10.0003C10.2765 12.1663 10.5003 12.3902 10.5003 12.6663C10.5003 12.9425 10.2765 13.1663 10.0003 13.1663H6.00033C5.72418 13.1663 5.50033 12.9425 5.50033 12.6663Z" fill="#413D7B"/>
                                                                </svg>
                                                            </div>
                                                            <div className="mobileNo-text">{card.mobile}</div>
                                                        </div>
                                                    </div>

                                                    <div className="details-frame3">
                                                        {card.otherDetails.map((detail, detailIndex) => (
                                                            <div key={detailIndex} className="other-details">
                                                                <div className="other-details-text">{detail}</div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="scan-button">
                            <div className="scan-button-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <circle cx="20" cy="21.666" r="5" stroke="white" strokeWidth="2"/>
                                <path d="M16.2969 35H23.7044C28.9061 35 31.5069 35 33.3752 33.7743C34.1841 33.2437 34.8785 32.5619 35.4189 31.7678C36.6673 29.9334 36.6673 27.3799 36.6673 22.2727C36.6673 17.1656 36.6673 14.612 35.4189 12.7777C34.8785 11.9836 34.1841 11.3017 33.3752 10.7711C32.1747 9.98356 30.6718 9.70205 28.3707 9.60143C27.2726 9.60143 26.3271 8.78447 26.1118 7.72727C25.7887 6.14148 24.3706 5 22.7234 5H17.2779C15.6307 5 14.2126 6.14148 13.8895 7.72727C13.6742 8.78447 12.7287 9.60143 11.6306 9.60143C9.32954 9.70205 7.82657 9.98356 6.62606 10.7711C5.81724 11.3017 5.12279 11.9836 4.58236 12.7777C3.33398 14.612 3.33398 17.1656 3.33398 22.2727C3.33398 27.3799 3.33398 29.9334 4.58236 31.7678C5.12279 32.5619 5.81724 33.2437 6.62606 33.7743C8.49438 35 11.0952 35 16.2969 35Z" stroke="white" strokeWidth="2"/>
                                <path d="M31.6667 16.666H30" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                            </div>
                        </div>
                        
                    </div>


                </div>
                
            </div>
        </>
    );
};

export default TeamVisitingCardList;
