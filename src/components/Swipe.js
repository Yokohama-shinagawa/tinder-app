import React from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { InfoCircleOutlined,DownOutlined } from '@ant-design/icons'; 
import Detail from './Detail'



const Swipe = (props) => {
    return(
                <React.Fragment>
                    <div className="profile">
                        <img
                            src={props.data.imageUrl}
                            alt=""
                            className="profile-image d-block mx-auto"
                        />
                        {props.like &&(
                        <p className="like-stamp stamp">LIKE</p>             
                        )}
                        {props.nope &&(
                            <p className="nope-stamp stamp">NOPE</p>
                        )}
                        <div className="profile-summary">
                            <h2>{props.data.name} {props.data.age}</h2>
                        </div>
                        <div className="infoCircleOutlined">
                            {props.detail ||(
                                <InfoCircleOutlined
                                    onClick={props.changeDetail}
                                />
                            )}
                            {props.detail &&(
                                <DownOutlined 
                                    onClick={props.hiddenDetail}
                                />
                            )}
                        </div>
                    </div> 
                    {props.detail &&(
                        <Detail />
                    )}
                </React.Fragment>
    )
}

export default Swipe;