import React, { useEffect, useState } from "react";

const ktm =
  "https://www.altitudehimalaya.com/media/files/Blog/Travel-News/Kathmandu-Durbar-Square/kathmandu_durbar_dquare_attractions.png";

const ltr =
  "https://nepaltraveller.com/images/main/1644130288.sidetrackimagetemple-g9444dc0a6_1920.jpg";

const bkt =
  "https://drive.nepaldatabase.com/uploads/images/202305/image_750x500_645bd2976db94.jpg";

export default function ChildWithImage() {
  const [durbarSquare, setDurbarSquare] = useState("");

  function setBhaktapur(){
    setDurbarSquare(bkt);
  }

  useEffect(function(){
    setDurbarSquare(ktm)
  }, [])

  return (
    <div>

      <input type="text" />
      <div>
        <button>Ktm</button>
        <button>Ltr</button>
        <button onClick={setBhaktapur}>Bkt</button>
      </div>

      <div style={{ marginTop: 50 }}>
        <img src={durbarSquare} alt="" style={{ height: 500, width: 800 }} />
      </div>
    </div>
  );
}
