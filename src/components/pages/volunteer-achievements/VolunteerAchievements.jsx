import "./VolunteerAchievements.css"
const VolunteerAchievements = () => {
    const exampleData = {name:"John smith", points:50, rating:4.99999999999, totalJobs:1};

    return (
        <div id="volunteer-achievements">
            <h1>{exampleData.name}</h1>
            <hr/>
            <h2>My points: {exampleData.points}</h2>
            <h2>My rating: {exampleData.rating} / 5</h2>
            <h2>Total number of jobs: {exampleData.totalJobs}</h2>
        </div>
    )
}
export default VolunteerAchievements;