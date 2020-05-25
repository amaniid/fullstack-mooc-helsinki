import React from 'react'
import Part from './Part'

const Content = ({ parts }) => {
    console.log("in CONTENT")
    //console.log(props)

    const PartByPart = ({ parts }) => {
        return (
            <div>
                {parts.map(part =>
                    <Part key={part.id}
                        coursePart={part.name}
                        exerciseCnt={part.exercises} />
                )}
            </div>
        )
    }

    return (
        <div>
            <PartByPart parts={parts} />
            {/* <Part coursePart={props.parts[2].name} exerciseCnt={props.parts[2].exercises} /> */}
        </div>
    )
}

export default Content