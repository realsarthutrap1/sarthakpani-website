"use client";

import { useEffect, useRef } from "react";

export function PointerCrosshair() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const root = document.documentElement;

    if (
      !cursor ||
      !window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let frame = 0;
    let x = -100;
    let y = -100;

    const render = () => {
      cursor.style.transform = `translate3d(${x - 17}px, ${y - 17}px, 0)`;
      frame = 0;
    };

    const onPointerMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      cursor.classList.add("is-visible");

      if (!frame) {
        frame = window.requestAnimationFrame(render);
      }
    };

    const onPointerOver = (event: PointerEvent) => {
      const target = event.target;
      cursor.classList.toggle(
        "is-interactive",
        target instanceof Element && Boolean(target.closest("a, button")),
      );
    };

    const onPointerDown = () => cursor.classList.add("is-down");
    const onPointerUp = () => cursor.classList.remove("is-down");
    const onPointerLeave = () => cursor.classList.remove("is-visible");

    root.classList.add("has-custom-cursor");
    document.addEventListener("pointermove", onPointerMove);
    document.addEventListener("pointerover", onPointerOver);
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("pointerup", onPointerUp);
    document.addEventListener("pointerleave", onPointerLeave);

    return () => {
      root.classList.remove("has-custom-cursor");
      window.cancelAnimationFrame(frame);
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("pointerup", onPointerUp);
      document.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-crosshair" ref={cursorRef}>
      <span className="pointer-crosshair-shape">
        <span className="pointer-crosshair-core" />
      </span>
    </div>
  );
}
