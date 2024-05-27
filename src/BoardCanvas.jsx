import React, { useEffect, useRef } from "react";
import Konva from "konva";
import { Stage, Layer, Rect } from "react-konva";
import NavigationBar from "./components/navigation";
import CanvasMenu from "./components/canvasmenu";

export default function BoardCanvas() {
  const stageRef = useRef();
  const lastDistRef = useRef();
  const lastPointerRef = useRef();

  useEffect(() => {
    const stage = stageRef.current.getStage();

    stage.on("wheel", (e) => {
      e.evt.preventDefault();
      const oldScale = stage.scaleX();
      const pointer = stage.getPointerPosition();
      const deltaY = e.evt.deltaY;
      let newScale = deltaY > 0 ? oldScale * 1.1 : oldScale / 1.1;

      const minScale = 0.4;
      const maxScale = 2.0;
      newScale = Math.max(minScale, Math.min(maxScale, newScale));

      stage.scale({ x: newScale, y: newScale });

      const newPos = {
        x: pointer.x - (pointer.x - stage.x()) * (newScale / oldScale),
        y: pointer.y - (pointer.y - stage.y()) * (newScale / oldScale),
      };

      stage.position(newPos);
      stage.batchDraw();
    });

    stage.on("touchstart", (e) => {
      if (e.evt.touches.length > 1) {
        const pos1 = e.evt.touches[0].clientX;
        const pos2 = e.evt.touches[1].clientX;
        lastDistRef.current = Math.abs(pos1 - pos2);
      } else {
        lastPointerRef.current = stage.getPointerPosition();
      }
    });

    stage.on("touchmove", (e) => {
      if (e.evt.touches.length > 1) {
        const pos1 = e.evt.touches[0].clientX;
        const pos2 = e.evt.touches[1].clientX;
        const dist = Math.abs(pos1 - pos2);
        const oldScale = stage.scaleX();
        let newScale =
          dist < lastDistRef.current ? oldScale * 1.01 : oldScale / 1.01;

        const minScale = 0.4;
        const maxScale = 2.0;
        newScale = Math.max(minScale, Math.min(maxScale, newScale));

        stage.scale({ x: newScale, y: newScale });
        stage.batchDraw();
        lastDistRef.current = dist;
      } else {
        const pointer = stage.getPointerPosition();
        const diffX = pointer.x - lastPointerRef.current.x;
        const diffY = pointer.y - lastPointerRef.current.y;
        stage.x(stage.x() + diffX);
        stage.y(stage.y() + diffY);
        stage.batchDraw();
        lastPointerRef.current = pointer;
      }
    });

    return () => {
      stage.off("wheel");
      stage.off("touchstart");
      stage.off("touchmove");
    };
  }, []);

  return (
    <div className="hmm">
      <NavigationBar />
      <div className="nav__divider"></div>
      <CanvasMenu />
      <div id="boardBody" className="canvas-area">
        <Stage
          ref={stageRef}
          width={window.innerWidth}
          height={window.innerHeight - 90}
        >
          <Layer>
            <Rect
              x={50}
              y={50}
              width={400}
              height={240}
              cornerRadius={5}
              fill="#fff"
              draggable={true}
            />
          </Layer>
        </Stage>
      </div>
    </div>
  );
}
