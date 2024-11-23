import { useState } from "react";
import "./styles.css";

// Content for each section
const content = [
  {
    title: "Overview",
    items: [
      "Welcome to SetPlayWinApp, the platform that brings together FunFart Games, DigitalKnuckles, and LazerPixel Dev.",
      "Explore games, NFTs, tokens, and community utilities in one place!",
    ],
  },
  {
    title: "Key Features",
    items: [
      "Interactive Gaming Hub: Play and discover new games, track progress, and compete with others.",
      "Web3 Integration: Experience blockchain-powered gaming, NFT trading, and token utilities.",
      "Community-Driven Platform: Connect with enthusiasts, join events, and contribute to projects.",
    ],
  },
  {
    title: "Core Projects",
    items: [
      "FunFart Games: Quirky and innovative games like SneakyPoot’s Adventures and Toothless Zoo Tycoon.",
      "DigitalKnuckles: Exclusive NFTs and utilities to enhance your gaming experience.",
      "LazerPixel Dev: Experimental projects, tutorials, and tools for game developers.",
    ],
  },
  {
    title: "Roadmap",
    items: [
      "Phase 1: Launch the gaming hub and NFT marketplace.",
      "Phase 2: Introduce token utilities and staking rewards.",
      "Phase 3: Expand community features and co-op gaming modes.",
      "Phase 4: Launch the SetPlayWin MemeCoin ecosystem.",
    ],
  },
  {
    title: "Contact",
    items: [
      "Email: support@setplaywinapp.com",
      "Discord: Join the Community",
      "Website: www.setplaywinapp.com",
    ],
  },
];

// Component Function
export default function App() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  // Updated IPFS-hosted images for each section
  const backgrounds = [
    "placeholder0.png",
    "placeholder1.png",
    "placeholder2.png",
    "placeholder3.png",
    "placeholder4.png",
  ];

  return (
    <div>
      <header>
        <img
          src="react-logo-xs.png"
          alt="React logo"
          style={{ width: "50px", marginRight: "10px" }}
        />
        <div>
          <h1>SetPlayWinApp</h1>
          <p>Your Hub for Games, Web3, and Community</p>
        </div>
      </header>
      <div id="tabs">
        <menu>
          {content.map((section, index) => (
            <button
              key={index}
              className={activeContentIndex === index ? "active" : ""}
              onClick={() => setActiveContentIndex(index)}
              aria-label={`Navigate to ${section.title}`}
            >
              {section.title}
            </button>
          ))}
        </menu>
        <div
          id="tab-content"
          style={{
            backgroundImage: `url(${backgrounds[activeContentIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "400px",
            color: "white",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h2>{content[activeContentIndex].title}</h2>
          <ul>
            {content[activeContentIndex].items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}