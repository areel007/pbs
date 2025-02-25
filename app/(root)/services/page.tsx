"use client"

import { useEffect, useState } from "react"

const Services = () => {
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
                    <span className="text-white text-[14px]">Services &gt;</span>

                    <p className="text-[35px] leading-[1] text-white">Our Global Services <br />
                        <span className="text-[16px] font-[300]">Learn more about our network partners and their services.</span>
                    </p>
                </div>
            </section>

            {/*  */}
            <section className="py-[20px] md:py-[60px]">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-[10px] md:gap-[30px]">
                    <div className="bg-zinc-200 relative" style={{ height: `${imageHeight - 22.5}px` }}>
                        <div className="absolute left-0 top-[65%] md:-translate-y-[65%] bg-black p-[10px_20px] text-white max-w-[80%] text-[20px] font-[400]">
                            Customs
                        </div>
                    </div>

                    <div className="bg-zinc-200 relative" style={{ height: `${imageHeight - 22.5}px` }}>
                        <div className="absolute left-0 top-[65%] md:-translate-y-[65%] bg-black p-[10px_20px] text-white max-w-[80%] text-[20px] font-[400]">
                            Financial Services
                        </div>
                    </div>

                    <div className="bg-zinc-200 relative" style={{ height: `${imageHeight - 22.5}px` }}>
                        <div className="absolute left-0 top-[65%] md:-translate-y-[65%] bg-black p-[10px_20px] text-white max-w-[80%] text-[20px] font-[400]">
                            Global Mobility
                        </div>
                    </div>

                    <div className="bg-zinc-200 relative" style={{ height: `${imageHeight - 22.5}px` }}>
                        <div className="absolute left-0 top-[65%] md:-translate-y-[65%] bg-black p-[10px_20px] text-white max-w-[80%] text-[20px] font-[400]">
                            Indirect Tax | VAT
                        </div>
                    </div>

                    <div className="bg-zinc-200 relative" style={{ height: `${imageHeight - 22.5}px` }}>
                        <div className="absolute left-0 top-[65%] md:-translate-y-[65%] bg-black p-[10px_20px] text-white max-w-[80%] text-[20px] font-[400]">
                            International Corporate Tax
                        </div>
                    </div>

                    <div className="bg-zinc-200 relative" style={{ height: `${imageHeight - 22.5}px` }}>
                        <div className="absolute left-0 top-[65%] md:-translate-y-[65%] bg-black p-[10px_20px] text-white max-w-[80%] text-[20px] font-[400]">
                            Mergers and Acquisitions (M&A)
                        </div>
                    </div>

                    <div className="bg-zinc-200 relative" style={{ height: `${imageHeight - 22.5}px` }}>
                        <div className="absolute left-0 top-[65%] md:-translate-y-[65%] bg-black p-[10px_20px] text-white max-w-[80%] text-[20px] font-[400]">
                            Private Client & Family Office
                        </div>
                    </div>

                    <div className="bg-zinc-200 relative" style={{ height: `${imageHeight - 22.5}px` }}>
                        <div className="absolute left-0 top-[65%] md:-translate-y-[65%] bg-black p-[10px_20px] text-white max-w-[80%] text-[20px] font-[400]">
                            Real Estate
                        </div>
                    </div>

                    <div className="bg-zinc-200 relative" style={{ height: `${imageHeight - 22.5}px` }}>
                        <div className="absolute left-0 top-[65%] md:-translate-y-[65%] bg-black p-[10px_20px] text-white max-w-[80%] text-[20px] font-[400]">
                            Sustainability & Tax
                        </div>
                    </div>

                    <div className="bg-zinc-200 relative" style={{ height: `${imageHeight - 22.5}px` }}>
                        <div className="absolute left-0 top-[65%] md:-translate-y-[65%] bg-black p-[10px_20px] text-white max-w-[80%] text-[20px] font-[400]">
                            Tax Certainty & Controversy
                        </div>
                    </div>

                    <div className="bg-zinc-200 relative" style={{ height: `${imageHeight - 22.5}px` }}>
                        <div className="absolute left-0 top-[65%] md:-translate-y-[65%] bg-black p-[10px_20px] text-white max-w-[80%] text-[20px] font-[400]">
                            Tax Technology
                        </div>
                    </div>

                    <div className="bg-zinc-200 relative" style={{ height: `${imageHeight - 22.5}px` }}>
                        <div className="absolute left-0 top-[65%] md:-translate-y-[65%] bg-black p-[10px_20px] text-white max-w-[80%] text-[20px] font-[400]">
                            Transfer Pricing & Technology
                        </div>
                    </div>
                </div>
            </section>

            {/* get in touch */}
            <section className="bg-[#303030] py-[30px] md:py-[40px] lg:py-[60px]">
                <div className="max-w-[1200px] w-[90%] mx-auto">
                    <span className="text-white text-[30px] font-[600] block mb-[10px]">Get in contact</span>
                    <div className="flex justify-between flex-col md:flex-row gap-[10px]">
                        <p className="text-white">Do you have any questions about our services? <br />Please get in touch.</p>
                        <button className="p-[7px_40px] bg-[#cd3037] text-white border-[#cd3037] border-[1px] hover:bg-transparent hover:border hover:border-white">Contact</button>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Services;