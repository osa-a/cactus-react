import React from 'react';
import './App.scss';
import { Navigation } from '../Navigation/Navigation';
import { Carousel } from '../Carousel/Carousel';
import { AboutUs } from '../About/AboutUs';
import { Parallax } from '../Parallax/Parallax';
import { Team } from '../Team/Team';
import { Counter } from '../Counter/Counter';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      dataCarousel: {},
      dataAbout: {},
      dataTeam: {},
    };
  }

  componentDidMount() {
    fetch("./data.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            dataCarousel: { ...result.dataCarousel },
            dataAbout: { ...result.dataAbout },
            dataTeam: { ...result.dataTeam },
            dataSkills: { ...result.dataSkills },
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const {
      error,
      isLoaded,
      dataCarousel,
      dataAbout,
      dataTeam,
      dataSkills
    } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <header className="header">
            <Navigation />
          </header>
          <main className="main">
            <Carousel dataCarousel={dataCarousel} />
            <AboutUs dataAbout={dataAbout} />
            <Parallax />
            <Team dataTeam={dataTeam} dataSkills={dataSkills} />
            <Counter />
          </main>
          <footer></footer>
        </div>
      );
    }
  }
}