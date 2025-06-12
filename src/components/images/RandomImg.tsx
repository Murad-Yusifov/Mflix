"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import groupImage from "@/assets/images/Group.png"; // Şəklin olduğu yol
import groupImage1 from "@/assets/images/Group (1).png"; // Şəklin olduğu yol
import groupImage2 from "@/assets/images/Group (2).png"; // Şəklin olduğu yol
import groupImage3 from "@/assets/images/Group (3).png"; // Şəklin olduğu yol
import groupImage4 from "@/assets/images/Group (4).png"; // Şəklin olduğu yol
import groupImage5 from "@/assets/images/Group (5).png"; // Şəklin olduğu yol
import groupImage6 from "@/assets/images/Group (6).png"; // Şəklin olduğu yol
import groupImage7 from "@/assets/images/Group (8).png"; // Şəklin olduğu yol
import groupImage8 from "@/assets/images/Group (9).png"; // Şəklin olduğu yol
import groupImage9 from "@/assets/images/Group (7).png"; // Şəklin olduğu yol

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
  const images = [
    groupImage,
    groupImage1,
    groupImage2,
    groupImage3,
    groupImage4,
    groupImage5,
    groupImage6,
    groupImage7,
    groupImage8,
    groupImage9,
  ]; // Şəkillər
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
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: 0,
        backgroundColor: "rgba(0, 0, 255, 0.2)",
      }}
    >
      {images.map((src, idx) => (
        <div
          key={idx}
          style={{
            position: "absolute",
            top: positions[idx]?.top || Math.floor(Math.random() * window.innerHeight) + "px",
            left: positions[idx]?.left ||  Math.floor(Math.random() * window.innerHeight) + "px",
          }}
        >
          <Image src={src} alt={`image-${idx}`} width={100} height={100} />
        </div>
      ))}
    </div>
  );
};

export default RandomBackground;
