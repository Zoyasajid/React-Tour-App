import React,{useEffect,useState} from "react"
import './App.css';
import Tours from "./components/Tours";
import Loading from "./components/Loading";


function App() {
 const API_URL="https://course-api.com/react-tours-project"
 const [tours,setTours]=useState([])
 const [loading,setLoading]=useState(true)
 function removeTour(tourID) {
  setTours(tours.filter((tour) => {
      return tour.id !== tourID;
  }))
}
  useEffect(()=>{
fetchData()
  },[])

async function fetchData(){
  let t =await fetch(API_URL)
  let data= await t.json();
  setTours(data)
  setLoading(false);

}

if (loading) {
  return (
    <main>
      <Loading />
    </main>
  )
}
function removeTour(tourID) {
  setTours(tours.filter((tour) => {
      return (tour.id !== tourID);
  }))
}
return(
  <main>
    <Tours tours={tours}
    removeTour={removeTour}/>
  </main>
)
}

export default App;
