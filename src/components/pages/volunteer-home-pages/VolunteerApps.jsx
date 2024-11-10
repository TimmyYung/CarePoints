import "./VolunteerApps.css";
import Button from "@mui/material/Button"
const CaretakerApps = ({data}) => {
    return (
        <div className="volunteer-application">
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <h3>{data.clientEmail}</h3>
                <h3>Points: {data.points}</h3>
            </div>
            <p><span className="bold">Postal Code:</span> {data.postal}</p><br/>

            <div className="volunteer-app-categories">Categories:{data.categories.map((cat, i) => {
                return (<button key={i} disabled>{cat}</button>)
            })}</div>
            <br/>
            <div><span className="bold">Volunteers Needed: </span> {data.volunteersNeeded}</div>
            <br/>
            <div><span className="bold">Notes: </span> {data.notes}</div>
            <Button>Apply</Button>
        </div>
    )
}
export default CaretakerApps;