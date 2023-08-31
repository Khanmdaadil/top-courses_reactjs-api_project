
import { apiUrl,filterData } from './data';
import './App.css';
import Filter from './component/Filter';
import Navbar from './component/Navbar';
import Cards from './component/Cards';
import { Spinner } from './component/Spinner';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useState } from 'react';


const App=() =>{
  const [courses,setCourses] = useState(null);
  const [loading ,setLoading]= useState(true);
  const [category,setCategory]=useState(filterData[0].title)
 async function fetchData() {
  setLoading(true);
  try {
    let responce=await fetch(apiUrl);
    let output=await responce.json();
    setCourses(output.data);
  }
  catch (error){
    toast.error("network me error hai");
  }
  setLoading(false);
 }

 useEffect(()=> {
  fetchData();
 },[])
  return (
    <div className="min-h-screen flex flex-col">
        <div >
        <Navbar />
        </div>
     <div className='bg-gray-800 bg-opacity-80  min-h-screen'>
      <div> 
        <Filter 
        filterData={filterData} 
        category={category}
        setCategory={setCategory}
        />
      </div>
      
      <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-centre items-centre min-h-[50vh]'> 
        
          {loading ? (<Spinner /> ) : (<Cards courses={courses} category={category}/>)}  
        
      </div>
     </div>
     
     
      
    </div>
  );
}

export default App;
