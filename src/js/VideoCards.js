import youtube from "../assets/img/svg/youtube-icon.svg";
import thubnailImg from "../assets/img/webp/jenny.webp";
import thubnailImg2 from "../assets/img/webp/dianne.webp";
import thubnailImg3 from "../assets/img/webp/jacob.webp";
import thubnailImg4 from "../assets/img/webp/camero.webp";
import thubnailImg5 from "../assets/img/webp/esthor.webp";
import thubnailImg6 from "../assets/img/webp/elenor.webp";
import { useState } from "react";

const VideoCards = [
  {
    iframe: (
      <iframe
        src="https://www.youtube.com/embed/IUN664s7N-c"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    ),
    // handleVideoClick: handleclick,
    thumbnail: thubnailImg,
    icon: youtube,
    name: "Jenny Wilson",
    about:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia cons",
  },
  {
    iframe: (
      <iframe
        src="https://www.youtube.com/embed/668nUCeBHyY"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    ),
    thumbnail: thubnailImg2,
    icon: youtube,
    name: "Dianne Russell",
    about:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia cons",
  },
  {
    iframe: (
      <iframe
        src="https://www.youtube.com/embed/nqye02H_H6I"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    ),
    thumbnail: thubnailImg3,
    icon: youtube,
    name: "Jacob Jones",
    about:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia cons",
  },
  {
    iframe: (
      <iframe
        className=""
        src="https://www.youtube.com/embed/dQnqqyvNWY4"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    ),
    thumbnail: thubnailImg4,
    icon: youtube,
    name: "Cameron Williamson",
    about:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia cons",
  },
  {
    iframe: (
      <iframe
        className=""
        src="https://www.youtube.com/embed/dQnqqyvNWY4"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    ),
    thumbnail: thubnailImg5,
    icon: youtube,
    name: "Esther Howard",
    about:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia cons",
  },
  {
    iframe: (
      <iframe
        className=""
        src="https://www.youtube.com/embed/dQnqqyvNWY4"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    ),
    thumbnail: thubnailImg6,
    icon: youtube,
    name: "Eleanor Pena",
    about:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia cons",
  },
];

export default VideoCards;
