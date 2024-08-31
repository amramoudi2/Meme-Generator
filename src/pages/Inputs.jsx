import React from 'react';
import memesData from "./data.jsx";
import "../index.css";



export default function Inputs(){

    const [memes, setMemes] = React.useState({
        topText:"shut up and",
        bottomText:"take my money!",
        imgUrl:"../assets/give.jpg",
    });

    const [memeImg, setMemeImg] = React.useState(memesData)

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMemeImg(data)})
    }, [])

    function getMeme(){
        const memesArr = memeImg.data.memes
        const randomIndex = Math.floor(Math.random() * memesArr.length);
        const randomImg = memesArr[randomIndex].url
        setMemes(prevState => {
            return({
                ...prevState,
                imgUrl: randomImg
            })
        })
    }

    function handelClick(e){
        const {name, value} = e.target;
        setMemes(prevState => {
            return ({
                ...prevState,
                [name]: value
            });
        })
    }

    return(
        <div className="inputs">
            <div className="inputs--form">
                <input value={memes.topText} onChange={handelClick} name="topText" placeholder="Top text" className="form--input" id="top-text" type="text"/>
                <input value={memes.bottomText} onChange={handelClick} name="bottomText" placeholder="Bottom text" className="form--input" id="bottom-text" type="text"/>
                <button onClick={getMeme} className="form--button">Get a new meme image</button>
            </div>
            <div className="img--text">
                <img className="img" src={memes.imgUrl} alt=""/>
                <h2 className="text top--text">{memes.topText}</h2>
                <h2 className="text bottom--text">{memes.bottomText}</h2>
            </div>
        </div>
    )
}