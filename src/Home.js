import toronto_skyline from "./Home Page Photos/torontoSkyline2.png";

import './Home.css';

function Home() {
  return (
    <div id="home" className="section">
      <div className="main-title">
        <div className="container">
          <div
            className="container"
            style={{
              backgroundImage: `url(${toronto_skyline})`,
              backgroundSize: "40%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundOrigin: "border-box",
              padding: "10%",
              backfaceVisibility: "visible"
            }}
          ></div>

          <div className="glowing-text">
            <span className="letter letter-u">U</span>
            <span className="letter letter-t">T</span>
            <span className="letter letter-r">R</span>
            <span className="letter letter-a">A</span>
          </div>
          <div
            className="subtitle"
            style={{ fontSize: "22px", color: "white" }}
          >
            University of Toronto Robotics Association
          </div>
          <div className="glowing-text">
            <span className="letter letter-h">H</span>
            <span className="letter letter-a1">A</span>
            <span className="letter letter-c">C</span>
            <span className="letter letter-k">K</span>
            <span className="letter letter-k">S</span>
          </div>
          <div className="section" style={{ paddingBottom: "100px" }}>
            <main-event className="text-center">
              January 20-21, 2024
            </main-event>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
