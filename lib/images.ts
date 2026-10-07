export const images = {
  readingRoom: "/images/site/reading-room.webp",
  archive: "/images/site/archive.webp",
  mapPersia: "/images/site/map-persia.webp",
  mapAfrica: "/images/site/map-africa.webp",
  fieldHouse: "/images/site/field-house.webp",
} as const;

export type ImageCredit = {
  title: string;
  author: string;
  license: string;
  licenseUrl?: string;
  source: string;
};

/** All photographs are shown in greyscale with a brand colour wash. */
export const imageCredits: ImageCredit[] = [
  {
    title: "Main Reading Room, Library of Congress",
    author: "Carol M. Highsmith",
    license: "Public domain",
    source:
      "https://commons.wikimedia.org/wiki/File:Main_Reading_Room._View_from_above_showing_researcher_desks._Library_of_Congress_Thomas_Jefferson_Building,_Washington,_D.C._LCCN2011646836.tif",
  },
  {
    title: "Documents on shelves in the archive store at the Herbert",
    author: "mooncow",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    source:
      "https://commons.wikimedia.org/wiki/File:Documents_on_shelves_in_the_archive_store_(History_Centre)_at_the_Herbert.jpg",
  },
  {
    title: "Map of Arabia, Persia and Afghanistan, 1850",
    author: "Samuel Augustus Mitchell",
    license: "Public domain",
    source:
      "https://commons.wikimedia.org/wiki/File:1850_Mitchell_Map_of_Arabia,_Persia,_Afghanistan_-_Geographicus_-_Arabia-mitchell-1850.jpg",
  },
  {
    title: "Wall map of Africa, 1794",
    author: "Solomon Boulton and Jean Baptiste Bourguignon d'Anville",
    license: "Public domain",
    source:
      "https://commons.wikimedia.org/wiki/File:1794_Boulton_and_Anville_Wall_Map_of_Africa_(most_important_18th_cntry_map_of_Africa)_-_Geographicus_-_Africa2-boulton-1794.jpg",
  },
  {
    title: "Field House, London",
    author: "Smuconlaw",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    source: "https://commons.wikimedia.org/wiki/File:Field_House,_London,_UK_-_20130627-02.JPG",
  },
];
