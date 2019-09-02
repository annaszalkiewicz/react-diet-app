import React, { Component } from "react";
import { Icon } from "@mdi/react";
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";

class Slider extends Component {
  render() {
    return (
      <section className="slider">
        <div className="slider_container">
          <h1 className="slider_title">Week 1</h1>
          <h1 className="slider_title">Week 2</h1>
          <h1 className="slider_title">Week 3</h1>
          <h1 className="slider_title">Week 4</h1>
          <h1 className="slider_title">Week 5</h1>
          <h1 className="slider_title">Week 6</h1>
          <h1 className="slider_title">Week 7</h1>
          <h1 className="slider_title">Week 8</h1>
          <h1 className="slider_title">Week 9</h1>
          <h1 className="slider_title">Week 10</h1>
          <h1 className="slider_title">Week 11</h1>
          <h1 className="slider_title">Week 12</h1>

          <button className="button_primary prev">
            <Icon path={mdiChevronLeft} size={1} color="#828282" />
          </button>
          <button className="button_primary next">
            <Icon path={mdiChevronRight} size={1} color="#828282" />
          </button>
        </div>
      </section>
    );
  }
}

export default Slider;
