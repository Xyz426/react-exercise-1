import React from 'react';
import EducationItem from './EducationItem.js';

const Education = () => {

    const year = [1990,2005,2009,2012];

    const educationExperience1={
        year:1990,
        title:'I was born in Katowice',
        content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, exercitationem, totam, dolores' +
            ' iste dolore est aut modi.'
    }

    const educationExperience2={
        year:2005,
        title:'Secondary school specializing in atristic',
        content:'Eos, explicabo, nam, tenetur et ab eius deserunt aspernatur ipsum ducimus quibusdam quis voluptatibus.'
    }

    const educationExperience3={
        year:2009,
        title:'First level graduation in Graphic Design',
        content:'Aspernatur, mollitia, quos maxime eius suscipit sed beatae ducimus quaerat quibusdam perferendis?' +
            ' Iusto, quibusdam asperiores unde repellat.'
    }

    const educationExperience4={
        year:2012,
        title:'Second level graduation in Graphic Design',
        content:'Ducimus, aliquam tempore autem itaque et accusantium!'
    }

    const educationExperiences = [educationExperience1, educationExperience2, educationExperience3, educationExperience4]

    return(
        <div className="education">
            <h2 style={{color: 'red', margin:1+'%'}}>EDUCATION</h2>
            {educationExperiences.map(
                educationExperience =><EducationItem
                    key={educationExperience.year}
                    year = {educationExperience.year}
                    title = {educationExperience.title}
                    content = {educationExperience.content}/>
                    )}
        </div>
    )
}

export default Education;