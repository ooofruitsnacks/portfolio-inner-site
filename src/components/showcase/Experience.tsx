import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Bring A Trailer</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://bringatrailer.com/'}
                        >
                            <h4>www.bringatrailer.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Local Partnered Photographer</h3>
                        <b>
                            <p>Winter 2023 - Current</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    The only official photographer partnered with Bring A Trailer
		    for the Detroit Metro Area, for a few years (City of Cars & I)
		    were the only official partners but now a few more michiganders
	            have joined the club :)
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Responsible for the oversight, curation, and execution of
			    the photo and auction process for Bring A Trailer customers.
			    This entire process includes communicating and coordinating 
			    photo shoots, providing customers with completed picture galleries
	    		    (resizing,formatting,color-correction,renaming,etc.) to meet
			    strict guide lines along with the representation of the car 
			    during the auction period. 
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>City of Cars</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://cityofcars.com/'}
                        >
                            <h4>www.cityofcars.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Purchasing Agent</h3>
                        <b>
                            <p>Fall 2019 - Current</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    My job responsibilities have changed over the years but 
		    have included: the oversight and management of incoming
		    and out-going inventory, oversight of building maintenance,
		    customer relations, inventory and social media photography, 
		    social media curation and inventory purchasing.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Kelly Blue Book Partner
                        </p>
                    </li>
                    <li>
                        <p>
                            NIADA 2019 National Quality Dealer of the Year Award
                        </p>
                    </li>
                    <li>
                        <p>
                            Bring A Trailer Partner
                        </p>
                    </li>
                    <li>
                        <p>
                            Family owned dealership since 1994!
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Personal Projects</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://a-creative.website/'}
                        >
                            <h4>www.a-creative.website</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Programming Projects</h3>
                        <b>
                            <p>and blog!</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Feel free to visit my other website to check out
		    what I'm working on. I try to make all my personal
		    projects open source so others can use them, follow
		    along or create their own version.
                </p>
                <br />
                <h3 style={styles.indent}>My Current Projects:</h3>
                <ul>
                    <li style={styles.row}>
                        <p>• FuzzyBuddyFarms</p>
                        <p>
                            [{' '}
                            <a
                                href="https://github.com/ooofruitsnacks/fuzzybuddyfarms"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GITHUB REPO
                            </a>{' '}
                            ]
                        </p>
                    </li>
                    <li style={styles.row}>
                        <p>• turtle</p>
                        <p>
                            [{' '}
                            <a
                                href="https://github.com/ooofruitsnacks/turtle"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GITHUB REPO
                            </a>{' '}
                            ]
                        </p>
                    </li>
                    <li style={styles.row}>
                        <p>• Project E2S</p>
                        <p>
                            [{' '}
                            <a
                                href="https://a-creative.website"
                                target="_blank"
                                rel="noreferrer"
                            >
                                IN DEVELOPEMENT
                            </a>{' '}
                            ]
                        </p>
                    </li>
                    <li style={styles.row}>
                        <p>• My other website and blog</p>
                        <p>
                            [{' '}
                            <a
                                href="https://a-creative.website/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                ACS
                            </a>{' '}
                            ]
                        </p>
                    </li>
                    <li style={styles.row}>
                        <p>• Youtube Vids</p>
                        <p>
                            [{' '}
                            <a
                                href="https://www.youtube.com/@Internetpimp"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Youtube
                            </a>{' '}
                            ]
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
