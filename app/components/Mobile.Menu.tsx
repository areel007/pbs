import { useState } from "react"
import { menuItems } from "../utils/menu"
import { Submenu } from "../utils/type"
import Link from "next/link"

export const MobileMenu = () => {
    // variables: submenu, step
    const [submenu, setSubmenu] = useState<undefined | Submenu[]>(undefined)
    const [step, setStep] = useState<number>(0)

    // methods: handleOpenSubmenu
    const handleOpenSubmenu = (item: Submenu[] | undefined) => {
        setStep(1)
        setSubmenu(item)
    }

    return <nav className="bg-zinc-50 text-[14px] text-zinc-800 fixed left-0 top-[52px] w-full">
        {step === 0 ? <ul>
            {menuItems.map((item, index) => {
                return <li key={index} className="flex justify-between items-center border-b border-zinc-200 p-[10px_0_10px_10px]">
                    <Link href={item.url} className="border-r border-zinc-300 flex-1" onClick={() => window.location.href = item.url}>{item.name}</Link>

                    {item.submenu && <div className="px-[10px]" onClick={() => handleOpenSubmenu(item.submenu)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>}

                </li>
            })}
        </ul> : <ul className="">
            {submenu?.map((item, index) => {
                return <li key={index} className="p-[10px] border-b border-zinc-200">
                    <Link href={item.url} className="" onClick={() => window.location.href = item.url}>{item.name}</Link>
                </li>
            })}
        </ul>
        }
    </nav>
}