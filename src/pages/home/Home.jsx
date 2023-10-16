import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Table from "../../components/table/Table";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="earning" />
          <Widget type="order" />
          <Widget type="balance" />
          <Widget type="sales" />
        </div>
        <div className="charts">
          <Chart title="Overview" subtitle="Monthly Earning" aspect={3 / 1} />
          <Featured />
        </div>
        <div className="listContainer">
          <div className="listTitle">
            Product Sell
            <div className="search">
              <input type="text" placeholder="Search..." />
              <SearchOutlinedIcon />              
              <label>
                Last 30 days
                <KeyboardArrowDownIcon />
              </label>
            </div>
          </div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
