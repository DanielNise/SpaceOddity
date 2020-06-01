import React from "react";

class Slider extends React.Component {
  render() {
    return (
      <div id="slider" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#slider" data-slide-to="0" className="active"></li>
          <li data-target="#slider" data-slide-to="1"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="img-fluid"
              src="https://http2.mlstatic.com/painel-em-lona-the-beatles-15-x-15-banner-fosco-D_NQ_NP_941355-MLB27010879440_032018-F.jpg"
            />
          </div>
          <div className="carousel-item">
            <img
              className="img-fluid"
              src="https://fanart.tv/api/download.php?type=download&image=227667&section=2"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#slider"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Anterior</span>
        </a>
        <a
          className="carousel-control-next"
          href="#slider"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Slider;
