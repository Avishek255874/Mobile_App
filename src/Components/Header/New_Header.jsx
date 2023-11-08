import { useState } from "react";
import OffCanvas from "../../OffCanvas/OffCanvas";

const New_Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="flex w-full items-center justify-between px-3 ">
      <div>
        <OffCanvas
          title="Start"
          show={show}
          handleclose={handleClose}
          monuPlacement="start "
        >
          <i className="fa-solid fa-bars cursor-pointer" onClick={handleClose} />
        </OffCanvas>
        <i className="fa-solid fa-bars cursor-pointer" onClick={handleShow} />
      </div>

      <i className="fa-solid fa-bell " />
    </div>
  );
};

export default New_Header;
