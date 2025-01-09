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
      const distanceToMouse = Math.sqrt((x - mouseX) ** 2 + (y - mouseY) ** 2);
      const isClose = distanceToMouse <= mouseRadius;
      const maxScale = 1.5;
      const minScale = 0.7;
      const modifiedScale =
        ((mouseRadius - distanceToMouse) * maxScale / mouseRadius) +
        (minScale - 0);

      const scale = isClose ? modifiedScale : minScale;
      const size = dotSize * scale / 2;

      //offset
 
      const dx = x - mouseX;
      const dy = y - mouseY;

      const angle = Math.atan2(dy,dx);
      const offsetX = isClose ? Math.cos(angle) * 0.1 * (mouseRadius - distanceToMouse): 0
      const offsetY = isClose ? Math.sin(angle) * 0.1 * (mouseRadius - distanceToMouse): 0

      ctx.fillStyle = accentColor;
      ctx.beginPath();
      ctx.arc(x + offsetX , y + offsetY, size, 0, 2 * Math.PI);
      ctx.fill();
    }
  }

  return () => draw(ctx, width, height, mousePos);
};

export const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [width, height] = useWindowSize();
  const mousePos = useMousePosition();

  useCanvas(canvasRef, (ctx) => draw(ctx, width, height, mousePos));

  return (
    <div className="-z-10 fixed inset-0 h-screen w-screen" id="background">
      {
        /* <img
        src={background.src}
        alt="background"
        className="-z-20 opacity-70 md:mt-16 w-full h-full object-cover"
      /> */
      }
      <canvas ref={canvasRef} width={width} height={height} />
    </div>
  );
};
