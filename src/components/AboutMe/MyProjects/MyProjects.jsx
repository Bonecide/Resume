import { FormattedMessage } from 'react-intl';
import OpacityButton from '../../Buttons/OpacityButton';
import './MyProjects.scss'
export default function MyProjects() {
    const MyProjects = [
        {
            id : 1,
            img : 'img/AKI.png',
            SiteLink: 'https://creative.kg/',
            GitHubLink: 'https://github.com/Bonecide/AKI-Creative-Project',
            className : 'AKI_Project',
        },
        {
            id : 2,
            img : 'img/Aibolit.png',
            SiteLink: 'https://aibolit-web.vercel.app/',
            GitHubLink: 'https://github.com/Bonecide/aibolit',
            className : 'Aibolit_Project',
        },
    ]



    return(
        <div className='MyProjects__container' id='Projects'>
            <h2 className='MyProjects__HeadLine'><FormattedMessage id='MyProjects'/></h2>
            <div className='Projects'>
                {MyProjects.map((Project)=> (
                    <div key={`proj-${Project.id}`} className={Project.className}>
                        <div className='overlay'>
                            <div className='Project_buttons'>
                            <div className='overlay'/>
                            <OpacityButton link={Project.SiteLink} target='_blank' rel="noreferrer" >
                                 <p>View live site</p>
                            </OpacityButton>
                            <OpacityButton link={Project.GitHubLink} target='_blank' rel="noreferrer">
                                <p>View github code</p>
                            </OpacityButton>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}