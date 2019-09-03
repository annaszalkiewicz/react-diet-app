import React, { Component } from "react";
import { connect } from 'react-redux';

class Timeline extends Component {

  render() {
    return (
      <section className="timeline">
        <h3 className="timeline_heading">Your 12 weeks progress</h3>
        <div className="timeline_container">

          {this.props.weeks.map(item => {
            return (
              <div className="timeline_item" key={item}>
                <div className="timeline_line"></div>
                <div className="timeline_circle"></div>
                <p>{item}</p>
              </div>
            )
          })}
        
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentWeek: state.userReducer.currentWeek,
    weeks: state.userReducer.weeks
  }
}

export default connect(mapStateToProps, null)(Timeline);
