import React, { Component } from "react";
import { connect } from 'react-redux';
import { Icon } from "@mdi/react";
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";

class Slider extends Component {
  
  render() {
    return (
      <section className="slider">
        <div className="slider_container">
          <button className="button_prev button_primary">
            <Icon path={mdiChevronLeft} size={1} color="#828282" />
          </button>

          {[...Array(12)].map((e, i) => {
            const week = `Week ${i + 1}`;
            return (
              <h1 
                className="slider_item"
                key={i}
              >
                {week}
              </h1>
            );
          })}

          <button className="button_next button_primary">
            <Icon path={mdiChevronRight} size={1} color="#828282" />
          </button>
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

export default connect(mapStateToProps, null)(Slider);
