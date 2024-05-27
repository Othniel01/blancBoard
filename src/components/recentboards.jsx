import user from "../img/placeholder.png";
import hoverlogo from "../img/logo/blancBoard Logo.png";

export default function RecentBoards() {
  return (
    <div id="" className="render__recent__boards ">
      <div className="recent__board blue__board">
        <h1 className="recent__board__name">New Sprint</h1>
        <div className="recent__board__time__stamp__section">
          <p className="time__stamp">Edited 1 minute ago</p>
          <img src={user} alt="" className="recent__board__user" />
        </div>
        <img src={hoverlogo} alt="#" className="blanc__logo__hover" />
      </div>
      <div className="recent__board ">
        <h1 className="recent__board__name">Project Idea</h1>
        <div className="recent__board__time__stamp__section">
          <p className="time__stamp">Edited 30 minutes ago</p>
          <img src={user} alt="" className="recent__board__user" />
        </div>
        <img src={hoverlogo} alt="#" className="blanc__logo__hover" />
      </div>
    </div>
  );
}
