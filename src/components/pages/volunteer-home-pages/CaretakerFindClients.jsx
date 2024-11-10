'use client'
import ApplicationFilters from "@/components/volunteer-shared-components/ApplicationFilters";
import CaretakerApps from "./VolunteerApps"
import { useState } from "react";

const { default: CaretakerNavbar } = require("../../volunteer-shared-components/CaretakerNavbar")

const CaretakerFindClients = () => {
    const tempData = [
        {clientEmail:"client1@example.com", categories:[ "companionship", "specialized_care" ], volunteersNeeded:5, points:11, hours:"3 hours", notes: "Assistance with safe entry and exit from the bath or shower, and thorough cleaning.", postal:"L2J 2J2"},
        {clientEmail:"client1@example.com", categories:["transportation", "physical_therapy"], volunteersNeeded:9, points:44, hours:"8 hours", notes:"I need to be dressed.", postal:"H3H 3H3"},
        {clientEmail:"test@test.com", categories:["health_monitor", "physical_therapy"], volunteersNeeded:4, points:5, hours:"4 hours", notes: "safasf", postal:"L2J 2M2"}
    ];

    const [displayData, setDisplayData] = useState(tempData);

    return (
        <div style={{backgroundColor:"#AFCFF2", height:"100%"}}>
            <CaretakerNavbar currentSelected={1}/>
            <ApplicationFilters fullData={tempData} setDisplayData={setDisplayData}/>
            <div style={{display:"flex", flexWrap:"wrap"}}>
                {displayData.map((data, i) =>{
                    return (
                        <CaretakerApps data={data} key={i}/>
                    )
                })}
            </div>
        </div>
    )
}
export default CaretakerFindClients;