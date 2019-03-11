'use strict';

// geolocalisation
if (navigator.geolocation) {
    
    const successCallback = (position) => {
        console.log('position', position);

        const link = document.createElement('a');
        link.href = 'https://www.latlong.net/c/?lat=${position.coords.latitude}&long=${position.coords.longitude}';
        link.innerText = 'click here to see ur position';

        document.querySelector('body').appendChild(link);
    }

    const errorCallback = (error) => {
        console.log('error', error);
    }

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}