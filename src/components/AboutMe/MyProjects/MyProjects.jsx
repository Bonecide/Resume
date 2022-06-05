import { FormattedMessage } from 'react-intl';
import OpacityButton from '../../Buttons/OpacityButton';
import OpacityFrame from '../../Frames/OpacityFrame/OpacityFrame';
import './MyProjects.scss'
export default function MyProjects() {
    const MyProjects = [
        {
            id : 1,
            img : 'img/AKI.png',
            SiteLink: 'https://creative.kg/',
            GitHubLink: 'https://github.com/Bonecide/AKI-Creative-Project',
            className : 'AKI_Project',
            Type : <FormattedMessage id='CommercialProject'/>,
            Used : [
                'Html' , 'Scss' , 'JavaScript', 'React' , 'i18n', 'Adaptive'
            ]
        },
        {
            id : 2,
            img : 'img/Aibolit.png',
            SiteLink: 'https://aibolit-web.vercel.app/',
            GitHubLink: 'https://github.com/Bonecide/aibolit',
            className : 'Aibolit_Project',
            Type : <FormattedMessage id='EducationalProject'/>,
            Used : [
                'Html' , 'Module CSS' , 'React' , 'JavaScript' 
            ]
        },
        {
            id : 3,
            img : 'https://prnt.sc/Cr1HKXcVwrjl',
            SiteLink: 'http://codify-library.vercel.app/',
            GitHubLink: 'https://github.com/Bonecide/Codify-Library',
            className : 'Library',
            Type : 'Test Project',
            Used : [
                 'Scss' , 'React' , 'JavaScript', 'Redux'  
            ]
        },
    ]



    return(
        <div className='MyProjects__container' id='Projects'>
            <h2 className='MyProjects__HeadLine'><FormattedMessage id='MyProjects'/></h2>
            <div className='Projects'>
                {MyProjects.map((Project)=> (
                   <div key={`proj-${Project.id}`} className = 'ProjectList' >
                        <div className={Project.className}>
                            <div className='overlay'>
                                <div className='Project_buttons'>
                                <OpacityButton link={Project.SiteLink} target='_blank' rel="noreferrer" >
                                    <p><FormattedMessage id='ViewSite'/></p>
                                </OpacityButton>
                                <OpacityButton link={Project.GitHubLink} target='_blank' rel="noreferrer">
                                    <p><FormattedMessage id='ViewCode'/></p>
                                </OpacityButton>
                                </div>
                            </div>
                           
                        </div>
                        <h3 className='Project_Type'>{Project.Type}</h3>
                        <div className='Project_Use'>
                                {Project.Used.map((use,idx) => (
                                    <div key={`WhatIUse${idx}`}>
                                        <OpacityFrame>{use}</OpacityFrame>
                                    </div>
                                ))}
                        </div>
                    </div>  
                ))}
                
            </div>
            
        </div>
    )
}