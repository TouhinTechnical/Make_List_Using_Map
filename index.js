import {countryList} from "./countries.js";

countryList.map((item,i)=>{
    let countryName=`My country name is ${item.country}`;
    let regionName=`My country region name ${item.region}`;
    console.log(countryName);
    console.log(regionName);
})