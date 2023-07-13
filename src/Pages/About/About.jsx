
import { useState } from "react";
import OffCanvas from "../../Components/OffCanvas/OffCanvas";

const About = () => {
    const [dekhna, BoxDikhanaOrBandKarna] = useState(false);
    const BoxBandKro = () => BoxDikhanaOrBandKarna(false);
    const BoxKholo = () => BoxDikhanaOrBandKarna(true);

  return (
    <div>
      about
      <OffCanvas
        title="Start"
        show={dekhna}
        handleclose={BoxBandKro}
        monuPlacement="end"
      />
      <button className="btn btn-primary" onClick={BoxKholo}>Your React Code</button>
    </div>
  );
};

export default About;
