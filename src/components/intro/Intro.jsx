import './intro.scss'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { init } from 'ityped'
import { useEffect, useRef } from 'react';

const Intro = () => {
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
            backDelay: 1000,
            showCursor: true,
            backSpeed: 50,
            strings: ['Developer', 'Designer' ] 
        })
    }, [])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="./assets/aaahana.png" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Aaahana Mehrotra</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <KeyboardArrowDownIcon className="darr"/>
                </a>
            </div>
        </div>
    )
}

export default Intro
