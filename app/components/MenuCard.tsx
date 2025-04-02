import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface IMenuCardProps {
    title: string;
    image: string | StaticImageData;
    href: string;
    height: number;
    width: number;
}

export const MenuCard = ({ title, image, href, height, width }: IMenuCardProps) => {
    return (
        <Link href={href}
            className="w-full relative group cursor-pointer overflow-hidden border"
            style={{ height: `${height}px`, width: `${width}px`, }}
        >
            {/* Front Side */}
            <div className="menu__card-front w-full h-full flex items-center justify-start group-hover:hidden">
                <Image src={image} alt={title} layout="fill" objectFit="cover" className="absolute inset-0 z-[0] w-full h-full" />
                <div className="bg-[#191919] p-[10px] text-white max-w-[70%] text-[16px] lg:text-[24px] font-[300] leading-[1.1] relative z-[1]">{title}</div>
            </div>

            {/* Back Side */}
            <div className="menu__card-back w-full h-full absolute top-0 left-0 bg-red-600 opacity-0 group-hover:opacity-[1] transition-opacity duration-700 ease-in-out">
                <div className="flex flex-col justify-end p-[40px] h-full">
                    <div className="bg-white p-[10px] text-red-600 max-w-[70%] text-[16px] lg:text-[24px] font-[300] leading-[1.1] absolute left-0 top-[-100%] group-hover:top-[30px] transition-all duration-[800ms] ease-in-out">{title}</div>
                    <span className="font-[400] text-white">&gt; Read more</span>
                </div>
            </div>
        </Link>
    );
};
