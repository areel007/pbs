import { NewsCard } from "../components/NewsCard";

// images

export default function Home() {
  return (
    <div className="">

      {/* hero */}
      <section className="w-full h-[25vh] md:h-[50vh] bg-[#cd3037] flex justify-center items-center">
        <h3 className="text-white font-[500] text-3xl">PBS Global</h3>
      </section>

      {/*  */}
      <section className="py-[20px] md:py-[60px]">
        <div className="max-w-[1000px] w-[90%] mx-auto mb-[20px]">
          <span className="block text-center mb-[20px] text-[20px] md:text-[24px] text-[#cd3037]">WTS Global</span>
          <p className="text-center text-[18px] md:text-[22px] text-zinc-700">
            We are the <strong>leading independent non-audit tax practice</strong> worldwide with representation in more than 100 countries.
          </p>
        </div>

        <div className="w-[95%] md:w-full mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_2fr_1.2fr] gap-[10px]">
          <div className="bg-zinc-800 h-[250px] md:h-[350px]"></div>
          <div className="bg-zinc-800 h-[250px] md:h-[350px]"></div>
          <div className="bg-zinc-800 h-[250px] md:h-[350px]"></div>
        </div>
      </section>

      {/*  */}
      <section className="py-[20px] md:py-[60px]">
        <span className="block text-center mb-[20px] text-[20px] md:text-[24px] text-[#cd3037]">WTS Global</span>
        <div className="max-w-[1100px] w-[95%] mx-auto">

          <div className="global__news">
            <NewsCard title="WTS Global Financial Services" description="News on tax development" img="/assets/images/financial-services.webp" url="/" />
            <NewsCard title="WTS Global Financial Services" description="News on tax development" img="/assets/images/financial-services.webp" url="/" />
            <NewsCard title="WTS Global Financial Services" description="News on tax development" img="/assets/images/financial-services.webp" url="/" />
            <NewsCard title="WTS Global Financial Services" description="News on tax development" img="/assets/images/financial-services.webp" url="/" />
            <NewsCard title="WTS Global Financial Services" description="News on tax development" img="/assets/images/financial-services.webp" url="/" />
            <NewsCard title="WTS Global Financial Services" description="News on tax development" img="/assets/images/financial-services.webp" url="/" />

          </div>
        </div>
      </section>
    </div>
  );
}
