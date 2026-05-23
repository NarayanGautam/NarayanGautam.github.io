export type HobbyPhoto = {
  /** File in /public/photos/ e.g. "gallery-01.jpg" */
  filename: string;
  alt: string;
  caption?: string;
};

export const hobbiesIntro =
  "When I'm not coding, I enjoy staying active outdoors, playing sports, and capturing moments with my camera.";

export const hobbyGroups = [
  {
    title: "Outdoors",
    items: [
      "Hiking and time in nature.",
      "Running and biking around the city.",
    ],
  },
  {
    title: "Sports",
    items: [
      "Soccer, volleyball, and basketball with friends.",
      "Pickup games and staying active year-round.",
    ],
  },
  {
    title: "Photography",
    items: [
      "Landscape and street shots.",
      "Mostly iPhone shots from hikes and adventures around Ottawa.",
    ],
  },
];

export const galleryPhotos: HobbyPhoto[] = [
  { filename: "gallery-01.jpg", alt: "Outdoor photograph" },
  { filename: "gallery-02.jpg", alt: "Outdoor photograph" },
  { filename: "gallery-03.jpg", alt: "Outdoor photograph" },
  { filename: "gallery-04.jpg", alt: "Outdoor photograph" },
  { filename: "gallery-05.jpg", alt: "Outdoor photograph" },
  { filename: "gallery-06.jpg", alt: "Outdoor photograph" },
  { filename: "gallery-07.jpg", alt: "Outdoor photograph" },
  { filename: "gallery-08.jpg", alt: "Outdoor photograph" },
];
