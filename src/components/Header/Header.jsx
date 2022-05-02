
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
     label : <FormattedMessage id="Experiance"/> ,
     link : '/experiance'
    },
    {
     id : 3,
     label : <FormattedMessage id="Experiance"/> ,
     link : '/experiance'
    },
    {
     id : 4,
     label : <FormattedMessage id="Skills"/> ,
     link : '#'
    },

]

export default function Header({setLang,lang}) {
   
    function handleChange ({ target: { value } }) {
        setLang(value)
    }


    return(
        <div className="header__container">
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
    )
}