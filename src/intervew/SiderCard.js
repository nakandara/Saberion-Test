import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import AssignmentIcon from '@mui/icons-material/Assignment';

export const SideCardAlert = (
    <Card sx={{ maxWidth: 345, margin: "5px" }}>
        <div style={{ position: "relative" }}>
            <CardMedia
                style={{ height: "250px", paddingTop: "2%" }}
                component="img"
                image={
                    "https://av.sc.com/gh/content/images/gh-visa-infinite-card-platinum-nw.jpg"
                }
                title="Pancakes"
                alt="Pancakes"
            />
            <div
                style={{
                    position: "absolute",
                    color: "white",
                    top: 10,
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontWeight: "bold",
                    fontStyle: "italic",
                    fontSize: "15px"
                }}
            >
                Enjoy Your Finncial fredom with Famaliif
                <Button sx={{ backgroundColor: "white", borderRadius: 2 }}>
                    Apply now
                </Button>
            </div>
        </div>
    </Card>
);

export const DebitCArd = (
    <Card sx={{ maxWidth: 345, margin: "5px" }}>

        <div style={{ position: "relative" }}>
            <CardMedia
                style={{ height: "250px", paddingTop: "2%" }}
                component="img"
                image={
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEX669bNE5YaAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII="
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
                    <Avatar sx={{ bgcolor: "green", position: "left" }}>
                        <AssignmentIcon />
                    </Avatar>
                </div>

                Enjoy Your Finncial fredom with Famaliif
                <Button sx={{ backgroundColor: "green", borderRadius: 2, color: "white" }}>
                    Pay
                </Button>
            </div>
        </div>
    </Card>
);

export const EnjoyCart = (
    <Card sx={{ maxWidth: 345, margin: "5px" }}>
        <div style={{ position: "relative" }}>
            <CardMedia
                style={{ height: "250px", paddingTop: "2%" }}
                component="img"
                image={
                    "https://img.freepik.com/premium-photo/sale-offer-black-friday-shopping-discount-closeup-woman-hand-holding-purchase-bags-isolated-orange-empty-space-background_279525-17960.jpg?w=996"
                }
                title="Pancakes"
                alt="Pancakes"
            />
            <div
                style={{
                    position: "absolute",
                    color: "white",
                    top: 10,
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontWeight: "bold",
                    fontStyle: "italic",
                    fontSize: "15px"
                }}
            >
                Enjoy Your Finncial fredom with Famaliif
                <Button sx={{ backgroundColor: "white", borderRadius: 2 }}>
                    Apply now
                </Button>
            </div>
        </div>
    </Card>
);
