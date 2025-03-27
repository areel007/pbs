'use client'

import { useEffect, useState } from "react";
import { MenuCard } from "../components/MenuCard";

// menu card images
import AboutImage from "../../public/assets/images/wtsglobal-key-visual-istock-1368458958.webp"

const menuCards = [
  {
    title: 'About PBS Global',
    image: AboutImage,
    href: '/',
  },
  {
    title: 'Corporate Design',
    image: AboutImage,
    href: '/',
  },
  {
    title: 'Templates',
    image: AboutImage,
    href: '/',
  },
  {
    title: 'Online Solutions',
    image: AboutImage,
    href: '/',
  },
  {
    title: 'Image Pool',
    image: AboutImage,
    href: '/',
  },
  {
    title: 'Brand Training',
    image: AboutImage,
    href: '/',
  },
  {
    title: 'Employer Branding',
    image: AboutImage,
    href: '/',
  },
]

export default function Home() {
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

  return (
    <div>
      {/* Hero Section */}
      <section className="w-full h-[50vh] md:h-[50vh] bg-[#cd3037] flex flex-col justify-end">
        <div className="max-w-[1140px] w-[90%] mx-auto mb-[30px] md:mb-[60px] space-y-[15px] md:space-y-[30px]">
          <h3 className="text-[34px] md:text-[40px] text-white font-[300]">PBS Global Cl Guide</h3>
          <p className="text-white text-[22px] md:text-[24px] max-w-[700px] font-[300]">About PBS Global, Corporate Design, Templates, Image World and Online Solutions</p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-[30px] md:py-[60px]">
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

      {/* how we design */}
      <section className="py-[30px] md:py-[60px]">
        <div className="max-w-[1140px] w-[90%] mx-auto">
          <h3 className="text-[24px] md:text-[24px] mb-[10px]">How we design</h3>
          <p className="text-[14px] md:text-[16px] mb-[40px]">
            We derive the principles for WTS design directly from the brand identity. These design principles form the brand-typical design framework across all areas of application. They serve as a fundamental design and decision-making guide for all visually designed moments of experience with the WTS brand.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
            <div className="">
              <div className="w-full h-[300px] bg-zinc-200 mb-[20px]"></div>
              <div>
                <h4 className="text-[16px] md:text-[20px]">WE DESIGN PROGRESSIVELY</h4>
                <p>Progressiveness is anchored in our values, and this facet of our identity is also evident in our design.</p>
              </div>
            </div>

            <div className="">
              <div className="w-full h-[300px] bg-zinc-200 mb-[20px]"></div>
              <div>
                <h4 className="text-[16px] md:text-[20px]">WE DESIGN EXCELLENTLY</h4>
                <p>Our experience and expertise make us experts in our field, and our design and communication convey this. Therefore, we design confidently with high quality standards and an eye for detail.</p>
              </div>
            </div>

            <div className="">
              <div className="w-full h-[300px] bg-zinc-200 mb-[20px]"></div>
              <div>
                <h4 className="text-[16px] md:text-[20px]">WE DESIGN EMPATHICALLY</h4>
                <p>We always communicate with our clients and employees as partners and at eye level. We also have this claim on design and our communication and express this through our language and an accessible design.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}