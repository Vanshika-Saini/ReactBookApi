import react from 'react';

const Modal=({show,item,onClose})=>{
    if(!show)
    {
        return null;
    }
    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    return(
        <>
            <div id="overlay">
                <div id="overlay-inner">
                    <button id="close" onClick={onClose}><i class="fas fa-times"></i></button>
                    <div id="inner-box">
                        <img src={thumbnail} alt="" />
                        <div id="info">
                            <h1>{item.volumeInfo.title}</h1>
                            <h3>{item.volumeInfo.authors}</h3>
                            <h4>{item.volumeInfo.publisher}<span>{item.volumeInfo.publishedDate}</span></h4><br/>
                            <a href={item.volumeInfo.previewLink}><button>More</button></a>
                        </div>
                    </div>
                    <h4 id="description">{item.volumeInfo.description}</h4>
                </div>
            </div>
        </>
    )
}
export default Modal;