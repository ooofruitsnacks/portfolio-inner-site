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
                    I love to explore new ideas and learn new things. 
		Currently I'm learning Odin, Zig, and markdown lol. I'm learning
		Odin to create a videogame called FuzzyBuddyFarms based around
		becoming a bee farmer. I started to learn Zig because I wanted to
		get into learning C and C++ but then I found out about Zig and wanted
		to try that first. Markdown isn't anything too exciting but I use it
		everywhere so might as well learn it.
                </p>
                <br />
                <p>
                    Make sure to check back occassionally to see all the new things
		    I'm keeping myself busy with! I love working on projects and creating
		    guides for others to follow along.
                </p>
                <br />
                <p>
                    Below are some of my interests and what I'm learning currently, enjoy!
                </p>
            </div>
            <h2>Exploring The World Of Raspberry Pi</h2>
            <br />
            <p>
                I'm somewhat new to the world of SBC's but wow are they exciting! The
		possibilities of Raspberry Pi and Arduino are so cool to me, I've only
		dabbled around with Pi's but Arduino has a massive community as well.
		My first Pi project was a Zero 2W and I learned python/micro-python to
		program my first video game called "ToolyRacer". I ported that videogame
		over to my Pimoroni Tufty2040 with the Raspberry Pi RP2040 chip, and then
		eventually to swift as an app for myself and I figured out a way of running
		a python script on IOS to trick my iphone into thinking the video game was a 
		keyboard lol. 
		 I'm a huge fan of Raspberry Pi their business model as well, I love the idea
		of trying to make computing accessible to everyone at a low cost. I love the 
		open source mindset with the company and their approach to how they document
		everything. As I said above, the Pi community is massive and there are so many
		groups, forums, communities and brands that you can go to for help or more cool
		shit. I love adafruit and pimoroni for all their products, they have a bunch of
		beginner friendly projects and products you can check out yourself.
            </p>
            <br />
            <p>
                I've been trying to learn NeoVim and Vim motions. I see a lot of programmers
		recommend using either vim or emacs but I pesonally went with NeoVim to try out.
		I'm also a fan of nano and there is another newer project called VIS that I might
		learn later on.
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
