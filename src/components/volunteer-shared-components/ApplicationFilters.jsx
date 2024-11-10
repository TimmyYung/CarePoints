import { TextField, Button } from '@mui/material'; 
const { useState } = require("react")

const ApplicationFilters = ({fullData, setDisplayData}) => {
    // const [defaultSort, setDefaultSort] = useState("Closest");
    const [filterOpen, setFilterOpen] = useState(false);
    const [filters, setFilters] = useState([
        {category:"personal_care", selected:false},
        {category:"companionship", selected:false},
        {category:"housekeeping", selected:false},
        {category:"physical_therapy", selected:false},
        {category:"health_monitor", selected:false},
        {category:"specialized_care", selected:false},
        {category:"transportation", selected:false},
        {category:"nutritional_support", selected:false}
    ]);
    const [currPostCode, setCurrPostCode] = useState("");

    const handleFilterClick = (i) => {
        var newFilters = filters.slice();
        newFilters[i].selected = !newFilters[i].selected;
        setFilters(newFilters);

        handleDataChange();
    }

    const handleDataChange = () => {
        var all = true;
        var selectedFilters = "";

        var indexes = "";

        for(var i = 0; i < filters.length; i++){//go through all filters to figure out which ones are selected
            if(filters[i].selected){//if selected
                all = false;//not all selected
                selectedFilters+= filters[i].category + "|";//add selected filters to string
            }
        }

        if(!all){//if not all
            for(var i = 0; i < fullData.length; i++){//for all jobs
                for(var j = 0; j < fullData[i].categories.length; j++){//go through each jobs categories
                    console.log(fullData[i].categories[j] + " " + selectedFilters)
                    if(selectedFilters.indexOf(fullData[i].categories[j]) != -1){//see if any match the selection
                        indexes += i + "|";}//if yes, add to list of filters
                }
            }

            if(indexes.indexOf("|") != -1){

                indexes = indexes.split("|");
                
                    
                for(var i = 0; i < indexes.length; i++){
                    indexes[i] = fullData[Number(indexes[i])];
                }

                setDisplayData(indexes);
            } else
                setDisplayData([]);
        } else
            setDisplayData(fullData)

    }

    const handlePostFilter = async () =>{

        if (!currPostCode || !/^([A-Z][0-9][A-Z])\s*([0-9][A-Z][0-9])$/.test(currPostCode)) {
            alert("Please enter a valid postal code.");
            return;
        }
        
        const token = "js-OjAru97T0Pa0oLafLWpPiooY7WGIAas6wvxHCLvIrg9pisCS7BpeCaFPJ14Oc8lE";
        const nearbyJobs = [];

        for (let i = 0; i < fullData.length; i++) {
            const toPost = fullData[i].postal.replace(" ", '');
            const fromPost = currPostCode.replace(" ", '');
            console.log(toPost);
            console.log(fromPost);

            try {
                const url = `https://www.zipcodeapi.com/rest/v2/CA/${token}/distance.json/${toPost}/${fromPost}/km`;

                const response = await fetch(url);
                if (!response.ok) throw new Error(`Error: ${response.status}`, {mode: 'no-cors'});

                const data = await response.json();
                if (data.distance < 10) nearbyJobs.push(fullData[i]);
            } catch (error) {
                console.error(error.message);
            }
        }

        setDisplayData(nearbyJobs.length ? nearbyJobs : []);
    } 

    return (
        <div style={{display:"flex", flexDirection: "row", alignItems: "center", gap: "10px", backgroundColor:"white"}}>
            {/* <button style={{fontSize:"20px", padding:"5px", borderRadius:"5px", border:"none", margin:"5px", cursor:"pointer"}} onClick={() =>{if(defaultSort == "Closest") setDefaultSort("Points"); else setDefaultSort("Closest")}}>Sort by: {defaultSort}</button> */}
            <div style={{position:"relative"}}>
                <div style={{fontSize:"20px", margin:"5px", cursor:"pointer", backgroundColor:"transparent"}} onClick={() => setFilterOpen(!filterOpen)}>Categories</div>
                <div style={{position:"absolute", zIndex:"1000", background:"white", padding:"5px", fontSize:"20px", width:"350px"}}>
                    {filterOpen && filters.map((filter, i) => 
                        <div onClick={() => handleFilterClick(i)} key={i} style={{display:"flex", justifyContent:"space-between"}}>
                            <div>{filter.category}</div>
                            {filters[i].selected && <div>✔</div>}
                            {!filters[i].selected && <div>x</div>}

                        </div>
                    )}
                </div>
            </div>
            <TextField
                style={{width:"20%"}}
                id="postCode"
                type="text"
                name="postCode"
                label= "Postal Code"
                placeholder="X1X 1X1"
                autoComplete="postal-code"
                variant="outlined"
                color="primary"
                aria-label="Postal Code"
                value={currPostCode}
                onChange={(e) => {setCurrPostCode(e.target.value)}}
                size="small"
            />
            <Button variant='contained' onClick={handlePostFilter} style={{fontFamily:"pixel", padding:"-10px -10px"}}>Search by Proximity</Button>
        </div>
    )
}
export default ApplicationFilters;