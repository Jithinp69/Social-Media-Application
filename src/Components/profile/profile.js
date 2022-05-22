import React from 'react';
import { useState } from 'react';

const Profile = () => {
    const [subCount, setSubCount] = useState(300);

    return (

        <>
            <div className="sidebar-wrapper">
                <div className="user-img">
                    <img src="https://randomuser.me/api/portraits/women/85.jpg" />
                </div>
                <div className="user-details">
                    <strong><i class="fa fa-user" aria-hidden="true"></i> Maria</strong>
                    <strong><i class="fa fa-envelope" aria-hidden="true"></i> hero@gmail.com</strong>
                    <strong><i class="fa fa-phone-square" aria-hidden="true"></i> +91-1234567890</strong>
                    <h3> <i class="fa fa-users" aria-hidden="true"></i> {subCount}  Friends</h3>
                </div>
            </div>
        </>
    );
}

export default Profile;
