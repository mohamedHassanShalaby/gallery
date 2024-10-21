import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import img1 from "./images/02.jpg";
import img2 from "./images/03.jpg";
import img3 from "./images/04.jpg";
import img4 from "./images/05.jpg";
import img5 from "./images/06.jpg";
import img6 from "./images/07.jpg";
import img7 from "./images/08.jpg";
import img8 from "./images/09.jpg";
const images = [img1, img2, img3, img4, img5, img6, img7, img8];

export const ReactImageGallery = () => {
  const [data, setData] = useState({ img: "", i: 0 });
  const viewImage = (img, i) => {
    setData({ img, i });
  };

  const imgAction = (action) => {
    let i = data.i;
    if (action === "next-img") {
      setData({ img: images[i + 1], i: i + 1 });
    }
    if (action === "prev-img") {
      setData({ img: images[i - 1], i: i - 1 });
    }
    if (!action) {
      setData({ img: "", i: 0 });
    }
  };

  return (
    <>
      {data.img && (
        <div
          style={{
            width: "100%",
            height: "100vh",
            background: "rgba(0, 0, 0, 0.7)",
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <button
            onClick={() => imgAction()}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
            }}
          >
            X
          </button>
          <button onClick={() => imgAction("prev-img")}>Previous</button>
          <img
            src={data.img}
            style={{
              width: "auto",
              maxWidth: "90%",
              maxHeight: "90%",
            }}
          />
          <button onClick={() => imgAction("next-img")}>Next</button>
        </div>
      )}
      <div style={{ padding: "10px" }}>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {images.map((image, i) => (
              <div
              >
                <img
                  key={i}
                  src={image}
                  style={{ width: "100%", cursor: "pointer" }}
                  alt=""
                  onClick={() => viewImage(image, i)}
                />
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
};
