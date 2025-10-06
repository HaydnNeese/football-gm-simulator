import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';

function LabelValue({label, value}: {label: string, value: string | number | Date}) {
    return (
        <Box className="flex flex-row gap-2 items-center justify-between">
            <Typography variant="subtitle1">{label}:</Typography>
            <Typography className="text-xs!">{value instanceof Date ? value.toLocaleDateString() : value}</Typography>
        </Box>
    );
}

export default LabelValue;