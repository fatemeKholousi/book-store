import { useState,useEffect } from 'react'
import axios from 'axios'






function DataFetching() {
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState({})
    const [idFromButtonClick,setIdFromButtonClick]=useState(1)
    const [id, setId] = useState(1)
    const [status, setStatus] = useState([])

    
    //get all by axios
    useEffect(() => {
    axios.get('http://localhost:5000/products/')
    .then(res=>{
        setProducts(res.data)
        console.log(products);
    })
    .catch(err=> {
        console.log(err)

    })
    },[])


  

    //get each product
    useEffect(() => {
        axios.get(`http://localhost:5000/products/${id}`)
        .then(res=>{
            setProduct(res.data)

        })
        .catch(err=> {
            console.log(err)
        })
        },[idFromButtonClick])   
        

// const addProducts=async(p)=>{
//     const res=await fetch('http://localhost:5000/products/',
    
//     {
//         method:"POST",
//         headers:{
//             "Content-type":"application/json"
//         },
//         body:JSON.stringify(p)
//     })
//     const data=await res.json()
//     console.log(data);
// }



// const options = {
//     method: 'post',
//     // url: '/login',
//     data: {
//       firstName: 'Finn',
//       lastName: 'Williams'
//     },
//     // transformResponse: [(data) => {
//     //   // transform the response
  
//     //   return data;
//     // }]
//   };
  
//   // send the request
//   axios(options);


// addProducts({title:"بترس",description:'دارن شان'})

    // // DELETE request using axios with error handling
    //     useEffect(() => {
    //         axios.delete(`http://localhost:3000/products/${id}`)
    //             .then(
    //                 setStatus('Delete successful'),
    //                 console.log(status)
    //             )
    //             .catch(error => {
    //                 console.error('There was an error!', error);
    //             })
    //     }, []);


        //put request
        // useEffect(() => {
        //     // PUT request using axios inside useEffect React hook
        //     axios.put('http://localhost:3000/products/4', {title: "مدرسه ترس"})
        //         .then(response => setUpdatedAt(response.data.updatedAt));
        
        // // empty dependency array means this effect will only run once (like componentDidMount in classes)
        // }, []);

    //
    // useEffect(() => {
    //     // DELETE request using fetch inside useEffect React hook
    //     fetch('https://jsonplaceholder.typicode.com/posts/1', { method: 'DELETE' })
    //         .then(() => setStatus('Delete successful'));
    
    // // empty dependency array means this effect will only run once (like componentDidMount in classes)
    // }, []);



    const handleClick=()=>{
        setIdFromButtonClick(id)
    }

    return (
        <div>
         

            
        <ul>
            <input type='text' value={id} onChange={e=>setId(e.target.value)}/>
            <button onClick={handleClick}>fetch</button>
            <div>{product.title}</div>

           
        </ul>  
        </div>
    )
}

export default DataFetching
