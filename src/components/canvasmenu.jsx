import select from "../img/svg/select.svg";
import drag from "../img/svg/drag.svg";
import text from "../img/svg/text.svg";
import frame from "../img/svg/frame.svg";
import shapes from "../img/svg/shapes.svg";
import sticky__note from "../img/svg/sticky.svg";
import square from "../img/svg/square.svg";
import polygon from "../img/svg/polygon.svg";
import pen from "../img/svg/pen.svg";

import comment from "../img/svg/comment.svg";
import more from "../img/svg/more.svg";

export default function CanvasMenu() {
  return (
    <div className="tools__menu">
      <div className="select__tool tool">
        <object type="image/svg+xml" data={select}>
          Your browser does not support SVG
        </object>
      </div>
      <div className="drag__tool tool">
        <object type="image/svg+xml" data={drag}>
          Your browser does not support SVG
        </object>
      </div>
      <div className="tool__line__divider"></div>
      <div className="text__tool tool">
        <object type="image/svg+xml" data={text}>
          Your browser does not support SVG
        </object>
      </div>
      <div className="frame__tool tool">
        <object type="image/svg+xml" data={frame}>
          Your browser does not support SVG
        </object>
      </div>
      <div className="shape-menu">
        <div className="menu-hold">
          <object type="image/svg+xml" data={shapes}>
            Your browser does not support SVG
          </object>
        </div>
        <div className="menu-hold">
          {" "}
          <object type="image/svg+xml" data={square}>
            Your browser does not support SVG
          </object>
        </div>
        <div className="menu-hold">
          {" "}
          <object type="image/svg+xml" data={polygon}>
            Your browser does not support SVG
          </object>
        </div>
      </div>
      <div className="shapes__tool tool">
        <object type="image/svg+xml" data={shapes}>
          Your browser does not support SVG
        </object>
      </div>
      <div className="stick__note__tool tool">
        <object type="image/svg+xml" data={sticky__note}>
          Your browser does not support SVG
        </object>
      </div>
      <div className="pen__tool tool">
        <object type="image/svg+xml" data={pen}>
          Your browser does not support SVG
        </object>
      </div>
      <div className="comment__tool tool">
        <object type="image/svg+xml" data={comment}>
          Your browser does not support SVG
        </object>
      </div>
      <div className="tool__line__divider"></div>
      <div className="more__tool tool">
        <object type="image/svg+xml" data={more}>
          Your browser does not support SVG
        </object>
      </div>
    </div>
  );
}
