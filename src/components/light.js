import React from 'react';

const Light = (props) => {

    return (
        <div>
            <div id='light' className='shadow'>
                <div className={props.color === 'red' ? 'active': 'inactive'}>
                    <div className="red-light rounded-circle d-block mx-auto shadow"></div>
                </div>
                <div className={props.color === 'yellow' ? 'active': 'inactive'}>
                    <div className="yellow-light rounded-circle d-block mx-auto shadow"></div>
                </div>
                <div className={props.color === 'green' ? 'active': 'inactive'}>
                    <div className="green-light rounded-circle d-block mx-auto shadow"></div>
                </div>

            </div>
            <div className="light-leg shadow"></div>
        </div>
    );
}

export default Light