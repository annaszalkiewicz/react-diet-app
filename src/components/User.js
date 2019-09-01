import React, { Component } from "react";

import avatar from "../assets/img/olivia-wilde.jpg";

class User extends Component {
  state = {
    isOpened: false
  };

  clickHandler = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        isOpened: !this.state.isOpened ? true : false
      };
    });
  };

  render() {
    const { isOpened } = this.state;

    return (
      <div className="header_right">
        <div className="header_right--avatar">
          <img src={avatar} alt="User avatar" className="avatar_image" />
        </div>
        <div className="header_right--name">Olivia Wilde</div>
        {isOpened && (
          <i
            className="material-icons header_right--icon"
            onClick={this.clickHandler}
          >
            keyboard_arrow_up
          </i>
        )}
        {!isOpened && (
          <i
            className="material-icons header_right--icon"
            onClick={this.clickHandler}
          >
            keyboard_arrow_down
          </i>
        )}
      </div>
    );
  }
}

export default User;
