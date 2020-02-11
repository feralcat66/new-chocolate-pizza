import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return(
            <div> 
            <p><img src="profile-pic.png" /> Vanessa Stevenson</p>
            <p>Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.
            <button class="share">Share Recipe</button></p>
        </div>
        )
    }
}