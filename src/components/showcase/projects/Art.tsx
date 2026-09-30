import React from 'react';

import girlRun from '../../../assets/pictures/projects/art/girl-run.gif';
import gsts from '../../../assets/pictures/projects/art/gsts.png';

export interface ArtProjectsProps {}

const ArtProjects: React.FC<ArtProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>In Developement</h1>
            <h3>Current Projects and Inventions</h3>
            <br />
            <div className="text-block">
                <p>
                    I love programming as a hobby but I also love building projects 
		    to help others in need. It's fun to build something others will
		    use to better their daily lives. Currently I'm developing a software
		    program and all-in-one device that can detect the user's surrounding
		    environment, objects, danger, and then describe a short summary back
		    to the user.
                </p>
		<br />
		<p>
		    Currently I'm developing a software program and all-in-one device that
		    can detect the user's surrounding environment, objects, danger, and then 
		    describe a short summary back to the user.
		</p>
	    </div>
		<h2>Vision Assistant - Project E2S</h2>
		<br />
		<p>
		    The idea behind this is for people who are blind and aren't able to afford
		the care they need. This will device will be a small clip on camera, about the 
		size of a gum stick with a 160 degree camera, SBC supporting BTLE, 500mah lithium ion
		battery that can be recharged via solar and a speaker. This allows for the user to clip 
		the device onto the front of their shirt and have it aid them with their daily 
		activities without having to maintain the device. You clip it on, it self charges,
		and does everything internally,no networking needed. This can be done by loading 
		a quantized LLM onto a micro SD and using that SD card as storage for the SBC.
		All of the devices will be sold at cost to those in need.
		</p>
		<br />
                {/* <h3> Screen record time-lapses and make gifs</h3> */}
            </div>
        </div>
    );
};

export default ArtProjects;
