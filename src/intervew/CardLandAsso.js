import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Avatar, Card, CardMedia, Typography } from '@mui/material';
import { Stack } from '@mui/system';



export default function CardLandAsso() {
    return (
        <Box sx={{ flexGrow: 1, marginTop: 4 }}>
            <Grid container spacing={2} columns={16}>
                <Grid item xs={8}>
                    <Paper

                    >
                        <Card>

                            <div style={{ position: "relative" }}>
                                <CardMedia
                                    style={{ height: "250px", }}
                                    component="img"
                                    image={
                                        "https://media.istockphoto.com/id/1153200967/vector/credit-cards-icon-modern-minimal-flat-design-style-vector-illustration-travel-icons-set.jpg?s=612x612&w=is&k=20&c=KwVhOIfX3cuOvAyeEKSeEXH3QjbNzBhrI3V1fRTC3y0="
                                    }
                                    title="Pancakes"
                                    alt="Pancakes"
                                />
                                <div
                                    style={{
                                        position: "absolute",
                                        color: "black",
                                        top: 10,
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                        fontWeight: "bold",
                                        fontStyle: "italic",
                                        fontSize: "15px"
                                    }}
                                >
                                    <div style={{ paddingRight: "120px" }}>

                                    </div>

                                    Card Associate
                                    <Stack direction="row" spacing={1} sx={{ marginTop: "180px" }}>

                                        <Typography>Standard</Typography>
                                        <Typography>premium</Typography>
                                    </Stack>

                                </div>

                            </div>
                        </Card>

                    </Paper>

                </Grid>
                <Grid item xs={8}>
                    <Paper

                    >
                        <Card>

                            <div style={{ position: "relative" }}>
                                <CardMedia
                                    style={{ height: "250px", }}


                                    title="Pancakes"
                                    alt="Pancakes"
                                />
                                <div
                                    style={{
                                        position: "absolute",
                                        color: "black",
                                        top: 10,
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                        fontWeight: "bold",
                                        fontStyle: "italic",
                                        fontSize: "15px"
                                    }}
                                >
                                    <div style={{ paddingRight: "120px" }}>

                                    </div>

                                    Lans Associate

                                </div>
                            </div>
                        </Card>

                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}