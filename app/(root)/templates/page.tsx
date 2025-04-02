'use client'

import { useEffect, useState } from "react";

// menu card images
import AboutImage from "@/public/assets/images/wtsglobal-key-visual-istock-1368458958.webp"
import { MenuCard } from "@/app/components/MenuCard";

const menuCards = [
    {
        title: 'Publication & Communication Templates',
        image: AboutImage,
        href: '/about-us',
    },
    {
        title: 'Pitch & Presentation Templates',
        image: AboutImage,
        href: '/corporate-design',
    },
    {
        title: 'PBR Global Central Communication',
        image: AboutImage,
        href: '/',
    },
    {
        title: 'Office Templates',
        image: AboutImage,
        href: '/',
    },
]

export default function Templates() {
    const [gridColumns, setGridColumns] = useState(4);
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
            columns = 4;
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

    return <main className="">
        {/* hero */}
        <section className="w-full h-[50vh] bg-red-600 py-[40px]">
            <div className="max-w-[1200px] w-[90%] mx-auto flex flex-col justify-end gap-[30px] md:gap-[20px] h-full">
                <span className="text-[36px] md:text-[40px] leading-[1.2] text-white">Templates</span>

                <p className="text-[20px] md:text-[28px] leading-[1.2] text-white">Publication & Communication Templates, Pitch & Presentation Templates, WTS Global Central Communication and Office Templates</p>
            </div>
        </section>

        {/* Grid Section */}
        <section className="py-[30px] md:py-[100px] min-h-[40vh]">
            <div className="max-w-[1140px] w-[90%] mx-auto">
                <div
                    className="grid gap-[10px] md:gap-[20px] lg:gap-[30px]"
                    style={{
                        gridTemplateColumns: `repeat(${gridColumns}, minmax(0, 1fr))`
                    }}
                >
                    {/* Example cards - replace with your actual cards */}
                    {menuCards.map((_menuCard, i) => <MenuCard
                        key={i}
                        height={cardSize}
                        width={cardSize}
                        title={_menuCard.title}
                        href={_menuCard.href}
                        image={_menuCard.image}
                    />)}
                </div>
            </div>
        </section>
    </main>
}