import React from 'react';
import Layout from "../../layouts/layout";
import {Box, Button, Card, Grid} from "@mui/material";
import {useRouter} from "next/router";
import {ITrack} from "../../types/track";
import TrackList from "../../components/TrackList";

const Tracks = () => {
    const router = useRouter()
    const tracks: ITrack[] = [
        {_id: '1', name: 'Звезда по имени Солнце', artist: 'Кино', text: 'Какой-то текст', listens: 0, picture: 'http://localhost:5050/image/e52ba877-e1f1-438f-911e-a01e8bbcc014.jpg', audio: 'http://localhost:5050/audio/91acc8de-24bb-4ab2-b1b2-9bcf7c0aa84c.mp3', comments: []},
        {_id: '2', name: 'Пачка сигарет', artist: 'Виктор Цой', text: 'Какой-то текст', listens: 0, picture: 'http://localhost:5050/image/e52ba877-e1f1-438f-911e-a01e8bbcc014.jpg', audio: 'http://localhost:5050/audio/91acc8de-24bb-4ab2-b1b2-9bcf7c0aa84c.mp3', comments: []},
        {_id: '3', name: 'Группа крови', artist: 'Кино', text: 'Какой-то текст', listens: 0, picture: 'http://localhost:5050/image/e52ba877-e1f1-438f-911e-a01e8bbcc014.jpg', audio: 'http://localhost:5050/audio/91acc8de-24bb-4ab2-b1b2-9bcf7c0aa84c.mp3', comments: []},
    ]
    
    return (
        <Layout>
            <Grid container justifyContent={'center'}>
                <Card style={{width: 900}}>
                    <Box p={3}>
                        <Grid container justifyContent={"space-between"}>
                            <h2>Tracks List</h2>
                            <Button onClick={() => router.push('/tracks/create')}>Upload track</Button>
                        </Grid>
                    </Box>
                    <TrackList tracks={tracks}/>
                </Card>
            </Grid>
        </Layout>
    );
};

export default Tracks;