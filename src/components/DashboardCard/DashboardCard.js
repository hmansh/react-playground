import React from 'react'
import Typography from '@mui/material/Typography';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";


export default function DashboardCard(props) {
    const { color } = props;
    return (
        <div style={{height: '100%'}}>
            <Card sx={{
                    border: "1px solid #353535",
                    backgroundImage: "radial-gradient(black 1px, transparent 0)",
                    backgroundSize: "20px 20px",
                    cursor: 'pointer',
                    height: '100%'}}>
                <CardContent sx={{background: "none", color: color, height: '100%'}}>
                    <Typography gutterBottom variant="h2" component="div">
                        Algorithms
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}