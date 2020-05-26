import React from 'react';
import './employee.scss';

export class Employee extends React.Component{
    render(){
        const dataTeam = this.props.dataTeam;

        return (
            <div className="main__team-employees">
            {Object.keys(dataTeam).map(item => (
                <div key={item} className="main__team-employee-card-wrapper" >
                    <div className="main__team-employee-card">
                        <img className="main__team-employee-image" src={require(`../img/${dataTeam[item].img}`)} alt={item} />
                        <div className="main__team-employee-skills">
                            {dataTeam[item].skills.map(skill => (
                                <div key={skill} className="main__team-employee-skill">
                                    <span className="main__team-employee-skill--circle">○</span>
                                    <span className="main__team-employee-skill--text">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="main__team-employee-caption">
                        <div className="main__team-employee-name" >{dataTeam[item].name}</div>
                        <div className="main__tema-employee-position">{dataTeam[item].position}</div>
                    </div>
                </div>
            ))}
        </div>
        );
    }
}