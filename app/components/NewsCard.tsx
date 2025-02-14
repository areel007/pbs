import Image from "next/image";
import Link from "next/link";

type TNewsCardProps = {
    title: string;
    description: string;
    img: string;
    url: string;
};

export const NewsCard = ({ title, description, img, url }: TNewsCardProps) => {
    return (
        < Link href={url} className="news-card w-full h-[477px] relative overflow-hidden">

            <div className="front absolute w-full h-full bg-cover bg-center">
                <Image src={img} width={100} height={100} alt="pbs" className="w-full h-full object-cover" />
                <div className="content text-white p-4 absolute bottom-0 left-0 bg-black bg-opacity-50 w-full">
                    <h3 className="text-xl">{title}</h3>
                    <p>{description}</p>
                    <span>Read more</span>
                </div>
            </div>
            <div className="back absolute w-full h-full bg-gray-800 flex items-center justify-center opacity-0 transform translate-y-full">
                <div className="back-content text-white text-center p-4">
                    <h3 className="text-2xl">{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </Link>
    );
};
