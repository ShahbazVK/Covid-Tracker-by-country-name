import React,{useEffect, useState} from 'react'
import SimpleCard from './Card';
const Api=(props)=>{
    // console.log(34);
    // const [details,setDetails]=useState([]);
    const [obj,setObj]=useState([]);
    const countryNames=["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Austrian Empire","Azerbaijan","Baden","Bahamas","Bahrain","Bangladesh","Barbados","Bavaria","Belarus","Belgium","Belize","Benin(Dahomey)","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Brunswick and Lüneburg","Bulgaria","Burkina Faso(Upper Volta)","Burma","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","CaymanIslands","Central African Republic","Central American Federation","Chad","Chile","China","Colombia","Comoros","Congo Free State","Costa Rica","Cote d’Ivoire (Ivory Coast)","Croatia","Cuba","Cyprus","Czechia","Czechoslovakia","Democratic Republic of the Congo","Denmark","Djibouti","Dominica","Dominican Republic","Duchy of Parma","East Germany (German Democratic Republic)","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Federal Government of Germany(1848-49)","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Grand Duchy of Tuscany","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Hanover","Hanseatic Republics ","Hawaii ","Hesse","Holy See","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kingdom of Serbia/Yugoslavia","Kiribati","Korea","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Lew Chew(Loochoo)","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mecklenburg-Schwerin","Mecklenburg-Strelitz","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Namibia","Nassau","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North German Confederation","North German Union ","North Macedonia","Norway","Oldenburg","Oman","Orange Free State","Pakistan","Palau","Panama","Papal States","Papua New Guinea","Paraguay","Peru","Philippines","Piedmont-Sardinia","Poland","Portugal","Qatar","Republic of Genoa","Republic of Korea(South Korea)","Republic of the Congo","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Schaumburg-Lippe","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria","Tajikistan","Tanzania","Texas","Thailand","Timor-Leste","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Two Sicilies ","Uganda","Ukraine","Union of Soviet Socialist Republics ","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Vanuatu","Venezuela","Vietnam","Württemberg","Yemen","Zambia","Zimbabwe"];
    // console.log(countryNames);
            let nameCapitalized = props.country.charAt(0).toUpperCase() + props.country.slice(1)

   useEffect(() => {
        const fetchapi = async () => {
            const found = countryNames.find(element => element === nameCapitalized);      
            // console.log("FOUND",found);
            if (found==nameCapitalized){
                const url = `https://covid19.mathdro.id/api/countries/${nameCapitalized}`;
                const resp =await fetch(url);
                const resjsn =await resp.json();
                // setDetails(resjsn);
                // console.log(resjsn);
                // console.log("running 1 time");
                setObj(pre=>[...pre,resjsn.confirmed.value]);
                // console.log("running 2 time");
                setObj(pre=>[...pre,resjsn.recovered.value]);
                // console.log("running 3 time");
                setObj(pre=>[...pre,resjsn.deaths.value]);
                // console.log("OBJ hn me",obj);
            }
            else{
                alert(nameCapitalized+" not a country");
                setObj(["N/A","N/A","N/A"]);
            }
        }
        fetchapi();
        
    },[])

    return (
        <>
        <SimpleCard obj={obj} country={nameCapitalized}/>

       </>
    )
}
export default Api;
