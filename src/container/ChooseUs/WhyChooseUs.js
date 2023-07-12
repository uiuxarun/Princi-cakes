import React from "react";
import Subheading from "../../component/Subheading/Subheading";
import { Tilt } from "react-tilt";
import "./WhyChooseUs.css";

const WhyChooseUs = ({ choose }) => {
  return (
    <div className="choose_head">
      <Subheading
        Subheading1="why choose us?"
        subheading2="Custom Cakes for Every Taste"
      />
      <div className="choose_parts">
        {choose?.data?.map((item) => {
          return (
            <div key={item.id} className="choosepart">
              <Tilt className="tilt" options={{ max: 35 }}>
                <div className="chooseimg">
                  <img src={item.attributes.img?.data[0]?.attributes?.url} alt="" />
                  <p className="overlay-p1">{item.attributes.title}</p>
                    <div className='overlay'>
                      <div className="overlay-text">
                        <p>
                          {item.attributes.desc}
                        </p>
                      </div>
                    </div>
                </div>
              </Tilt>
            </div>
          );
        })}
      </div>
    </div>
  );
};


export default WhyChooseUs;
