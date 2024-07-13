import React from 'react';
import './App.css';
import { Box, Button, Grid, GridItem, Heading, Text, VStack } from '@chakra-ui/react';

const sounds = {
    'Point Redemptions': [
        {
            name: 'MA THE MEATLOAF',
            file: 'ma-the-meatloaf.mp3',
        },
        {
            name: 'BOO YOU STINK',
            file: 'boo-you-stink.mp3',
        },
        {
            name: 'shiet',
            file: 'shiet.mp3',
        },
        {
            name: 'do you think mr krabs ever does karate',
            file: 'krabs-karate.mp3',
        },
    ],
};

function App() {
    const playSound = (filename) => {
        new Audio(`${process.env.PUBLIC_URL}/sounds/${filename}`).play();
    };

    return (
        <Box className="App">
            <Heading>Slip Soundboards</Heading>
            <br />
            <br />
            <br />
            <br />
            <Grid templateColumns={'repeat(4, 1fr)'} gap={6}>
                {Object.keys(sounds).map((soundCategory, i) => (
                    <React.Fragment key={i}>
                        <GridItem w="100%" h={20} colSpan={4}>
                            <Heading size="md">{soundCategory}</Heading>
                        </GridItem>
                        {sounds[soundCategory].map((sound, j) => (
                            <GridItem w="100%" h={20} key={j}>
                                <VStack>
                                    <Text>{sound.name}</Text>
                                    <Button onClick={() => playSound(sound.file)}>Play {sound.name}</Button>
                                </VStack>
                            </GridItem>
                        ))}{' '}
                    </React.Fragment>
                ))}
            </Grid>
        </Box>
    );
}

export default App;
