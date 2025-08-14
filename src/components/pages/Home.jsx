import React, { useState, useRef } from 'react';
import { motion } from "framer-motion";
import { FiArrowUpLeft } from "react-icons/fi";
import {
  FaVideo, FaPaintBrush, FaBullhorn, FaUserPlus, FaRobot, FaChartLine,
  FaSearch, FaDollarSign, FaCode, FaMobileAlt, FaCube, FaHome,
  FaTooth, FaHeartbeat, FaFilter, FaFileInvoiceDollar
} from "react-icons/fa";

// VideoCard Component
const VideoCard = ({ src, currentPlaying, setCurrentPlaying, videoIndex }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      if (currentPlaying !== null && currentPlaying !== videoIndex) {
        const prevVideo = document.getElementById(`video-${currentPlaying}`);
        if (prevVideo) {
          prevVideo.pause();
        }
      }
      setCurrentPlaying(videoIndex);
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: videoIndex * 0.05 }}
      className="relative group cursor-pointer"
    >
      <video
        id={`video-${videoIndex}`}
        ref={videoRef}
        src={src}
        playsInline
        className="rounded-lg w-full aspect-[1/2] object-cover shadow-lg"
        controls={isPlaying}
        onClick={handleVideoClick}
      />
    </motion.div>
  );
};

