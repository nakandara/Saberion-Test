import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
    Avatar,
    Box,
    Grid,
    Paper,
    Divider,
    Chip,
    ListItemText,
    ListItemIcon,
} from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CardLandAsso from "./CardLandAsso";
import { Stack } from "@mui/system";
import { styled } from "@mui/material/styles";
import { FreeBreakfastOutlined, Person4, TaxiAlert } from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

export const MainCard = (
    <Grid item xs={12} md={8} lg={9}>
        <Paper
            sx={{
                margin: "7px",
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 300,
            }}
        >
            <Stack direction="row" spacing={7}>
                <Avatar sx={{ width: 56, height: 56 }} src="/broken-image.jpg" />

                <Typography sx={{ fontWeight: "bold" }}>
                    343443.3883 KM
                    <Typography sx={{ fontWeight: "hidden" }}>Primarry Acount</Typography>
                </Typography>
                <Stack direction="row" spacing={9}>
                    <Button sx={{ width: 60, height: 35 }} variant="contained">
                        Active
                    </Button>
                </Stack>
            </Stack>

            <Grid
                item
                xs={12}
                md={8}
                lg={9}
                sx={{
                    margin: "7px",
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                }}
            >
                <Stack direction="row" spacing={1}>
                    <ListItemIcon>
                        <FreeBreakfastOutlined />
                    </ListItemIcon>
                    <ListItemText
                        primary="Breackfast  
                    78kr"
                    />

                    <ListItemIcon>
                        <TaxiAlert />
                    </ListItemIcon>
                    <ListItemText primary="peeter wilgard" />
                    <ListItemIcon>
                        <Person4 />
                    </ListItemIcon>
                    <ListItemText primary="taxi to raskilder" />
                </Stack>

            </Grid>
            <hr />
            <Box
                sx={{
                    width: "100%",
                    height: 300,

                    "&:hover": {
                        backgroundColor: "white",
                        opacity: [0.9, 0.8, 0.7],
                    },
                }}
            >
                <Stack direction="row">
                    <Item
                        sx={{
                            width: "300px",
                            height: "70px",
                        }}
                    >
                        <Stack direction="row" spacing={1}>
                            <Avatar sx={{ bgcolor: "green" }}>
                                <AssignmentIcon />
                            </Avatar>
                            <Typography>Add Money</Typography>
                        </Stack>
                    </Item>
                    <Item
                        sx={{
                            width: "300px",
                            height: "70px",
                        }}
                    >
                        <Stack direction="row" spacing={1}>
                            <Avatar sx={{ bgcolor: "green" }}>
                                <AssignmentIcon />
                            </Avatar>
                            <Typography>Send Money</Typography>
                        </Stack>
                    </Item>
                    <Item
                        sx={{
                            width: "300px",
                            height: "70px",
                        }}
                    >
                        <Stack direction="row" spacing={1}>
                            <Avatar sx={{ bgcolor: "green" }}>
                                <AssignmentIcon />
                            </Avatar>
                            <Typography>Request Money</Typography>
                        </Stack>
                    </Item>
                    <Item
                        sx={{
                            width: "300px",
                            height: "70px",
                        }}
                    >
                        <Avatar sx={{ bgcolor: "green" }}>
                            <AssignmentIcon />
                        </Avatar>
                    </Item>

                </Stack>
            </Box>
        </Paper>
        <CardLandAsso />
    </Grid>
);
