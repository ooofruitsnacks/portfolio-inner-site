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
		    use to better their daily lives.
                </p>
		<br />
		<p>
		    Currently I'm developing a software program and all-in-one device that
		    can detect the user's surrounding environment, objects, danger, and then 
		    describe a short summary back to the user. You can read more about the
		    project below. Make sure to check back soon I plan to add my other projects
		    as well! Thank you!
		</p>
	    </div>
		<h2>Vision Assistant - Project E2S</h2>
		<br />
		<p>
		    Project E2S is a personal passion project of mine aimed towards the blind 
		    and those who aren't able to afford the care they need. This will device will
		    be a small clip on camera, about the size of the stick of gum. Small enough
		    for the user to attach the device on any piece of clothing but rugged enough 
		to endure the daily duties of being a vision assistant. The device might be small 
		but it will have some trick shit packed into the small form. It will include a 
		160 degree viewing angle camera, built in speaker and AUX port for headphones, 
		haptic feedback,  SBC supporting BTLE, 1200mah lithium ion battery that can be
		recharged via solar along with the optional upgrades of a 130 degree viewing angle
		IR night vision camera and GPS module so the user can ask the LLM where they are located.
		The small form factor allows for the user to clip the device onto the front of their shirt
		and have it aid them with their daily activities without having to maintain the device. The
		speaker will describe the surroundings to the user and warn the user of any dangers, sometimes
		it can be hard to hear in public however so I also included haptic motors for vibrtational 
		feedback. The haptic motors will be programmed with different intensities, duration, and
		patterns so the user can use haptic feedback to guide them as well. For example, if a door 
		is ahead the motors could be programmed for a steady 2 second duration. If there is an
		obstacle blocking the door, you could program the motors for a steady 2 second duration followed
		by a more powerful double short burst with the speaker describing what's blocking the door.
		This gives the user a warning of the door ahead, a potential obstacle blocking the door, and
		if possible they will be able to hear what is blocking the door. The device will locally host 
		the LLM and the user data. No data will be sent out to me or other companies, I do have plans 
		to include GPS tracking with a simple low cost off the shelf sensor but that data will also never
		leave your device. I have no plans of implementing tracking for companies or advertisers now
		or in the future. You could use your phone for something like this I'm sure but I'm not evil
		like big tech companies. I treat you like a customer not a product to harvest data from.
		</p>
		<br />
                {/* <h3> Screen record time-lapses and make gifs</h3> */}
            </div>
    )
}
export default ArtProjects;
