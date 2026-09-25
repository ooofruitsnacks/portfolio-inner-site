import React from 'react';
import me from '../../assets/pictures/workingAtComputer.jpg';
import meNow from '../../assets/pictures/currentme.jpg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Owen Edwards</h3>
            <br />
            <div className="text-block">
                <p>
                    I am 26 years old and I live in the United States.
		    I am very passionate about open source projects,ferrari and creating.
		    This is my personal website that I will use as my resume, feel free 
		    to check out my blog as well :)
                </p>
                <br />
                <p>
                    Thanks for taking the time to check my website out. HUGE Special thanks to
		    Henry Heffernan and all the other open source creators. 
                    Feel free to contact me using{' '}
                    <Link to="/contact">this form</Link> or shoot me an email at{' '}
                    <a href="mailto:467487@pm.me">
                        467487@pm.me
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                    I have always loved creating. This website is an 
		    extension of that creativity for you all to enjoy :)
		    I grew up also loving cars, Ferrari and motorsports. From a 
	    	    very young age I adored the likes of Valentino Rossi and
		    Michael Schumacher. The bright colors and designs from Aldo
		    Drudi for Valentino Rossi always drew my attention. 
                </p>
                <br />
                <div className="captioned-image">
                    <img src={me} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> A real photo of me developing this
                            website :)
                        </sub>
                    </p>
                </div>

                <p>
                    I was always interested in technology and programming growing
		    up but I didn't have access to explore those interests. My 
		    brother built his own PC when we were in middle school and I
		    always thought that was really cool. My first expsoure to 
		    programming was with scratch lol and then I started to explore
		    it as a hobby to develop my personal passion projects.
                </p>
                <br />
                <p>
                    I had a simple chromebook for a long time that I used to program
		    but then my boss gave me their unused macbook and that was my first
	            REAL laptop. That made my hobby for programming take off because I
		    wanted to push the hardware to it's limits instead of wasting it.
                </p>
                <br />
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>My Hobbies</h3>
                        <br />
                        <p>
                            Beyond programming I really love motorsports,
			    Ferrari, photography, mountain biking, hiking,
			    drawing, and exploring nature.
                        </p>
                        <br />
                        <p>
                            I also enjoy creating graphic art, graphic designs,
			    collecting model cars, watching movies, and baking.
                        </p>
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={meNow} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figure 2:</b> Me (center) September 2005
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    Thanks for reading and exploring my website, feel
		    free to check out my other website for all my 
	            person project updates and blog posts {' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://a-creative.website"
                    >
                        @a-creative-website
                    </a>{' '}
                    Special thanks to Henry Heffernan.
                </p>
                <br />
                <p>
                    If you have any questions or comments I would love to hear
                    them. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email
                    at{' '}
                    <a href="mailto:467487@pm.me">
                        467487@pm.me
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
