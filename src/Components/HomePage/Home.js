import React, { useState } from "react";
import profilePic from "../../Assets/images/profile.webp";
import "../HomePage/Home.css";

import Friends from "./Friends";
import { Link } from "react-router-dom";

export default function Home() {
  const friendsData = [
    {
      name: "Vineet Dixit",
      pic: "/UserImages/profile.webp",
    },
    {
      name: "Shivanshu Pandey",
      pic: "/UserImages/10.jpg",
    },
    {
      name: "Aseem Girdhar",
      pic: "/UserImages/2.jpg",
    },
    {
      name: "Balraj Singh Bhullar",
      pic: "/UserImages/6.jpg",
    },
    {
      name: "Rashmi",
      pic: "/UserImages/15.jpg",
    },
    {
      name: "Pushpanjali",
      pic: "/UserImages/9.jpg",
    },
    {
      name: "Sachin Singh",
      pic: "/UserImages/12.png",
    },
    {
      name: "Arjun Singh",
      pic: "/UserImages/18.jpg",
    },
    {
      name: "Shivam Rai",
      pic: "/UserImages/6.jpg",
    },
  ];

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

  return (
    <div className="homeBody">
      <div className="row">
        <div className="col-sm-2">
          <div class="card cardBody">
            <Link to="/profile">
              <div className="profilePic">
                <img src={profilePic} />
              </div>
            </Link>

            <div className="Homename">
              <h3>Tiny Coders</h3>
            </div>
          </div>
        </div>
        <div className="col-sm-8">
          <div>
            <div class="card">
              <h5 class="card-header">What's on your Mind</h5>
              <div class="card-body">
                <div class="input-group">
                  <textarea
                    class="form-control"
                    aria-label="With textarea"
                    placeholder="What are you thinking for today..."
                  ></textarea>
                </div>
                <br></br>
                <div className="d-flex">
                  <button class="btn btn-primary">Upload Post</button>
                  &nbsp;
                  <button class="btn btn-success">Upload Photo</button>
                </div>
              </div>
            </div>
          </div>
          <div className="newPostbody">
            <div class="card">
              <div className="">
                <div className="col-sm-6 d-flex">
                  <div className="col-sm-2 friendpic">
                    <img src={profilePic} alt="profilePic" />
                  </div>
                  <div className="col-sm-10 friendName">
                    <h5>Vineet Dixit</h5>
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
          <div className="newPostbody">
            <div class="card">
              <div className="">
                <div className="col-sm-6 d-flex">
                  <div className="col-sm-2 friendpic">
                    <img src={profilePic} alt="profilePic" />
                  </div>
                  <div className="col-sm-10 friendName">
                    <h5>Rashmi</h5>
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
          <div className="newPostbody">
            <div class="card">
              <div className="">
                <div className="col-sm-6 d-flex">
                  <div className="col-sm-2 friendpic">
                    <img src={profilePic} />
                  </div>
                  <div className="col-sm-10 friendName">
                    <h5>Jitin Kotyan</h5>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="ImagePost">
                  <img src="https://placeimg.com/640/480/any" />
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
          <div className="newPostbody">
            <div class="card">
              <div className="">
                <div className="col-sm-6 d-flex">
                  <div className="col-sm-2 friendpic">
                    <img src={profilePic} />
                  </div>
                  <div className="col-sm-10 friendName">
                    <h5>Shubham Jangra</h5>
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
        </div>
        <div className="col-sm-2">
          <div className="friendSuggestion">
            <h4>Friends Suggestions</h4>
            <Friends friendsData={friendsData} />
          </div>
        </div>
      </div>
    </div>
  );
}
