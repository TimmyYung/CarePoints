import "./VolunteerApps.css";
import Button from "@mui/material/Button"
const CaretakerApps = ({data}) => {
    return (
        <div className="volunteer-application">
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <h3 style={{fontWeight:"normal"}}>{data.clientEmail}</h3>
                <h3 style={{fontWeight:"normal"}}>Points: {data.points}</h3>
            </div>
            <p>Postal Code: {data.postal}</p><br/>

            <div className="volunteer-app-categories" style={{fontWeight:"thin"}}>Categories:{data.categories.map((cat, i) => {
                return (<button key={i} disabled className="volunteer-find-client-button">{cat}</button>)
            })}</div>
            <br/>
            <div>Volunteers Needed: {data.volunteersNeeded}</div>
            <br/>
            <div>Notes: {data.notes}</div>
            <Button style={{fontFamily:"pixel", background:"rgb(151, 174, 242)", border:"1px solid blue", borderRadius:"0"}} 
                href={
                    'mailto:' + data.clientEmail + 
                    '?subject=Application to Provide Care for ' + 
                    data.categories.map((value) => value).join(", ")
            }>
                Apply
            </Button>
        </div>
    )
}
export default CaretakerApps;