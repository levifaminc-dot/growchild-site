export interface LicensedPhoto {
  src: string;
  webpSrcset: string;
  width: number;
  height: number;
  alt: string;
  credit: string;
  sourceUrl: string;
  license: string;
  licenseUrl: string;
}

const commons = "https://commons.wikimedia.org/wiki/File:";
const ccBySa4 = "https://creativecommons.org/licenses/by-sa/4.0/";
const publicDomain = "https://commons.wikimedia.org/wiki/Commons:Public_domain";

export const photos = {
  ruralWomen: {
    src: "/images/community/rural-women.jpg",
    webpSrcset: "/images/community/rural-women-768.webp 768w, /images/community/rural-women.webp 1920w",
    width: 1920,
    height: 1285,
    alt: "Three women returning from farm work in rural Ondo State, Nigeria",
    credit: "Gasmeans",
    sourceUrl: `${commons}Rural_women_farmers.jpg`,
    license: "CC BY-SA 4.0",
    licenseUrl: ccBySa4,
  },
  schoolChildren: {
    src: "/images/community/school-children.jpg",
    webpSrcset: "/images/community/school-children-768.webp 768w, /images/community/school-children.webp 1920w",
    width: 1920,
    height: 1440,
    alt: "Nigerian schoolchildren in yellow and green uniforms",
    credit: "Susan Quinn / USAID",
    sourceUrl: `${commons}Nigeria_school_children_(14373239383).jpg`,
    license: "Public domain",
    licenseUrl: publicDomain,
  },
  medicalOutreach: {
    src: "/images/community/medical-outreach.jpg",
    webpSrcset: "/images/community/medical-outreach-768.webp 768w, /images/community/medical-outreach.webp 1080w",
    width: 1080,
    height: 1080,
    alt: "Community health workers carrying out a medical outreach in Lagos State",
    credit: "1dtysd",
    sourceUrl: `${commons}Medical_Outreach_to_Ilaje_Community_of_Lagos_state.jpg`,
    license: "CC BY-SA 4.0",
    licenseUrl: ccBySa4,
  },
  boreholeWater: {
    src: "/images/community/borehole-water.jpg",
    webpSrcset: "/images/community/borehole-water-768.webp 768w, /images/community/borehole-water.webp 1920w",
    width: 1920,
    height: 1314,
    alt: "A community borehole water point in Nigeria",
    credit: "Yemi festus",
    sourceUrl: `${commons}Borehole_water_supply.jpg`,
    license: "CC BY-SA 4.0",
    licenseUrl: ccBySa4,
  },
  communityOutreach: {
    src: "/images/community/community-outreach.jpg",
    webpSrcset: "/images/community/community-outreach-768.webp 768w, /images/community/community-outreach.webp 1080w",
    width: 1080,
    height: 810,
    alt: "Volunteers and children during a community health outreach in Lagos",
    credit: "Kennedy2003",
    sourceUrl: `${commons}Covid-19_outreach_program_by_TIAF.jpg`,
    license: "CC BY-SA 4.0",
    licenseUrl: ccBySa4,
  },
  womenMarket: {
    src: "/images/community/women-market.jpg",
    webpSrcset: "/images/community/women-market-768.webp 768w, /images/community/women-market.webp 1000w",
    width: 1000,
    height: 667,
    alt: "Women trading and moving goods at Kuto Market in Abeokuta, Nigeria",
    credit: "Zonahafrica",
    sourceUrl: `${commons}Mothers_in_Action.jpg`,
    license: "CC BY-SA 4.0",
    licenseUrl: ccBySa4,
  },
  medicineOutreach: {
    src: "/images/community/medicine-outreach.jpg",
    webpSrcset: "/images/community/medicine-outreach-768.webp 768w, /images/community/medicine-outreach.webp 1920w",
    width: 1920,
    height: 1440,
    alt: "Pharmacy students and pharmacists preparing medicines for a community outreach in Plateau State",
    credit: "TyokosuJerry",
    sourceUrl: `${commons}Repackaging_medicines_at_a_community_medical_outreach.jpg`,
    license: "CC BY-SA 4.0",
    licenseUrl: ccBySa4,
  },
  womenYouthTownhall: {
    src: "/images/community/women-youth-townhall.jpg",
    webpSrcset: "/images/community/women-youth-townhall-768.webp 768w, /images/community/women-youth-townhall.webp 1430w",
    width: 1430,
    height: 946,
    alt: "A woman speaking at a Nigerian town hall focused on women and youth participation",
    credit: "USAID in Africa",
    sourceUrl: `${commons}Nigeria_Elections_Town_Hall_(16634706802).jpg`,
    license: "Public domain",
    licenseUrl: publicDomain,
  },
} satisfies Record<string, LicensedPhoto>;
