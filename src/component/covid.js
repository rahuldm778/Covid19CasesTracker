import React from 'react';
import { useEffect, useState} from 'react';
import './covid.css';

const Covid= () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        try{
            const res = await fetch('https://api.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        }catch(err){
            console.log(err);
        }
        
    }

    useEffect(() => {
        getCovidData();
    }, []);
    

    return (
        <div className="mainbody">
            <h1> LIVE </h1>
            <h2> COVID-19 CORONAVIRUS TRACKER </h2>
            <ul>
                <li className="card">
                    <div className="card_main">
                        <div className="card_inner">
                            <p className="card_name"><span>OUR</span> COUNTRY</p>
                            <p className="card_total card_small">INDIA </p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="card_main" style={{backgroundColor: "green"}}>
                        <div className="card_inner">
                            <p className="card_name"><span>TOTAL</span> RECOVERED</p>
                            <p className="card_total card_small"> {data.recovered} </p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="card_main" style={{backgroundColor: "#d1cb24"}}>
                        <div className="card_inner">
                            <p className="card_name"><span>TOTAL</span> CONFIREMED</p>
                            <p className="card_total card_small">{data.confirmed} </p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="card_main" style={{backgroundColor: "orange"}}>
                        <div className="card_inner">
                            <p className="card_name"><span>TOTAL</span> DEATHS</p>
                            <p className="card_total card_small">{data.deaths}</p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="card_main" style={{backgroundColor: "#f57aca"}}>
                        <div className="card_inner">
                            <p className="card_name"><span>TOTAL</span> ACTIVE</p>
                            <p className="card_total card_small">{data.active} </p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="card_main" style={{backgroundColor: "red"}}>
                        <div className="card_inner">
                            <p className="card_name"><span>LAST</span> UPDATE</p>
                            <p className="card_total card_small">{data.lastupdatedtime} </p>
                        </div>
                    </div>
                </li>

            </ul>
        </div> 
    );
}

export default Covid;