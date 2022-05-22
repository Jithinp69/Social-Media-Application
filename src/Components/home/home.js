import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Carousel from 'react-bootstrap/Carousel';
import './home.css';
import Profile from '../profile/profile';


// Main page after login
const Home = () => {
    const [followInput, setfollowInput] = useState('Follow');
    const [subCount, setSubCount] = useState(300);
    const [likeCount, setLikeCount] = useState(0);

    const follow = () => {
        setfollowInput('Followed')
        setSubCount(subCount + 1)
    }

    const SuggestedImages = [
        {
            id: 1,
            name: "img1",
            img: "https://randomuser.me/api/portraits/med/women/22.jpg"
        },
        {
            id: 2,
            name: "img2",
            img: "https://randomuser.me/api/portraits/med/men/35.jpg"
        },
        {
            id: 3,
            name: "img3",
            img: "https://randomuser.me/api/portraits/med/women/15.jpg"
        },
        {
            id: 4,
            name: "img4",
            img: "https://randomuser.me/api/portraits/med/women/75.jpg"
        },
        {
            id: 5,
            name: "img5",
            img: "https://randomuser.me/api/portraits/med/women/22.jpg"
        },
        {
            id: 6,
            name: "img6",
            img: "https://randomuser.me/api/portraits/med/men/71.jpg"
        }

    ];
    const FriendsImages = [
        {
            id: 1,
            name: "img1",
            img: "https://randomuser.me/api/portraits/med/women/19.jpg"
        },
        {
            id: 2,
            name: "img2",
            img: "https://randomuser.me/api/portraits/med/men/89.jpg"
        },
        {
            id: 3,
            name: "img3",
            img: "https://randomuser.me/api/portraits/med/women/20.jpg"
        },
        {
            id: 4,
            name: "img4",
            img: "https://randomuser.me/api/portraits/med/women/33.jpg"
        },
        {
            id: 5,
            name: "img5",
            img: "https://randomuser.me/api/portraits/med/women/72.jpg"
        },
        {
            id: 6,
            name: "img6",
            img: "https://randomuser.me/api/portraits/med/men/79.jpg"
        }

    ]
    return (
        <>

            <div className='container'>
                <div className='row'>
                    <div className="col-md-3 col-sm-3 col-xs-12"></div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className='slider-wrapper'>
                            {FriendsImages.map((image) => {
                                return (
                                    <div className='subs'>
                                        <img src={image.img} alt={image.name} title={image.name}/>
                                        
                                       
                                    </div>
                                );
                            })}

                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12"></div>
                </div>
                <div className="row">
                    <div className="col-md-3 col-sm-3 col-xs-12">
                        {/* Calling Profile component */}
                        <Profile /> 
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className='blog-wrapper'>

                            <div className='post-wrapper'>
                                <h3>Heading 1</h3>
                                <p>Description..</p>
                                <div className='post-footer'>
                                    <span><i class="fa fa-thumbs-up" aria-hidden="true"></i> {likeCount}</span>
                                    <span>by AuthorName  on 25th jan 2022</span>

                                </div>
                            </div>

                            <div className='post-wrapper'>
                                <h3>Heading 1</h3>
                                <p>Description..</p>
                                <div className='post-footer'>
                                    <span><i class="fa fa-thumbs-up" aria-hidden="true"></i> {likeCount}</span>
                                    <span>by AuthorName  on 25th jan 2022</span>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12">
                        <div className='subs-wrapper'>
                            {/* <button className='btn btn-danger' onClick={follow}>{subscribe}</button> */}
                            <h2>Suggestions For You</h2>
                           
                            {SuggestedImages.map((image) => {
                                return (
                                    <div className='subs'>
                                        <img src={image.img} alt={image.name} title={image.name}/>
                                        
                                       {image.name}
                                       <button className='btn btn-xs btn-success' onClick={follow}>{followInput}</button>

                                    </div>
                                );
                            })}
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Home;