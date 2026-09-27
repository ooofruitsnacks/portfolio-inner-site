import React from 'react';
// @ts-ignore
import saga from '../../../assets/pictures/projects/software/saga.mp4';
// @ts-ignore
import computer from '../../../assets/pictures/projects/software/computer.mp4';
// @ts-ignore
import scroll from '../../../assets/pictures/projects/software/scroll.mp4';
import ResumeDownload from '../ResumeDownload';
import VideoAsset from '../../general/VideoAsset';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Software Projects</h1>
            <h3>Programming, Developing, Engineering</h3>
            <br />
            <p>
                Below are some of my current, past, or favorite
		projects of mine. I hope you enjoy! Feel free to 
		email me if you want me to work with you on a project!
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>a-creative.studio</h2>
                <br />
                <p>
                    a-creative.studio is my personal portfolio website with all
		    my personal projects. I have another website where my blog 
		    is posted called a-creative.website, feel free to check it 
		    out. ACS or a creative solution is my creative agency that 
		    houses all my different creative ventures. The whole idea
		    behind a creative solution is to show my creative solutions
		    to my ideas, hence the naming scheme with the websites.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={computer} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> Blender Scene of the 3D website.
                            The scene from Blender was baked and exported in a
                            GLTF format.
                        </sub>
                    </p>
                </div>
                <p>
                    Now a quick technical breakdown of the site. The website is
		    hosted on Github pages and is split into two parts, the 3D 
		    site and the 2D OS site. The 3D site uses Three.js to render 
		    the scene and renders the 2D site inside of it using an iframe.
		    The 2D OS site is a simple react site that is hosted{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://os.a-creative.studio"
                    >
                        here
                    </a>{' '}
                    and works as a standalone web app. The actual rendering of
                    the 2D site is accomplished using a CSS renderer provided by
                    Three.js that transforms the html of the 2D site with 3D CSS
                    transforms to give the illusion of three dimensionality.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://a-creative.studio"
                        >
                            <p>
                                <b>[3D Site]</b> - a-creative.studio
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://os.a-creative.studio"
                        >
                            <p>
                                <b>[OS Site]</b> - os.a-creative.studio
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/ooofruitsnacks/portfolio-website"
                        >
                            <p>
                                <b>[GitHub]</b> - 3D Site Repository
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/ooofruitsnacks/portfolio-inner-site"
                        >
                            <p>
                                <b>[GitHub]</b> - OS Site Repository
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                    I'm skipping over a lot of details in exchange for brevity,
                    but I do plan on doing a more in depth breakdown for those
                    interested sometime in the future. To get updates with that
                    project feel free to follow along with my blog on my other
		    website{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://a-creative.website"
                    >
                        ACS | Blog Posts 
                    </a>
                </p>
            </div>
            <ResumeDownload />
        </div>
    );
};

const styles: StyleSheetCSS = {
    video: {
        width: '100%',
        padding: 12,
    },
    caption: {
        width: '80%',
    },
};

export default SoftwareProjects;
