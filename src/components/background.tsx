import { useCanvas } from "$/hooks/use-canvas";
import { useWindowSize } from "$/hooks/use-window-size";
import { useRef } from "react";
import background from "../assets/background.svg";
import { useMousePosition } from "$/hooks/use-mouse-position";

const padding = 10;
const headerHeight = 64;
const dotSize = 4;
const dotGap = 20;

const mouseRadius = 150;

const draw = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  mousePos: [number, number],
) => {
  const accentColor = getComputedStyle(
    document.documentElement,
  ).getPropertyValue("--accent-color");

  const [mouseX, mouseY] = mousePos;

  ctx.clearRect(0, 0, width, height);

  for (let x = padding; x <= width - padding; x += dotGap) {
    for (let y = headerHeight + padding; y <= height - padding; y += dotGap) {
      let scale = 0.7;
      const distanceToMouse = Math.sqrt((x - mouseX) ** 2 + (y - mouseY) ** 2);
      if (distanceToMouse < mouseRadius) {
        scale = 1.5;
      }

      ctx.fillStyle = accentColor;
      // ctx.fillRect(x, y, dotSize * scale, dotSize * scale);

      ctx.beginPath();
      const size = dotSize * scale;
      ctx.arc(x + size / 2, y + size / 2, size / 2, 0, 2 * Math.PI);
      ctx.fill();
    }
  }

  return () => draw(ctx, width, height, mousePos);
};

export const Background = () => {
  // const canvasRef = useRef<HTMLCanvasElement>(null);
  const [width, height] = useWindowSize();
  const mousePos = useMousePosition();

  // useCanvas(canvasRef, (ctx) => draw(ctx, width, height, mousePos));

  return (
    <div className="-z-10 fixed inset-0" id="background">
      <img
        src={background.src}
        alt="background"
        className="-z-20 opacity-70"
      />
      {/* <canvas ref={canvasRef} width={width} height={height} /> */}
    </div>
  );
};
