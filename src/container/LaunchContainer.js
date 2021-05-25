import React, { useEffect, useState } from 'react';

import LaunchSelector from '../components/LaunchSelector';
import LaunchDetails from '../components/LaunchDetails';

const LaunchContainer = () => {

    const [launch, setLaunch] = useState({});
    const [selectedLaunchId, setSelectedLaunchId] = useState(1);
    const [loaded, setLoaded] = useState(false);

    const getLaunch = () => {
        fetch(`https://api.spacexdata.com/v3/launches/${selectedLaunchId}`)
        .then(res => res.json())
        .then(data => setLaunch(data))
        .then(() => setLoaded(true))
    }

    const incrementSelectedLaunch = () => {
        const nextLaunchId = selectedLaunchId + 1;
        // This api is only 110 long so we will use less than or equal to 110
        if (nextLaunchId <= 110){
            setSelectedLaunchId(nextLaunchId)
        }
    }

    const decrementSelectedLaunch = () => {
        const previousLaunchId = selectedLaunchId - 1;
        // This api has no values lower than 0
        if (previousLaunchId >= 1){
            setSelectedLaunchId(previousLaunchId)
        }
    }

    // Remember [] so this only runs once on page load, otherwise this will loop forever
    useEffect(() => {
        getLaunch();
    }, [selectedLaunchId])

    return(
        <>
            <h1>SpaceX Launches</h1>

            <LaunchSelector 
                onSelectedLaunchIncrement={() => incrementSelectedLaunch()}
                onSelectedLaunchDecrement={() => decrementSelectedLaunch()}
            />

            <LaunchDetails
            launch={launch}
            loaded={loaded}
            />
        </>
    )
}

export default LaunchContainer;