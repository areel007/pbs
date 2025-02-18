"use client"

import { CircularMenu, CircleWithLines } from "@/app/components/TheCircle"


const AboutUs = () => {
    return (
        <main>
            {/* hero */}
            <section className="w-full h-auto md:h-[35vh] bg-zinc-300 py-[40px]">
                <div className="max-w-[1200px] w-[90%] mx-auto flex flex-col gap-[60px]">
                    <span className="text-white text-[14px]">About &gt;</span>

                    <p className="text-[40px] leading-[1.2] text-white">We are Locally rooted - Globally connected</p>
                </div>
            </section>

            <section className="py-[40px] md:py-[60px]">
                <div className="max-w-[1200px] w-[90%] mx-auto">
                    <p className="mb-[60px]">
                        With representation in over 100 countries, WTS Global has already grown to a leadership position as a global tax practice offering the full range of tax services and aspires to become the preeminent non-audit tax practice worldwide. WTS Global deliberately refrains from conducting annual audits in order to avoid any conflicts of interest and to be the long- term trusted advisor for its international clients. Clients of WTS Global include multinational companies, international mid-size companies as well as private clients and family offices. <br /><br />

                        The member firms of WTS Global are carefully selected through stringent quality reviews. They are strong local players in their home market who are united by the ambition of building a truly global practice that develops the tax leaders of the future and anticipates the new digital tax world. <br /><br />

                        WTS Global effectively combines senior tax expertise from different cultures and backgrounds and offers world-class skills in advisory, in-house, regulatory and digital, coupled with the ability to think like experienced business people in a constantly changing world.
                    </p>


                    <div className="flex flex-col gap-[2px]">
                        <p className="p-[10px] bg-red-500 w-[min-content] whitespace-nowrap text-white text-[20px] md:text-[30px] font-[600]">Our Key differentiators</p>
                        <p className="p-[10px] bg-red-500 text-white w-[min-content] whitespace-nowrap text-[14px] md:text-[22px]">WTS Global is a leading global tax practice.</p>
                    </div>
                </div>

                <div className="max-w-[900px] w-[70%] mx-auto hidden md:block">

                    <div className="">
                        <CircularMenu />
                    </div>
                </div>

                <div className="w-full block md:hidden">
                    <div className="">
                        <CircleWithLines />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default AboutUs