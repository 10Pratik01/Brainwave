import {brainwave} from "../assets"

const Header = () => {

    return (
      <div className="fixed top-0 z-50 bg-zinc-950/90 backdrop-blur-sm broder-b border-zinc-800 lg:bg-zinc-950/90 lg:backdrop-blur-sm lg:border-zinc-800">

        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
            <a className="block w-[12rem] xl:mr-8" href="#hero">
                <img src={brainwave} width={190} height={40} />
            </a>

            <nav className="hidden fixed ">

            </nav>
        </div>

      </div>
    )
}

export default Header; 