import React from "react";
import "./client.css";
import { Player } from 'video-react';
import mission from '../images/IMG_0946.PNG'
import vision from '../images/IMG_0947.PNG'
import strategy from '../images/IMG_0950.PNG'
import video from '../images/ntwari.mp4'
import first from '../images/01.JPG'
import second from '../images/02.JPG'
import third from '../images/03.JPG'
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
                        <p> Our vision is to make sure<br />
                         every child attains the right<br />
                         to survival, protection, <br />
                         development and participation.</p>
                    </div>

                    <div className="col-sm-4">
                        <img className="chickentStore-img" src={strategy} alt="children" />
                        <h5>OUR STRATEGY</h5>
                        <p> We’ll work with children to create<br />
                        an environment where they don’t just survive,  <br />
                        but thrive. So they can realize their <br />
                        full potential and go on to change the world.</p>
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
                <div className="row">
                    <div className="col-sm-4">
                        <img className="children" src={first} alt="children" />
                    </div>
                    <div className="col-sm-4">
                        <img className="children" src={second} alt="children" />
                    </div>
                    <div className="col-sm-4">
                        <img className="children" src={third} alt="children" />
                    </div>
                </div>

            </div>

        </React.Fragment>

    )
}

export default Client;