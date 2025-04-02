import crown from "@/public/assets/icons/crown.png"
import number1 from "@/public/assets/icons/number1.png"
import number2 from "@/public/assets/icons/number2.png"

import Image from "next/image"

export default function Colors() {
    return <main>
        {/* hero */}
        <section className="w-full h-[50vh] bg-red-600 py-[40px]">
            <div className="max-w-[1200px] w-[90%] mx-auto flex flex-col justify-end gap-[30px] md:gap-[20px] h-full">
                <span className="text-[36px] md:text-[40px] leading-[1.2] text-white">Corporate Design</span>

                <p className="text-[20px] md:text-[28px] leading-[1.2] text-white">Colors</p>
            </div>
        </section>

        {/*  */}
        <section className="py-[30px] md:py-[60px]">

            <div className="max-w-[1140px] w-[90%] mx-auto mb-[40px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ad non soluta quidem id illum cumque. Quas ad quidem voluptatem laborum modi ducimus voluptas nesciunt neque, praesentium non aut officiis alias, et sequi ipsa asperiores consequuntur aliquid cum exercitationem illum? Ducimus rerum voluptatibus consequuntur dolorum vel vero eos, quo fuga!
            </div>

            <div className="max-w-[1000px] w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-[40px] sm:gap-[0] mb-[40px]">
                <div className="flex flex-col justify-center items-center">
                    <Image src={crown} alt="pbs global" width={100} />
                    <span className="font-[600] text-zinc-700">Color Pallete</span>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <Image src={number1} alt="pbs global" width={100} />
                    <span className="font-[600] text-zinc-700">Primary Colors</span>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <Image src={number2} alt="pbs global" width={100} />
                    <span className="font-[600] text-zinc-700">Secondary Colors</span>
                </div>
            </div>

            <div className="max-w-[1200px] w-[90%] mx-auto">
                <Title title="Color Pallete" />
                <div className="my-[40px] w-full h-[300px] md:h-[700px] bg-zinc-200"></div>
                <a href="" download="" className="p-[10px_20px] bg-red-600 text-white">Download Color Pallete</a>
            </div>

            <div className="max-w-[1200px] w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[40px] my-[60px]">
                <div className="">
                    <Title title="Primary Colors" />
                    <div className="mt-[20px]">
                        <span className="font-[600]">PBR Red</span>
                        <p className="mb-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus odio animi atque laudantium culpa tempora porro maxime consectetur quod eligendi.</p>

                        <span className="font-[600]">Red Spectrum</span>
                        <p className="mb-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus odio animi atque laudantium culpa tempora porro maxime consectetur quod eligendi.</p>

                        <span className="font-[600]">Accent Color</span>
                        <p className="mb-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illum sint cumque, quisquam possimus accusantium qui. Deleniti animi ad porro laudantium doloribus modi nostrum vero voluptates, laboriosam fuga et reprehenderit?</p>

                        <span className="font-[600]">White</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus odio animi atque laudantium culpa tempora porro maxime consectetur quod eligendi.</p>
                    </div>
                </div>

                <div className="w-full h-full bg-zinc-200">
                </div>

            </div>

            <div className="max-w-[1200px] w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[40px] my-[40px]">
                <div className="">
                    <Title title="Secondary Colors" />
                    <div className="mt-[20px]">
                        <span className="font-[600]">Warm Grey Dark and Light</span>
                        <p className="mb-[20px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt dolorem, nobis ut tenetur nostrum asperiores porro dolores quos soluta libero veniam ad perferendis. <br /><br />dolor est voluptatum recusandae laborum autem mollitia eius minus quo earum laudantium provident. <br /><br />Cupiditate qui labore iure nihil quia eaque reiciendis voluptates consectetur cumque officiis odit nam, minus beatae at omnis quo veniam sapiente. Tempore, voluptatum fugit!</p>

                        <span className="font-[600]">Anthracite</span>
                        <p className="mb-[20px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores a quod, sapiente delectus natus iste laudantium. Neque placeat odio illo aperiam quis laboriosam odit. <br /><br /> Qui fuga aspernatur nulla dolore voluptatibus.</p>

                        <span className="font-[600]">Black</span>
                        <p className="mb-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illum sint cumque, quisquam possimus accusantium qui. Deleniti animi ad porro laudantium doloribus modi nostrum vero voluptates, laboriosam fuga et reprehenderit?</p>
                    </div>
                </div>

                <div className="w-full h-[300px] md:h-[450px] bg-zinc-200">
                </div>

            </div>
        </section>
    </main>
}

const Title = ({ title }: { title: string }) => {
    return <h3 className="font-[600] text-[20px] md:text-[24px]">{title}</h3>
}