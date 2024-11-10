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

    return (
        <div style={{display:"flex"}}>
            {/* <button style={{fontSize:"20px", padding:"5px", borderRadius:"5px", border:"none", margin:"5px", cursor:"pointer"}} onClick={() =>{if(defaultSort == "Closest") setDefaultSort("Points"); else setDefaultSort("Closest")}}>Sort by: {defaultSort}</button> */}
            <div style={{position:"relative"}}>
                <div style={{fontSize:"20px", padding:"5px", margin:"5px", cursor:"pointer"}} onClick={() => setFilterOpen(!filterOpen)}>Categories</div>
                <div style={{position:"absolute", zIndex:"1000", background:"white", padding:"5px", fontSize:"20px", width:"200px"}}>
                    {filterOpen && filters.map((filter, i) => 
                        <div onClick={() => handleFilterClick(i)} key={i} style={{display:"flex", justifyContent:"space-between"}}>
                            <div>{filter.category}</div>
                            {filters[i].selected && <div>✔</div>}
                            {!filters[i].selected && <div>x</div>}

                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
export default ApplicationFilters;