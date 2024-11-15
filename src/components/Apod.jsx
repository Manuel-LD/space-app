import { useState, useEffect } from "react"
import { CircularProgress } from '@mui/material'
import "./Apod.css"

function ApodCard({title, url, explanation}){
    return ( 
        <div className="apod-card">
            <h2 className="apod-title">{title}</h2>
            <img src={url} alt={title} className="apod-img" />
            <p className="apod-expl">{explanation}</p>
        </div>
    );
}

function Apods(){
    const API_URL = "https://api.nasa.gov/planetary/apod?api_key=xnyU9WjjvxYLqypDuKfvzdczXgXgipNmX6sHPpAV";
    const [apod, setApod] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(API_URL);
            const res = await data.json();
            setApod(res);
        };

        fetchData().catch((err) => console.error(err));
    }, []);

    return (
        <div className="apod-container">
            {!apod ? (
                <CircularProgress/>
            ):(
                <ApodCard title={apod.title} url={apod.url} explanation={apod.explanation} />
            )}              
        </div>
    );
}

export default Apods;