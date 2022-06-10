import './WorkExperience.scss'
import { FormattedMessage } from 'react-intl';
export default function WorkExperience() {


    return(
        <div className='WorkExperience'>
            <div className='WorkExperience_container'>
                <h2><FormattedMessage id='WorkExperience'/></h2>
                <p><FormattedMessage id='ExperianceInWork'/></p>
            </div>
        </div>
    )
}