import React, { Component } from "react";
import { connect } from "react-redux";
import { Icon } from "@mdi/react";
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";

class Slider extends Component {
  state = {
    slides: document.getElementsByClassName("slider_item"),
    activeIndex: 7
  };

  componentDidMount = () => {};

  showNextSlide = e => {
    e.preventDefault();

    let index = this.state.activeIndex;

    ++index;

    this.setState({
      activeIndex: index
    });

  };

  showPrevSlide = e => {
    e.preventDefault();
    let index = this.state.activeIndex;

    --index;

    this.setState({
      activeIndex: index
    });
  };

  render() {
    const { currentWeek, weeks } = this.props;
    return (
      <section className="slider">
        <div className="slider_container">
          <button
            className="button_prev button_primary"
            id="button_prev"
            onClick={e => this.showPrevSlide(e)}
            style={{ display: this.state.activeIndex <=1 ? "none" : "block" }}
          >
            <Icon
              path={mdiChevronLeft}
              size={1}
              color="#828282"

            />
          </button>

          {weeks.map(i => {
            const week = `Week ${this.state.activeIndex}`;
            return (
              <h1
                className={
                  i === currentWeek
                    ? "slider_item slider_item--active"
                    : "slider_item"
                }
                key={i}
              >
                {week}
              </h1>
            );
          })}

          <button
            className="button_next button_primary"
            id="button_next"
            onClick={e => this.showNextSlide(e)}
            style={{ display: this.state.activeIndex>=12 ? "none" : "block" }}
          >
            <Icon
              path={mdiChevronRight}
              size={1}
              color="#828282"

            />
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
  };
};

export default connect(
  mapStateToProps,
  null
)(Slider);
