import Image from "next/image";

import design from "@/public/assets/icons/design.png"
import handshake from "@/public/assets/icons/handle_shake.png"
import olympic from "@/public/assets/icons/edit.png"

export default function LogoAndLabel() {
    return <main>
        {/* hero */}
        <section className="w-full h-[50vh] bg-red-600 py-[40px]">
            <div className="max-w-[1200px] w-[90%] mx-auto flex flex-col justify-end gap-[30px] md:gap-[20px] h-full">
                <span className="text-[36px] md:text-[40px] leading-[1.2] text-white">Corporate Design</span>

                <p className="text-[20px] md:text-[28px] leading-[1.2] text-white">Logo & Label</p>
            </div>
        </section>

        {/*  */}
        <section className="py-[30px] md:py-[60px]">
            <div className="max-w-[1000px] w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-[40px] sm:gap-[0] mb-[40px]">
                <div className="flex flex-col justify-center items-center">
                    <Image src={design} alt="pbs global" width={100} />
                    <span className="font-[600] text-zinc-700">PBS Global Logo</span>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <Image src={handshake} alt="pbs global" width={100} />
                    <span className="font-[600] text-zinc-700">PBS Global Label</span>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <Image src={olympic} alt="pbs global" width={100} />
                    <span className="font-[600] text-zinc-700">The &quot;Olympic minimum&quot;</span>
                </div>
            </div>

            <div className="max-w-[1200px] w-[90%] mx-auto grid grid-cols-1 md:grid-cols-[1fr_400px] gap-[40px] mb-[40px]">
                <div className="">
                    <div className="mb-[10px]">
                        <h3 className="font-[600] text-[22px] md:text-[26px] inline-block">BPS Global Logo</h3>
                        <p className="font-[600]">Usage only for PBS Global central marketing</p>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui laboriosam culpa eveniet magni, incidunt deleniti nam dolor? Molestias dignissimos consequuntur porro fugiat reprehenderit ipsa, eligendi ipsam quos fuga eos dicta commodi veniam voluptate nulla aperiam blanditiis! Aperiam doloremque dolores, aspernatur necessitatibus porro molestiae deleniti harum asperiores quo nobis quasi totam. <br /><br />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, quisquam commodi quidem repellat reiciendis necessitatibus exercitationem doloremque vitae reprehenderit maiores architecto molestiae veniam hic odio! <br /><br /></p>

                    <p className="font-[600]">Usage only for PBS Global central marketing <br /><br /></p>

                    <span className="text-red-600">Color variants <br /><br /></span>

                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore culpa, aperiam inventore deserunt delectus exercitationem. <br /><br /></p>

                    <span className="text-red-600">Positioning <br /><br /></span>

                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore culpa, aperiam inventore deserunt delectus exercitationem. <br /><br /></p>

                    <span className="text-red-600">Proportion and protection zone <br /><br /></span>

                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore culpa, aperiam inventore deserunt delectus exercitationem. <br /><br /></p>

                    <a href="" className="p-[10px_20px] bg-red-600 text-white font-[500]">Download PBR Global Logo</a>
                </div>

                <div className="">
                    <div className="w-full h-[200px] bg-red-600"></div>
                </div>
            </div>

            <div className="max-w-[1200px] w-[90%] mx-auto grid grid-cols-1 md:grid-cols-[1fr_400px] gap-[40px] mb-[40px]">
                <div className="">
                    <div className="mb-[10px]">
                        <h3 className="font-[600] text-[22px] md:text-[26px] inline-block">BPS Global Label</h3>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui laboriosam culpa eveniet magni, incidunt deleniti nam dolor? Molestias dignissimos consequuntur porro fugiat reprehenderit ipsa, eligendi ipsam quos fuga eos dicta commodi veniam voluptate nulla aperiam blanditiis! Aperiam doloremque dolores, aspernatur necessitatibus porro molestiae deleniti harum asperiores quo nobis quasi totam. <br /><br />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, quisquam commodi quidem repellat reiciendis necessitatibus exercitationem doloremque vitae reprehenderit maiores architecto molestiae veniam hic odio! <br /><br />
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. In sequi quos incidunt nam sint, magnam quae qui dolor nisi quasi possimus dolorum et doloribus? Cupiditate dicta debitis veniam omnis vel.
                    </p>

                    <a href="" className="p-[10px_20px] bg-red-600 text-white font-[500] mt-[20px] inline-block">Download PBR Global Label</a>
                </div>

                <div className="">
                    <div className="w-full h-[200px] bg-red-600"></div>
                </div>
            </div>

            <div className="max-w-[1200px] w-[90%] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-[40px]">
                <div className="">
                    <div className="mb-[10px]">
                        <h3 className="font-[600] text-[22px] md:text-[26px] inline-block">The &quot;Olympic minimum&quot;</h3>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui laboriosam culpa eveniet magni, incidunt deleniti nam dolor? Molestias dignissimos consequuntur porro fugiat reprehenderit ipsa, eligendi ipsam quos fuga eos dicta commodi veniam voluptate nulla aperiam blanditiis! Aperiam doloremque dolores, aspernatur necessitatibus porro molestiae deleniti harum asperiores quo nobis quasi totam. <br /><br />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, quisquam commodi quidem repellat reiciendis necessitatibus exercitationem doloremque vitae reprehenderit maiores architecto molestiae veniam hic odio! <br /><br />
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. In sequi quos incidunt nam sint, magnam quae qui dolor nisi quasi possimus dolorum et doloribus? Cupiditate dicta debitis veniam omnis vel.
                    </p>

                    <a href="" className="p-[10px_20px] bg-red-600 text-white font-[500] mt-[20px] inline-block">Download PBR Global Label</a>
                </div>

                <div className="">
                    <div className="w-full h-[200px] bg-red-600"></div>
                </div>
            </div>
        </section>

    </main>
}