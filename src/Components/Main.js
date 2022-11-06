
import react ,{useState}from "react";
import axios from "axios";
import Card from "./Books";


const Main=()=>{
    const [bookData,setData]=useState([]);
    const [search,setSearch]=useState("");
    //code for api
    const searchBook=(evt)=>{
        if(evt.key==="Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyD1qGJnKutjXhqdXIin8zoFasjWR5L7SNk'+'&maxResults=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }

    //basic html code for taking the input of the book name that the user wants to search
   
    return(
        <>
        <div id="header">
                <div id="row1">
                    <h1>Welcome to the World of Books</h1>
                </div>
                <div id="row2">
                    <h2>Find Your Book</h2>
                    <div id="search">
                        <p>Write the name of the book or the author and press Enter</p>
                        <input type="text" placeholder="Book name"
                        value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchBook}/> 
                    </div>
                </div>
            </div>

            <div id="container">
            {
                    <Card book={bookData}/>
              }  

            </div>

        
        </>
                    
       
    )
}

export default Main;