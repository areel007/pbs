'use client'

import { MenuCard } from "@/app/components/MenuCard";
import { useEffect, useState } from "react";

import AboutImage from "@/public/assets/images/wtsglobal-key-visual-istock-1368458958.webp"
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

// const menuCards = [
//     {
//         title: 'About PBS Global',
//         image: AboutImage,
//         href: '/about-us',
//     },
//     {
//         title: 'Corporate Design',
//         image: AboutImage,
//         href: '/',
//     },
//     {
//         title: 'Templates',
//         image: AboutImage,
//         href: '/',
//     },
//     {
//         title: 'Online Solutions',
//         image: AboutImage,
//         href: '/',
//     },
// ]

export default function CorporateDesign() {
    const [gridColumns, setGridColumns] = useState(2);
    const [cardSize, setCardSize] = useState(0);

    // Function to update grid columns and card size based on window width
    const updateGridLayout = () => {
        const windowWidth = window.innerWidth;
        let columns;

        // Determine number of columns based on window width
        if (windowWidth < 450) {
            columns = 1
        }
        else if (windowWidth < 768) {  // mobile
            columns = 2;
        } else {  // desktop
            columns = 2;
        }

        // Calculate card size to be square based on available width
        const containerWidth = Math.min(window.innerWidth * 0.9, 1140);
        const cardWidth = (containerWidth - (30 * (columns - 1))) / columns;

        setGridColumns(columns);
        setCardSize(cardWidth);
    };

    // Initial layout and resize listener
    useEffect(() => {
        updateGridLayout();
        window.addEventListener('resize', updateGridLayout);

        // Scroll to top on initial load
        window.scrollTo({ top: 0, behavior: "smooth" });

        // Cleanup resize listener
        return () => window.removeEventListener('resize', updateGridLayout);
    }, []);

    return <main>
        {/* hero */}
        <section className="w-full h-[50vh] bg-red-600 py-[40px]">
            <div className="max-w-[1200px] w-[90%] mx-auto flex flex-col justify-end md:justify-start gap-[30px] md:gap-[20px] h-full">
                <span className="text-[36px] md:text-[40px] leading-[1.2] text-white">Corporate Design</span>

                <p className="text-[20px] md:text-[28px] leading-[1.2] text-white">Logo & Label, Colors, Font & Typography and Brand Elements</p>
            </div>
        </section>

        {/* desktop */}
        <section className="py-[40px] md:py-[60px] hidden md:block">
            <div className="max-w-[1140px] w-[90%] mx-auto">
                <div className="grid gap-[10px] md:gap-[10px] lg:gap-[30px]"
                    style={{
                        gridTemplateColumns: `repeat(${gridColumns}, minmax(0, 1fr))`
                    }}
                >
                    <MenuCard height={cardSize} width={cardSize} href="/corporate-design/logo-&-label" image={AboutImage} title="Logo & Label" />
                    <div className="w-full h-full grid grid-rows-1 md:grid-rows-2 gap-[10px] lg:gap-[30px]">
                        <div className="w-ful h-full grid grid-cols-2 gap-[10px] lg:gap-[30px]">

                            <IntMenuCard title="colors" image={AboutImage} href="/corporate-design/colors" />
                            <IntMenuCard title="font & typography" image={AboutImage} href="/corporate-design/font-&-typography" />
                        </div>
                        <IntMenuCard title="brand elements" image={AboutImage} href="/corporate-design/brand-elements" />
                    </div>
                </div>
            </div>
        </section>

        {/* mobile */}
        <section className="py-[40px] md:py-[60px] block md:hidden">
            <div className="w-[90%] mx-auto grid gap-[10px]" style={{
                gridTemplateColumns: `repeat(${gridColumns}, minmax(0, 1fr))`
            }}>
                <MenuCard height={cardSize} width={cardSize} href="/corporate-design/logo-&-label" image={AboutImage} title="Logo & Label" />
                <MenuCard height={cardSize} width={cardSize} href="/corporate-design/colors" image={AboutImage} title="Colors" />
                <MenuCard height={cardSize} width={cardSize} href="" image={AboutImage} title="font & typography" />
                <MenuCard height={cardSize} width={cardSize} href="" image={AboutImage} title="brand elements" />
            </div>
        </section>
    </main>

}

interface IIntMenuCard {
    title: string;
    image: string | StaticImageData;
    href: string;
}

const IntMenuCard = ({ title, image, href }: IIntMenuCard) => {
    return <Link href={href} className="w-full relative group cursor-pointer overflow-hidden border">
        {/* front */}
        <div className="menu__card-front w-full h-full flex items-center justify-start group-hover:hidden">
            <Image src={image} alt="pbs global" layout="fill" objectFit="cover" className="absolute inset-0 z-[0] w-full h-full" />
            <div className="bg-[#191919] p-[10px] text-white max-w-[70%] text-[16px] lg:text-[24px] font-[300] leading-[1.1] relative z-[1] capitalize">{title}</div>
        </div>
        {/* back */}
        <div className="menu__card-back w-full h-full absolute top-0 left-0 bg-red-600 opacity-0 group-hover:opacity-[1] transition-opacity duration-700 ease-in-out">
            <div className="flex flex-col justify-end p-[40px] h-full">
                <div className="bg-white p-[10px] text-red-600 max-w-[70%] text-[16px] lg:text-[24px] font-[300] leading-[1.1] absolute left-0 top-[-100%] group-hover:top-[30px] transition-all duration-[800ms] ease-in-out capitalize">{title}</div>
                <span className="font-[400] text-white">&gt; Read more</span>
            </div>
        </div>
    </Link>
}