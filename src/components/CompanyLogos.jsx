import {companyLogos} from '../constants'


const CompanyLogos = ({className}) => {
  return (
    <div className={`${className || ""} `}>

        <h5 className=' font-light text-xs tracking-tagline uppercase mb-6 text-center text-white/50 '>Helping people create beautiful content</h5>
        <ul className='flex'>
            {companyLogos.map((icon, index)=>(
                <li className='flex items-center justify-center flex-1 h-[8.5rem] ' key={index}>
                    <img src={icon} alt={icon} width={134} height={28} />
                </li>
            ))}
        </ul>
    </div>
  )
}

export default CompanyLogos; 
 