const { default: CaretakerNavbar } = require("../../caretaker-shared-components/CaretakerNavbar")

const CaretakerViewApps = () => {
    return (
        <>
            <CaretakerNavbar currentSelected={0}/>
            <div>
                applications
            </div>
        </>
    )
}
export default CaretakerViewApps;