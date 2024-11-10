'use client'
import ApplicationFilters from "@/components/volunteer-shared-components/ApplicationFilters";
import CaretakerApps from "./VolunteerApps"
import { useState } from "react";

const { default: CaretakerNavbar } = require("../../volunteer-shared-components/CaretakerNavbar")

const CaretakerFindClients = () => {
    const tempData = [
        {clientEmail:"mary@gmail.com", categories:["personal care", "specialized care", "transportation", "physical therapy", "personal care"], volunteersNeeded:5, points:5, hours:"5 hours", notes:"N/A", postal:"A1A 1A1"},
        {clientEmail:"gary@gmail.com", categories:["personal care", "specialized care", "transportation", "physical therapy", "personal care"], volunteersNeeded:5, points:3, hours:"5 hours", notes:"Massage needed", postal:"A1A 1A1"},
        {clientEmail:"jerry@gmail.com", categories:["personal care", "specialized care", "transportation", "physical therapy", "personal care"], volunteersNeeded:5, points:4, hours:"5 hours", notes:"N/A", postal:"A1A 1A1"}
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