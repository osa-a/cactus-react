import React from 'react';
import './skills.scss';

export class Skills extends React.Component{
    render(){
        const dataSkills = this.props.dataSkills;
        return(
            <div className="main__team-skills-block">
            <h3 className="main__team-info--header main__team-info-skills--header">Our skills.</h3>
            <ul className="main__team-skill-list">
                {Object.keys(dataSkills).map(skill => (
                    <li key={skill} className="main__team-skill-element">
                        {dataSkills[skill].name}
                        <div className="main__team-skill-bar">
                            <div className="main__team-skill-bar--color" style={{ width: dataSkills[skill].width }}></div>
                        </div>
                        <div className="main__team-skill-bar--caption">{dataSkills[skill].width}</div>
                    </li>
                ))}
            </ul>
        </div>
        );
    }
}