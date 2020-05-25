import React from 'react'

const CountTotal = ({ parts, text }) => {
    console.log('countingTotal')

    const summer = (accumulator, currentValue) => {
        return (
            accumulator + currentValue.exercises

        )
    }

    const initialValue = 0
    const total = parts.reduce(summer, initialValue)

    console.log(total)

    return (
        <div>
            <b>
                {text} {total}
            </b>
        </div>
    )

}

const Total = ({ parts }) => {
    console.log("in TOOOTAL")

    return (
        <div>
            <CountTotal parts={parts}
                text='Number of exercises:' />
        </div>
    )
}

export default Total