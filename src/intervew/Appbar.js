import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Appbar() {
    return (
        <>

            <Box
                sx={{
                    width: "100%",
                    height: 100,


                }}
            >
                <Stack
                    direction="row"

                >
                    <Item sx={{
                        width: "50%",
                        height: "93px"
                    }}>Primary Account <br /> <Typography sx={{ fontWeight: "bold" }}>88626262. 88 Kr</Typography></Item>
                    <Item sx={{
                        width: "50%",
                        height: "93px"
                    }}>Budget Account <br /> <Typography sx={{ fontWeight: "bold" }}>88626262. 88 Kr</Typography></Item>
                    <Item sx={{
                        width: "50%",
                        height: "93px"
                    }}> Save Account <br /> <Typography sx={{ fontWeight: "bold" }}>88626262. 88 Kr</Typography></Item>
                </Stack>
            </Box>




        </>
    );
}