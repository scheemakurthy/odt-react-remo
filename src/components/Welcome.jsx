import React from 'react'

export const Welcome = () => {
    return (
        <div style={{ minHeight: '50px', display: 'flex', flexDirection: 'column', backgroundColor: 'grey' }}>
            <div style={{ textAlign: 'center' }}><h3>React series</h3></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingBlock: '10px' }}><div>
                Speakers : Kejal and Lavanya</div>
                <div>Time : {new Date().toDateString()}</div></div>
        </div>
    )
}
