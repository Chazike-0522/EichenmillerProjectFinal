import React, { useState, useEffect } from "react";
import Pic1 from "./Pictures/download.png";
import Pic2 from "./Pictures/download (1).png";
import Pic3 from "./Pictures/download (2).png";
import Pic4 from "./Pictures/grem.jpg";
import Pic5 from "./Pictures/grem1.jpg";
import Pic6 from "./Pictures/grem2.jpg";
import Pic7 from "./Pictures/grem3.jpg";
import Pic8 from "./Pictures/grem4.jpg";

function PictureArray({ id }) { 
    const [index, setIndex] = useState(0);
    const pictures = [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7, Pic8]; 

    useEffect(() => {setIndex(id);}, [id]);

    return (
        <div>
            <img className="picture" src={pictures[index]} alt="A mighty fine gremlin" />
        </div>
    );
}

export default PictureArray;