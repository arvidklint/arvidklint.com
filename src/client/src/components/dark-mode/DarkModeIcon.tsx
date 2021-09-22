import "./DarkModeIcon.css";
import cn from "classnames";

interface Props {
  dark: boolean;
}

function DarkModeIcon({ dark }: Props) {
  const rays = [0, 1, 2, 3, 4, 5];
  const radius = 20;
  const moonRadius = 16;
  const rayLength = 4;
  const rayDistance = 8;
  return (
    <svg
      className={cn("DarkModeIcon", {
        "DarkModeIcon-dark-mode": dark,
      })}
      viewBox="0 0 100 100"
      strokeWidth="1mm"
      strokeLinecap="round"
    >
      <mask id="DarkModeIcon-moon-mask">
        <rect x="0" y="0" width="100" height="100" fill="white" />
        <circle
          className={cn("DarkModeIcon-moon", {
            "DarkModeIcon-moon-hide": !dark,
          })}
          cx="58"
          cy="48"
          stroke="none"
          r={moonRadius}
          fill="black"
        />
      </mask>
      <circle cx="50" cy="50" r={radius} mask="url(#DarkModeIcon-moon-mask)" />
      {rays.map((ray) => {
        const angle = (ray * (Math.PI * 2)) / rays.length;
        const x1 = Math.cos(angle) * (radius + rayDistance) + 50;
        const x2 = Math.cos(angle) * (radius + rayDistance + rayLength) + 50;
        const y1 = Math.sin(angle) * (radius + rayDistance) + 50;
        const y2 = Math.sin(angle) * (radius + rayDistance + rayLength) + 50;
        return (
          <line
            className={cn("DarkModeIcon-ray", {
              "DarkModeIcon-ray-hide": dark,
            })}
            key={ray}
            x1={x1}
            x2={x2}
            y1={y1}
            y2={y2}
            stroke="currentColor"
            pathLength={100}
          />
        );
      })}
    </svg>
  );
}

export default DarkModeIcon;
