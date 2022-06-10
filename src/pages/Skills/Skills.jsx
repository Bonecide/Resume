import './Skills.scss'
import { FormattedMessage } from 'react-intl';

import SkillsCircle from '../../components/SkillsCircle/SkillsCircle';
import { useEffect } from 'react';

export default function Skills() {
    useEffect(()=> {
        window.scrollTo(0,0)
    },[])
    const SkillsData = [
        {
            Skill: 'Html',
            progress : 70,
            isLearned : true,
        },
        {
            Skill: 'CSS',
            progress : 50,
            isLearned : true,
        },
        {
            Skill: 'Tailwind',
            progress : 20,
            isLearned : true,
        },
        {
            Skill: 'SCSS',
            progress : 60,
            isLearned : true,
        },
        {
            Skill: 'JavaScript',
            progress : 40,
            isLearned : true,
        },
        {
            Skill: 'EcmaScript 6',
            progress : 40,
            isLearned : true,
        },
        {
            Skill: 'React',
            progress : 70,
            isLearned : true,
        },
        {
            Skill: 'Redux Toolkit',
            progress : 60,
            isLearned : true,
        },
        {
            Skill: 'NextJs',
            progress : 15,
            isLearned : true,
        },
        {
            Skill: 'TypeScript',
            progress : 10,
            isLearned : true,
        },
        {
            Skill: 'Git',
            progress : 80,
            isLearned : true,
        },
        
    ]
    return(

        <div className='Skills_container'>
                <h2 className='Skills_headline'>
                    <FormattedMessage id='Stack'/>
                </h2>
                <div className='Stack_Technologies_container'>
                    {SkillsData.map((data,idx)=> (
                        <SkillsCircle fully={data.isLearned} key={`SkillNumber${idx}`} value={data.progress} text={data.Skill}/>
                    ))}
                
                </div>
        </div>
    )
}