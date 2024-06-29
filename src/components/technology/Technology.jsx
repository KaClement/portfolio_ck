import { Button } from 'bootstrap';
import React, {useState, useEffect} from 'react';
import './technology.css'


import html from '../../assets/html.png'
import cssLogo from '../../assets/css-logo.png'
import reactimg from '../../assets/react-img.png'
import py from '../../assets/python-img.png'
import node from '../../assets/node.png'
import azure from '../../assets/azure.png'
import c_logo from '../../assets/c-logo.png'
import git from '../../assets/git-logo.png'
import js from '../../assets/js-logo.png'
import mongoDB from '../../assets/mongoDB-logo.png'
import mysql_logo from '../../assets/mysql-logo.png'
import scikit_logo from '../../assets/scikit-learn-logo.jpg'

const Technology = () =>{

    const [images, setImages] = useState([
        py, node, azure, html, cssLogo, reactimg, c_logo, git, js, mongoDB, mysql_logo,
        py, node, azure, html, cssLogo, reactimg, c_logo, git, js, mongoDB, mysql_logo, 
        py, node, azure, html, cssLogo, reactimg, c_logo, git, js, mongoDB, mysql_logo, 
        py, node, azure, html, cssLogo, reactimg, c_logo, git, js, mongoDB, mysql_logo, 
        
    ]);

    const [currentIndex, setCurrentIndex] = useState(0);
    

    const prevImage = () => {
        if (currentIndex === 0) {
            setCurrentIndex(images.length - 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const nextImage = () => {
        if (currentIndex === images.length - 15) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };

    

    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 3000);
        return () => clearInterval(interval);
    }, [currentIndex]);


    return (
        <section id='technology'>
            <div className="carousel">
                <div className="carousel__wrapper" style={{ transform: `translateX(-${(currentIndex * 100) / images.length}%)` }}>
                    {images.map((image, index) => (
                        <div key={index} className="carousel__slide">
                            <img src={image} alt={`Image ${index}`} />
                            
                        </div>
                    ))}
                </div>
                {/* { <div className='btn-div'>
                    <button className='btn-class' onClick={prevImage}> &lt;</button>
                    <button className='btn-class' onClick={nextImage}>&gt;</button> 
                </div> } */}
            </div>

            

        </section>
    );
};
export default Technology;