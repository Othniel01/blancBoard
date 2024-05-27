import eraser from "../img/svg/eraser.svg";
import pen__menu from "../img/svg/pen__menu.svg";
import marker__menu from "../img/svg/marker__menu.svg";
import pen__size from "../img/svg/pen__size.svg";
import color__picker from "../img/svg/color__picker.svg";

export default function PenMenu() {
  return (
    <div className="pen__menu other__open__menu">
      <div className="pen__menu__pen other__menu">
        <object type="image/svg+xml" data={pen__menu}>
          Your browser does not support SVG
        </object>
      </div>
      <div className="marker__menu__pen other__menu">
        <object type="image/svg+xml" data={marker__menu}>
          Your browser does not support SVG
        </object>
      </div>
      <div className="eraser__menu__pen other__menu">
        <object type="image/svg+xml" data={eraser}>
          Your browser does not support SVG
        </object>
      </div>
      <div className="tool__line__divider new__line__divider"></div>
      <div className="size__menu__pen other__menu">
        <object type="image/svg+xml" data={pen__size}>
          Your browser does not support SVG
        </object>
      </div>
      <div className="size__menu__pen_two other__menu">
        <object type="image/svg+xml" data={pen__size}>
          Your browser does not support SVG
        </object>
      </div>
      <div className="tool__line__divider new__line__divider"></div>
      <div className="color__picker other__menu">
        <object type="image/svg+xml" data={color__picker}>
          Your browser does not support SVG
        </object>
      </div>
    </div>
  );
}
