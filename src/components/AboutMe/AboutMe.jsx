import './AboutMe.scss'
import AboutMeCards from './AboutMeCards/AboutMeCard'
import { FormattedMessage } from 'react-intl';
import ContactButton from '../ContactButton/ContactButton';
import MyProjects from './MyProjects/MyProjects';
import WorkExperience from './WorkExperience/WorkExperience';

export default function AboutMe({value}) {

    return (
    <div className='aboutMe'>
        <div className="aboutMe_container">
                <div className="aboutMe_items">
                    <div className="AboutMe_Text">
                        <h2><FormattedMessage id='MyName'/></h2>
                        <p> <span className='AboutMe_React' style={{color : '#9BC7DF'}}> React</span> <br /> Frontend developer</p>
                        <ContactButton><a style={{color: 'black'}} href="#Footer">Contact Me</a></ContactButton>
                    </div>
                    <div className="AboutMe_photo">
                        <img src={'img/myPhoto.png'} alt="asd" />
                    </div>
                </div>
        </div>
        <AboutMeCards value={value}/>
        <WorkExperience/>
        <MyProjects/>
    </div>
    )
}