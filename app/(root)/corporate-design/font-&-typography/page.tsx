export default function FontAndTypography() {
    return <main>
        {/* hero */}
        <section className="w-full h-[50vh] bg-red-600 py-[40px]">
            <div className="max-w-[1200px] w-[90%] mx-auto flex flex-col justify-end md:justify-start gap-[30px] md:gap-[20px] h-full">
                <span className="text-[36px] md:text-[40px] leading-[1.2] text-white">Corporate Design</span>

                <p className="text-[20px] md:text-[28px] leading-[1.2] text-white">Font & Typography</p>
            </div>
        </section>

        {/*  */}
        <section className="py-[30px] md:py-[60px]">

            <div className="max-w-[1140px] w-[90%] mx-auto">

                <div className="">
                    <Title title="PBR Cera" />
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-[40px]">
                        <div className="">
                            <p className="mb-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatem cum quas unde maiores fugit iure eligendi tempore, vel, obcaecati culpa quos assumenda cupiditate, pariatur atque officiis doloremque corrupti molestias? <br /><br />Iste ipsum rem doloremque eos modi voluptatibus quis consequuntur sunt quia, aliquam esse obcaecati facilis?</p>

                            <a href="" className="p-[10px_20px] bg-red-600 text-white inline-block">
                                Download PBR Cera Font
                            </a> <br /><br />

                            <span className="underline">&gt; How to install a font guide</span>
                        </div>

                        <div className="w-full h-[200px] bg-zinc-200"></div>
                    </div>
                </div>

                <div className="mt-[60px]">

                    <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-[40px]">
                        <div className="w-full h-[200px] bg-zinc-200"></div>
                        <div className="">
                            <Title title="Typography" />
                            <p className="mb-[20px] mt-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tempora assumenda molestiae saepe quaerat, quam totam consequatur eaque ex debitis maiores, quos et nam pariatur neque architecto consequuntur! <br /><br /> Saepe tempora harum rerum placeat velit, ab nulla nisi ex porro, unde similique eligendi repellendus nam. Voluptates, eius ea iusto obcaecati, odit repellat atque earum, soluta culpa quasi incidunt quo similique repellendus?</p>


                        </div>


                    </div>
                </div>

                <div className="mt-[60px]">
                    <Title title="Font Application" />
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-[40px]">
                        <div className="">
                            <p className="mb-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatem cum quas unde maiores fugit iure eligendi tempore, vel, obcaecati culpa quos assumenda cupiditate, pariatur atque officiis doloremque corrupti molestias? <br /><br />Iste ipsum rem doloremque eos modi voluptatibus quis consequuntur sunt quia, aliquam esse obcaecati facilis? <br /><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem placeat nihil magni illo fuga earum repellendus numquam voluptates provident eius doloremque at eos velit natus, similique voluptatibus ipsum quos quam.
                            </p>


                        </div>

                        <div className="w-full h-[200px] bg-zinc-200"></div>
                    </div>
                </div>
            </div>
        </section>
    </main>
}

const Title = ({ title }: { title: string }) => {
    return <h3 className="font-[600] text-[20px] md:text-[24px]">{title}</h3>
}