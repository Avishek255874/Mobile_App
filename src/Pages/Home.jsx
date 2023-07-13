
import { useState } from "react";
import OffCanvas from '../Components/OffCanvas/OffCanvas'

const Home = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  return (
    <div>
    <OffCanvas
        title="Start"
        show={show}
        handleclose={handleClose}
        monuPlacement="start "
      >
        <button className="btn btn-primary">Your React Code</button>
      </OffCanvas>  
      <button className="btn btn-primary " onClick={handleShow}>
      Open Canvas
    </button>
    </div>
  )
}

export default Home