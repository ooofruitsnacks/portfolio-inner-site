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
                    While I love programming for shits and giggles, I also
		    believe in using that power to help those less fortunate.
		    Currently I'm developing a software program that can detect
		    a user's surrounding environment, objects, danger, and describe
		    a short summary back to the user. The idea behind this is for
		    people who are blind and can't afford a service animal. This will
	    	    be a small clip on camera, about the size of a gum stick with a
		    160 degree camera, SBC supporting BTLE, 500mah lithium ion battery
		    that can be recharged via solar and a speaker. This allows for the 
		    user to clip the device onto the front of their shirt and have it
	    	    aid them with their dailya activities without having to maintain the
		    device. You clip it on, it self charges, and does everything internally,
		    no networking needed. This can be done by loading a quantized LLM onto 
		    a micro SD and using that as storage for the SBC.
                </p>
                <br />
                <p>
                    Make sure to check back as I add my other projects! :)
                </p>
            </div>
                {/* <h3> Screen record time-lapses and make gifs</h3> */}
            </div>
        </div>
    );
};

export default ArtProjects;
