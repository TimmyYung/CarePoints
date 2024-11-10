'use client'
import React from 'react';
import {APIProvider, Map, MapCameraChangedEvent} from '@vis.gl/react-google-maps';

export default function PatientSignUp (){
    return (
        <div>
             <APIProvider apiKey={'AIzaSyB_F4llkAJN8KOVo7FeDeg9bdNqDC5tl2E'} onLoad={() => console.log('Maps API has loaded.')}>
             <Map
                style={{width: '100vw', height: '100vh'}}
                defaultCenter={{lat: 22.54992, lng: 0}}
                defaultZoom={3}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
                />
            </APIProvider>
        </div>
    );
}