export interface LicensedPhoto {
  src: string;
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
    alt: "Three women returning from farm work in rural Ondo State, Nigeria",
    credit: "Gasmeans",
    sourceUrl: `${commons}Rural_women_farmers.jpg`,
    license: "CC BY-SA 4.0",
    licenseUrl: ccBySa4,
  },
  schoolChildren: {
    src: "/images/community/school-children.jpg",
    alt: "Nigerian schoolchildren in yellow and green uniforms",
    credit: "Susan Quinn / USAID",
    sourceUrl: `${commons}Nigeria_school_children_(14373239383).jpg`,
    license: "Public domain",
    licenseUrl: publicDomain,
  },
  medicalOutreach: {
    src: "/images/community/medical-outreach.jpg",
    alt: "Community health workers carrying out a medical outreach in Lagos State",
    credit: "1dtysd",
    sourceUrl: `${commons}Medical_Outreach_to_Ilaje_Community_of_Lagos_state.jpg`,
    license: "CC BY-SA 4.0",
    licenseUrl: ccBySa4,
  },
  boreholeWater: {
    src: "/images/community/borehole-water.jpg",
    alt: "A community borehole water point in Nigeria",
    credit: "Yemi festus",
    sourceUrl: `${commons}Borehole_water_supply.jpg`,
    license: "CC BY-SA 4.0",
    licenseUrl: ccBySa4,
  },
  communityOutreach: {
    src: "/images/community/community-outreach.jpg",
    alt: "Volunteers and children during a community health outreach in Lagos",
    credit: "Kennedy2003",
    sourceUrl: `${commons}Covid-19_outreach_program_by_TIAF.jpg`,
    license: "CC BY-SA 4.0",
    licenseUrl: ccBySa4,
  },
  womenMarket: {
    src: "/images/community/women-market.jpg",
    alt: "Women trading and moving goods at Kuto Market in Abeokuta, Nigeria",
    credit: "Zonahafrica",
    sourceUrl: `${commons}Mothers_in_Action.jpg`,
    license: "CC BY-SA 4.0",
    licenseUrl: ccBySa4,
  },
  medicineOutreach: {
    src: "/images/community/medicine-outreach.jpg",
    alt: "Pharmacy students and pharmacists preparing medicines for a community outreach in Plateau State",
    credit: "TyokosuJerry",
    sourceUrl: `${commons}Repackaging_medicines_at_a_community_medical_outreach.jpg`,
    license: "CC BY-SA 4.0",
    licenseUrl: ccBySa4,
  },
  womenYouthTownhall: {
    src: "/images/community/women-youth-townhall.jpg",
    alt: "A woman speaking at a Nigerian town hall focused on women and youth participation",
    credit: "USAID in Africa",
    sourceUrl: `${commons}Nigeria_Elections_Town_Hall_(16634706802).jpg`,
    license: "Public domain",
    licenseUrl: publicDomain,
  },
} satisfies Record<string, LicensedPhoto>;
