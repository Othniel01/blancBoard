import React from "react";
import NavigationBar from "./components/navigation";
import SideMenu from "./components/sidemenu";
import search from "./img/svg/search.svg";
import plus from "./img/svg/plus.svg";
import RecentBoards from "./components/recentboards";

function App() {
  return (
    <div className="second__body">
      <NavigationBar />

      <div className="nav__divider"></div>

      <div className="site__body">
        <SideMenu />
        <div className="side__menu__gap"></div>
        <div className="render__area">
          <div className="render__area__top__bar">
            <div className="search__bar">
              <object type="image/svg+xml" data={search}>
                Your browser does not support SVG
              </object>
              <p>Search</p>
            </div>
            <div className="create__new__board">
              <p>Add board</p>
              <object type="image/svg+xml" data={plus}>
                Your browser does not support SVG
              </object>
            </div>
          </div>

          <h1 className="board__head">Recent Boards</h1>
          <RecentBoards />
        </div>
      </div>
    </div>
  );
}

export default App;
