import React, { useState } from 'react'
import './App.css'

function App() {
    let picture = [
        { src: "https://i.pinimg.com/564x/0c/85/44/0c854490f06dc0638e9ec09fdb2b38bf.jpg" },
        { src: "https://i.pinimg.com/564x/34/5d/57/345d57cc6b7aa4d152e609bd5730ca34.jpg" },
        { src: "https://i.pinimg.com/564x/08/99/b9/0899b94690a4038b49caa177a6b4a08d.jpg" },
        { src: "https://i.pinimg.com/564x/80/77/0a/80770a27ddfdce4f4470ab24786c0142.jpg" }
    ]
    let [value, setValue] = useState(picture[0])

    let imgclick = (deyer) => {

        let slider = picture[deyer]
        setValue(slider)
    }
    return (
        <>
            <div className='card-1'>
                {
                    picture.map((data, i) =>

                        <div className='card-2'>

                            <img src={data.src} onClick={() => imgclick(i)} />

                        </div>
                    )
                }
            </div>
            <div className='card-3'>
                <img src={value.src} />
            </div>
        </>
    )
}
export default App