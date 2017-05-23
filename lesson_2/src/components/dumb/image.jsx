
import React from 'react'

export default function () {
    return (
        <div className='container'>
            <img src={'http://localhost/gallery/' + this.props.src} className='image' />
            <div className='middle'>
                <div className='text'>{this.props.desc}</div>
            </div>
        </div>
    )
}
