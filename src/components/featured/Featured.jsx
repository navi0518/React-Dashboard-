import "./featured.scss";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">
          <strong>Customers</strong>
        </h1>
      </div>
      <p className="desc">Customers that buy products </p>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbarWithChildren value={70} strokeWidth={12}>
            <br />
            <div style={{ fontSize: 27, marginTop: 32 }}>
              <strong>65%</strong>
            </div>
            <div style={{ fontSize: 10, marginTop: 9 }}>
              <strong>Total New</strong>
            </div>
            <div style={{ fontSize: 11, marginTop: -4 }}>Customers</div>
          </CircularProgressbarWithChildren>
        </div>
      </div>
    </div>
  );
};

export default Featured;
