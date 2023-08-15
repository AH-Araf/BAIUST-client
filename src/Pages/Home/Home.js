import React from 'react';
import './Home.css'
import a from '../assets/baiust/a.jpg'
import b from '../assets/baiust/f.jpg'
import c from '../assets/baiust/g.jpg'
import d from '../assets/baiust/d.png'
import i from '../assets/Images/i.png'
import bus from '../assets/Images/bus.jpg'
import hostel from '../assets/Images/hostel.jpg'
import araf from '../assets/Images/araf.png'
import maho from '../assets/Images/maho.jpg'
import sadia from '../assets/Images/sadia.jpg'
import sumiya from '../assets/Images/sumiya.jpg'
import Marquee from "react-fast-marquee";


const Home = () => {
    return (
        <div className='mt-2'>

            

            {/* Carousel Part */}
            <div className="carousel w-full car-img">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={a} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={b} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={c} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={d} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            {/* Marquee Part */}
            <Marquee className='marquee-text mb-2'>
                Welcome to Bangladesh Army International University of Science & Technology (BAIUST) <span><img className='mar-img' src={i} alt="" /></span> BAIUST is directly controlled by Bangladesh Army and the members of the board of trustees are directly from Bangladesh Army <span><img className='mar-img' src={i} alt="" /></span> Nine years of excellence & pride <span><img className='mar-img' src={i} alt="" /></span>
            </Marquee>

            {/* Services design */}
            <div className='home-service'>
                <p className='h-s-t'>Our Current Services</p>
                <div className='home-service-container'>
                    <div className='service-card'>
                        <img src={bus} alt="" />
                        <p className='hsd'>Transport</p>
                        <p>Semester- Spring 2024</p>
                        <p>Fee- <span className='taka'>6700/-</span> Taka per semester</p>
                        <p>Total Seats- 800</p>
                    </div>
                    <div className='service-card'>
                        <img src={hostel} alt="" />
                        <p className='hsd'>Hostel</p>
                        <p>Semester- Spring 2024</p>
                        <p>Fee- <span className='taka'>7000/-</span> Taka per month</p>
                        <p>Total Seats- 300</p>
                    </div>
                </div>
            </div>

            {/* Team Members */}
            <div className='mt-20 members-container'>
                <p className='h-s-t'>This Website Created By</p>
                
                <div className='members-container1'>
                    <div className='member-card'>
                        <img src={araf} alt="" />
                        <div>
                            <p className='m-name'>Md. Arafat Hossain</p>
                            <p>ID- 1111014</p>
                            <p>Level- 04, Term- 01</p>
                            <p>Section- A</p>
                            <p>Department- CSE</p>
                            <p>Semester- Fall 2023</p>
                            <p>BAIUST</p>
                        </div>
                    </div>
                    <div className='member-card'>
                        <img src={maho} alt="" />
                        <div>
                            <p className='m-name'>Arisa Jinnat Maho</p>
                            <p>ID- 1111002</p>
                            <p>Level- 04, Term- 01</p>
                            <p>Section- A</p>
                            <p>Department- CSE</p>
                            <p>Semester- Fall 2023</p>
                            <p>BAIUST</p>
                        </div>
                    </div>
                </div>



                <div className='members-container1 mt-20'>
                    <div className='member-card'>
                        <img src={sumiya} alt="" />
                        <div>
                            <p className='m-name'>Sumiya Jakariya</p>
                            <p>ID- 1111012</p>
                            <p>Level- 04, Term- 01</p>
                            <p>Section- A</p>
                            <p>Department- CSE</p>
                            <p>Semester- Fall 2023</p>
                            <p>BAIUST</p>
                        </div>
                    </div>
                    <div className='member-card'>
                        <img src={sadia} alt="" />
                        <div>
                            <p className='m-name'>Umma Sadia </p>
                            <p>ID- 1111010</p>
                            <p>Level- 04, Term- 01</p>
                            <p>Section- A</p>
                            <p>Department- CSE</p>
                            <p>Semester- Fall 2023</p>
                            <p>BAIUST</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;