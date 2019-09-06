import React, { Component } from "react";
import { connect } from "react-redux";
import { Icon } from "@mdi/react";
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";

class Slider extends Component {
  state = {
    slides: document.getElementsByClassName("slider_item"),
    activeIndex: 7,
    hideNextButton: false,
    hidePrevButton: false
  };

  componentDidMount = () => {};

  showNextSlide = e => {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.state;
    let slidesLength = slides.length;

    if (index === slidesLength-1) {
      this.setState({
        hideNextButton: true
      })
    } else {
      this.setState({
        hideNextButton: false
      })
    }

    ++index;

    this.setState({
      activeIndex: index
    });


  };

  showPrevSlide = e => {
    e.preventDefault();
    let index = this.state.activeIndex;
    console.log(index === 2);
    
    if (index === 2) {
      this.setState({
        hidePrevButton: true
      })
    } else {
      this.setState({
        hidePrevButton: false
      })
    }

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
          >
            <Icon
              path={mdiChevronLeft}
              size={1}
              color="#828282"
              style={{ display: this.state.hidePrevButton ? "none" : "block" }}
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
          >
            <Icon
              path={mdiChevronRight}
              size={1}
              color="#828282"
              style={{ display: this.state.hideNextButton ? "none" : "block" }}
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
