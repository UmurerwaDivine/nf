import React from "react";
import "./client.css";
import { Player } from 'video-react';
import mission from '../images/IMG_0946.PNG'
import vision from '../images/IMG_0947.PNG'
import strategy from '../images/IMG_0950.PNG'
import video from '../images/ntwari.mp4'

const Client = (props) => {
    const { id } = props
    return (
        <React.Fragment>
            <div ClassName="client" style={{ backgroundColor: "#eeee" }} id={id}>

                <div className="row images">
                    <div className="col-sm-4">
                        <img className="chickentStore-img" src={mission} alt="children" />
                        <h5>OUR MISSION</h5>
                        <p>To inspire breakthroughs the way the<br />
                     Democratic Republic of Congo <br />
                     treats children and to achieve<br />
                      immediate and lasting change in their lives.</p>
                    </div>
                    <div className="col-sm-4">
                        <img className="chickentStore-img" src={vision} alt="children" />
                        <h5>OUR VISION</h5>
                        <p>To inspire breakthroughs the way the<br />
                     Democratic Republic of Congo <br />
                     treats children and to achieve<br />
                      immediate and lasting change in their lives.</p>
                    </div>

                    <div className="col-sm-4">
                        <img className="chickentStore-img" src={strategy} alt="children" />
                        <h5>OUR STRATEGY</h5>
                        <p>To inspire breakthroughs the way the<br />
                     Democratic Republic of Congo <br />
                     treats children and to achieve<br />
                      immediate and lasting change in their lives.</p>
                    </div>
                </div>
            </div>
            <div className="videoTitle">
                <h5>OUR STORY</h5>
                <div className="video">
                    <Player className="player">
                        <source src={video} />
                    </Player>
                </div>
            </div>

        </React.Fragment>

    )
}

export default Client;