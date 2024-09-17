import React, { useState, useEffect } from 'react';
import './tag.css';

function Tag() {
    const [tagDetails, setTagDetails] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/card/fetchAll');
            const data = await response.json();

            if (Array.isArray(data.data.data)) {
                setTagDetails(data.data.data);
            } else {
                console.log('data', data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    return (
        <div>
            <div className='tag-name'>
                <div className='add-tags' >
                    <h4 className='add-tags-h1' >
                        Add Tags
                    </h4>

                </div>
             
                <div className='tags-detail'>
                    <div className='tags-gap'>
                        {tagDetails.map((tag) => (
                            <button className='add-tags-butn' key={tag.id}>
                                <span className='frdbtn'>{tag.tagname}</span>
                            </button>
                        ))}
                    </div>
                    <div className='second-row'>
                        <button className='add-tags-butnss'>
                            <span className='span-btn'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                    <path d="M8.50001 6.50016C8.50001 6.22402 8.27615 6.00016 8.00001 6.00016C7.72387 6.00016 7.50001 6.22402 7.50001 6.50016L7.50001 8.00018H6.00001C5.72387 8.00018 5.50001 8.22404 5.50001 8.50018C5.50001 8.77632 5.72387 9.00018 6.00001 9.00018H7.50001V10.5002C7.50001 10.7763 7.72387 11.0002 8.00001 11.0002C8.27615 11.0002 8.50001 10.7763 8.50001 10.5002L8.50001 9.00018H10C10.2762 9.00018 10.5 8.77632 10.5 8.50018C10.5 8.22404 10.2762 8.00018 10 8.00018H8.50001V6.50016Z" fill="#413D7B" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.00001 1.3335C4.04197 1.3335 0.833344 4.54212 0.833344 8.50016C0.833344 12.4582 4.04197 15.6668 8.00001 15.6668C11.9581 15.6668 15.1667 12.4582 15.1667 8.50016C15.1667 4.54212 11.9581 1.3335 8.00001 1.3335ZM1.83334 8.50016C1.83334 5.09441 4.59425 2.3335 8.00001 2.3335C11.4058 2.3335 14.1667 5.09441 14.1667 8.50016C14.1667 11.9059 11.4058 14.6668 8.00001 14.6668C4.59425 14.6668 1.83334 11.9059 1.83334 8.50016Z" fill="#413D7B" />
                                </svg>Add Tag
                            </span>
                        </button>
                        <button className='add-tags-butnss'>
                            <span className='span-btn'>
                                Client
                            </span>
                        </button>
                    </div>
                </div>
                <div className='btnn'>
                    <button className='tagsavebtn'><span className='savebtn'> Save</span></button>
                    <button className='tagcancelbtn'><span className='cancelbtn'>Cancel</span> </button>
                </div>
            </div>
        </div>
    );
}

export default Tag;
