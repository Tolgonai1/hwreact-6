import {useState} from "react";
import './App.css'

export default function Slider({images}){
    const [index,setIndex] = useState(0)
    function goToNext(){
        const lastImage = index === images.length - 1
        console.log(lastImage)
        const newIndex = lastImage ? 0 : index + 1
        setIndex(newIndex)
    }
    function goToBack(){
        const firstImage = index === 0
        const newIndex = firstImage ? images.length -1 : index - 1
        setIndex(newIndex)
    }

    return (
        <div className='wrapper-images'>
            <img onClick={goToBack} src="https://cdn-icons-png.flaticon.com/512/271/271220.png" alt="" className="left-arrow"/>
            <img onClick={goToNext} src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" className="right-arrow"/>

            <div style={{backgroundImage: `url(${images[index].url}})`}} className="images"></div>
        </div>

    )
}