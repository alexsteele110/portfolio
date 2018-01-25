import React from 'react'
import Link from 'gatsby-link'

import computer from '../images/computer.png'
import wanderful from '../images/wanderful.png'
import beerme from '../images/beerme.png'
import MERN from '../images/MERN.png'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Skills</h2>
          <span className="image main">
            <img src={MERN} alt="" />
          </span>
          <h3>Front end</h3>
          <p>
            Standard foundation of HTML, CSS, and JavaScript. My framework of
            choice is <strong>React</strong> used typically alongside{' '}
            <strong>Redux</strong> for state management.
          </p>
          <p>
            Responsiveness is key for all modern web applications, which is why
            I always take a mobile-first approach in my designs. I've enjoyed
            using primarily <strong>Material-UI</strong> and{' '}
            <strong>Bootstrap</strong> to help me style and create a
            consistently smooth user experience on any device.
          </p>
          <h3>Back end</h3>
          <p>
            Continuing the theme of JavaScript, <strong>Node</strong> and{' '}
            <strong>Express</strong> have become my go-to for back end logic. I
            am comfortable connecting projects to both <strong>MongoDB</strong>{' '}
            and <strong>SQL</strong> databases.
          </p>
          <h3>Extras</h3>
          <p>
            I've used a variety of <strong>REST APIs</strong> to help make my
            apps more interesting and engaging. Some examples include SendGrid,
            Stripe, BreweryDB, and Yelp Fusion.
          </p>
          <p>
            In order to make appealing <strong>data visualizations</strong> I
            have worked with D3.js and Google Charts.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <h3>BeerMe</h3>
          <span className="image main">
            <img src={beerme} alt="" />
          </span>
          <p>
            <strong>
              Live site:{' '}
              <a href="https://vast-retreat-88379.herokuapp.com/">here</a>
              <br />
              GitHub: <a href="https://github.com/alexsteele110/BeerMe">here</a>
            </strong>
          </p>
          <p>
            BeerMe is designed to foster a community of beer enthusiasts to
            access information and create reviews for their most treasured
            beers.
          </p>
          <p>
            Anyone who visits can take advantage of the ability to search for
            beers and view user reviews and ratings. Those who create an account
            through their existing Google accounts can add reviews of their own,
            mark reviews as helpful, and favorite particular beers to keep track
            of them.
          </p>
          <p>
            This project was made possible by the awesome API that{' '}
            <a href="http://www.brewerydb.com/">BreweryDB</a> provides for free.
          </p>
          <hr />
          <h3>Wanderful</h3>
          <span className="image main">
            <img src={wanderful} alt="" />
          </span>
          <p>
            <strong>
              Live site <a href="http://www.wanderful-travel.com">here</a>
              <br />
              Github:{' '}
              <a href="https://github.com/alexsteele110/Voyage2-Bears-11">
                Here
              </a>
            </strong>
          </p>
          <p>
            Wanderful is what I can best describe as a 'roulette' for travel
            destinations. It helps users discover places they may have otherwise
            never found.
          </p>
          <p>
            Visitors can simply click a button to bring them to the page of a
            random location with detailed information. It includes reviews and
            ratings from Yelp on a variety of categories and the ability to
            discover basic flight information. Those who register an account can
            keep track of their favorite places.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={computer} alt="" />
          </span>
          <p>
            I am a full stack web developer based in Boca Raton, with the
            majority of my experience stemming from web application projects
            utilizing the MERN stack.
          </p>
          <p>
            Biology defines my previous background, but I decided to switch
            paths to that of a self taught programmer and have loved every
            moment since. Determination to improve the quality of code I produce
            and the desire to expand my foundational knowledge is what allows me
            to keep pushing and grow as a developer.
          </p>
          <p>
            My focus is on making interesting apps that are simple to use,
            elegantly designed, and responsive. I have a passion for learning
            and exploring new technologies and am unafraid of complexity and
            challenges.
          </p>
          <p>
            I am always seeking new opportunities, so feel free to reach out to
            me if you are need of someone with my skill set. I would also love
            to connect with any other self taught developers like myself out
            there, so please don’t hesitate to contact me if you have questions
            or want to speak with me!
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" />
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/asteele110/"
                className="icon fa-linkedin-square"
              >
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:alexsteele110@gmail.com"
                className="icon fa-envelope-o"
              >
                <span className="label">Email</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/alexsteele110"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool,
}

export default Main
