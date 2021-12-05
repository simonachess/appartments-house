import React, { useState } from 'react';

const Category = ({ index, title, subcategories, parentLength }) => {

    const [checked, setChecked] = useState(false);
    const [checkedChildren, setCheckedChildren] = useState([]);

    const handleChange = (e) => {
        setChecked(e.target.checked)
        if (e.target.checked) {
            setCheckedChildren(subcategories.map(i => i.id))
        } else {
            setCheckedChildren([]);
        }
    }

    const handleChildChange = (e, id) => {
        let checkedChildrenCopy = e.target.checked ? [...checkedChildren, id] : checkedChildren.filter(item => item !== id)
        const state = parentLength === checkedChildrenCopy.length;
        setCheckedChildren(checkedChildrenCopy);
        setChecked(state);
    }

    return (
        <div key={index} >
            <input type="checkbox" onChange={handleChange} checked={checked}></input>
            <span>{title}
            </span>
            {subcategories.map(i => {
                let checkedChildrenState = checkedChildren.indexOf(i.id) !== -1
                return (
                    <ul key={i.id}>
                        <div>
                            <span>{i.name}</span>
                            <input type="checkbox" checked={checkedChildrenState} onChange={(e) => handleChildChange(e, i.id)}></input>
                        </div>
                    </ul>
                )
            })}
        </div>
    )
}

export default Category