import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "../components/styles/global.scss"



const tab = (props) => {
    
    return (
      
        <Tabs class="tabs" >
        <TabList >
          <Tab >{props.title_1}</Tab>
          <Tab >{props.title_2}</Tab>
          <Tab >{props.title_3}</Tab>
          <Tab>{props.title_4}</Tab>
          <Tab className={props.display}>{props.title_5}</Tab>
        </TabList>
    
        <TabPanel >
         <div className="tabPanel">
          <div className="tabwrapper">
            <div className="picture">
              <img src={props.photo_1} alt="" />
            </div>
            <div className="text">
              <h2>{props.title_1}</h2>
              <p>{props.contentText_1}</p>
              <p className="source">{props.source_1}</p>
            </div>
          </div>
        </div>
        </TabPanel>
        <TabPanel  >
          <div className="tabPanel">
          <div className="tabwrapper">
            <div className="picture">
              <img src={props.photo_2} alt="" />
            </div>
            <div className="text">
              <h2>{props.title_2}</h2>
              <p>{props.contentText_2}</p>
              <p className="source">{props.source_2}</p>
            </div>
          </div>
        </div>
        </TabPanel >
        <TabPanel  >
        <div className="tabPanel">
          <div className="tabwrapper">
            <div className="picture">
              <img src={props.photo_3} alt="" />
            </div>
            <div className="text">
              <h2>{props.title_3}</h2>
              <p>{props.contentText_3}</p>
              <p className="source">{props.source_3}</p>
            </div>
          </div>
        </div>
        </TabPanel>
        <TabPanel >
        <div className="tabPanel">
          <div className="tabwrapper">
            <div className="picture">
              <img src={props.photo_4} alt="" />
            </div>
            <div className="text">
              <h2>{props.title_4}</h2>
              <p>{props.contentText_4}</p>
              <p className="source">{props.source_4}</p>
            </div>
          </div>
        </div>
        </TabPanel>
        <TabPanel  >
        <div className="tabPanel">
          <div className="tabwrapper">
            <div className="picture">
              <img src={props.photo_5} alt="" />
            </div>
            <div className="text">
              <h2>{props.title_5}</h2>
              <p>{props.contentText_5}</p>
              <p className="source">{props.source_5}</p>
            </div>
          </div>
        </div>
        </TabPanel>
      </Tabs>
    );
};
export default tab
