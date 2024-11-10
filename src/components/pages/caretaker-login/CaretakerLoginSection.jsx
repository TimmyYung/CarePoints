import TextField from "@mui/material/TextField";
import "./caretaker-login.css";

const CaretakerLoginSection = () => {
    return (
        <div id="caretaker-login-section">
            <div id="caretaker-login">
                <h3>Caretaker Login</h3>
                <br/>
                <label>Email:</label>
                <TextField></TextField>
                <br/>
                <label>Password:</label>
                <TextField></TextField>
            </div>
            <div id="block"/>
        </div>
    )
}
export default CaretakerLoginSection;