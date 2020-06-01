import React from "react";
import Menu from "../menu/Menu";
import Carousel from "./carousel/carousel";

class Home extends React.Component {
  render() {
    return (
      <>
        <Menu />

        <main role="main" className="flex-shrink-0 mt-5">
          <div className="container">
            <Carousel />
          </div>
        </main>
      </>
    );
  }
}

export default Home;
