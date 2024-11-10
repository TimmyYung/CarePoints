'use client'
import { useState } from "react";
import CaretakerApps from "./VolunteerApps"

const { default: CaretakerNavbar } = require("../../volunteer-shared-components/CaretakerNavbar")

const CaretakerViewApps = () => {
    const tempCurrentData = [
        {clientEmail:"test@test.com", categories: ["companionship", "housekeeping","personal_care", "physical_therapy"], volunteersNeeded:7, points:6, hours:"7 hours", notes:"HELLOOOOOOOOOOOOOOOOO", postal:"M5A 0M4"},
        {clientEmail:"mary@gmail.com", categories:["specialized_care", "health_monitor"], volunteersNeeded:5, points:5, hours:"5 hours", notes:"N/A", postal:"A1A 1A1"}
    ];
    const tempPastData = [
        {clientEmail:"543@25.com", categories:[ "transportation" ], volunteersNeeded:435, points:5, hours:"1 hours", notes:"N/A", postal:"L4B 3W4"},
        {clientEmail:"mary@gmail.com", categories:[ "housekeeping", "nutritional_support" ], volunteersNeeded:5, points:5, hours:"5 hours", notes:"N/A", postal:"A1A 1A1"},
        {clientEmail:"mary@gmail.com", categories:[ "specialized_care", "health_monitor" ], volunteersNeeded:5, points:5, hours:"5 hours", notes:"N/A", postal:"A1A 1A1"},
        {clientEmail:"mary@gmail.com", categories:[ "transportation", "nutritional_support" ], volunteersNeeded:5, points:5, hours:"5 hours", notes:"N/A", postal:"A1A 1A1"},
        {clientEmail:"mary@gmail.com", categories:[ "companionship", "personal_care'" ], volunteersNeeded:5, points:5, hours:"5 hours", notes:"N/A", postal:"A1A 1A1"}
    ];
    const [app, setApp] = useState(0);

    

    return (
        <div style={{backgroundColor:"#AFCFF2", height:'100%'}}>
            <CaretakerNavbar currentSelected={0}/>
            <div className="caretaker-navbar">
                {app == 0 && <button disabled>Current Applications</button>}
                {app != 0 && <button onClick={() => setApp(0)}>Current Applications</button>}

                {app == 1 && <button disabled>Past Applications</button>}
                {app != 1 && <button onClick={() => setApp(1)}>Past Applications</button>}

            </div>
            <div style={{display:"flex", flexWrap:"wrap"}}>
                {app == 0 && tempCurrentData.map((patient, i) => 
                    <CaretakerApps data={patient} key={i}/>
                )}
                {app == 1 && tempPastData.map((patient, i) => 
                    <CaretakerApps data={patient} key={i}/>
                )}
            </div>
        </div>
    )
}
export default CaretakerViewApps;