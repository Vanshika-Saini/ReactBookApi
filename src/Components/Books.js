import react from "react";
import Modal from "./Modal";
import { useState } from "react";



const Books = ({ book }) => {
    const [show,setShow]=useState(false);
    const [bookItem,setItem]=useState();
    console.log(book)

    return (
        <>
            {
                book.map((item) => {
                    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    if(thumbnail!= undefined)
                    {

                        return (
                            <>
                            <div id="books" onClick={()=>{setShow(true);setItem(item)}}>
                                <img src={thumbnail} alt="" />
                                <div id="bottom">
                                <h3 className="title">{item.volumeInfo.title}</h3>
                                
                                    
                                </div>
                            </div>

                            <Modal show={show} item={bookItem} onClose={()=>setShow(false)}/>
        
                            </>
                        )

                    }
                    
                        
                
                    
                })
            }

        </>
    )
}
export default Books;