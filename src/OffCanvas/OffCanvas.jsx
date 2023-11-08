import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffCanvas({title, children , show, handleclose, monuPlacement}) {

  return (
    <div>
      <Offcanvas show={show} onHide={handleclose} placement={monuPlacement}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {children}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default OffCanvas;