import React, { Component } from "react";
import Hero from "../components/Hero";
import AnimeHeader from "../components/AnimeHeader"
import AnimeSubHeader from "../components/AnimeSubHeader"
import AvatarIcon from "../components/AvatarIcon"
import MyVerticalTimeline from "../components/MyVerticalTimeline"
import Container from "../components/Container"
import SectionBox from "../components/SectionBox"

class Home extends Component {

  state = {
    title: "",
    subtitle1: "",
    subtitle2: "",
    subtitle3: "",
    BackgroundImage: "https://images.pexels.com/photos/2694037/pexels-photo-2694037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    timeline: "",
    about: ""
  };

  componentDidMount() {
  setTimeout(() => { this.setState({ 
    subtitle1: "Full-Stack Web Developer", 
    subtitle2: "&" ,
    subtitle3: "Customer Experience Expert",
    title: "Erin McGeever", 
    timeline:<MyVerticalTimeline/>,
    about: <SectionBox header="About Me">
            Hi there! My name is Erin McGeever and I hope you've come to this page to see some of my work and learn
            some more about me. I was born in Boulder, CO and currently reside in Longmont with my daughter, Nora.
            During the day, I work for a credit card processing company based out of Georgia. In my spare time, I love to watch movies
            and play games with my daughter. Currently we are watching  <em>ALL the MARVEL MOVIES in ORDER</em> and all the 
            <em>HARRY POTTER</em> in order. My daughter and I love the outdoors and we like to go to parks, go on hikes, go snowshoeing, 
            go iceskating, and go on slayrides with the winter season coming.  </SectionBox>
  }) }, 1000)}

  render() {
    return (
      <div>
        <Hero backgroundImage={this.state.BackgroundImage}>
          <Container>
          <AvatarIcon/>
          <AnimeHeader>{this.state.title}</AnimeHeader>
          <AnimeSubHeader>{this.state.subtitle1}</AnimeSubHeader>
          <AnimeSubHeader>{this.state.subtitle2}</AnimeSubHeader>
          <AnimeSubHeader>{this.state.subtitle3}</AnimeSubHeader>
          {this.state.about}
          <br/>
          <br/>
          {this.state.timeline}
          </Container>
        </Hero>
      </div>
    );
  }
}

export default Home;
