import React from 'react';
import {connect} from 'react-redux';
import {go, stop} from '../actions';

const Controller = ({dispatch, intersection}) => {
    const preNorthSouthGo = {
        north: 'red',
        south: 'red',
        east: 'yellow',
        west: 'yellow'
    }
    const preEastWestGo = {
        north: 'yellow',
        south: 'yellow',
        east: 'red',
        west: 'red'
    }
    const northSouthGo = {
        north: 'green',
        south: 'green',
        east: 'red',
        west: 'red'
    }
    const eastWestGo = {
        north: 'red',
        south: 'red',
        east: 'green',
        west: 'green'
    }

    const stopToGoNS = (payload) => {
        payload = northSouthGo
        dispatch(go(payload))
    }

    const stopToGoEW = (payload) => {
        payload = eastWestGo
        dispatch(go(payload))
    }

    const handleGo = (e) => {
        const direction = e.target.innerHTML
        let payload;
        if (intersection[direction] === 'green') {
            return;
        }
        switch (direction) {
            case 'north':
            case 'south':
                payload = preNorthSouthGo
                setTimeout(stopToGoNS, 1000)
                break;
            case 'east':
            case 'west':
                payload = preNorthSouthGo
                setTimeout(stopToGoNS, 1000)
                break;
            default:
                break;
        }
        dispatch(go(payload))
    }

    const handleStop = (e) => {
        const direction = e.target.innerHTML;
        let payload;
        switch(direction){
            case 'east':
            case 'west':
                payload = preNorthSouthGo
                setTimeout(stopToGoNS, 1000)
                break;
            case 'north':
            case 'south':
                payload = preEastWestGo;
                setTimeout(stopToGoEW, 1000)
                break;
            default:
                break;
        }

        dispatch(stop(payload))
    }

    return (
        <div className='d-flex justify-content-center text-light'>
            <div className="flex-fill m-5 text-capitalize">
                <h2 className='whichWay'>Which way you want to go/stop?</h2>
                <div className="d-flex">
                    <button
                        className="btn  btn-green col-6 border m-1 text-light font-weight-bold text-uppercase"
                        onClick={handleGo}
                    >
                        north
                    </button>
                    <button
                        className="btn  btn-red col-6 border m-1 text-light font-weight-bold text-uppercase"
                        onClick={handleStop}
                    >
                        north
                    </button>
                </div>
                <div className="d-flex">
                    <button
                        className="btn  btn-green col-6 border m-1 text-light font-weight-bold text-uppercase"
                        onClick={handleGo}
                    >
                        east
                    </button>
                    <button
                        className="btn  btn-red col-6 border m-1 text-light font-weight-bold text-uppercase"
                        onClick={handleStop}
                    >
                        east
                    </button>
                </div>
                <div className="d-flex">
                    <button
                        className="btn  btn-green col-6 border m-1 text-light font-weight-bold text-uppercase"
                        onClick={handleGo}
                    >
                        south
                    </button>
                    <button
                        className="btn  btn-red col-6 border m-1 text-light font-weight-bold text-uppercase"
                        onClick={handleStop}
                    >
                        south
                    </button>
                </div>
                <div className="d-flex">
                    <button
                        className="btn  btn-green col-6 border m-1 text-light font-weight-bold text-uppercase"
                        onClick={handleGo}
                    >
                        west
                    </button>
                    <button
                        className="btn  btn-red col-6 border m-1 text-light font-weight-bold text-uppercase"
                        onClick={handleStop}
                    >
                        west
                    </button>
                </div>
            </div>
            <div className="compass-group flex-fill my-3">
                <h5>North: {intersection.north}</h5>
                <div className="d-flex justify-content-around align-items-center">
                    <h5>West: {intersection.west}</h5>
                    <img className='compass' src='/img/compass.png' alt='compass'/>
                    <h5>East: {intersection.east}</h5>
                </div>
                <h5>South: {intersection.south}</h5>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({intersection: state.intersection})


export default connect(mapStateToProps)(Controller)
