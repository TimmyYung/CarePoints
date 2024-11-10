const { default: CaretakerNavbar } = require("../../caretaker-shared-components/CaretakerNavbar")

const CaretakerFindClients = () => {
    return (
        <>
            <CaretakerNavbar currentSelected={1}/>
            <div>
                clients
            </div>
        </>
    )
}
export default CaretakerFindClients;