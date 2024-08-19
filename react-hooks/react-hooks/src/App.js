import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'A software engineer with a passion for learning new technologies.',
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgwsm7daffXvil5jpYo6ktlPZOFqO0kxBKGQ&s',
        profession: 'Software Engineer'
      },
      shows: false,
      timeElapsed: 0
    };
    this.intervalId = null;
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({
        timeElapsed: prevState.timeElapsed + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow = () => {
    this.setState(prevState => ({
      shows: !prevState.shows
    }));
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows, timeElapsed } = this.state;

    return (
      <div className="App">
        <div>
        <button onClick={this.toggleShow}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        {shows && (
          <div className="profile">
            <img src={imgSrc} alt={fullName} />
            <h1>{fullName}</h1>
            <p>{bio}</p>
            <h2>{profession}</h2>
          </div>
        )} 
         <div>
        </div>

        <p>Time since last mount: {timeElapsed} seconds</p>

         </div>
      </div>
    );
  }
}

export default App;
