import  { useEffect, useState } from "react";

const Github = () => {

    const [data,setData]=useState("");
    useEffect(()=>{
        fetch('https://api.github.com/users/yashbajpai07')
        .then(response=>response.json())
        .then(d=>{
            console.log(d)
            setData(d)
          })
             
    })
  return (
    <div className="text-center m-4 
    bg-gray-600 text-white p-4 text-3xl">
      Github Followers: {data.followers}
      <img src={data.avatar_url} width={300} alt="profile_image"/>
    </div>
  );
};

export default Github;

