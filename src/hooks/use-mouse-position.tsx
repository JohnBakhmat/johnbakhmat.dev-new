import { useEffect, useState } from "react";
export const useMousePosition = () => {
  const [pos, setPos] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    const mouseMoveHandler = (e: MouseEvent) => {
      setPos([e.clientX, e.clientY]);
    };

    document.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  });

  return pos;
};
