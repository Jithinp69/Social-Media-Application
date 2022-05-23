import React, { useState } from "react";
import profilePic from "../../Assets/images/profile.webp";
import "./profile.css";
import { Link } from "react-router-dom";
import EditProfile from "./editProfile";

const Profile = () => {

    const [like, setLike] = useState(240);
    const [likeColor, setlikeColor] = useState("fa fa-heart-o");
    const handellikeChange = () => {
        if (likeColor === "fa fa-heart") {
            setlikeColor("fa fa-heart-o");
        } else {
            setlikeColor("fa fa-heart");
        }
        console.log("you have clicked");
        setLike(like + 1);
    };

    const editProfile = () => {
        <EditProfile />
        console.log("edit");
        // }

        // const [like, setLike] = useState(240);
        // const [likeColor, setlikeColor] = useState("fa fa-heart-o");
        // const handellikeChange = () => {
        //     if (likeColor === "fa fa-heart") {
        //         setlikeColor("fa fa-heart-o");
        //     } else {
        //         setlikeColor("fa fa-heart");
        //     }
        //     console.log("you have clicked");
        //     setLike(like + 1);
        // };
    }
    return (
        <>
            <div className="container ">
                <div className="row">
                    <div className="col-sm-1 col-md-1"></div>
                    <div className="col-sm-10 col-md-10 ">
                        <div className="row ">
                            <div className="col-sm-1 col-md-1"></div>
                            <div className="col-sm-3 col-md-3 profile-img-wrapper">
                                <div className="">
                                    <img src={profilePic} alt="profilePic" />
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 profile-wrapper">
                                <div className="Homename">
                                    <h3>Tiny Coders</h3>

                                    <div className="user-details">
                                        <ul>
                                            <li>10 Posts</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <li>80 Friends</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <li>80 Friend Request</li>
                                        </ul>

                                        <span>
                                            <i class="fa fa-envelope" aria-hidden="true"></i>
                                            &nbsp;&nbsp;&nbsp; TinyCoders@gmail.com
                                        </span>
                                        <span>
                                            <i class="fa fa-phone-square" aria-hidden="true"></i>
                                            &nbsp;&nbsp;&nbsp; +91-1234567890
                                        </span>
                                        <span>
                                            {" "}
                                            <i class="fa fa-twitter-square" aria-hidden="true"></i>
                                            &nbsp;&nbsp;&nbsp; @tinycoders
                                        </span>
                                        <span>
                                            {" "}
                                            <i class="fa fa-instagram" aria-hidden="true"></i>
                                            &nbsp;&nbsp;&nbsp; @tinycoders
                                        </span>
                                        <span>
                                            {" "}
                                            <i class="fa fa-facebook-square" aria-hidden="true"></i>
                                            &nbsp;&nbsp;&nbsp; tiny@hero.com
                                        </span>

                                        <button className="btn btn-success pull-right ">
                                            Edit Profile
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-1 col-md-1"></div>
                        </div>
                    </div>
                    <div className="col-sm-1 col-md-1"></div>
                </div>

                <div className="row UserPost">
                    <div className="col-sm-2 col-md-2"></div>
                    <div className="newPostbody col-sm-8 col-md-8">
                        <div class="card">
                            <div className="">
                                <div className="col-sm-6 d-flex">
                                    <div className="col-sm-2 friendpic">
                                        <img src={profilePic} alt="profilePic" />
                                    </div>
                                    <div className="col-sm-10 friendName">
                                        <h5>Tiny Coders</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled it to make a type
                                    specimen book. It has survived not only five centuries, but
                                    also the leap into electronic typesetting, remaining
                                    essentially unchanged. It was popularised in the 1960s with
                                    the release of Letraset sheets containing Lorem Ipsum
                                    passages, and more recently with desktop publishing software
                                    like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>
                            <div className="likes d-flex">
                                <i class={likeColor} onClick={handellikeChange}>
                                    &nbsp;{like}
                                </i>
                                &nbsp;&nbsp;&nbsp;
                                <i class="fa fa-comment-o comment"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2 col-md-2"></div>
                    <div className="newPostbody col-sm-8 col-md-8">
                        <div class="card">
                            <div className="">
                                <div className="col-sm-6 d-flex">
                                    <div className="col-sm-2 friendpic">
                                        <img src={profilePic} alt="profilePic" />
                                    </div>
                                    <div className="col-sm-10 friendName">
                                        <h5>Tiny Coders</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="ImagePost">
                                    <img
                                        src="https://placeimg.com/640/480/any"
                                        alt="profilePic"
                                    />
                                    <br></br>
                                    <br></br>
                                    <div className="imageText">
                                        <p>
                                            Contrary to popular belief, Lorem Ipsum is not simply
                                            random text. It has roots in a piece of classical Latin
                                            literature from 45 BC, making it over 2000 years old
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="likes d-flex">
                                <i class={likeColor} onClick={handellikeChange}>
                                    &nbsp;{like}
                                </i>
                                &nbsp;&nbsp;&nbsp;
                                <i class="fa fa-comment-o comment"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Profile;
