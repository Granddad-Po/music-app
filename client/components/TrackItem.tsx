import React from 'react';
import {ITrack} from "../types/track";
import styles from '../styles/TrackItem.module.scss'
import {Card, Grid, IconButton} from "@mui/material";
import {Delete, Pause, PlayArrow} from "@mui/icons-material";
import Image from "next/image";
import {useRouter} from "next/router";

interface TrackItemProps {
    track: ITrack
    active?: boolean
}

const TrackItem: React.FC<TrackItemProps> = ({track, active = false}) => {
    const router = useRouter()

    return (
        <Card className={styles.track} onClick={() => router.push('/tracks/' + track._id)}>
            <IconButton onClick={e => e.stopPropagation()}>
                {active
                    ? <Pause/>
                    : <PlayArrow/>
                }
            </IconButton>
            <Image src={track.picture} width={70} height={70} alt={'cover'}/>
            <Grid container direction={'column'} style={{width: 300, margin: '0 20px'}}>
                <div>{track.name}</div>
                <div style={{color: 'gray'}}>{track.artist}</div>
            </Grid>
            {active && <div>02:43 / 03:34</div>}
            <IconButton onClick={e => e.stopPropagation()} style={{marginLeft: 'auto'}}>
                <Delete/>
            </IconButton>
        </Card>
    );
};

export default TrackItem;