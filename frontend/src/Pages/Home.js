import React from 'react';
import Navbar from '../Components/Navbar';
import Model from '../Components/Model'
import Context from '../Global/Context'
import Stories from '../Components/Stories';
import Create from '../Components/Create';
import Posts from '../Components/Posts';
import Sidebar from '../Components/Sidebar';

const Home = () => {
    return (
    <Context>
        <Navbar/>
        <div className="container">
            <Stories/>
            <Create/>
            <Posts/>
            <Sidebar/>
        </div>
        <Model/>
    </Context>
    );
}

export default Home;
