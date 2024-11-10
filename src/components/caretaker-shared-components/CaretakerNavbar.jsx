'use client'
import "./CaretakerNavbar.css"
const CaretakerNavbar = ({currentSelected}) => {
    const changeRoute = (route) => {
        window.location = "../" + route;
    }
    const handleSignOut = () => {
        window.location = "../home";
    }
    return (
        <div id="caretaker-navbar">
            {currentSelected != 0 && <button onClick={() => changeRoute("caretaker-view-applications")}>View Applications</button>}
            {currentSelected == 0 && <button disabled>View Applications</button>}

            {currentSelected != 1 && <button onClick={() => changeRoute("caretaker-find-clients")}>Find Clients</button>}
            {currentSelected == 1 && <button disabled>Find Clients</button>}

            {currentSelected != 2 && <button onClick={() => changeRoute("caretaker-edit-profile")}>Edit Profile</button>}
            {currentSelected == 2 && <button disabled>Edit Profile</button>}

            <button onClick={handleSignOut}>Sign Out</button>

        </div>
    )
}
export default CaretakerNavbar;