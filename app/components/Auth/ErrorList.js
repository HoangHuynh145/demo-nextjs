import React from 'react'

const ErrorList = ({ errors }) => {
    return (
        <ul className='float-left list-disc pl-10 text-red-700 mb-4 font-bold'>
            {Object.keys(errors).map(key => (
                <li key={key} className='text-left'>{key} {errors[key]}</li>
            ))}
        </ul>
    )
}

export default ErrorList
