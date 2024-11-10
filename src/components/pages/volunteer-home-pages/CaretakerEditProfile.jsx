'use client'
import CaretakerNavbar from "../../volunteer-shared-components/CaretakerNavbar"
import CaretakerSignUp from "@/components/volunteer-shared-components/CaretakerSignUp"

const CaretakerEditProfile = () => {
    return (
        <>
            <CaretakerNavbar currentSelected={2}/>
            <CaretakerSignUp signup={false}/>
        </>
    )
}
export default CaretakerEditProfile