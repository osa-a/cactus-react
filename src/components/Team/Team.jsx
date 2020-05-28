import React from 'react';
import './team.scss';
import { Employee } from './Employee/Employee';
import { History } from './History/History';
import { Skills } from './Skills/Skills';

export class Team extends React.Component {
    render() {
        const dataTeam = this.props.dataTeam;
        const dataSkills = this.props.dataSkills;
        return (
            <section className="main__team">
                <div className="main__team-header-wrapper">
                    <a href="#/" name="team" className="main__team-header"> TALENTED</a>
                    <span className="main__team-sub-header">SMALL, FRIENDLY AND</span>

                </div>
                <div className="main__team-content-wrapper">
                    <Employee dataTeam={dataTeam} />
                    <div className="main__team-info">
                        <History />
                        <Skills dataSkills={dataSkills} />
                    </div>
                </div>

            </section >
        );
    }
}