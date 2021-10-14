import './works.scss'
// import AppsIcon from '@material-ui/icons/Apps';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useState } from 'react';

const Works = () => {
    const [currentSlider, setCurrentSlider] = useState(0)
    const data = [
        {
            id: 1,
            title: "Social Media App",
            img:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU",
          },
          {
            id: 2,
            title: "Rampa UI Design",
            img:
              "https://cdn.dribbble.com/users/702789/screenshots/15054318/media/4ea5d492b7b07eebc9528ff960794879.png?compress=1&resize=1200x900",
          },
          {
            id: 3,
            title: "E-commerce Web Design",
            img:
              "https://cdn.dribbble.com/users/1387827/screenshots/15466426/media/deb2dca6762cd3610321c98bfccb0b72.png?compress=1&resize=1200x900",
          },
          {
            id: 4,
            title: "Relax Mobile App",
            img:
              "https://cdn.dribbble.com/users/4095861/screenshots/15467417/media/d6a15c416626f12b31fa5ca1db192572.png?compress=1&resize=1200x900",
          },
          {
            id: 5,
            title: "Hero Web Design",
            img:
              "https://cdn.dribbble.com/users/5031392/screenshots/15467520/media/c36b3b15b25b1e190d081abdbbf947cf.png?compress=1&resize=1200x900",
          },
          {
            id: 6,
            title: "Banking App",
            img:
              "https://cdn.dribbble.com/users/3307260/screenshots/15468444/media/447b4501f7a145b05e11c70199a9c417.jpg?compress=1&resize=1200x900",
          },
    ]

    const handleClick = (way) => {
        way === "left" ? setCurrentSlider(currentSlider > 0 ? currentSlider-1 : data.length -2) :
        setCurrentSlider(currentSlider < data.length-2 ? currentSlider + 1 : 0);
    };

    return (
        <div className="works" id="works">
            <div className="slider" style={{transform:`translateX(-${currentSlider * 100}vw)`}}>
                {data.map((d) => (<div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src="assets/temp.png" alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>{"Description goes here".repeat(2)}</p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt=""></img>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <ChevronLeftIcon className="arrow left" onClick={() => handleClick("left")}/>
            <ChevronRightIcon className="arrow right" onClick={() => handleClick("right")}/>
        </div>
    )
}

export default Works

