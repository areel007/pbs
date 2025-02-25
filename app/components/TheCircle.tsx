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


    return (
        <div className="flex flex-col items-center gap-[10px]">
            <div className="relative flex flex-col items-center">
                <div className="w-[200px] h-[200px] border border-zinc-400 rounded-full flex justify-center items-center">
                    <span>PBS Global</span>
                </div>
                <div className="w-[1px] h-[150px] bg-zinc-400 mt-[-30px] relative">
                    <div className="absolute p-[10px_20px] bg-red-500 text-white top-[60%] -translate-y-1/2 left-1/2 -translate-x-1/2">Global</div>
                </div>
            </div>

            <p className='text-center w-[90%]'>We are represented in more than 100 countries through our own "WTS Global" network, which is coordinated by WTS Germany.</p>

            <div className="w-[1px] h-[150px] bg-zinc-400 relative">
                <div className="absolute p-[10px_20px] bg-red-500 text-white top-[60%] -translate-y-1/2 left-1/2 -translate-x-1/2 whitespace-nowrap">Tax-focussed</div>
            </div>

            <p className='text-center w-[90%]'>
                We have a clear tax focus and offer a fully-fledged tax service portfolio.
                To round our services we offer adjoining legal and financial advisory service.
            </p>

            <div className="w-[1px] h-[150px] bg-zinc-400 relative">
                <div className="absolute p-[10px_20px] bg-red-500 text-white top-[60%] -translate-y-1/2 left-1/2 -translate-x-1/2 whitespace-nowrap">Free Conflict</div>
            </div>

            <p className='text-center w-[90%]'>
                We deliberately refrain from conducting annual audits in order to avoid potential conflicts of interest.
            </p>

            <div className="w-[1px] h-[150px] bg-zinc-400 relative">
                <div className="absolute p-[10px_20px] bg-red-500 text-white top-[60%] -translate-y-1/2 left-1/2 -translate-x-1/2 whitespace-nowrap">Innovative</div>
            </div>

            <p className='text-center w-[90%]'>
                We offer innovative and customised solutions and stand for high implementation competency. It is our aspiration to be reliable business partner.
            </p>
        </div>
    );
};

