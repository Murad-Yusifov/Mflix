"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import groupImage from "@/assets/Group.png"; // Şəklin olduğu yol

interface Position {
  top: string;
  left: string;
}

function getRandomPosition(maxWidth: number, maxHeight: number): Position {
  return {
    top: Math.floor(Math.random() * maxHeight) + "px",
    left: Math.floor(Math.random() * maxWidth) + "px",
  };
}

const RandomBackground: React.FC = () => {
  const images = [groupImage, groupImage, groupImage]; // Şəkillər
  const [positions, setPositions] = useState<Position[]>([]);

  useEffect(() => {
    const updatePositions = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setPositions(
        images.map(() => getRandomPosition(width - 100, height - 100)) // Şəkillərin ölçüsünə görə hesablama
      );
    };

    updatePositions();
    window.addEventListener("resize", updatePositions); // Pəncərə ölçüsü dəyişəndə yenilə

    return () => window.removeEventListener("resize", updatePositions);
  }, []);

  return (
    <div style={{ position: "fixed", width: "100%", height: "100%", top: 0, left: 0, zIndex: 0 }}>
      {images.map((src, idx) => (
        <div
          key={idx}
          style={{
            position: "absolute",
            top: positions[idx]?.top || "0px",
            left: positions[idx]?.left || "0px",
          }}
        >
          <Image src={src} alt={`image-${idx}`} width={100} height={100} />
        </div>
      ))}
    </div>
  );
};

export default RandomBackground;
