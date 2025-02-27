import React, { useState, useEffect } from "react";
import Pic1 from "./Pictures/download.png";
import Pic2 from "./Pictures/download (1).png";
import Pic3 from "./Pictures/download (2).png";

function PictureArray({ id }) { 
    const [index, setIndex] = useState(0);
    const pictures = [Pic1, Pic2, Pic3]; 

    useEffect(() => {setIndex(id);}, [id]);

    return (
        <div>
            <img src={pictures[index]} alt="A mighty fine gremlin" />
        </div>
    );
}

export default PictureArray;