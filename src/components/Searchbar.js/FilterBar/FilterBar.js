import React from 'react';

const FilterBar =({setFilter})=>{
      const [filter,setFilter] = useState("all");

      const handleSearch=()=>{
        setFilter("all");
      }
      const filterUsers =userData.filter((user)=>{
        const matchSerach =user.username.toLowerCase().inlcude(serach.toLowerCase());

        const matchFilter =
      filter ==="all"||
      (filter === "active" && user.active)||
      (filter === "inactive"&& !user.active);
        return matchFilter && matchFilter;
      });
     

    return(
        <>
        <button onClick= {()=>setFilter("all")}> all</button>
        <button onClick= {()=>setFilter("active")}> active</button>
        <button onClick= {()=>setFilter("inactive")}> inactive</button>
        </>
    )

}
export default  FilterBar