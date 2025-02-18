"use client"

import React, { useState } from 'react';

export const CircularMenu = () => {
    const [hoveredItem, setHoveredItem] = useState<null | number>(null);

    const menuItems = [
        { headline: "Headline 1", subtext: "We have a clear tax focus and offer a fully-fledged tax service portfolio. To round our services we offer adjoining legal and financial advisory service." },
        { headline: "Headline 2", subtext: 'We are represented in more than 100 countries through our own "WTS Global" network, which is coordinated by WTS Germany.' },
        { headline: "Innovative", subtext: "We offer innovative and customised solutions and stand for high implementation competency. It is our aspiration to be reliable business partner." },
        { headline: "Headline 4", subtext: "We deliberately refrain from conducting annual audits in order to avoid potential conflicts of interest." },
    ];

    return (
        <div className="relative w-[450px] h-[450px] bg-white">
            <div className="absolute inset-8">
                {/* Main circle */}
                <div className="relative w-full h-full rounded-full border-[1px] border-zinc-500">
                    {/* Center text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold text-red-600">PBS Global</span>
                    </div>

                    {/* Left side headlines */}
                    <div className="absolute left-0 top-1/4 -translate-x-1/2 -translate-y-1/2 hover:translate-y-[-50px]">
                        <div
                            className="cursor-pointer px-4 py-1 bg-white"
                            onMouseEnter={() => setHoveredItem(0)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <span className="text-zinc-500 font-semibold whitespace-nowrap">Tax-focussed</span>
                            {hoveredItem === 0 && (
                                <div className="absolute right-0 p-2 bg-white rounded shadow-lg text-sm text-gray-600 w-[300px] z-10">
                                    {menuItems[0].subtext}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="absolute left-0 top-3/4 -translate-x-1/2 -translate-y-1/2">
                        <div
                            className="cursor-pointer px-4 py-1 bg-white"
                            onMouseEnter={() => setHoveredItem(2)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <span className="text-zinc-500 font-semibold whitespace-nowrap">Innovative</span>
                            {hoveredItem === 2 && (
                                <div className="absolute right-0 p-2 bg-white  rounded shadow-lg text-sm text-gray-600 w-[300px] z-10">
                                    {menuItems[2].subtext}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right side headlines */}
                    <div className="absolute right-0 top-1/4 translate-x-1/2 -translate-y-1/2 hover:translate-y-[-50px]">
                        <div
                            className="cursor-pointer px-4 py-1 bg-white"
                            onMouseEnter={() => setHoveredItem(1)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <span className="text-zinc-500 font-semibold whitespace-nowrap">Global</span>
                            {hoveredItem === 1 && (
                                <div className="absolute left-0 p-2 bg-white rounded shadow-lg text-sm text-gray-600 w-[300px] z-10">
                                    {menuItems[1].subtext}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="absolute right-0 top-3/4 translate-x-1/2 -translate-y-1/2">
                        <div
                            className="cursor-pointer px-4 py-1 bg-white"
                            onMouseEnter={() => setHoveredItem(3)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <span className="text-zinc-500 font-semibold whitespace-nowrap">Free Conflict</span>
                            {hoveredItem === 3 && (
                                <div className="absolute left-0 p-2 bg-white rounded shadow-lg text-sm text-gray-600 w-[300px] z-10">
                                    {menuItems[3].subtext}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const CircleWithLines = () => {
    const items = [
        {
            title: "Feature 1",
            description: "This is a detailed explanation about Feature 1. It provides valuable information about the functionality."
        },
        {
            title: "Feature 2",
            description: "Here's what you need to know about Feature 2. It contains important details about this aspect."
        },
        {
            title: "Feature 3",
            description: "Feature 3 is explained here with all its important characteristics and benefits."
        },
        {
            title: "Feature 4",
            description: "Let's explore Feature 4 and understand its significance in the overall system."
        }
    ];

    return (
        <div className="relative flex justify-center mt-[40px]">
            {/* Circle with center text */}
            <div className="relative w-[250px] h-[250px] rounded-full border-[1px] border-zinc-500 flex items-center justify-center">
                <span className="text-2xl font-bold text-zinc-500">Center Text</span>

                <div className="absolute flex justify-between">
                    <div className="relative flex flex-col items-center">
                        <div className="absolute bottom-[-240px] w-[1px] h-[150px] bg-zinc-500">
                            <div className="absolute bg-red-500 p-[10px_20px] text-center w-[min-content] translate-x-[-50%] left-[50%] translate-y-[-20%] top-[50%]">
                                <span className="font-semibold text-white text-[20px]">Global</span>
                            </div>

                            <p className='absolute top-[110%] w-[90vw] left-[50%] translate-x-[-50%] text-center'>
                                We are represented in more than 100 countries through our own "WTS Global" network, which is coordinated by WTS Germany.
                            </p>

                            <div className="absolute bottom-[-240px] w-[1px] h-[150px] bg-zinc-500">
                                <div className="absolute bg-red-500 p-[10px_20px] text-center w-[min-content] whitespace-nowrap translate-x-[-50%] left-[50%] translate-y-[-20%] top-[50%]">
                                    <span className="font-semibold text-white text-[20px]">Tax-focussed</span>
                                </div>

                                <p className='absolute top-[110%] w-[90vw] left-[50%] translate-x-[-50%] text-center'>
                                    We have a clear tax focus and offer a fully-fledged tax service portfolio.
                                    To round our services we offer adjoining legal and financial advisory service.
                                </p>

                                <div className="absolute bottom-[-260px] w-[1px] h-[150px] bg-zinc-500">
                                    <div className="absolute bg-red-500 p-[10px_20px] text-center w-[min-content] whitespace-nowrap translate-x-[-50%] left-[50%] translate-y-[-20%] top-[50%]">
                                        <span className="font-semibold text-white text-[20px]">Free Conflict</span>
                                    </div>

                                    <p className='absolute top-[110%] w-[90vw] left-[50%] translate-x-[-50%] text-center'>
                                        We deliberately refrain from conducting annual audits in order to avoid potential conflicts of interest.
                                    </p>

                                </div>

                            </div>


                        </div>



                    </div>



                </div>




            </div>



            {/* Container for lines and content */}

        </div>
    );
};

