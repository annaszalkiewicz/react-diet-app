import React, { Component } from "react";
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

          <h1 className="slider_item slider_item--active">Week 1</h1>
          <h1 className="slider_item">Week 2</h1>
          <h1 className="slider_item">Week 3</h1>
          <h1 className="slider_item">Week 4</h1>
          <h1 className="slider_item">Week 5</h1>
          <h1 className="slider_item">Week 6</h1>
          <h1 className="slider_item">Week 7</h1>
          <h1 className="slider_item">Week 8</h1>
          <h1 className="slider_item">Week 9</h1>
          <h1 className="slider_item">Week 10</h1>
          <h1 className="slider_item">Week 11</h1>
          <h1 className="slider_item">Week 12</h1>

          <button className="button_next button_primary">
            <Icon path={mdiChevronRight} size={1} color="#828282" />
          </button>
        </div>
      </section>
    );
  }
}

export default Slider;
