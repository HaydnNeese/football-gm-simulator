import * as React from "react"; // 👈 this is required for JSX
import Box from "@mui/material/Box";

export function TabPanel({
  children,
  value,
  index,
  ...other
}: {
  children?: React.ReactNode;
  value: string;
  index: string;
}) {
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}
