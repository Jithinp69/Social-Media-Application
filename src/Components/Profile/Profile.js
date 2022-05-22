import React, { useState } from "react";
import "../Profile/Profile.css";
import profileImage from "../../Assets/images/profile.webp";

export default function Profile() {
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
    <>
      <div className="col-sm-12 about-profile container">
        <div className="col-sm-3 blank1"></div>
        <div className="col-sm-6 profile-Div">
          <div className="profile-pic">
            <img src={profileImage} alt="" />
          </div>
          <div className="profile-name">Tiny Coders</div>

          <div>
            <h6>DoB: 18th March</h6>
          </div>
          <div className="subsCount">
            <h6>
              Lives In: 18 S Newport Street, Englewood,co, 80111 United States
            </h6>
          </div>
        </div>
        <div className="col-sm-3 blank1"></div>
      </div>
      <div className="container sol-sm-12 about-me">
        <div className="newPostbody">
          <div class="card">
            <div className="">
              <div className="col-sm-6 d-flex">
                <div className="col-sm-2 friendpic">
                  <img src={profileImage} />
                </div>
                <div className="col-sm-10 friendName">
                  <h5>Tiny Coders</h5>
                </div>
              </div>
            </div>
            <div class="card-body">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
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
                  <img src={profileImage} />
                </div>
                <div className="col-sm-10 friendName">
                  <h5>Tiny Coders</h5>
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
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old
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
    </>
  );
}
