import { useState } from "react";
import { HiChevronDoubleDown } from "react-icons/hi";
import { HiChevronDoubleUp } from "react-icons/hi";

function Accordion({items}){

    const [openIndex, setOpenIndex] = useState(null);

    const hendleToogle = (index)=>{
        setOpenIndex (openIndex == index ? null : index);
    }
    return(
        <div className="accordion">
           {items.map((items, index)=>{
                return !items || (items.length===0)? "No items available" : <div className="accordion-item" key={index}>

                    <button className="accordion-title" onClick={()=>hendleToogle (index)}>
                        {items.title}
                        {openIndex === index ? <HiChevronDoubleUp className="icon"/> : <HiChevronDoubleDown className="icon"/>}
                    </button>

                    {
                        openIndex === index && <div className="accordion-cotent">{items.content}</div>
                    }
                </div>
            })
           }

        </div>
    )
}

export default Accordion;