import { loading } from "../assets";


const Generating = ({className}) => {

    return(
       <div className={`flex items-center h-[3.5rem] px-6 bg-zinc-950/80 rounded-[1.7rem] ${className || "" } `}>
        <img src={loading} alt="loadding" className="w-5 h-5 mr-4"/>
        AI is Generating
       </div>
    )
}

export default Generating; 