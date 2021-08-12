import React from 'react'
import CastData from '../../Component/CastData/CastData';
import {useState,useEffect} from 'react';
import axios from 'axios';

export default function Home() {
    const [data , setData] = useState([]);

    useEffect(()=>{
            const fetchData = async()=>{
                try{
                const response = await axios.get('https://www.breakingbadapi.com/api/characters');
                // console.log(response.data);
                setData(response.data);
            }catch(err){
                console.log(err);
            }
            }
        fetchData();
    },[])
    const [search, setSearch] = useState("")

    const searchFilter =(rows)=>{
        return rows.filter(row => row.name.toLowerCase().indexOf(search) > -1);
    }

    return (
        <div className="home">
            <div className="homeWrapper">
                <h1>Breaking Bad Cast:</h1>
                <div className="homeFilter">
                    <input 
                        type="text" 
                        value={search} 
                        placeholder="Search by name" 
                        onChange={(e)=>setSearch(e.target.value)}
                    />
                    
                </div>
                <div className="homeData">
                    <CastData data={searchFilter(data)}/ >
                </div>
                <div className="homePagination">

                </div>
            </div>
        </div>
    )
}
