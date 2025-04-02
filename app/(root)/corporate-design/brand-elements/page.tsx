import Image from "next/image";

import thePlus from "@/public/assets/icons/the-plus-icon.png"
import brandLayer from "@/public/assets/icons/brand-layers-icon.png"
import donts from "@/public/assets/icons/donts-icon.png"

export default function BrandElement() {
    return <main>
        {/* hero */}
        <section className="w-full h-[50vh] bg-red-600 py-[40px]">
            <div className="max-w-[1200px] w-[90%] mx-auto flex flex-col justify-end gap-[30px] md:gap-[20px] h-full">
                <span className="text-[36px] md:text-[40px] leading-[1.2] text-white">Corporate Design</span>

                <p className="text-[20px] md:text-[28px] leading-[1.2] text-white">Brand Elements</p>
            </div>
        </section>

        {/*  */}
        <section className="py-[30px] md:py-[60px]">
            <div className="max-w-[1000px] w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-[40px] sm:gap-[0] mb-[40px]">
                <div className="flex flex-col justify-center items-center">
                    <Image src={thePlus} alt="pbs global" width={100} />
                    <span className="font-[600] text-zinc-700">The Plus</span>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <Image src={brandLayer} alt="pbs global" width={100} />
                    <span className="font-[600] text-zinc-700">Brand-Layer</span>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <Image src={donts} alt="pbs global" width={100} />
                    <span className="font-[600] text-zinc-700">Don&apos;ts</span>
                </div>
            </div>

        </section>

        <section>
            <div className="bg-zinc-200">
                <div className="max-w-[1200px] mx-auto py-[20px]">
                    <Title title="The Plus" />
                </div>
            </div>

            <div className="py-[40px] grid grid-cols-1 md:grid-cols-2 gap-[40px] max-w-[1200px] mx-auto">
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam voluptatem reiciendis similique vel iusto illum doloribus! Laudantium aspernatur quae doloremque corporis maxime? Quis temporibus eum soluta, nemo deserunt pariatur at aut error. Repudiandae consequuntur id quam assumenda voluptatibus! Modi animi, accusantium sed saepe inventore unde, vitae sapiente nesciunt aperiam nobis quis delectus iusto dolor. Rem, sit. Numquam cum similique ab sint minus tempora quos nisi. Maiores tempora vitae voluptatum, ea alias quia quod velit reprehenderit assumenda debitis numquam provident repellat soluta illo repudiandae cumque laudantium ex fugiat iusto delectus commodi quae doloribus harum? Ullam iste porro accusantium. Provident, quas sunt!
                </p>

                <div className="w-full h-[250px] bg-zinc-100"></div>
            </div>
        </section>

        <section>
            <div className="bg-zinc-200">
                <div className="max-w-[1200px] mx-auto py-[20px]">
                    <Title title="Brand-Layer" />
                </div>
            </div>

            <div className="py-[40px] grid grid-cols-1 md:grid-cols-2 gap-[40px] max-w-[1200px] mx-auto">
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam voluptatem reiciendis similique vel iusto illum doloribus! Laudantium aspernatur quae doloremque corporis maxime? Quis temporibus eum soluta, nemo deserunt pariatur at aut error. Repudiandae consequuntur id quam assumenda voluptatibus! Modi animi, accusantium sed saepe inventore unde, vitae sapiente nesciunt aperiam nobis quis delectus iusto dolor. Rem, sit. Numquam cum similique ab sint minus tempora quos nisi. Maiores tempora vitae voluptatum, ea alias quia quod velit reprehenderit assumenda debitis numquam provident repellat soluta illo repudiandae cumque laudantium ex fugiat iusto delectus commodi quae doloribus harum? Ullam iste porro accusantium. Provident, quas sunt!
                </p>

                <div className="w-full h-[250px] bg-zinc-100"></div>
            </div>
        </section>

        <section>
            <div className="bg-zinc-200">
                <div className="max-w-[1200px] mx-auto py-[20px]">
                    <Title title="Don'ts" />
                </div>
            </div>

            <div className="py-[40px] grid grid-cols-1 md:grid-cols-2 gap-[40px] max-w-[1200px] mx-auto">
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam voluptatem reiciendis similique vel iusto illum doloribus! Laudantium aspernatur quae doloremque corporis maxime? Quis temporibus eum soluta, nemo deserunt pariatur at aut error. Repudiandae consequuntur id quam assumenda voluptatibus! Modi animi, accusantium sed saepe inventore unde, vitae sapiente nesciunt aperiam nobis quis delectus iusto dolor. Rem, sit. Numquam cum similique ab sint minus tempora quos nisi. Maiores tempora vitae voluptatum, ea alias quia quod velit reprehenderit assumenda debitis numquam provident repellat soluta illo repudiandae cumque laudantium ex fugiat iusto delectus commodi quae doloribus harum? Ullam iste porro accusantium. Provident, quas sunt!
                </p>

                <div className="w-full h-[250px] bg-zinc-100"></div>
            </div>
        </section>
    </main>
}

const Title = ({ title }: { title: string }) => {
    return <h3 className="font-[600] text-[20px] md:text-[24px]">{title}</h3>
}