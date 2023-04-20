import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {listProductDetails,UpdateProduct} from '../../actions/productActions'
import HashLoader from "react-spinners/HashLoader";
import { Input, InputGroup, } from '@chakra-ui/input'
import { Helmet } from 'react-helmet';

import {Box, Checkbox, Stack, Textarea, VStack} from '@chakra-ui/react'
import { PRODUCT_UPDATE_RESET } from '../../constants/productConstants';
import './Editproduct.css'
const Editproduct = ({match,history}) => {
    const productId = match.params.id
    const [name,setName] = useState('')
    const [description,setdescription] = useState('')
    const [price,setprice] = useState(0)
    const [countInStock,setcountInStock] = useState(0)
    const [Url1,setUrl1] = useState('')
    const [Url2,setUrl2] = useState('')
    const [Url3,setUrl3] = useState('')

    const [Images,setImages] = useState([])
    const [sizes,setsizes] = useState([])
    const [category,setcategory] = useState([])
    const [Computersselected,setComputersselected] = useState(false)
    const [Phonesselected,setPhonesselected] = useState(false)
    const [Earphonesselected,setEarphonesselected] = useState(false)
    const [Watchesselected,setWatchesselected] = useState(false)
    const [Repairsselected,setRepairsselected] = useState(false)
    const [Othersselected,setOthersselected] = useState(false)

    const [Sselected,set64selected] = useState(false)
    const [Mselected,set128selected] = useState(false)
    const [Lselected,set256selected] = useState(false)
    const [XLselected,set512selected] = useState(false)







    const [message,setMessage] = useState(null) 

    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
  
    const { loading,error, product } = productDetails

    const productUpdate = useSelector(state => state.productUpdate)
  
    const { loading:lodingUpdate,error:errorUpdate, success:successUpdate } = productUpdate



    useEffect(() => {



        if(successUpdate){
            dispatch({type : PRODUCT_UPDATE_RESET})
            history.push('/admin/productlist')
        }
        else{
            if(!product.name || product._id !== productId){
                dispatch(listProductDetails(productId))
              }else{
                setName(product.name)
                setprice(product.price)
                setdescription(product.description)
                setUrl1(product.images[0])
                setUrl2(product.images[1])
                setUrl3(product.images[2])
                setcategory(product.category)
                setsizes(product.sizes)
                setcountInStock(product.countInStock)
                setEarphonesselected(category.includes("Earphones"))
                setComputersselected(category.includes("Computers"))
                setPhonesselected(category.includes("Phones"))
                setWatchesselected(category.includes("Watches"))
                setRepairsselected(category.includes("Repairs"))
                setOthersselected(category.includes("Others"))
                set64selected(sizes.includes('64'))
                set128selected(sizes.includes('128'))
                set256selected(sizes.includes('256'))
                set256selected(sizes.includes('512'))

              }
        }

      
       
        return () => {
        }
    }, [dispatch,productId,history,product,category,successUpdate])

    const submitHandler = (e) => {
        Images.push(Url1)
        Images.push(Url2)
        Images.push(Url3)


        e.preventDefault()
        dispatch(UpdateProduct({
            _id: productId,
            name,
            price,
            Images,
            category,
            sizes,
            countInStock,
            description

        }))
    }
    const checkboxhandler = (D) =>{
        let index = sizes.indexOf(D)
        if(index> -1){ 
            sizes.splice(index,1)
            console.log(sizes)
        }
        else{
            sizes.push(D)
            console.log(sizes)



        }
    }
    
    const checkboxhandlercg = (D) =>{
        
            let index = category.indexOf(D)
        if(index> -1){ 
            category.splice(index,1)

        }
        else{
            category.push(D)


        }
    }

    return (
        <div className = 'Edituser'>
            <Helmet>
                <title>Edit Product</title>
            </Helmet>
               {error && <h4>{error}</h4>}
               {/* {successUpdate && <h4>Profile Updated</h4>} */}
               {loading || lodingUpdate ? 
                        <div className='loading'>
                            <HashLoader   color={"#1e1e2c"}  loading={lodingUpdate} size={40} />
                        </div>
                
                : errorUpdate ? <h4>{errorUpdate}</h4> :
          <div>
            <h4 className = 'Edittitle'>Edit Product :</h4>
            <div className ='formedit'>
            		<form onSubmit={submitHandler}>

                <div >
                <div className="input-div zz">
                Name :

                   <div className="div">
                       
                   <InputGroup>

                      <Input type="text" value={name}  placeholder="Enter name"  onChange={(e) => setName(e.target.value)}/>
                   </InputGroup>
           		   </div>
           		</div>


           		<div className="input-div one">
                   Price :

           		   <div className="div">

           		   		<InputGroup>
                              <Input  type="text" value={price} placeholder="Enter price" onChange={(e) => setprice(e.target.value)} />
                         </InputGroup>
                         
           		   </div>
                  
           		</div>
                   <div className="input-div one">
                   countInStock :

           		   <div className="div">
           		   		<InputGroup>
                              <Input  type="text" value={countInStock} placeholder="Enter quantity" onChange={(e) => setcountInStock(e.target.value)} />
                         </InputGroup>
                         
           		   </div>
                  
           		</div>
                   <div className="input-div one">
                    Description/Category:

                       <div className="div">
                            <Stack direction = 'column' spacing={4}>
                            <InputGroup>
                                <Textarea size = 'sm' value={description}  placeholder="Enter Description" onChange={(e) => setdescription(e.target.value)} />
                            </InputGroup>
                            <Stack direction="row">
                        <Checkbox onChange = {() =>{checkboxhandlercg('Computers'); setComputersselected(!Computersselected)}} isChecked = {Computersselected}>Computers </Checkbox>
                        <Checkbox onChange = {() =>{checkboxhandlercg('Phones') ; setPhonesselected(!Phonesselected)}} isChecked = {Phonesselected}>Phones </Checkbox>
                        <Checkbox onChange = {() =>{checkboxhandlercg('Earphones'); setEarphonesselected(!Earphonesselected)}} isChecked = {Earphonesselected}>Earphones </Checkbox>
                        <Checkbox onChange = {() =>{checkboxhandlercg('Watches') ; setWatchesselected(!Watchesselected)}} isChecked = {Watchesselected}>Watches </Checkbox>
                        <Checkbox onChange = {() =>{checkboxhandlercg('Repairs') ; setRepairsselected(!Repairsselected)}} isChecked = {Repairsselected}>Repairs </Checkbox>
                        <Checkbox onChange = {() =>{checkboxhandlercg('Others') ; setOthersselected(!Othersselected)}} isChecked = {Othersselected}>Others </Checkbox>
                        </Stack>
                        
                            </Stack>
                          
          
           		   </div>
                  
           		</div>



                

           		<div className="input-div pass">

           		   <div className="div">
                      
            	   </div>
            	</div>

                <div className="input-div pass">
                Sizes:

           		   <div className="div">

                      <Stack direction="row">
                      <Checkbox onChange = {() =>{checkboxhandler('64') ; set64selected(!Sselected)}} isChecked = {Sselected}>64 </Checkbox>
                      <Checkbox onChange = {() =>{checkboxhandler('128') ; set128selected(!Mselected)}} isChecked = {Mselected}>128 </Checkbox>
                      <Checkbox onChange = {() =>{checkboxhandler('256') ; set256selected(!Lselected)}} isChecked = {Lselected}>256 </Checkbox>
                      <Checkbox onChange = {() =>{checkboxhandler('512') ; set512selected(!XLselected)}} isChecked = {XLselected}>512 </Checkbox>
                      </Stack>
            	   </div>
            	</div>
                <div className="input-div pass">
                Urls for images:
           		   <div className="div urls">

  

                      <Box>
                         <Stack direction ='column' >
                            <Input type= 'text' value={Url1} onChange = {(e)=>{setUrl1(e.target.value)}}/>
                            <Input type= 'text' value={Url2} onChange = {(e)=>{setUrl2(e.target.value)}}/>
                            <Input type= 'text' value={Url3} onChange = {(e)=>{setUrl3(e.target.value)}}/>
                         </Stack> 
                         </Box>
                      {/* <Input type= 'text' value={category} onChange = {(e)=>{setcategory((e.target.value).split(' ')) ; }}/> */}
            	   </div>
            	</div>
                {message && <h4 className = 'Message'>{message}</h4>}
                <input type="submit" className="btna2 postionbtnupdate" value="Update"/>
                
                </div>
                
               
            	
                
              
            </form>
            </div>
            </div>
}
        </div>
    )
}

export default Editproduct
