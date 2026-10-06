import React, { useState } from 'react';
import DosPlayer from '../dos/DosPlayer';
import Window from '../os/Window';

interface DosGameWindowProps extends WindowAppProps {
    title: string;
    bundleUrl: string;
}

const DosGameWindow: React.FC<DosGameWindowProps> = ({
    title,
    bundleUrl,
    onClose,
    onInteract,
    onMinimize,
}) => {
    const [width, setWidth] = useState(980);
    const [height, setHeight] = useState(670);

    return (
        <Window
            top={10}
            left={10}
            width={width}
            height={height}
            windowTitle={title}
            windowBarColor="#1C1C1C"
            windowBarIcon="windowGameIcon"
            bottomLeftText="ACS | a creative solution"
            closeWindow={onClose}
            onInteract={onInteract}
            minimizeWindow={onMinimize}
            onWidthChange={setWidth}
            onHeightChange={setHeight}
        >
            <DosPlayer
                width={width}
                height={height}
                bundleUrl={bundleUrl}
            />
        </Window>
    );
};

export const GrandPrix2: React.FC<WindowAppProps> = (props) => (
    <DosGameWindow
        {...props}
        title="Grand Prix II"
        bundleUrl="/grand-prix-2.jsdos"
    />
);

export const DestructionDerby: React.FC<WindowAppProps> = (props) => (
    <DosGameWindow
        {...props}
        title="Destruction Derby"
        bundleUrl="/destruction-derby.jsdos"
    />
);

export const SimCity: React.FC<WindowAppProps> = (props) => (
    <DosGameWindow
        {...props}
        title="SimCity"
        bundleUrl="/simcity.jsdos"
    />
);
