import { useState } from "react";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";

export const TallerActividad2 = () => {
    const [ like, setlike ] = useState(0);
    const [ dislike, setdislike ] = useState(0);
    const Like = () => {
        setlike(like + 1)
        console.log(typeof(like))
    }
    const Dislike = () => {
        setdislike(dislike + 1)
        console.log(typeof(dislike))
    }

    return(
        <>
        <h1>me gusta o no me gusta</h1>
        <div>
        <BiSolidLike onClick={Like}></BiSolidLike>
        <p>{like}</p>
        <BiSolidDislike onClick={Dislike}></BiSolidDislike>
        <p>{dislike}</p>
        </div>
        </>
    )
}
