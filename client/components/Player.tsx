import React from 'react';
import {Pause, PlayArrow, VolumeUp} from "@mui/icons-material";
import {Grid, IconButton} from "@mui/material";
import styles from '../styles/Player.module.scss'
import {ITrack} from "../types/track";
import TrackProgress from "./TrackProgress";

const Player = () => {
    const active = false
    const track: ITrack = {
        _id: '1',
        name: 'Звезда по имени Солнце',
        artist: 'Кино',
        text: 'Какой-то текст',
        listens: 0,
        picture: 'http://localhost:5050/image/e52ba877-e1f1-438f-911e-a01e8bbcc014.jpg',
        audio: 'http://localhost:5050/audio/91acc8de-24bb-4ab2-b1b2-9bcf7c0aa84c.mp3',
        comments: []
    }

    return (
        <div className={styles.player}>
            <IconButton onClick={e => e.stopPropagation()}>
                {active
                    ? <Pause/>
                    : <PlayArrow/>
                }
            </IconButton>
            <Grid container direction={'column'} style={{width: 300, margin: '0 20px'}}>
                <div>{track.name}</div>
                <div style={{color: 'gray'}}>{track.artist}</div>
            </Grid>
            <TrackProgress left={2.45} right={3.7} onChange={e => ({})}/>
            <VolumeUp style={{marginLeft: 'auto'}}/>
            <TrackProgress left={0} right={100} onChange={e => ({})}/>
        </div>
    );
};

export default Player;