import React, { Component } from "react";

class Perprofile extends Component {
  state = {
    fullName: "Saadaoui oussama",
    bio: " bigenner developper.",
    imgSrc: "https://cdn-icons-png.flaticon.com/512/3242/3242257.png",
    profession: "Web Developer",
    showProfile: false,
    mountTime: new Date(),
    elapsedTime: 0
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        elapsedTime: Math.floor(
          (new Date() - this.state.mountTime) / 1000
        )
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleProfile = () => {
    this.setState(prevState => ({
      showProfile: !prevState.showProfile
    }));
  };

  render() {
    const {
      fullName,
      bio,
      imgSrc,
      profession,
      showProfile,
      elapsedTime
    } = this.state;

    return (
      <div>
        <button onClick={this.toggleProfile}>click Profile</button>
        <div>
          {showProfile && (
            <div>
              <h2>{fullName}</h2>
              <img src={imgSrc} alt={fullName} />
              <p>{bio}</p>
              <p>{profession}</p>
            </div>
          )}
        </div>
        <p>Elapsed Time: {elapsedTime}s</p>
      </div>
    );
  }
}

export default Perprofile;
