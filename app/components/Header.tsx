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
        console.log(pathname.includes('/about-us'.slice(1, -1)));

    }, []);



    return (
        <header className="bg-white py-[10px] fixed md:sticky top-0 md:top-[-40px] z-50 w-full shadow">
            <div className="w-[95%] mx-auto max-w-[1900px] mb-[10px] hidden lg:block">
                <div className="flex justify-end items-center gap-[30px]">


                    <Link href="/press" className="text-[#cd3037] text-[14px] hover:underline">PBS Worldwide</Link>
                </div>
            </div>

            <div className="relative" onMouseLeave={() => handleMouseLeave()}>
                <div className="w-[95%] mx-auto max-w-[1900px] flex justify-between items-center h-full p-0">
                    <PBSLogo />
                    <nav className="hidden lg:flex items-center gap-[0px]">
                        {menuItems.map((item, index) => {
                            return <div key={index} onClick={() => handleNavigateToPage(item.url)} className={`cursor-pointer text-[14px] uppercase h-[100%] flex items-center p-[10px_20px] ${index === menuCount ? 'bg-zinc-100 font-[500]' : 'bg-white font-[400]'} ${pathname === item.url ? 'font-[500] text-[#cd3037]' : 'text-zinc-800'}`} onMouseEnter={() => handleMouseEnter(item.submenu, index, item.description, item.name, item.url)}>
                                {item.name}
                            </div>
                        })}

                    </nav>


                    <div className="block lg:hidden" onClick={handleMobileMenuClick}>
                        {isMobileMenuOut ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-zinc-800">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-zinc-800">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>}

                    </div>
                </div>

                {submenu && <div className="">
                    <div className="mt-[10px] bg-zinc-50 p-[40px]">
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
                    </div>
                </div>}
            </div>

            {isMobileMenuOut && <MobileMenu />}

        </header>
    )
}