import React,{useState,useEffect} from 'react'
import Slider from '../components/Slider'
import Cardscg from '../components/Cardscg'
import CgDiv from '../components/CgDiv'
import ProductsC from '../components/ProductsC'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'


const Home = () => {
 
    return (
        <>
        <Helmet>
            <title>I-Fix</title>
        </Helmet>
        
             <div>
                <Slider/>
                 <div className="cards">
                         <Cardscg title='Phones'/>
                         <Cardscg title='Computers'/>
                         <Cardscg title='Others'/>                
                 </div>
                 
                 
                <CgDiv/>

               
        </div>
        </>
    )
}




export default Home
