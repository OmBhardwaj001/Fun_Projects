import React from "react";
export const Getdata = async ()=>{
    const response = await fetch("https://randomuser.me/api/",{
        method:"GET",
});
return await response.json();
};

