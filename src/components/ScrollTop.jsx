import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollTop() {

const [visible,setVisible]=useState(false);

useEffect(()=>{

const handleScroll=()=>{

setVisible(window.scrollY>300);

};

window.addEventListener("scroll",handleScroll);

return ()=>window.removeEventListener("scroll",handleScroll);

},[]);

return(

visible && (

<button

onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}

className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition z-50"

>

<FaArrowUp/>

</button>

)

);

}

export default ScrollTop;