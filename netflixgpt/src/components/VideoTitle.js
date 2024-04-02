
const VideoTitle = ({title,description}) =>{

    const playSymbol = '\u25B6';
   // console.log(title)
   // console.log(description);
    return(
        <div className="ml-5 w-2/5 h-5/12 bg-gradient-to-tr from-black bg-opacity-70 text-white absolute bottom-64 p-5">
            <div className="p-3 font-bold text-2xl"> {title} </div>
             <p className="p-3">{description} </p>
            <div>
                <button className="bg-black text-white  px-20 py-3 m-5 font-bold rounded-2xl opacity-60 hover:bg-opacity-50" ><span className="text-black"> {playSymbol} </span>Play </button>
                <button className="bg-black text-white  px-20 py-3 m-5 font-bold rounded-2xl opacity-60 hover:bg-opacity-50"> More Info </button>
            </div>
            
        </div>
    )
}

export default VideoTitle;