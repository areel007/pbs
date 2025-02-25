"use client"

import Link from "next/link"
import { PBSLogo } from "./Logo"
import { useEffect, useState } from "react"
import { MobileMenu } from "./Mobile.Menu"
import { menuItems } from "../utils/menu"
import { Submenu } from "../utils/type"
import { useRouter, usePathname } from "next/navigation"


export const Header = () => {
    // variables: submenu, isMobileMenuOut, menuCount, description, name, url
    const [submenu, setSubmenu] = useState<undefined | Submenu[]>(undefined)

    const [isMobileMenuOut, setIsMobileMenuOut] = useState(false)

    const [menuCount, setMenuCount] = useState<null | number>(null)

    const [menuName, setMenuName] = useState('')

    const [menuUrl, setMenuUrl] = useState('')

    const [description, setDescription] = useState<undefined | string>(undefined)

    const router = useRouter()

    const pathname = usePathname()


    // methods: handleMouseEnter, handleMouseLeave, handleMobileMenuClick
    const handleMouseEnter = (item: Submenu[] | undefined, menuCount: number, description: string | undefined, name: string, url: string) => {
        setSubmenu(item)
        setMenuCount(menuCount)
        setDescription(description)
        setMenuName(name)
        setMenuUrl(url)


    }

    const handleMouseLeave = () => {
        setSubmenu(undefined)
        setMenuCount(null)
        setDescription(undefined)
        setMenuName('')
        setMenuUrl('')
    }

    const handleMobileMenuClick = () => {
        setIsMobileMenuOut(!isMobileMenuOut)
    }

    const handleNavigateToPage = (url: string) => {
        router.push(url)
        handleMouseLeave()
    }

    useEffect(() => {

    }, []);



    return (
        <header className="bg-white py-[10px] fixed md:sticky top-0 md:top-[-40px] z-50 w-full shadow">
            <div className="w-[95%] mx-auto max-w-[1900px] mb-[10px] hidden md:block">
                <div className="flex justify-end items-center gap-[30px]">

                    <div className="flex items-center gap-[10px]">
                        <Link href="http://linkedin.com" className="">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-[18px] fill-[#cd3037]" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                        </Link>

                        <Link href="https://youtube.com">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="fill-[#cd3037] h-[18px]"><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" /></svg>
                        </Link>
                    </div>

                    <Link href="/press" className="text-[#cd3037] text-[14px] hover:underline">Press</Link>
                    <Link href="/press" className="text-[#cd3037] text-[14px] hover:underline">Events & Webinars</Link>
                    <Link href="/press" className="text-[#cd3037] text-[14px] hover:underline">Cl Guide</Link>
                    <Link href="/press" className="text-[#cd3037] text-[14px] hover:underline">Contact</Link>
                </div>


            </div>

            <div className="relative" onMouseLeave={() => handleMouseLeave()}>
                <div className="w-[95%] mx-auto max-w-[1900px] flex justify-between items-center h-full p-0">
                    <PBSLogo />
                    <nav className="hidden md:flex items-center gap-[0px]">
                        {menuItems.map((item, index) => {
                            return <div key={index} onClick={() => handleNavigateToPage(item.url)} className={`cursor-pointer text-[14px] uppercase h-[100%] flex items-center p-[10px_20px] ${index === menuCount ? 'bg-zinc-100 font-[500]' : 'bg-white font-[400]'} ${pathname.includes(item.url) ? 'font-[500] text-[#cd3037]' : 'text-zinc-800'}`} onMouseEnter={() => handleMouseEnter(item.submenu, index, item.description, item.name, item.url)}>
                                {item.name}
                            </div>
                        })}

                    </nav>

                    <Link href="/search" className="hidden md:block" onClick={() => window.location.href = '/search'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>

                    </Link>

                    <div className="block md:hidden" onClick={handleMobileMenuClick}>
                        {isMobileMenuOut ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-zinc-800">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-zinc-800">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>}

                    </div>
                </div>

                {submenu && <div className="p-[40px] bg-zinc-50">
                    <div className="w-[80%] mx-auto max-w-[1900px]">
                        <span className="uppercase text-[18px] font-[500] text-[#cd3037] inline-block mb-[20px]">{menuName}</span>
                        <div className="grid grid-cols-[300px_1fr]">
                            <div>
                                <span className="text-zinc-700 text-[14px] leading-[1.6] inline-block mb-[10px]">
                                    {description}
                                </span>

                                <div className="bg-[#cd3037] text-white text-[14px] py-[10px] px-[20px] inline-block cursor-pointer" onClick={() => handleNavigateToPage(menuUrl)}>
                                    Read more
                                </div>
                            </div>

                            <ul className="">
                                {submenu.map((item, index) => {
                                    return <li key={index} onClick={() => handleNavigateToPage(item.url)} className="cursor-pointer flex items-center gap-[10px] text-[14px] font-[300] group">
                                        <span className="text-[#cd3037]">&gt;</span>
                                        <span className={`group-hover:underline ${item.url === location.pathname ? 'font-[500] text-[#cd3037]' : ''}`}>{item.name}</span>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>}
            </div>

            {isMobileMenuOut && <MobileMenu />}

        </header>
    )
}