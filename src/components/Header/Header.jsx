import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import './Header.scss'
const FakeDatasHeader = [
    {
    id : 1,
    label : <FormattedMessage id="AboutMe"/> ,
     link : '/'
    },
   
    {
     id : 2,
     label : <FormattedMessage id="Skills"/> ,
     link : '#'
    },

]

export default function Header({setLang,lang}) {
    const [isOpen,setOpen] = useState(false)
    function handleChange ({ target: { value } }) {
        setLang(value)
    }


    return(
    <>
        <div className="header__container">
            {!isOpen ?
            <div>
            <DensityMediumIcon className='OpenBurger' onClick = {()=> setOpen(true)} /> 
            </div>
             : 
             <CloseIcon className='OpenBurger' onClick = {()=> setOpen(false)}/>}
            <div className="header__info__container" >
            {FakeDatasHeader.map (({id,label,link}) => (
        
            
            <Link key={`header${id}`} className="header__info"  to={link ? link : '#'}>
                    {label}
            </Link>
            
        
                
            ))}
           
        
         <a href="#Footer" className="header__info"> <FormattedMessage id="Contact"/></a>
         
         
         <select value={lang} onChange={handleChange} className="language">
            <option value="RU-RU">Рус</option>
            <option value="en-US">Eng</option>
          </select>
          </div>
          
            
        </div>
        { isOpen &&
        <div className='Sidebar'>
            {FakeDatasHeader.map (({id,label,link}) => (
            <div key={`side${id}`} className='sidebar__info__container'>    
            <Link onClick={() => setOpen(false) } className="sidebar__info"  to={link ? link : '#'}>
                    {label}
            </Link>
            </div>    
            ))}
            <div className='sidebar__info__container'>
            <a  onClick={() => setOpen(false) } href="#Footer" className="sidebar__info"> <FormattedMessage id="Contact"/></a>
            </div>
        </div>}
    </>
    )
}
