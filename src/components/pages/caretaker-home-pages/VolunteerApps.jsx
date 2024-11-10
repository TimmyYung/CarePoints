import "./VolunteerApps.css";
import Button from "@mui/material/Button"
const CaretakerApps = ({data}) => {
    return (
        <div className="volunteer-application">
            <div>{data.client}</div>
            <div>Points: {data.points}</div>
            <div className="volunteer-app-categories">Categories:{data.categories.map((cat, i) => {
                return (<button key={i} disabled>{cat}</button>)
            })}</div>
            <div>Volunteers Needed: {data.volunteersNeeded}</div>
            <div>Postal Code: <br/> {data.postal}</div>
            <div>Notes: {data.notes}</div>
            <Button>Apply</Button>
        </div>
    )
}
export default CaretakerApps;