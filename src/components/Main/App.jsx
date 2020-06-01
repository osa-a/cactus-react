import React from 'react';
import './App.scss';
import { ScrollTopBtn } from '../ScrollTopBtn/ScrollTopBtn';
import { Navigation } from '../Navigation/Navigation';
import { Carousel } from '../Carousel/Carousel';
import { AboutUs } from '../About/AboutUs';
import { Parallax } from '../Parallax/Parallax';
import { Team } from '../Team/Team';
import { Counter } from '../Counter/Counter';
import { Gallery } from '../Gallery/Gallery';
import { PlanSection } from '../PlansSection/PlanSection';

const patterns = {
  empty: /^$/,
  name: /^[A-Z][a-z]{1,}$/,
  surname: /^[A-Z][a-z]{1,}$/,
  address: /^[0-9]{1,7}((\-|\s)?[A-Z]?[a-z]{1,}){0,5}[str]\.\/\d{1,4}$/,
  city: /^([A-Z]{2,3}|[the[A-Z][a-z]{1,}(\s[A-Z]?[a-z]{1,}){0,8})$/,
  country: /^([A-Z]{2,3}|[the[A-Z][a-z]{1,}(\s[A-Z]?[a-z]{1,}){0,8})$/,
  phone: /^((\+38)?[\(\-]?)?0\d{2}[\)\-]?\d{3}\-?\d{2}\-?\d{2}$/,
  email: /^[0-9a-z]+([_\.]?[a-z0-9]{1,10}){0,2}@[a-z]{2,7}\.[a-z]{2,4}$/,
  card:/^\d{4}\-\d{4}\-\d{4}\-\d{4}$/,
  cvv:/^\d{3}$/,
  expiration:/^((0[1-9])|(1[0-2]))\/((2[0-9])|(3[0-9]))$/
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      dataCarousel: {},
      dataAbout: {},
      dataTeam: {},
      dataPlans: {},
    };
  }

  // get all the data 
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
            dataGallery: { ...result.dataGallery },
            dataPlans: { ...result.dataPlans },
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
      dataSkills,
      dataGallery,
      dataPlans
    } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          {/* show scroll button after 200px have been scrolled  */}
          <ScrollTopBtn showUnder={200} />
          <header className="header">
            <Navigation />
          </header>
          <main className="main" >
            <Carousel dataCarousel={dataCarousel} />
            <AboutUs dataAbout={dataAbout} />
            <Parallax />
            <Team dataTeam={dataTeam} dataSkills={dataSkills} />
            <Counter />
            <Gallery dataGallery={dataGallery} />
            <PlanSection dataPlans={dataPlans} patterns = {patterns}/>
          </main>
          <footer></footer>
        </div>
      );
    }
  }
}