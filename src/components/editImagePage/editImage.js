import React, { useEffect, useRef, useState } from "react";
import { fabric } from "fabric";
import { useParams } from "react-router-dom";
import Header from "../shared/header";
import ParticlesBackground from "../shared/particlesBackground";
import ParticlesBackgroundDark from "../shared/particlesBackgroundDark";
import {
  FaMoon,
  FaSun,
  FaDownload,
  FaTextHeight,
  FaSquare,
  FaCircle,
} from "react-icons/fa";
import "./editImage.css";

export default function EditImage() {
  const canvasRef = useRef(null);
  const fabricRef = useRef(null);
  const { id } = useParams();
  const [darkMode, setDarkMode] = useState(false);

  const imageData = JSON.parse(localStorage.getItem(`image-${id}`));
  const imageUrl = imageData?.urls?.full;
  console.log("Image URL:", imageUrl);
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  useEffect(() => {
    if (!imageUrl) return;

    const canvasEl = canvasRef.current;
    if (!canvasEl) return;

    const canvas = new fabric.Canvas(canvasEl, {
      preserveObjectStacking: true,
    });

    fabricRef.current = canvas;

    fabric.Image.fromURL(
      imageUrl,
      (imgInstance) => {
        if (!imgInstance.width || !imgInstance.height) {
          console.error("Image dimensions are undefined.");
          return;
        }

        const canvas = fabricRef.current; // Use ref here
        if (!canvas) return; // Safety check

        const screenWidth = window.innerWidth * 0.8;
        const screenHeight = window.innerHeight * 0.7;

        const aspectRatio = imgInstance.width / imgInstance.height;
        let newWidth = screenWidth;
        let newHeight = screenWidth / aspectRatio;

        if (newHeight > screenHeight) {
          newHeight = screenHeight;
          newWidth = screenHeight * aspectRatio;
        }

        canvas.setWidth(newWidth);
        canvas.setHeight(newHeight);

        imgInstance.set({
          selectable: false,
          evented: false,
        });

        imgInstance.scaleToWidth(newWidth);
        canvas.setBackgroundImage(imgInstance, canvas.renderAll.bind(canvas));
      },
      { crossOrigin: "anonymous" }
    );
    return () => {
      canvas.dispose();
    };
  }, [imageUrl]);

  const addText = () => {
    const canvas = fabricRef.current;
    const text = new fabric.IText("Sample Text", {
      left: 50,
      top: 50,
      fill: darkMode ? "#fff" : "#000",
      fontSize: 24,
    });
    canvas.add(text);
  };

  const addRect = () => {
    const canvas = fabricRef.current;
    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: "rgba(0,0,255,0.5)",
      width: 100,
      height: 60,
    });
    canvas.add(rect);
  };

  const addCircle = () => {
    const canvas = fabricRef.current;
    const circle = new fabric.Circle({
      left: 150,
      top: 150,
      fill: "rgba(255,0,0,0.5)",
      radius: 40,
    });
    canvas.add(circle);
  };

  const downloadEditedImage = () => {
    const canvas = fabricRef.current;
    const dataURL = canvas.toDataURL({
      format: "png",
      quality: 1,
    });

    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "EditedImage.png";
    link.click();
  };

  if (!imageData) return <div>Loading...</div>;

  return (
    <>
      <Header />
      <div className="editImagePage">
        {darkMode ? <ParticlesBackgroundDark /> : <ParticlesBackground />}

        <div className="editControls">
          <button onClick={() => setDarkMode(!darkMode)} title="Toggle Mode">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button onClick={addText} title="Add Text">
            <FaTextHeight />
          </button>
          <button onClick={addRect} title="Add Rectangle">
            <FaSquare />
          </button>
          <button onClick={addCircle} title="Add Circle">
            <FaCircle />
          </button>
          <button onClick={downloadEditedImage} title="Download">
            <FaDownload />
          </button>
        </div>

        <div className="canvasWrapper">
          <canvas id="editor-canvas" ref={canvasRef} />
        </div>
      </div>
    </>
  );
}
