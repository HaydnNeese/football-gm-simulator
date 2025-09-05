import Box from "@mui/material/Box";
import React from "react";
import Typography from '@mui/material/Typography';

function LabelValue({label, value}: {label: string, value: string | number | Date}) {
    return (
        <Box className="flex flex-row gap-2 items-baseline">
            <Typography variant="subtitle1">{label}:</Typography>
            <Typography variant="body2">{value instanceof Date ? value.toLocaleDateString() : value}</Typography>
        </Box>
    );
}

export default LabelValue;