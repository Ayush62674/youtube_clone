import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper,IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
const SearchBar = () => {
    const [searchName,setSearchName]=useState('');
    const navigate = useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(searchName){
            navigate(`/search/${searchName}`);
            setSearchName('');
        }
    }
    return (
        <Paper 
            component="form"
            onSubmit={handleSubmit}
            sx={{borderRadius:20,
                 border:'1px solid #e3e3e3',
                 pl:2,
                 boxShadow:'none',
                 mr:{sm:5}
                }}
        >
            <input className='search-bar'
                placeholder='Search...'
                value={searchName}
                onChange={(e)=>setSearchName(e.target.value)}
            />
            <IconButton type='submit' sx={{p:'10px',color:'red'}}>
                <Search />
            </IconButton>
        </Paper>
    );
}

export default SearchBar;
