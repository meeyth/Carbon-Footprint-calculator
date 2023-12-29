import { Link } from "react-router-dom";
import carbonFootprint from "../assets/images/cf-1.png";
import React, { useEffect } from 'react'
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";

const IconLink = ({ Icon, link, color1, color2, id }) => {

    return (
        <>

            <svg width="0" height="0" className="absolute">
                <linearGradient id={`gradient${id}`} x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop stopColor={color1} offset="0%" />
                    <stop stopColor={color2} offset="100%" />
                </linearGradient>
            </svg>
            <a href={link} className="h-12 w-12 bg-white rounded-full flex justify-center items-center shadow-xl backdrop-blur-lg cursor-pointer" >
                <Icon size={30} style={{ stroke: "url(#gradient" + id + ")" }} />
            </a>
        </>
    )
}

const Home = () => {
    return (
        <div className=" flex flex-col h-fit bg-[#F4FFDC55] ">
            <div className=" flex flex-col h-fit bg-gradient-to-br from-green-100 to-lime-100 ">

                <nav className="flex items-center justify-between h-[10%] w-full p-5 px-20 mt-5 ">
                    <h1 className="text-4xl font-orienta mr-96">Carbon-Footprint Calculator</h1>
                    <div className="w-[30%] flex justify-between items-center">
                        <Link to="/" className="hover:font-semibold  font-orienta">Home</Link>
                        <a href="https://sites.google.com/view/carboncalculator/blogs" className="hover:font-semibold font-orienta">Blog</a>
                        <a href="https://sites.google.com/view/carboncalculator/form" className="hover:font-semibold  font-orienta">Survey</a>
                        <Link to="calculate" className="hover:font-semibold  font-orienta">Calculate</Link>
                    </div>
                    <div className="transition ease-in-out hover:-translate-y-1 duration-300">
                        <a href="#connect" className="hover:bold font-orienta border-2 font-semibold border-slate-700 px-5 py-2 rounded-full text-slate-800 text-lg shadow-sm backdrop-blur-sm hover:bg-gradient-to-br from-[#D0FF6C] to-[#B8FFDD] ">
                            Connect
                        </a>
                    </div>
                </nav >

                <div className="flex justify-between items-center px-20 ">

                    <div className="flex flex-col items-center justify-between  -mt-44">
                        <p className="text-2xl md:text-4xl lg:text-7xl font-orienta w-[100%]">
                            Living Without

                        </p>
                        <p className="text-2xl md:text-4xl lg:text-7xl font-orienta w-[100%]">
                            Knowing How Much

                        </p>
                        <p className="text-2xl md:text-4xl lg:text-7xl font-orienta w-[100%]">
                            Carbon You Cause !?

                        </p>
                        <p className="text-lg font-orienta  w-[100%] text-slate-700 mt-6">
                            Let’s Know your carbon footprint together

                        </p>
                        <p className="text-lg font-orienta  w-[100%] text-slate-700">
                            with a few clicks only...

                        </p>
                        <div className="w-[100%] flex justify-start gap-x-7 mt-6">
                            <a href="https://sites.google.com/view/carboncalculator/form" className="flex justify-center h-10 w-32 font-semibold font-orienta border-2 border-slate-700 px-2 py-1 rounded-full text-slate-800 text-lg shadow-xl backdrop-blur-xl">
                                Survey
                            </a>
                            <Link to="calculate" className="flex justify-center h-10 w-32 font-semibold font-orienta border-2 border-slate-700 px-2 py-1 rounded-full text-slate-800 text-lg bg-gradient-to-br from-[#D0FF6C] to-[#B8FFDD] shadow-xl backdrop-blur-xl ">
                                Calculate
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center ">
                        <img src={carbonFootprint} alt="carbon-footprint" className="h-fit w-fit object-cover " />
                    </div>



                </div>

            </div>

            <div className="flex justify-around items-center px-20" id="connect">
                <div className="h-80 w-80 bg-[#E3FFF5] rounded-md -mt-8 p-5 overflow-y-auto no-scrollbar shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#d0ffee] duration-300 ">
                    <p className="text-md font-orienta  w-[100%] text-slate-800 text-justify">
                        The "carbon footprint" of an individual or organisation is the estimated total amount of greenhouse gas emissions over a given period of time.

                        A person's or an organization's projected total greenhouse gas emissions during a certain time period are represented by their carbon footprint, which is usually expressed in carbon dioxide equivalent (CO2e) units. An evaluation of the environmental impact in terms of gases that change the climate is provided by this measurement.
                    </p>
                </div>
                <div className="h-80 w-80 bg-[#ECFFC5] rounded-md -mt-8 p-5 overflow-y-auto no-scrollbar shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#e8ffb9] duration-300">
                    <p className="text-md font-orienta  w-[100%] text-slate-800 text-justify">
                        A person's or an organization's carbon footprint is directly correlated with how much they consume. To calculate the carbon footprint, consumption is measured in terms of both quantity and quality.

                        It is true that a person's or an organization's consumption patterns influence their carbon footprint. Their carbon footprint is projected to increase with increased consumption, particularly of high-carbon goods and services. Accurately estimating the associated greenhouse gas emissions requires measuring the carbon footprint, which involves evaluating both the quantity and quality of consumption.
                    </p>
                </div>
                <div className="h-80 w-80 bg-[#C3FFD1] rounded-md -mt-8 p-5 overflow-y-auto no-scrollbar shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#acffc0] duration-300">
                    <p className="text-md font-orienta  w-[100%] text-slate-800 text-justify">
                        A product's carbon footprint can be calculated. It contains an estimate of the greenhouse gas emissions produced throughout the product's production and delivery to the customer.

                        It is possible to compute a product's carbon footprint, which usually comprises an estimate of the greenhouse gas emissions produced during the product's whole life cycle, from the extraction and production of the raw materials to the product's transit, usage, and final disposal. This computation lessens the influence of consumer and organisational consumption on the environment while assisting them in making educated decisions.
                    </p>
                </div>
            </div>


            <div className=" flex flex-col h-fit bg-gradient-to-br from-green-100 to-lime-100 mt-10 pb-10 items-center">
                <div className="flex h-fit mt-5 justify-center">
                    <p className="text-3xl font-orienta text-slate-800 font-bold" ><u>Carbon-Footprint Calculator</u></p>
                </div>
                <div className="flex justify-evenly w-full h-full mt-10">
                    <div className="w-[33.3%] h-[60%] flex flex-col items-center ">
                        <p className="text-2xl font-nunito text-slate-900 font-bold">Support Us</p>
                        <a href="https://www.buymeacoffee.com/xswaraj">
                            <img src={require("../assets/images/support.jpg")} alt="support us" className="h-20 w-20" />
                        </a>

                    </div >
                    <div className="w-[33.3%] h-[60%] flex flex-col items-center ">
                        <p className="text-2xl font-nunito text-slate-900 font-bold h-[40%] ">Get In Touch</p>
                        <div className=" flex justify-around w-[40%] h-[90%]  mt-5 ">



                            <IconLink Icon={FiTwitter} link={"https://twitter.com/IamSwarajB"} color1={"#49DEFF"} color2={"#00A3FF"} id={1} />

                            <IconLink Icon={FiInstagram} link={"https://www.instagram.com/digital.art.a.i/"} color1={"#FF3FA7"} color2={"#FF6969"} id={2} />


                        </div>
                    </div>
                    <div className="w-[33.3%] h-[60%] flex flex-col items-center ">
                        <p className="text-2xl font-nunito text-slate-900 font-bold">Connect With The Developer</p>
                        <div className=" flex justify-around w-[40%] h-[90%]  mt-5 ">

                            <IconLink Icon={FiGithub} link={"https://github.com/meeyth"} color1={"#232323"} color2={"#FFD5A4"} id={3} />

                            <IconLink Icon={FiLinkedin} link={"https://www.linkedin.com/in/anurup-bhowmick-95a12221b/"} color1={"#448FFF"} color2={"#44D2FF"} id={4} />

                        </div>
                    </div>
                </div>
                <p className="text-center mt-10">Copyright @2024 All rights reserved | This website is made with 💚 by <a href="https://www.linkedin.com/in/anurup-bhowmick-95a12221b/"><b>Anurup</b></a></p>
                <div className="h-[2px] w-[30%] bg-slate-800 rounded-lg mt-2" />
            </div>


        </div >
    )
}

export default Home

// font - family: 'Orienta', sans - serif;