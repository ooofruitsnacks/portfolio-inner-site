import React, { useState } from 'react';
// @ts-ignore
import house from '../../../assets/audio/house_master.mp3';
// @ts-ignore
import edge from '../../../assets/audio/edge_unmastered.mp3';
// @ts-ignore
import dnb from '../../../assets/audio/break.mp3';
// @ts-ignore
import dnbDrums from '../../../assets/audio/dnb_drop_drums.mp3';
import houseProject from '../../../assets/pictures/projects/audio/houseProject.png';
import dnbDrumsProject from '../../../assets/pictures/projects/audio/dnbDrumsProject.png';
import { MusicPlayer } from '../../general';

export interface MusicProjectsProps {}

const MusicProjects: React.FC<MusicProjectsProps> = (props) => {
    const [currentSong, setCurrentSong] = useState<string>('');

    return (
        <div className="site-page-content">
            <h1>Current Studies</h1>
            <h3>What I'm Learnig</h3>
            <br />
            <div className="text-block">
                <p>
                    I like to explore new ideas. Currently I'm learning Odin, Zig,
		    and markdown(don't laugh I know).
                </p>
                <br />
                <p>
                    I'm sure there are better ways I could be doing something or 
		    structure my code but I'm still learning so give me a break.
                </p>
                <br />
                <p>
                    Below are some of my recent interests and what I support, enjoy!
                </p>
            </div>
            <h2>Exploring The World Of Raspberry Pi</h2>
            <br />
            <p>
                I'm somewhat new to the world of SBC's but wow are they exciting! The
		possibilities of Raspberry Pi and Arduino are so cool to me, I've only
		dabbled around with Pi's but Arduino has a massive community as well.
		My first Pi project was a Zero 2W and I learned pythong/micro-python to
		program my first video game called "ToolyRacer". I ported that videogame
		over to my Pimoroni Tufty2040 with the Raspberry Pi RP2040 chip, and then
		eventually to swift as an app for myself and I figured out a way of running
		a python script on IOS to trick my iphone into thinking the video game was a 
		keyboard lol. 
            </p>
            <br />
            <p>
                Right now I'm learning Odin to develop my new video game project called 
		FuzzyBuddyFarms. This will be a bee farming simulator with an open world,
		interactable NPC's, minigame's, and so many funny easter eggs. I have been
		putting in way too many hours but it will be so much fun! I have been working
		on my networking to allow for LAN multiplayer, or with tailscale it could get
		crazy lol. 
            </p>
            <br />

            <MusicPlayer
                src={house}
                title="Timeless"
                subtitle="Henry Heffernan"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />

            <br />
            <br />
            <p>
                Keep coming back for more changes, I'm still
		adding and making tweaks to my websites and working
		on multiple projects at once usually. I'll try to 
		update as often as possible to keep things exciting for you!
            </p>
            <br />
        </div>
    );
};

// const styles: StyleSheetCSS = {};

export default MusicProjects;