const Home = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const services = [
    { icon: <FaVideo />, title: "Video Editing" },
    { icon: <FaPaintBrush />, title: "Graphic Design" },
    { icon: <FaBullhorn />, title: "SMMA" },
    { icon: <FaUserPlus />, title: "Lead Gen" },
    { icon: <FaRobot />, title: "AI Automation with AI Agents" },
    { icon: <FaChartLine />, title: "Digital Marketing" },
    { icon: <FaSearch />, title: "SEO" },
    { icon: <FaDollarSign />, title: "ROI Media Marketing" },
    { icon: <FaCode />, title: "Web Development" },
    { icon: <FaMobileAlt />, title: "App Development" },
    { icon: <FaCube />, title: "Web 3 Marketing & Development" },
    { icon: <FaFilter />, title: "Funnel Management" }
  ];

  const industries = [
    { icon: <FaHome />, title: "Real Estate" },
    { icon: <FaTooth />, title: "Dentist" },
    { icon: <FaHeartbeat />, title: "Health Coach" },
    { icon: <FaFileInvoiceDollar />, title: "Loan Officers" }
  ];

  const videos = [
    "/videos/SAMPLE 1.mp4",
    "/videos/SAMPLE 2.mp4",
    "/videos/SAMPLE 3.mp4",
    "/videos/SAMPLE 4.mp4",
    "/videos/SAMPLE 5.mp4",
    "/videos/SAMPLE 6.mp4",
    "/videos/SAMPLE 7.mp4",
    "/videos/SAMPLE 8.mp4",
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>

      {/* Hero Section */}
      <div className="text-white flex flex-col px-6 sm:px-12 lg:px-24 mt-28 text-center sm:text-left">
        <p className="text-lg sm:text-2xl">Welcome to</p>
        <h1 className="text-4xl sm:text-6xl font-bold">
          <span className="text-green-500">GROW</span>
          <span className="text-amber-300">TALYST</span>
        </h1>
        <p className="mt-2 ml-2 text-sm sm:text-lg tracking-[0.1em] sm:tracking-[0.3em]">
          YOUR CATALYST FOR GROWTH
        </p>
        <p className="text-lg sm:text-xl font-bold mt-6">
          <span className="text-amber-400">Founder:</span> Sayan Dutta & Ayush Bhattacharya
        </p>
        <p className="text-sm sm:text-base mt-5 max-w-4xl">
          <span className="font-bold">At Growtalyst</span>, we help real estate agencies,
          small businesses, and startups close more deals and scale faster through ROI-driven
          strategies and high-impact social media marketing. <br />
          Our proven approach amplifies your online presence, attracts qualified leads,
          and keeps your audience engaged for sustainable long-term growth. <br /><br />
          <span className="font-bold">In just 90 days, we can transform your marketing results.</span> <br />
          With over a year of experience and 92+ satisfied clients, we deliver measurable
          outcomes that help realtors, entrepreneurs, and growing brands stand out in competitive markets.
        </p>
      </div>

      {/* Email Button */}
      <div className="px-6 sm:px-12 lg:px-24 flex justify-center sm:justify-start">
        <a href="mailto:sayan.growtalyst.work@gmail.com">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm sm:text-base font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 hover:text-white mt-7">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-transparent">
              Email Us
            </span>
          </button>
        </a>
      </div>

      <div className="border-t border-white/60 mt-5"></div>

      {/* Companies Worked With */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-white p-6 w-full mt-10"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 sm:gap-10 md:gap-12 mb-6 w-full max-w-6xl">
          {[
            "/images/EXP REALTY.png", "/images/HIGH TIDE.jpg", "/images/MISSION LENDING GROUP.png",
            "/images/PIER 4.png", "/images/SIRVA MORTGAGE.png", "/images/WESTERN PIONEER.png"
          ].map((logo, i) => (
            <img key={i} src={logo} alt={`Company ${i + 1}`} className="h-10 sm:h-12 w-auto object-contain mx-auto" />
          ))}
        </div>
        <div className="bg-white rounded-full p-4 mb-4 mt-6">
          <FiArrowUpLeft size={30} className="text-black" />
        </div>
        <p className="text-center text-lg sm:text-xl font-medium">
          Worked with <span className="font-bold">60+</span><br />companies worldwide
        </p>
      </motion.div>

      <div className="border-t border-white/60 mt-8"></div>

      {/* Services */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center mt-10 text-white px-6"
      >
        <h3 className="text-lg sm:text-xl">Core Features</h3>
        <h1 className="font-bold text-3xl sm:text-5xl text-center">
          Make your <span className="text-green-500">Business Awesome</span><br />with our Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 w-full max-w-6xl">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex flex-col items-center p-6 bg-gray-900 rounded-lg hover:scale-105 transition-transform duration-300 shadow-md"
            >
              <div className="text-green-500 text-3xl sm:text-4xl mb-4">{service.icon}</div>
              <p className="text-base sm:text-lg font-medium text-center">{service.title}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="border-t border-white/60 mt-16"></div>

      {/* Industries */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center mt-16 text-white px-6"
      >
        <h3 className="text-lg sm:text-xl">Industries We Serve</h3>
        <h1 className="font-bold text-3xl sm:text-5xl text-center">
          Expertise Across <span className="text-green-500">Multiple Sectors</span>
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10 w-full max-w-6xl">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex flex-col items-center p-6 bg-gray-900 rounded-lg hover:scale-105 transition-transform duration-300 shadow-md"
            >
              <div className="text-green-500 text-3xl sm:text-4xl mb-4">{industry.icon}</div>
              <p className="text-base sm:text-lg font-medium text-center">{industry.title}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="border-t border-white/60 mt-16"></div>

      {/* Video Gallery */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center mt-16 text-white px-6"
      >
        <h3 className="text-lg sm:text-xl">Our Work in Action</h3>
        <h1 className="font-bold text-3xl sm:text-5xl text-center">
          Watch Our <span className="text-green-500">Video Showcase</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 w-full max-w-7xl">
          {videos.map((videoSrc, index) => (
            <VideoCard
              key={index}
              src={videoSrc}
              currentPlaying={selectedVideo}
              setCurrentPlaying={setSelectedVideo}
              videoIndex={index}
            />
          ))}
        </div>
      </motion.div>

      <div className="border-t border-white/60 mt-16"></div>

      {/* Trusted by Clients Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center mt-16 text-white px-6"
      >
        <h3 className="text-lg sm:text-xl">Trusted by Clients Across the Globe</h3>
        <h1 className="font-bold text-3xl sm:text-5xl text-center">
          Working with Clients from <span className="text-green-500">Multiple Countries</span>
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8 mt-10 w-full max-w-6xl">
          {[
            { country: "USA", flag: "https://flagcdn.com/us.svg" },
            { country: "Canada", flag: "https://flagcdn.com/ca.svg" },
            { country: "Mexico", flag: "https://flagcdn.com/mx.svg" },
            { country: "UK", flag: "https://flagcdn.com/gb.svg" },
            { country: "European Union", flag: "https://flagcdn.com/eu.svg" },
            { country: "Australia", flag: "https://flagcdn.com/au.svg" },
            { country: "New Zealand", flag: "https://flagcdn.com/nz.svg" },
            { country: "UAE", flag: "https://flagcdn.com/ae.svg" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex flex-col items-center p-4 bg-gray-900 rounded-lg hover:scale-105 transition-transform duration-300 shadow-md"
            >
              <img src={item.flag} alt={item.country} className="w-12 h-8 object-cover rounded-sm shadow" />
              <p className="text-sm sm:text-base font-medium mt-2 text-center">{item.country}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="border-t border-white/60 mt-16"></div>

      {/* Testimonials Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center mt-16 text-white px-6"
      >
        <h3 className="text-lg sm:text-xl">What Our Clients Say</h3>
        <h1 className="font-bold text-3xl sm:text-5xl text-center">
          Hear from our <span className="text-green-500">Happy Customers</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-10 w-full max-w-7xl">
          {[
            {
              name: "Drew Thompson",
              role: "Content Creator",
              img: "/images/DREW THOMPSON.jpg",
              feedback: "\"I used to post content just to stay active, but it never really brought in business. After Growtalyst took over my media editing and marketing, the difference was crazy. My videos actually got attention, people started DMing me, and I closed three new clients in the first month just from that content. It felt like my brand finally had a voice people wanted to listen to.\" - Drew Thompson"
            },
            {
              name: "Chris Kouvatsos",
              role: "Content Creator",
              img: "/images/chris.kouvatsos.jpg",
              feedback: "\"Before Growtalyst stepped in, my content was there, but it wasn't doing much for the business. Once they took over the editing and marketing, everything changed my posts started getting real engagement, and people who actually needed my services began reaching out. I landed multiple quality leads in just a few weeks, all from the content they put out. It’s been a total game-changer.\" - Chris Kouvatsos"
            },
            {
              name: "Frank Del Rio",
              role: "Content Creator",
              img: "/images/FRANK DEL RIO.jpg",
              feedback: "\"I wasn’t seeing much traction from my posts content was live, but it wasn’t driving interest. Then Growtalyst handled my media editing and how I present it. Suddenly, people started reaching out. I had solid leads in the inbox within weeks, all thanks to the content they crafted. That’s when I knew things had actually shifted.\" - Frank Del Rio"
            },
            {
              name: "Lindsy Knapp",
              role: "Content Creator",
              img: "/images/LINDSY KNAPP.jpg",
              feedback: "\"Before Growtalyst stepped in, my content was okay, but it wasn’t bringing any traction. Once they started editing my media and dialing in the marketing, I started getting real inquiries out of the blue. I booked several quality leads within just a couple of weeks, all thanks to the content they created.\" - Lindsy Knapp"
            },
            {
              name: "Kenny Simpson",
              role: "Content Creator",
              img: "/images/KENNY SIMPSON.jpg",
              feedback: "\"Before Growtalyst, my posts looked fine but didn’t bring in much business. After they started handling my editing and marketing, people actually began reaching out. I picked up a few solid leads in just weeks, all from the content they put out.\" - Kenny Simpson"
            }
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex flex-col items-center p-6 bg-gray-900 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 text-center"
            >
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-green-500"
              />
              <p className="text-base font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-400">{testimonial.role}</p>
              <p className="mt-3 text-sm italic">{testimonial.feedback}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </motion.div>
  );
};

export default Home;
