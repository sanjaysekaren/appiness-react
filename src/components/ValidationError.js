import React from 'react';

const ValidationErrors = ({ formErrors }) =>
    <div className='formErrors'>
        {Object.keys(formErrors).map((fieldName, i) => {
            if (formErrors[fieldName].length > 0) {
                return (
                    <p key={i} style={{color:'red'}}>{fieldName.toUpperCase()} {formErrors[fieldName]}</p>
                )
            } else {
                return '';
            }
        })}
    </div>

export default ValidationErrors;