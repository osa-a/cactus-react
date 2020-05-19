import React from 'react';

import './team.scss';

export class Team extends React.Component {

    render() {
        const dataTeam = this.props.dataTeam;
        const dataSkills = this.props.dataSkills;
        return (
            <section className="main__team">
                <div className="main__team-header-wrapper">
                    <a href="#/" name="team" className="main__team-header">SMALL, FRIENDLY AND</a>
                    <span className="main__team-sub-header"> TALENTED</span>
                </div>
                <div className="main__team-content-wrapper">
                    <div className="main__team-employees">
                        {Object.keys(dataTeam).map(item => (
                            <div key={item} className="main__team-employee-card-wrapper" >
                                <div className="main__team-employee-card">
                                    <img className="main__team-employee-image" src={require(`./img/${dataTeam[item].img}`)} alt={item} />
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
                    <div className="main__team-info">
                        <div className="main__team-history">
                            <h3 className="main__team-info--header">Our history.</h3>
                            <p className="main__team-history--text">
                                Ut wisi enim ad minim veniam, quis nostrud exerci
                                tation ullamcorper suscipit lobortis nisl ut aliquip
                                ex ea commodo consequat. Duis autem vel eum iriure dolor
                                in hendrerit in vulputate velit esse molestie consequat
                                vel illum dolore eu nulla facilisis at vero eros lobortis
                                nisl ut aliquip ex ea commodo consequat tation ullamcorper
                                suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                                </p>
                        </div>
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
                    </div>
                </div>

            </section >
        );
    }
}