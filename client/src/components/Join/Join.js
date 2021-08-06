import React ,{ useState } from 'react'
import { Link } from 'react-router-dom'
import "./Join.css"

/* for this part we can make a random check box or password and report persons */
const Join = () => {
    const [name , setName] = useState("")
    const [room , setRoom] = useState("")

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="header">Join</h1>
                <div>
                    <input placeholder="Name" className="joinInput" type="text" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(e) => setRoom(e.target.value)}/> 
                </div>
                {/* we can change name in link to random number or something unique for preventing to have a unique room name */}
                <Link onClick={e => (!name || !room ? e.preventDefault():null)} to={`/chat?name=${name}&room=${room}`}>
                    <button className="button mt-20" type="submit">Sign in</button>
                </Link>
            </div>
        </div>
    )
}

export default Join