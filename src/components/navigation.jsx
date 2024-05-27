import logo from "../img/logo/blancBoard Logo.png";
import settings from "../img/svg/settings.svg";
import notification from "../img/svg/notification.svg";
import placeholder from "../img/placeholder.png";

export default function NavigationBar() {
  return (
    <div className="heading__bar">
      <div className="logo">
        <img src={logo} alt="" className="blancboard__logo" />
        <h1>
          blanc
          <span>Board</span>
        </h1>
      </div>

      <div className="heading__bar__other__items">
        <div className="quick__heading__menu">
          <div className="icon__container">
            <object type="image/svg+xml" data={settings}>
              Your browser does not support SVG
            </object>
          </div>
          <div className="icon__container">
            <object type="image/svg+xml" data={notification}>
              Your browser does not support SVG
            </object>
          </div>
        </div>

        <div className="line__up"></div>

        <div className="user__account">
          <img src={placeholder} alt="#" />

          <div className="render__name__account">
            <h1>Shiela Adams</h1>
            <p>Free</p>
          </div>
        </div>
      </div>
    </div>
  );
}
