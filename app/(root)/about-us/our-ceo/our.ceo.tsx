"use client"

import { useState, useEffect } from "react"

const OurCEO = () => {

    const [screenWidth, setScreenWidth] = useState(0)
    const [imageHeight, setImageHeight] = useState(0)

    if (typeof window !== "undefined") {
        window.addEventListener("resize", () => {
            setScreenWidth(window.innerWidth)
        })
    }

    useEffect(() => {
        setScreenWidth(window.innerWidth)
        if (screenWidth < 768) {
            setImageHeight(screenWidth)
        } else {
            setImageHeight(screenWidth / 4)
        }

    }, [screenWidth])


    return (
        <main>
            {/* hero */}
            <section className="w-full h-auto md:h-[35vh] bg-zinc-300 py-[40px]">
                <div className="max-w-[1200px] w-[90%] mx-auto flex flex-col gap-[60px]">
                    <span className="text-white text-[14px]">About &gt; Our CEO</span>

                    <p className="text-[40px] leading-[1.2] text-white">Our CEO</p>
                </div>
            </section>

            <section className="py-[40px] md:py-[60px]">
                <div className="max-w-[1200px] w-[90%] mx-auto mb-[40px]">
                    <span className="inline-block mb-[40px] text-[20px] md:text-[24px] leading-[1] font-[600]">The CEO of WTS Global – Making the Difference</span>

                    <p className="mb-[10px]">
                        Wim Wuyts CEO: <span className="text-zinc-600">WTS Global</span>
                    </p>
                    <div className="max-w-[500px] h-[350px] bg-zinc-100"></div>

                    <p className="mt-[20px]">
                        Since September 1, 2017, Wim Wuyts, former global tax director at Bekaert, joins forces with WTS Global as its Chief Executive Officer. In this newly created role, Wim is responsible for accelerating the further expansion of WTS Global and pushing the content-based and structural integration of network firms under one umbrella. He heads the WTS Global Central Management Team and reports to the Board of Directors. Jointly with the Board, Wim formulates and implements the overall strategy to bring WTS Global to the next level.
                    </p>
                </div>


            </section>

            <section>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-[10px] md:gap-[30px]">
                    <div className="bg-zinc-200 relative" style={{ height: `${imageHeight - 22.5}px` }}>
                        <div className="absolute left-0 top-[65%] md:-translate-y-[65%] bg-black p-[10px] text-white max-w-[80%] text-[22px] font-[600]">
                            Our CEO
                        </div>
                    </div>

                    <div className="bg-zinc-200 relative" style={{ height: `${imageHeight - 22.5}px` }}>
                        <div className="absolute left-0 top-[65%] -translate-y-[65%] bg-black p-[10px] text-white max-w-[80%] text-[22px] font-[600]">
                            The Supervisory Board of PBS Global: 11 Directors, 1 Mission
                        </div>
                    </div>

                    <div className="bg-zinc-200 relative" style={{ height: `${imageHeight - 22.5}px` }}>
                        <div className="absolute left-0 top-[65%] -translate-y-[65%] bg-black p-[10px] text-white max-w-[80%] text-[22px] font-[600]">
                            Quality, Process, and Risk Management
                        </div>
                    </div>

                    <div className="bg-zinc-200 relative" style={{ height: `${imageHeight - 22.5}px` }}>
                        <div className="absolute left-0 top-[65%] -translate-y-[65%] bg-black p-[10px] text-white max-w-[80%] text-[22px] font-[600]">
                            Culture and Leadership
                        </div>
                    </div>

                </div>
            </section>

        </main>
    )
}

export default OurCEO;