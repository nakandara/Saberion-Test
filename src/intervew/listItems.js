import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import {
    Grid4x4,
    Home,
    NearMe,
    Person4,
    Style,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";

export const mainListItems = (
    <React.Fragment>
        <ListItemButton>
            <ListItemIcon>
                <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <NearMe />
            </ListItemIcon>
            <ListItemText primary="Actions" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <Grid4x4 />
            </ListItemIcon>
            <ListItemText primary="Spaces" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <Style />
            </ListItemIcon>
            <ListItemText primary="Cards" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Products" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="spendings" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <Person4 />
            </ListItemIcon>
            <ListItemText primary="My Account" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <Avatar
                    alt="Remy Sharp"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeeUl9IZDN97pBQNgeunx6dD1df-4g7vkPFw&usqp=CAU"
                />
            </ListItemIcon>
            <ListItemText primary="Jhone Doe" />
        </ListItemButton>
    </React.Fragment>
);
