import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import Button from "@mui/material/Button";
import { useEffect, useRef, useState } from "react";

function SelectorButton({
  direction,
  onClick,
}: {
  direction: "left" | "right";
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
      className={`h-[90vh] rounded-xl min-w-[80px] !bg-gray-200 shadow-md flex items-center justify-center ${
        pressed ? "bg-blue-500!" : ""
      } transition-all duration-150`}
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
