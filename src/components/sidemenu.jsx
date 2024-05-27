import home from "../img/svg/Home.svg";
import task from "../img/svg/tasks.svg";
import plugins from "../img/svg/plugins.svg";
import settings from "../img/svg/settings.svg";
import feedback from "../img/svg/feedback.svg";
import help from "../img/svg/help.svg";

export default function SideMenu() {
  return (
    <div className="side__menu">
      <div className="general__section">
        <p className="general">GENERAL</p>

        <div className="side__menu__links">
          <a href="#" className="side__menu__link">
            <object type="image/svg+xml" data={home}>
              Your browser does not support SVG
            </object>
            <p>Home</p>
          </a>
          <a href="#" className="side__menu__link">
            <object type="image/svg+xml" data={task}>
              Your browser does not support SVG
            </object>
            <p>Tasks</p>
          </a>
          <a href="#" className="side__menu__link">
            <object type="image/svg+xml" data={plugins}>
              Your browser does not support SVG
            </object>
            <p>Plugins</p>
          </a>
        </div>
      </div>

      <div className="line__divide"></div>

      <div className="general__section">
        <p className="general">SUPPORT</p>

        <div className="side__menu__links">
          <a href="#" className="side__menu__link">
            <object type="image/svg+xml" data={settings}>
              Your browser does not support SVG
            </object>
            <p>Settings</p>
          </a>
          <a href="#" className="side__menu__link">
            <object type="image/svg+xml" data={feedback}>
              Your browser does not support SVG
            </object>
            <p>Feedback</p>
          </a>
          <a href="#" className="side__menu__link">
            <object type="image/svg+xml" data={help}>
              Your browser does not support SVG
            </object>
            <p>Help</p>
          </a>
        </div>
      </div>
    </div>
  );
}
