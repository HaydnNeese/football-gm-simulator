import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";

function SelectorButton({
  direction,
  bgColor,
  arrowColor,
  onClick,
}: {
  direction: "left" | "right";
  bgColor: string;
  arrowColor: string;
  onClick: () => void;
}) {
  const [pressed, setPressed] = useState(false);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (direction === "left" && e.key === "ArrowLeft") ||
        (direction === "right" && e.key === "ArrowRight")
      ) {
        e.preventDefault();
        onClick();
        // Simulate press
        setPressed(true);
        setTimeout(() => setPressed(false), 150); // short animation
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [direction, onClick]);

  return (
    <Button
      onClick={onClick}
      className={`h-full w-[6vh] shadow-md flex items-center
                  justify-center transition-all duration-150 rounded-none! ${ pressed ? "bg-blue-500!" : "" }`}
      sx={{backgroundColor: bgColor, color: arrowColor}}
    >
      {direction === "left" ? (
        <ChevronLeft sx={{ fontSize: 40 }} />
      ) : (
        <ChevronRight sx={{ fontSize: 40 }} />
      )}
    </Button>
  );
}

export default SelectorButton;
