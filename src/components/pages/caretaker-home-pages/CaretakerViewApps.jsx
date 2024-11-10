import CaretakerApps from "./CaretakerApps"

const { default: CaretakerNavbar } = require("../../caretaker-shared-components/CaretakerNavbar")

const CaretakerViewApps = () => {
    const tempData = [
        {patientName:"mary", patientNeed:"help with cooking", numVolunteers:5, points:5, hours:"5 hours", notes:"N/A", status:"pending"},
        {patientName:"mary", patientNeed:"help with cooking", numVolunteers:5, points:5, hours:"5 hours", notes:"N/A", status:"accepted"},
        {patientName:"mary", patientNeed:"help with cooking", numVolunteers:5, points:5, hours:"5 hours", notes:"N/A", status:"rejected"}

    ]
    return (
        <>
            <CaretakerNavbar currentSelected={0}/>
            <div>
                {tempData.map((patient) => {
                    <CaretakerApps data={patient}/>
                })}
            </div>
        </>
    )
}
export default CaretakerViewApps;