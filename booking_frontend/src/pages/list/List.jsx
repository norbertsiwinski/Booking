import React from 'react';
import { useLocation } from 'react-router-dom';


const List = () =>
{
    const { state } = useLocation();
    return (
        <>
            <div>{state.data.map(data => <h1>{data.city}</h1>)}</div>
            <div>{state.post_name}</div>
            <div>{state.post_description}</div>
        </>
    )
}

export default List