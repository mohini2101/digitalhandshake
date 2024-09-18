import React, { useState, useEffect } from 'react';
import './MemberList.css';
import profilesimg1 from '../profileimg/profile_image.png'
import profilesimg2 from '../profileimg/profile_image1.png'
import profilesimg3 from '../profileimg/profile_image2.png'
import profilesimg4 from '../profileimg/profile_image3.png'
import profilesimg5 from '../profileimg/profile_image4.png'
import profilesimg6 from '../profileimg/profile_image5.png'

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);
  const [showDeleteFrame, setShowDeleteFrame] = useState(false);
  const [selectedProfileId, setSelectedProfileId] = useState(null);
  const [isNameFrameVisible, setIsNameFrameVisible] = useState(false);
  const [isButtonFrameOpen, setIsButtonFrameOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [profiles, setProfiles] = useState([]);
  const [allProfiles, setAllProfiles] = useState([]);
  const [blurDeleteOption, setBlurDeleteOption] = useState(false);


  const handleAddIconClick = () => {
    setIsNameFrameVisible(!isNameFrameVisible);

    if (!isButtonFrameOpen) {

      document.querySelector('.buttonframe').classList.remove('closed');
      setIsButtonFrameOpen(true);
    } else {

      document.querySelector('.buttonframe').classList.add('closed');
      setIsButtonFrameOpen(false);
    }
  };



  const handleNameFrameClick = (e) => {

    e.stopPropagation();
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchQuery(value);

    let filtered = allProfiles;

    if (value.trim() !== '') {

      value.split('').forEach((letter) => {
        filtered = filtered.filter((profile) =>
          profile.name && profile.name.toLowerCase().includes(letter.toLowerCase())
        );
      });
    }

    setProfiles(filtered);
  };


  const handleBackToAll = () => {
    setSearchQuery('');
    setProfiles(allProfiles);
  };

  const toggleForm = () => {
    setIsActive(!isActive);
  };

  const handleCancel = () => {
    setIsActive(false);
  };

  const handleAdd = () => {
    setIsActive(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const popups = document.querySelectorAll('.popup');
      popups.forEach((popup) => {
        if (!popup.contains(event.target)) {
          popup.style.display = 'none';
        }
      });
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleMoreIconClick = (event) => {
      const icon = event.target.closest('.more-icon');
      if (icon) {
        event.stopPropagation();
        const popupContainer = icon.parentElement.querySelector('.popup');

        document.querySelectorAll('.popup').forEach((popup) => {
          if (popup !== popupContainer) {
            popup.style.display = 'none';
          }
        });

        popupContainer.style.display =
          popupContainer.style.display === 'block' ? 'none' : 'block';
      }
    };

    document.addEventListener('click', handleMoreIconClick);

    return () => {
      document.removeEventListener('click', handleMoreIconClick);
    };
  }, [profiles]);


  const toggleDeleteFrame = (profileId) => {
    setShowDeleteFrame(!showDeleteFrame);
    setBlurDeleteOption(true); 
    setSelectedProfileId(profileId);
  };

  const handleDelete = () => {
    const updatedProfiles = profiles.filter(profile => profile.id !== selectedProfileId);
    setProfiles(updatedProfiles);
    setShowDeleteFrame(false);
    setBlurDeleteOption(false); 
  };


  const toggleAdmin = (profileId) => {
    const updatedProfiles = profiles.map((profile) => {
      if (profile.id === profileId) {

        const newRole = profile.role === 'Admin' ? '' : 'Admin';
        return { ...profile, role: newRole };
      }
      return profile;
    });

    setProfiles(updatedProfiles);
  };

  useEffect(() => {

    const fetchedProfiles = [
      { id: 1, name: 'Cody Fisher', role: 'Admin', image: profilesimg1 },
      { id: 2, name: 'Floyd Miles', role: 'Admin', image: profilesimg2 },
      { id: 3, name: 'Jane Cooper', image: profilesimg3 },
      { id: 4, name: 'Darlene Robertson', image: profilesimg4 },
      { id: 5, name: 'Bessie Cooper', image: profilesimg5 },
      { id: 6, name: 'Brooklyn Simmons', image: profilesimg6 },
      { id: 7, name: 'Courtney Henry', image: profilesimg5 },
      { id: 8, name: 'Courtney Henry', image: profilesimg4 },
      { id: 9, name: 'Courtney Henry', image: profilesimg3 },
    ];

    setProfiles(fetchedProfiles);
    setAllProfiles(fetchedProfiles);
  }, []);


  return (
    <>

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


      <div className='container'>
        <div className="navbar">
          <div className="vector">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M2.66602 15.9997C2.66602 10.9714 2.66602 8.4572 4.22811 6.8951C5.79021 5.33301 8.30437 5.33301 13.3327 5.33301H18.666C23.6943 5.33301 26.2085 5.33301 27.7706 6.8951C29.3327 8.4572 29.3327 10.9714 29.3327 15.9997C29.3327 21.028 29.3327 23.5421 27.7706 25.1042C26.2085 26.6663 23.6943 26.6663 18.666 26.6663H13.3327C8.30437 26.6663 5.79021 26.6663 4.22811 25.1042C2.66602 23.5421 2.66602 21.028 2.66602 15.9997Z" stroke="#413D7B" stroke-width="1.5" />
              <path d="M13.3333 22H8" stroke="#413D7B" stroke-width="1.5" stroke-linecap="round" />
              <path d="M10.6667 18H8" stroke="#413D7B" stroke-width="1.5" stroke-linecap="round" />
              <path d="M2.66602 13.333L29.3327 13.333" stroke="#413D7B" stroke-width="1.5" stroke-linecap="round" />
              <path d="M18.666 19.9997C18.666 18.7426 18.666 18.1141 19.0565 17.7235C19.4471 17.333 20.0756 17.333 21.3327 17.333C22.5898 17.333 23.2183 17.333 23.6088 17.7235C23.9993 18.1141 23.9993 18.7426 23.9993 19.9997C23.9993 21.2568 23.9993 21.8853 23.6088 22.2758C23.2183 22.6663 22.5898 22.6663 21.3327 22.6663C20.0756 22.6663 19.4471 22.6663 19.0565 22.2758C18.666 21.8853 18.666 21.2568 18.666 19.9997Z" stroke="#413D7B" stroke-width="1.5" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M25.3341 12.9391V12.0003C25.3341 6.84567 21.1554 2.66699 16.0007 2.66699C10.8461 2.66699 6.6674 6.84567 6.6674 12.0003V12.9391C6.6674 14.0658 6.33391 15.1672 5.70896 16.1047L4.17749 18.4019C2.77864 20.5001 3.84654 23.3522 6.27949 24.0157C12.6441 25.7515 19.3574 25.7515 25.722 24.0157C28.1549 23.3522 29.2228 20.5001 27.824 18.4019L26.2925 16.1047C25.6676 15.1672 25.3341 14.0658 25.3341 12.9391Z" stroke="#413D7B" stroke-width="1.5" />
              <path d="M10 25.333C10.8734 27.6634 13.2299 29.333 16 29.333C18.7701 29.333 21.1266 27.6634 22 25.333" stroke="#413D7B" stroke-width="1.5" stroke-linecap="round" />
            </svg>
          </div>
          <div className="profileheader">
            <div className='img'></div>
            <div className="profiletext">
              <span className="profile-name">Hi, Toney Stark</span><br />
              <span className="profile-status">Create and share your business card</span>
            </div>
          </div>
          <div className="wrapper">
            <div className="searchbar" >
              <input className='searchinput'
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search Cards"
              />


              <div className='searchbutton' onClick={handleBackToAll}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 2.75C6.66751 2.75 2.75 6.66751 2.75 11.5C2.75 16.3325 6.66751 20.25 11.5 20.25C16.3325 20.25 20.25 16.3325 20.25 11.5C20.25 6.66751 16.3325 2.75 11.5 2.75ZM1.25 11.5C1.25 5.83908 5.83908 1.25 11.5 1.25C17.1609 1.25 21.75 5.83908 21.75 11.5C21.75 14.0605 20.8111 16.4017 19.2589 18.1982L22.5303 21.4697C22.8232 21.7626 22.8232 22.2374 22.5303 22.5303C22.2374 22.8232 21.7626 22.8232 21.4697 22.5303L18.1982 19.2589C16.4017 20.8111 14.0605 21.75 11.5 21.75C5.83908 21.75 1.25 17.1609 1.25 11.5Z" fill="#413D7B" />
                </svg>
              </div>
            </div>
            {/* add member */}
            <div className={`background1 ${isActive ? 'active1' : ''}`} id="background"></div>
            <div className={`addmember1 ${isActive ? 'active1' : ''}`} id="addMemberForm">
              <div className="member1">
                <div className="form1">
                  <div className="membertext">
                    <div className="text">Add Member</div>
                  </div>
                  <div className="email">
                    <div className="emailframe" >
                      <input className="emailtext"
                        type='email'
                        placeholder='Enter Email ' />
                    </div>
                  </div>
                </div>
                <div className="addframe">
                  <div className="addicon" onClick={handleAddIconClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <g clip-path="url(#clip0_1426_2529)">
                        <path d="M8.50065 5.99967C8.50065 5.72353 8.27679 5.49967 8.00065 5.49967C7.72451 5.49967 7.50065 5.72353 7.50065 5.99967L7.50065 7.49969H6.00065C5.72451 7.49969 5.50065 7.72355 5.50065 7.99969C5.50065 8.27583 5.72451 8.49969 6.00065 8.49969H7.50065V9.99967C7.50065 10.2758 7.72451 10.4997 8.00065 10.4997C8.27679 10.4997 8.50065 10.2758 8.50065 9.99967L8.50065 8.49969H10.0007C10.2768 8.49969 10.5007 8.27583 10.5007 7.99969C10.5007 7.72355 10.2768 7.49969 10.0007 7.49969H8.50065V5.99967Z" fill="#413D7B" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00065 0.833008C4.04261 0.833008 0.833984 4.04163 0.833984 7.99967C0.833984 11.9577 4.04261 15.1663 8.00065 15.1663C11.9587 15.1663 15.1673 11.9577 15.1673 7.99967C15.1673 4.04163 11.9587 0.833008 8.00065 0.833008ZM1.83398 7.99967C1.83398 4.59392 4.5949 1.83301 8.00065 1.83301C11.4064 1.83301 14.1673 4.59392 14.1673 7.99967C14.1673 11.4054 11.4064 14.1663 8.00065 14.1663C4.5949 14.1663 1.83398 11.4054 1.83398 7.99967Z" fill="#413D7B" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1426_2529">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    {isNameFrameVisible && (
                      <div className='name'>
                        <div className='nameframe' onClick={handleNameFrameClick}>
                          <input className='nametext'
                            type='text'
                            placeholder='Enter Name' />
                        </div>
                      </div>
                    )}

                  </div>
                  <div className="usertext">Add Members</div>
                </div>
                <br /><br />
                <div className="buttonframe closed" >

                  <div className="cancelbutton" onClick={handleCancel}>
                    <div className="canceltext">cancel</div>
                  </div>
                  <div className="addbutton" onClick={handleAdd}>
                    <div className="addtext">Add</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="adduser" id="addUserIcon" onClick={toggleForm}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M30.8327 32.5H24.166" stroke="#413D7B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M27.5 35.8337V29.167" stroke="#413D7B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M20.2663 18.1163C20.0997 18.0997 19.8997 18.0997 19.7163 18.1163C15.7497 17.983 12.5997 14.733 12.5997 10.733C12.583 6.64967 15.8997 3.33301 19.983 3.33301C24.0663 3.33301 27.383 6.64967 27.383 10.733C27.383 14.733 24.2163 17.983 20.2663 18.1163Z" stroke="#413D7B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19.9824 36.3501C16.9491 36.3501 13.9324 35.5835 11.6324 34.0501C7.59909 31.3501 7.59909 26.9501 11.6324 24.2668C16.2158 21.2001 23.7324 21.2001 28.3158 24.2668" stroke="#413D7B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>

          </div>

          <div className='list'>
            <div className="profile-list" >
              {profiles.map((profile) => (
                <div className="profile-wrapper" key={profile.id}>
                  <div className="memberlistprofile">
                    <img src={profile.image} alt="" />
                    <div className="profile-text">
                      <h3>{profile.name}</h3>
                      <p>{profile.role}</p>
                    </div>
                  </div>

                  <div className={`popup-container1 ${blurDeleteOption ? 'blur' : ''}`}>
                    <div className="popup">
                      <div className="popuptext">
                        <div onClick={() => toggleAdmin(profile.id)}>
                          {profile.role === 'Admin' ? 'Remove Admin' : 'Make an admin'}
                        </div>
                      </div>
                      <div className="popuptext">
                        <div className="middleline"></div>
                      </div>
                      <div className="popuptext">
                        <div className="delete-option" onClick={() => toggleDeleteFrame(profile.id)}>Delete Member</div>
                      </div>
                    </div>
                  </div>
                  <div className={`more-icon ${showDeleteFrame ? 'blur' : ''}`} id={`moreIcon${profile.id}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17C10.9 17 10 17.9 10 19Z" stroke="#413D7B" />
                      <path d="M10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3C10.9 3 10 3.9 10 5Z" stroke="#413D7B" />
                      <path d="M10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12Z" stroke="#413D7B" />
                    </svg>
                  </div>

                  {showDeleteFrame && (
                    <div>
                      <div className={`background1 ${showDeleteFrame ? 'active1' : ''}`} onClick={() => setShowDeleteFrame(false)}></div>
                      <div className={`deleteframe ${showDeleteFrame ? 'active1' : ''}`}>
                        <div className="deletetext">Are you sure you want to delete member?</div>
                        <div className="mandetorytext"></div><br />
                        <div className="button">
                          <div className="closebutton" onClick={() => setShowDeleteFrame(false)}>
                            <div className="closetext">Cancel</div>
                          </div>
                          <div className="deletebutton" onClick={handleDelete}>
                            <div className="removetext">Delete</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}


                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Sidebar;