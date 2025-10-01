import React from "react"

const e = React.createElement

function IntroSection() {
    return (
        e('section', null, [
                e('h1', {className: 'centered', key: 1}, 'Result University'),
                e('h3', {className: 'centered', key: 2, style: {color: '#666'}}, 'Университет frontend-разработки который насыщает IT-сферу квалифицированными программистами')
            ])
    )
}

export default IntroSection
