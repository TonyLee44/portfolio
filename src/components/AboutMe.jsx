import React from 'react';
import { useEffect } from 'react';
import './AboutMe.scss';

export default function AboutMe() {

    useEffect(() => {
        const prev = document.querySelector('.prev');
        const next = document.querySelector('.next');
        const images = document.querySelector('.carousel').children;
        const totalImages = images.length;
        let index = 0;


        prev.addEventListener('click', () => {
            nextImage('next');
        })

        next.addEventListener('click', () => {
            nextImage('prev');
        })

        function nextImage(direction) {
            if (direction === 'next') {
                index++;
                if (index === totalImages) {
                    index = 0;
                }
            } else {
                if (index === 0) {
                    index = totalImages - 1;
                } else {
                    index--;
                }
            }

            for (let i = 0; i < images.length; i++) {
                images[i].classList.remove('main');
            }
            images[index].classList.add('main');
        }
    }, []);

    return (
        <div id="home">
            <div className="background">
                <div className="aboutContainer">
                    <img className="myImage" src="assets/tony.png" alt="Tony" />
                    <h1 className="aboutMe-title">About Me</h1>
                    <h2 className="aboutMe-subtitle"> Associate Software Engineer</h2>
                    <p className="aboutMe-description">
                        My name is Tony Lee, and I am an aspiring Software Engineer. I enjoy learning about how different programs work.
                        I am working on becoming a full stack developer, and I would like to expand my knowledge. I want to use my experiences and my critical thinking skills to help solve problems. The languages that I am currently using are HTML, CSS, JavaScript, Node.js, ReactJS. I am always learning and glad to have chat!
                        You can connect with me on <a href="https://www.linkedin.com/in/tonylee1996/">LinkedIn</a>.
                    </p>
                </div>
                <div className="slider-container">
                    <div className="carousel-container">
                        <div className="navigation">
                            <div className="prev nav-btn">{"<"}</div>
                            <div className="next nav-btn">{">"}</div>
                            <div className="carousel">
                                <div className="item main">
                                    <img src="assets/ecommerce-home.png" alt="E-commerce Home" />
                                    <div className="caption">E-commerce Home</div>
                                </div>
                                <div className="item">
                                    <img src="assets/ecommerce-product.png" alt="E-commerce Products" />
                                    <div className="caption">E-commerce Products</div>
                                </div>
                                <div className="item">
                                    <img src="assets/ecommerce-contact.png" alt="E-commerce Contact" />
                                    <div className="caption">E-commerce Contact</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}