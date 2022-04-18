import './AboutMe.scss'
import AboutMeCards from './AboutMeCards/AboutMeCard'
import { FormattedMessage } from 'react-intl';

export default function AboutMe() {

    return (
    <div className='aboutMe'>
        <div className="aboutMe_container">
                <div className="aboutMe_items">
                    <div className="AboutMe_Text">
                        <h2><FormattedMessage id='MyName'/></h2>
                        <p> <span> <p style={{color : 'blue'}}>React</p></span> Frontend developer</p>
                    </div>
                    <div className="AboutMe_photo">
                        <img src={'img/myPhoto.png'} alt="" />
                    </div>
                </div>
        </div>
        <AboutMeCards/>
    </div>
    )
}