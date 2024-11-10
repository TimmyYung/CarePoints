'use client'
import CaretakerNavbar from "../../caretaker-shared-components/CaretakerNavbar"
import CaretakerSignUp from "@/components/caretaker-shared-components/CaretakerSignUp"

const CaretakerEditProfile = () => {
    return (
        <>
            <CaretakerNavbar currentSelected={2}/>
            <CaretakerSignUp signup={false}/>
        </>
    )
}
export default CaretakerEditProfile