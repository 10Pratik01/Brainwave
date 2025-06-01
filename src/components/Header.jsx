import {brainwave} from "../assets"
import {navigation} from '../constants'
import { useLocation } from "react-router-dom"
import Button from "./Button"
import Menusvg from "../assets/svg/MenuSvg"
import {HamburgerMenu} from './design/Header'
import { useState } from "react"

const Header = () => {
    const pathname = useLocation(); 
    const [openNavigation, setOpenNavigation] = useState(false);

    const toggleNavigation = () => {
        if(openNavigation){
            setOpenNavigation(false);
        }
        else{
            setOpenNavigation(true)
        }
    }

    const handleClick = () => {
        setOpenNavigation(false)
    }

    return (
      <div className={`fixed top-0 left-0 w-full z-50 bg-zinc-950/90 backdrop-blur-sm broder-b border-zinc-800 lg:bg-zinc-950/90 lg:backdrop-blur-sm lg:border-zinc-800 ${openNavigation ? "bg-zinc-950" : "bg-zinc-950/90 backdrop-blur-sm"}`}>

        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
            <a className="block w-[12rem] xl:mr-8" href="#hero">
                <img src={brainwave} width={190} height={40} />
            </a>

            <nav className={`${openNavigation ? "flex" : "hidden"} fixed top-[5rem] left-0 right-0 bottom-0 bg-zinc-950 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
                <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                    {navigation.map((item) => (
                        <a 
                            key={item.id} 
                            href={item.url}
                            className={`block relative text-2xl uppercase text-white transition-colors hover:text-purple-400 ${item.onlyMobile ? "lg:hidden" : ""} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url === pathname.hash ? 'z-2 lg:text-white ' : 'lg:text-white/50'} lg:leading-5 lg:hvoer:text-white xl:px-12`}
                        >
                            {item.title}
                        </a>
                    ))}
                    <HamburgerMenu/>
                </div>
            </nav>
            <a href="#signup" className="button hidden mr-8 text-white/50 transition-colors hover:text-white lg:block">New Account</a>
            <Button className='hidden lg:flex' href='#login'>
                    Sign in
            </Button>

            <Button className='ml-auto lg:hidden' px='px-3' onClick={toggleNavigation}>
                <Menusvg openNavigation={openNavigation}/>
            </Button>
        </div>

      </div>
    )
}

export default Header; 