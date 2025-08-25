import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import Button from "@mui/material/Button";

function SelectorButton({ direction, onClick }: { direction: "left" | "right"; onClick: () => void; }) {
  return (
    <Button
      onClick={onClick}
      sx={{
        height: "79vh",
        borderRadius: 0,
        minWidth: "80px",
        backgroundColor: "white",
        color: "black",
        boxShadow: 2,
        "&:hover": { backgroundColor: "gray.200" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {direction === "left" ? <ChevronLeft sx={{ fontSize: 40 }} /> : <ChevronRight sx={{ fontSize: 40 }} />}
    </Button>
  );
}

export default SelectorButton;
