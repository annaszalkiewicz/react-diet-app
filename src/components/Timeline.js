import React, { Component } from "react";
import { connect } from "react-redux";

class Timeline extends Component {
  render() {
    const { currentWeek } = this.props;
    return (
      <section className="timeline">
        <h3 className="timeline_heading">Your 12 weeks progress</h3>
        <div className="timeline_container">
          {this.props.weeks.map(item => {
            console.log(item===currentWeek);
            
            return (
              <div className="timeline_item" key={item}>
                <div
                  className="timeline_line"
                  style={{
                    display: item === 1 ? "none" : "block",
                    background: item < currentWeek ? "#b3c304" : "#dbdbdb"
                  }}
                ></div>
                <div
                  className="timeline_circle"
                  style={{
                    background:
                      (item < currentWeek)
                        ? "#b3c304"
                        : (item === currentWeek)
                        ? "#fff"
                        : "#dbdbdb",
                    border: item === currentWeek ? "solid 2px #dbdbdb" : null
                  }}
                ></div>
                <p>{item}</p>
              </div>
            );
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
  };
};

export default connect(
  mapStateToProps,
  null
)(Timeline);
