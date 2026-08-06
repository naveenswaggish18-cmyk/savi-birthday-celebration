import { Box } from "@mui/material";

import MemoryHero from "../../components/MemoryHero/MemoryHero";
import MemoryStory from "../../components/MemoryStory/MemoryStory";

import ContinueJourney from "../../components/ContinueJourney/ContinueJourney";

import memories from "../../data/memories";

import "./Memories.css";

function Memories() {

    return (

        <Box className="memories-page">


            <MemoryHero />


        <MemoryStory
            title="👶 Childhood"
            caption="The beginning of a beautiful journey."
            images={[memories[0]]}
            direction="right"
        />

        <MemoryStory
            title="🌼 Little Happiness"
            caption="Finding joy in the little things."
            images={[memories[1], memories[2]]}
            direction="left"
        />

        <MemoryStory
            title="🎒 School Days"
            caption="Where beautiful memories began."
            images={[memories[4], memories[7]]}
            direction="right"
        />

        <MemoryStory
            title="😊 Beautiful Smile"
            caption="A smile that always brightens every moment."
            images={[memories[3]]}
            direction="left"
        />

        <ContinueJourney />
        </Box>

    );

}

export default Memories;