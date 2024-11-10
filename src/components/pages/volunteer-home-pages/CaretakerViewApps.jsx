'use client'
import { useState } from "react";
import CaretakerApps from "./VolunteerApps"

const { default: CaretakerNavbar } = require("../../volunteer-shared-components/CaretakerNavbar")

const CaretakerViewApps = () => {
    const tempCurrentData = [
        {clientEmail:"mary@gmail.com", categories:[1, 2, 3, 4, 5, 6, 7, 8, 1000000000, 10000000000, 10000000000], volunteersNeeded:5, points:5, hours:"5 hours", notes:"N/A", postal:"A1A 1A1"},
        {clientEmail:"mary@gmail.com", categories:[1, 2, 3], volunteersNeeded:5, points:5, hours:"5 hours", notes:"N/A", postal:"A1A 1A1"}
    ];
    const tempPastData = [
        {clientEmail:"mary@gmail.com", categories:[1, 2, 3, 4, 5, 6, 7, 8, 1000000000, 10000000000, 10000000000], volunteersNeeded:5, points:5, hours:"5 hours", notes:"N/A", postal:"A1A 1A1"},
        {clientEmail:"mary@gmail.com", categories:[1, 2, 3], volunteersNeeded:5, points:5, hours:"5 hours", notes:"N/A", postal:"A1A 1A1"},
        {clientEmail:"mary@gmail.com", categories:[1, 2, 3], volunteersNeeded:5, points:5, hours:"5 hours", notes:"N/A", postal:"A1A 1A1"},
        {clientEmail:"mary@gmail.com", categories:[1, 2, 3], volunteersNeeded:5, points:5, hours:"5 hours", notes:"N/A", postal:"A1A 1A1"},
        {clientEmail:"mary@gmail.com", categories:[1, 2, 3], volunteersNeeded:5, points:5, hours:"5 hours", notes:"N/A", postal:"A1A 1A1"}
    ];
    const [app, setApp] = useState(0);

    return (
        <>
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
        </>
    )
}
export default CaretakerViewApps;