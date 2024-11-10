import Button from "@mui/material/Button"
const CaretakerApps = ({data}) => {
    return (
        <div>
            <p>{data.patientName}</p>
            <p>{data.patientNeed}</p>
            <p>{data.dateRange}</p>
            {data.status == "accepted" && <p>Accepted</p>}
            {data.status == "rejected" && <p>Rejected</p>}
            {data.status == "pending" && <Button>Withdraw</Button>}
        </div>
    )
}
export default CaretakerApps;