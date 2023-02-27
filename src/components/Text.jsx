import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { ulid } from 'ulid';

export default function Text({title, id, value, className, onChange, ...props}) {
    if (_.isNil(title)) title = "Text";
    if (_.isNil(id)) id = "";
    if (_.isNil(value)) value = "";
    if (_.isNil(className)) className = "";
    if (_.isNil(onChange)) console.warn("In order to get the text, you need to assign something to onChange...");
    
    let [ formValue, setFormValue ] = useState(value);
    let [ formId, setFormId ] = useState(id);

    useEffect(() => {
        if (_.isEmpty(formId))
            setFormId(ulid());
    }, []);

    useEffect(() => {
        setFormValue(value);
    }, [value]);

    function ChangeValue(e) {
        let newValue = e.target.value;

        setFormValue(newValue);
        if (!_.isNil(onChange)) onChange(newValue);
    }

    return (
        <label htmlFor={formId} className={`input-group input-group-sm ${className}`}>
            <span className="bg-primary-content font-bold">{title}</span>
            <input type="text" id={formId} name={formId} value={formValue} className="input input-sm input-bordered w-full border border-primary-content" onChange={ChangeValue} />
        </label>
    );
}