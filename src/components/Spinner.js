import React from 'react'
import spin from '../assets/images/spin.gif'

const Spinner = () =>  {
        return (
            <div className="text-center my-3">
                <img src={spin} alt="loding" />
            </div>
        )
}

export default Spinner;
