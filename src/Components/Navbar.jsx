import React from 'react'
import admin from "../assets/admin.webp"
import { FaBriefcase, FaEnvelope, FaComments, FaProjectDiagram, FaTools, FaImage } from 'react-icons/fa';
import { MdOutlineWorkOutline } from "react-icons/md";
import { GrContact } from "react-icons/gr";
import { GoCodeReview } from "react-icons/go";
import { GrProjects } from "react-icons/gr";
import { VscTools } from "react-icons/vsc";
import { RiSlideshow3Line } from "react-icons/ri";
import './Navbar.js'
import { Link, NavLink } from 'react-router-dom';
const iconArray = [
    {
        name: "Work",
        icon: <MdOutlineWorkOutline />,
        link: "/"
    },
    {
        name: "Contact",
        icon: <GrContact />,
        link: "/contact"
    },
    {
        name: "Testimonials",
        icon: <GoCodeReview />,
        link: "/testimonials"
    },
    {
        name: "Projects",
        icon: <GrProjects />,
        link: "/projects"
    },
    {
        name: "Skills",
        icon: <VscTools />,
        link: "/skills"
    },
    {
        name: "Showcase",
        icon: <RiSlideshow3Line />,
        link: "/showcase"
    }
];

function Navbar() {
    return (
        <div className='container pt-12 pb-3'>
            <div className='flex flex-col  relative'>
                <div className='flex items-center space-x-8'>
                    <div>
                        <img src={admin} alt='' className='size-28 rounded' />
                    </div>
                    <div className='space-y-3'>
                        <div className='text-sm'>Jawad Mughal</div>
                        <div className='text-xl font-semibold'>Jawad Mughal Admin Dashboard</div>
                        <div className='flex '>
                            <div className='me-8  text-center'>
                                <div className='text-left text-sm uppercase font-semibold'>Plan</div>
                                <div className='text-sm  bg-purple-300 rounded p-1 mt-2'>GROWTH TRIAL
                                </div>
                            </div>
                            <div className='me-8  text-center'>
                                <div className='text-left text-sm uppercase font-semibold'>Status</div>
                                <div className='text-sm font-light bg-green-200 rounded p-1 mt-2'>ACTIVE
                                </div>
                            </div>
                            <div className='me-8   text-center'>

                                <div className='text-left text-sm uppercase font-semibold'>Project Id</div>
                                <div className='text-sm font-light p-1 mt-2'>sni8d0iq</div>
                            </div>
                            <div className='me-8   text-center'>

                                <div className='text-left text-sm uppercase font-semibold'>Studio</div>
                                <div className='text-sm font-light p-1 mt-2'>Not deployed</div>
                            </div>

                        </div>
                    </div>
                </div>

                <div id='navbar_top' className='border-b border-gray-400 pb-1 scroll-smooth z-10' style={{ backdropFilter: blur(10) }}>
                    <div id='navbar_top_div' className='flex  mt-16 justify-between max-w-4xl'>
                        {iconArray.map((items, index) => (
                            <div key={index} className='flex items-center hover:bg-gray-200 cursor-pointer px-2 py-1 rounded-sm  me-4 flex-wrap gap-x-2 ' >
                                <p className='text-xl '> {items.icon} </p>
                                <NavLink to={items.link} className={({ isActive, isPending }) => {
                                    return isActive ? "bg-gray-200" :  "";
                                }}>
                                    {items.name}
                                </NavLink>

                        
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar