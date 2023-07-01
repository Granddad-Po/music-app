import React, {useState} from 'react';
import Layout from "../../layouts/layout";
import StepWrapper from "../../components/StepWrapper";
import {Button, Grid} from "@mui/material";
import TrackForm from "../../components/TrackForm";
import FileUpload from "../../components/FileUpload";

const Create = () => {
    const [activeStep, setActiveStep] = useState(0)
    const [picture, setPicture] = useState(null)
    const [audio, setAudio] = useState(null)
    
    const back = () => {
        setActiveStep(prev => prev - 1)
    }
    const next = () => {
        if (activeStep !== 2) {
            setActiveStep(prev => prev + 1)
        }
    }

    return (
        <Layout>
            <StepWrapper activeStep={activeStep}>
                {activeStep === 0 &&
                <TrackForm/>
                }
                {activeStep === 1 &&
                <FileUpload setFile={setPicture} accept={'image/*'}>
                    <Button>Upload cover</Button>
                </FileUpload>
                }
                {activeStep === 2 &&
                <FileUpload setFile={setAudio} accept={'audio/*'}>
                    <Button>Upload audio</Button>
                </FileUpload>
                }
            </StepWrapper>
            <Grid container justifyContent={'space-between'}>
                <Button disabled={activeStep === 0} onClick={back}>Back</Button>
                <Button onClick={next}>Next</Button>
            </Grid>
        </Layout>
    );
};

export default Create;