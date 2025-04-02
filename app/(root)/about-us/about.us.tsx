"use client"

// import { CircularMenu, CircleWithLines } from "@/app/components/TheCircle"
import { useState, useEffect } from "react"

const AboutUs = () => {

    const [screenWidth, setScreenWidth] = useState(0)
    const [imageHeight, setImageHeight] = useState(0)

    if (typeof window !== "undefined") {
        window.addEventListener("resize", () => {
            setScreenWidth(window.innerWidth)
        })
    }

    console.log(imageHeight);
    

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
            <section className="w-full h-[50vh] bg-red-600 py-[40px]">
                <div className="max-w-[1200px] w-[90%] mx-auto flex flex-col justify-end md:justify-start gap-[30px] md:gap-[20px] h-full">
                    <span className="text-[36px] md:text-[40px] leading-[1.2] text-white">About PBS Global</span>

                    <p className="text-[20px] md:text-[28px] leading-[1.2] text-white">Our Boilerplate and Corporate Profile</p>
                </div>
            </section>

            <section className="py-[40px] md:py-[60px]">
                <div className="max-w-[1200px] w-[90%] mx-auto mb-[40px]">
                    <h3 className="text-[18px] md:text-[24px] font-[600] mb-[20px]">Our Boilerplate - About WTS Global</h3>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem beatae atque excepturi ipsum harum eius doloribus aliquid a voluptatum sint sapiente quos assumenda, aperiam, repellat nostrum nihil? Necessitatibus soluta aut at alias eos aspernatur! Similique reprehenderit natus eos ipsam repudiandae omnis reiciendis tempora ut aspernatur recusandae? Nostrum exercitationem adipisci esse! <br /><br />

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt magnam distinctio inventore vel ipsam illum fuga, ducimus quae? Molestias obcaecati sint animi quae aspernatur ab eligendi nobis distinctio? Cumque autem voluptatum, iste iusto deleniti consequuntur. <br /><br />

                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi perspiciatis unde porro inventore asperiores reprehenderit harum aliquam non? Hic, odit quam. Quidem fugit placeat eum magnam ducimus cum fugiat beatae ipsum, vel quo sed. Quae. <br /><br />

                        For more information please see: &gt; <span className="underline">pbs.com</span> <br /><br />
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-[1fr_400px] gap-[40px]">
                        <div className="flex flex-col gap-[20px]">
                            <h3 className="text-[22px] md:text-[26px] font-[600]">PBS Global Corporate Profile</h3>
                            <p className="text-[14px] md:text-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ex dignissimos voluptatum? Odit adipisci perferendis natus, debitis molestiae nam cupiditate.</p>
                            <a href="" className="p-[10px_20px] bg-red-600 w-[min-content] whitespace-nowrap text-white font-[600]">Download Corporate Profile</a>
                        </div>

                        <div className="w-full h-[200px] md:h-full bg-red-600"></div>
                    </div>


                </div>
            </section>

            {/* <section className="py-[40px] md:py-[60px]">
                <div className="max-w-[1200px] w-[90%] mx-auto mb-[40px]">
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

                <div className="w-full block md:hidden h-auto">
                    <div className="">
                        <CircleWithLines />
                    </div>
                </div>
            </section> */}



        </main>
    )
}

export default AboutUs;