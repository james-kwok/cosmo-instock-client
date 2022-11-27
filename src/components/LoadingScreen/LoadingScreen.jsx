import logo from "../../assets/logos/InStock-Logo_2x.png"
import "./LoadingScreen.scss";

const LoadingScreen = () => {
  return (
    <div className="LoadingScreen">
      <img className="LoadingScreen__logo" src={logo} alt="InStock-Logo" />
    </div>
  );
};

export default LoadingScreen;
