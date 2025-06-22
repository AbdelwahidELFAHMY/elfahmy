import React from "react";

type Props = {
  side: "left" | "right";
  top?: string;
  height?: string;
  style?: React.CSSProperties;
};

const GradientGlowDecor = ({
  side,
  top = "28%",
  height = "44%",
  style = {},
}: Props) => {

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute z-0"
      style={{
        [side]: "-7vw",
        top,
        width: "14vw",
        height,
        opacity: 0.22,
        filter: "blur(48px)",
        ...style,
      } as React.CSSProperties}
    >
      <div
        className="w-full h-full animate-glow-side-glow"
        style={{
          background:
            side === "left"
              ? "linear-gradient(98deg, #a21caf 36%, #38bdf8 70%, transparent 95%)"
              : "linear-gradient(270deg, #f472b6 40%, #38bdf8 79%, transparent 100%)",
        }}
      />
      <style>
        {`
          @keyframes glow-side-glow {
            0% { opacity: 0.23; transform: translateY(-10%); }
            25% { opacity: 0.31; }
            47% { opacity: 0.38; }
            65% { opacity: 0.33; }
            100% { opacity: 0.32; transform: translateY(4%);}
          }
          .animate-glow-side-glow {
            animation: glow-side-glow 7.7s ease-in-out infinite alternate;
          }
        `}
      </style>
    </div>
  );
};

export default GradientGlowDecor;
