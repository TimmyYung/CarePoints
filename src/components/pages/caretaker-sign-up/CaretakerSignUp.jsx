import TextField from "@mui/material/TextField";
import "./CaretakerSignUp.css";
import { Button } from "@mui/material";

const CaretakerSignUp = () => {
    return (
        <div id="caretaker-sign-up">
            <div>
                <div>
                    <h3>Caretaker Sign Up</h3>
                    <br/>
                    <label>Full Name:</label>
                    <TextField></TextField>
                    <br/>
                    <label>Email:</label>
                    <TextField></TextField>
                    <br/>
                    <label>Phone Number:</label>
                    <TextField></TextField>
                    <br/>
                    <label>Password:</label>
                    <TextField/>
                </div>
                <div>
                    <label>Education:</label>
                    <TextField/>
                    <br/>
                    <label>Work Experience:</label>
                    <TextField/>
                    <br/>
                    <label>Photo ID Upload</label>
                    <input type="file"/>
                    <br/>
                    <label>Services:</label>
                    <TextField/>
                    <br/>
                    <label>Availability:</label>
                    <TextField/>
                </div>
            </div>
            <Button>Save</Button>
        </div>
    )
}
export default CaretakerSignUp;