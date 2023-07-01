import React from 'react';
import Layout from "../../layouts/layout";
import {ITrack} from "../../types/track";
import {Box, Button, Grid, TextField} from "@mui/material";
import Image from "next/image";
import {useRouter} from "next/router";

const TrackPage = () => {
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
    const router = useRouter()

    return (
        <Layout>
            <Box p={5}>
                <Button
                    variant={"outlined"}
                    style={{fontSize: 32}}
                    onClick={() => router.push('/tracks')}
                >
                    To the list
                </Button>
                <Grid container style={{margin: '20px 0'}}>
                    <Image src={track.picture} width={200} height={200}/>
                    <div style={{marginLeft: 30}}>
                        <h1>Track name - {track.name}</h1>
                        <h1>Artist - {track.artist}</h1>
                        <h1>Listens - {track.listens}</h1>
                    </div>
                </Grid>
                <h1>Words in track</h1>
                <p>{track.text}</p>
                <h1>Comments</h1>
                <Grid container>

                    <TextField
                        label="Your name"
                        fullWidth
                    />
                    <TextField
                        label="Comment"
                        fullWidth
                        multiline
                        rows={4}
                    />
                    <Button>Send</Button>
                </Grid>
                <div>
                    {track.comments.map(comment =>
                        <div>
                            <div>Author - {comment.username}</div>
                            <div>Comment - {comment.text}</div>
                        </div>
                    )}
                </div>
            </Box>
        </Layout>
    );
};

export default TrackPage;