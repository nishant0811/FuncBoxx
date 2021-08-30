import React from 'react'
import { useState } from 'react';
import {
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import './style.css'
import Navbar from '../Navbar';
import bg from './assets/loginBg.svg'

export default function Login() {

    let cardPosion = [0 , 1 , 2 , 3 , 4 , 5 , 6];
    let images = document.getElementsByClassName('item');

    function next(){
    let length =cardPosion.length
    let temp = cardPosion[length-1];
    for(let i=length-1; i>0 ; i--){
        cardPosion[i] = cardPosion[i-1];
    }
    cardPosion[0] = temp;
    images[cardPosion[0]].classList.remove('point6')
    images[cardPosion[0]].classList.add('active')
    images[cardPosion[1]].classList.remove('active')
    images[cardPosion[1]].classList.add('point1')
    images[cardPosion[2]].classList.remove('point1')
    images[cardPosion[2]].classList.add('point2')
    images[cardPosion[3]].classList.remove('point2')
    images[cardPosion[3]].classList.add('point3')
    images[cardPosion[4]].classList.remove('point3')
    images[cardPosion[4]].classList.add('point4')
    images[cardPosion[5]].classList.remove('point4')
    images[cardPosion[5]].classList.add('point5')
    images[cardPosion[6]].classList.remove('point5');
    images[cardPosion[6]].classList.add('point6');
    }


    setInterval(()=>{
    next()
    },2500);



    const [details, setDetails] = useState({
        username: "User name",
        password: "Password",
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setDetails({ ...details, [name]: value });
        // console.log(details)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(details)
    };

    return (
        <div>
            <Navbar/>
            <div className="signup__container">
                <div style={{backgroundImage: `url(${bg})`}} className="circular__carosel">
                    <div className="car-wrapper">
                    <ul className="carousel">
                        <li className="item active"><img src="https://www.gettyimages.es/gi-resources/images/500px/983794168.jpg" /></li>
                        <li className="item point1"><img src="https://eltitular.do/et/wp-content/uploads/2018/03/myanmar.jpg" /></li>
                        <li className="item point2"><img src="https://www.gettyimages.es/gi-resources/images/500px/983794168.jpg" /></li>
                        <li className="item point3"><img src="https://eltitular.do/et/wp-content/uploads/2018/03/myanmar.jpg" /></li>
                        <li className="item point4"><img src="https://eltitular.do/et/wp-content/uploads/2018/03/myanmar.jpg" /></li>
                        <li className="item point5"><img src="https://eltitular.do/et/wp-content/uploads/2018/03/myanmar.jpg" /></li>
                        <li className="item point6"><img src="https://eltitular.do/et/wp-content/uploads/2018/03/myanmar.jpg" /></li>
                    </ul>
                    </div>
                </div>
                <div className="login__signup">
                    <div className="title">
                    <h1 className="active">
                        <span>Login</span>
                    </h1>
                    <h1 className>
                        <Link to="/Signup">Signup</Link>
                    </h1>
                    </div>
                    <div className="content active">
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="username" placeholder={details.username} onChange={handleChange}/>
                        <input type="password" name="password" placeholder={details.password} onChange={handleChange}/>
                        <button type="submit" name="button" className="submit">Login</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
