import React from 'react';
import {Grid, TextField} from "@mui/material";

const TrackForm = () => {
    return (
        <Grid container direction={"column"} style={{padding: 20}}>
            <TextField
                label={'Track name'}
            />
            <TextField
                style={{marginTop: 10}}
                label={'Artist name'}
            />
            <TextField
                style={{marginTop: 10}}
                label={'Song text'}
                multiline
                rows={3}
            />
        </Grid>
    );
};

export default TrackForm;