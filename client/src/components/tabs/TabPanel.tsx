import * as React from "react"; // 👈 this is required for JSX
import Box from "@mui/material/Box";

export function TabPanel({
  children,
  value,
  index,
  backgroundColor,
  ...other
}: {
  children?: React.ReactNode;
  value: string;
  index: string;
  backgroundColor: string;
}) {
  function hexToRgba(hex: string = '', opacity: number = .35): string {
    hex = hex.replace(/^#/, "");

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }

  return (
    <Box
      role="tabpanel"
      className="flex flex-col h-full"
      hidden={value !== index}
      {...other}
      sx={{ background: `linear-gradient(to bottom, ${hexToRgba(backgroundColor)}, white)`}}
    >
      {value === index && <Box className="h-full p-2">{children}</Box>}
    </Box>
  );
}
