import { useEffect, useState } from "react"

export default function Navbar() {
    const [sticky, setSticky] = useState(false)
    const [open, setOpen] = useState(false)
    const menuLinks = [
        { name: "Home", link: "#home" },
        { name: "About", link: "#about" },
        { name: "Skills", link: "#skills" },
        { name: "Projects", link: "#projects" },
        { name: "Contact", link: "#home" }
    ]
    useEffect(() => {
        window.addEventListener("scroll", () => {
            const nav = document.querySelector("nav")
            setSticky(window.scrollY > 0)
        })
    })
    return (
        <nav className={`fixed w-full left-0 top-0 z-[999] ${sticky ? "bg-white/60 text-gray-900" : "text-white"}`}>
            <div className="flex items-center justify-between">
                <div className="mx-7">
                    <h4 className="text-4xl uppercase font-bold">
                        A<span className="text-cyan-600">le</span>x
                    </h4>
                </div>
                <div className={`${sticky ? "md:bg-white/0 bg-white" : "bg-white"} text-gray-900 md:block hidden px-7 py-2 font-medium bg-white rounded-bl-full`}>
                    <ul className="flex items-center gap-1 py-2 text-lg">
                        {
                            menuLinks.map((item, index) => (
                                <li key={index} className="px-6 hover:text-cyan-600">
                                    <a href={item?.link}>{item?.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div
                    onClick={() => setOpen(!open)}
                    className={`z-[999] ${open ? "text-gray-900" : "text-gray-100"} text-3xl md:hidden m-5`}>
                    <ion-icon name="menu"></ion-icon>
                </div>
                <div className={`md:hidden text-gray-900 absolute w-2/3 h-screen px-7 py-2 font-medium bg-white top-0 duration-300 ${open ? "right-0" : "right-[-100%]"}`}>
                    <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
                        {
                            menuLinks.map((item, index) => (
                                <li key={index} className="px-6 hover:text-cyan-600">
                                    <a href={item?.link}>{item?.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}