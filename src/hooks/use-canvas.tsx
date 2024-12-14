import { useEffect, useState } from "react";

export const useCanvas = (
  canvasRef: React.RefObject<HTMLCanvasElement>,
  callback: (ctx: CanvasRenderingContext2D) => void,
) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    callback(ctx);
  }, [canvasRef, callback]);
};
