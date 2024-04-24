import React from 'react';
import './lpr.css';
import burger from '../Assets/burger.png';
import pizza from '../Assets/pizza.png';
import sushi from '../Assets/sushi.png';

export const LandingPage = () => {
    return (
        <div>
            <div className="header">
                <h1>Welcome to Foodie Delight</h1>
                <p>Order delicious meals online!</p>
            </div>

            <div className="content">
                <h2>Explore Our Menu</h2>
                <div className="menu-items">
                    <div className="menu-item">
                        <img src={burger} alt="Burger" />
                        <h3>Burgers</h3>
                        <p>Delicious burgers made with fresh ingredients.</p>
                    </div>
                    <div className="menu-item">
                        <img src={pizza} alt="Pizza" />
                        <h3>Pizzas</h3>
                        <p>Authentic pizzas with a variety of toppings.</p>
                    </div>
                    <div className="menu-item">
                        <img src={sushi} alt="Sushi" />
                        <h3>Sushi</h3>
                        <p>Exquisite sushi rolls crafted by our skilled chefs.</p>
                    </div>
                </div>
            </div>
            <footer>
                <p>&copy; 2024 Foodie Delight. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
