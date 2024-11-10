'use client'
import ApplicationFilters from "@/components/volunteer-shared-components/ApplicationFilters";
import CaretakerApps from "./VolunteerApps"
import { useState } from "react";

const { default: CaretakerNavbar } = require("../../volunteer-shared-components/CaretakerNavbar")

const CaretakerFindClients = () => {
    const tempData = [
        {clientEmail:"mary@gmail.com", categories:[1, "personal_care", 3, 4, 5, 6, 7, 8, 1000000000, 10000000000, 10000000000], volunteersNeeded:5, points:5, hours:"5 hours", notes:"N/A", postal:"A1A 1A1"},
        {clientEmail:"mary@gmail.com", categories:[1, 2, "housekeeping"], volunteersNeeded:5, points:5, hours:"5 hours", notes:"N/A", postal:"A1A 1A1"},
        {clientEmail:"mary@gmail.com", categories:[1, 2, 3], volunteersNeeded:5, points:5, hours:"5 hours", notes:"N/A", postal:"A1A 1A1"}
    ];

    const [displayData, setDisplayData] = useState(tempData);

    return (
        <>
            <CaretakerNavbar currentSelected={1}/>
            <ApplicationFilters fullData={tempData} setDisplayData={setDisplayData}/>
            <div style={{display:"flex", flexWrap:"wrap"}}>
                {displayData.map((data, i) =>{
                    return (
                        <CaretakerApps data={data} key={i}/>
                    )
                })}
            </div>
        </>
    )
}
export default CaretakerFindClients;