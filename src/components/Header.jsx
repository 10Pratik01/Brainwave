import {brainwave} from "../assets"
import {navigation} from '../constants'

const Header = () => {

    return (
      <div className="fixed top-0 z-50 bg-zinc-950/90 backdrop-blur-sm broder-b border-zinc-800 lg:bg-zinc-950/90 lg:backdrop-blur-sm lg:border-zinc-800">

        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
            <a className="block w-[12rem] xl:mr-8" href="#hero">
                <img src={brainwave} width={190} height={40} />
            </a>

            <nav className="hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-zinc-950 lg:static lg:flex lg:mx-auto lg:bg-transparent">
                <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                    {navigation.map((item) => (
                        <a 
                            key={item.id} 
                            href={item.url}
                            className={`block relative text-2xl uppercase text-white transition-colors hover:text-purple-400 ${item.onlyMobile ? "lg:hidden" : ""} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold `}
                        >
                            {item.title}
                        </a>
                    ))}
                </div>
            </nav>
        </div>

      </div>
    )
}

export default Header; 