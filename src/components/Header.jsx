import {brainwave} from "../assets"

const Header = () => {

    return (
      <div className="fixed top-0 z-50 bg-n-8/90 backdrop-blur-sm broder-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm lg:border-n-6">

        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
            <a >
                <img src={brainwave}  />
            </a>
        </div>

      </div>
    )
}

export default Header; 