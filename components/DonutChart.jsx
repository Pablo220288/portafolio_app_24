import React, { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

function DonutChart({
  size,
  progress,
  progressClassName,
  trackClassName,
  circleWidth,
  progressWidth,
  rounded,
  className,
  children,
}) {
  const [shouldUseValue, setShouldUseValue] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Hack para forzar la animación en la primera carga.
      setShouldUseValue(true);
    }, 1250);
    return () => clearTimeout(timeout);
  }, []);

  const radius = size / 2 - Math.max(progressWidth, circleWidth) / 2;
  const circumference = Math.PI * radius * 2;
  const percentage = shouldUseValue
    ? circumference * ((100 - progress) / 100)
    : circumference;

  return (
    <div className={className}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: "rotate(-90deg)" }}
      >
        <circle
          r={radius}
          cx={size / 2}
          cy={size / 2}
          fill="transparent"
          stroke="currentColor"
          strokeWidth={`${circleWidth}px`}
          strokeDasharray={"10px 0"}
          strokeDashoffset="0px"
          className={cn("duration-500", trackClassName)}
        />
        <circle
          r={radius}
          cx={size / 2}
          cy={size / 2}
          stroke="currentColor"
          className={cn("duration-500", progressClassName)}
          strokeWidth={`${progressWidth}px`}
          strokeLinecap={rounded ? "round" : "butt"}
          fill="transparent"
          strokeDasharray={`${circumference}px`}
          strokeDashoffset={`${percentage}px`}
        />
      </svg>
      {children}
    </div>
  );
}

export default DonutChart;
