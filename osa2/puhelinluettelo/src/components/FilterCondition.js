import React from 'react'

const Filter = ({filterValue, filterFunction}) => {
    return (
        <div>
            find contacts:
            <input
                value={filterValue}
                onChange={(event) => filterFunction(event.target.value)} />
        </div>
    )
}

export default Filter