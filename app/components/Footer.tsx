import Link from "next/link"
import { PBSLogo } from "./Logo"

export const Footer = () => {
    return (
        <footer className="py-[20px]md:py-[40px] lg:py-[60px] bg-zinc-100">
            <div className="w-[95%] mx-auto max-w-[1900px] mb-[10px] hidden md:block">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[60px]">
                    <div className="">
                        <PBSLogo />
                        <p className="max-w-[350px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia nulla, quidem incidunt maxime sequi unde.</p>
                    </div>

                    <div className="flex">
                        <div className="flex-1">
                            <span className="uppercase text-[14px] font-[500]">Quick Links</span>
                            <ul>
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <Link href="/about-us">About Us</Link>
                                </li>
                                <li>
                                    <Link href="/services">Services</Link></li>
                                <li>
                                    <Link href="/experts">Experts</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="">
                            <p>a: Lorem ipsum dolor sit amet. <br /> t: +234X</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}