import React from 'react';
import {connect} from 'react-redux';
import Light from '../components/light';


const Street = ({color, intersection}) => {
    return (
        <div>
            {/*<img src="/img/ss.png" alt="" className="template"/>*/}
            <h1 className="text-light text-capitalize font-weight-bold">Traffic-light Simulator</h1>
            <div className='bg-street shadow d-block mx-auto rounded'>
                <div className="lightN">
                    <Light color={intersection.north}/>
                </div>
                <div className='lightE'>
                    <Light color={intersection.west}/>
                </div>
                <div className='lightW'>
                    <Light color={intersection.east}/>
                </div>
                <div className="lightS">
                    <Light color={intersection.south}/>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({intersection: state.intersection})

export default connect(mapStateToProps)(Street)




