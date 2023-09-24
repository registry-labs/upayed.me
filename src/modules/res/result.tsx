import TransactionResult from "@components/success/success_msg";
import { Button, Stack } from "@mui/material";
import React from "react";
import { useNavigate } from 'react-router-dom';

export default function Result() {
    const navigate = useNavigate();
    return (
        <Stack justifyContent='space-between' direction='column' height='100%'>
            <Stack spacing={2} pb={2} direction='column'>
            </Stack>
            <TransactionResult />
            <Button variant='contained' >
                Cool !
            </Button>
        </Stack>
    );
}