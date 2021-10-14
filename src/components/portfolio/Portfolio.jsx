import './portfolio.scss'
import PortfolioList from '../portfolioList/PortfolioList'
import { useState, useEffect } from 'react'
import {portfolioList, featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio} from "../../data"

const Portfolio = () => {
    const [selected, setSelected] = useState("featured")
    const [data, setData] = useState([]);
    

    useEffect(() => {
        switch(selected){
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            case "design":
                setData(designPortfolio);
                break;
            case "content":
                setData(contentPortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }
    }, [selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {portfolioList.map(item => 
                    <PortfolioList title={item.title} active={selected===item.id} setSelected={setSelected} id={item.id}/>
                )}
            </ul>
            <div className="container">
                {data.map((d) => {
                return(<div className="item">
                    <img src = {d.img} alt=""/>
                    <h3>{d.title}</h3>
                </div>)
                })}
            </div>
        </div>
    )
}

export default Portfolio
