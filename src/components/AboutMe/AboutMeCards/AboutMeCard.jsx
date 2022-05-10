import './AboutMeCards.scss'
import { FormattedMessage } from 'react-intl';


export default function AboutMeCards({value}) {


    return (
    <>
        <div className="cards_container">
            <div className="Card">
                <div>
                    <h3>
                        <FormattedMessage id='WhoAmI'/>
                    </h3>
                </div>
                    <ul>
                        <li>
                         <h4>
                             <FormattedMessage id='Name'/>
                         </h4>
                        <FormattedMessage id='WhoAmIName'/>
                        </li>
                        <li>
                         <h4><FormattedMessage id='Age'/></h4> 17
                        </li>
                       
                    </ul>
            </div>
            <div className="Card">
                <div>
                    <h3>
                        <FormattedMessage id='EducationTitle'/>
                    </h3>
                </div>
                    <ul>
                    <li>
                            <h4>
                                <FormattedMessage id='EducationText'/>
                            </h4>
                        <FormattedMessage id='Education'/>
                        </li>
                        <li>
                            <h4>
                                <FormattedMessage id='ITEducationText'/>
                            </h4>
                             <a target='_blank' rel='noreferrer' href="https://www.codifylab.com/"> {value === 'RU-RU' ? 'Курсы' : null} Codify {value === 'en-US' ? 'Courses' : null}</a><FormattedMessage id='ITEducation'/>
                        </li>
                    </ul>
            </div>
          
        </div>
        <div className='LastCard__container'>
            <div className='Card'>
                <div>
                    <h3>
                        <FormattedMessage id='Stack'/>
                    </h3>
                </div>
                    <ul>
                        <li className='Stack'>
                            <h4><FormattedMessage id='AboutStack'/></h4> <a href="#"><FormattedMessage id='Here'/></a>
                        </li>
                    </ul>
            </div>
        </div>
    </>
    )
}