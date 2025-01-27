export const campaignsURL = "https://api.now-u.com/api/v1/campaigns";
export const pastCampaignsURL =
    "https://api.now-u.com/api/v1/campaigns?old=true";
export const partnersURL = "https://api.now-u.com/api/v1/organisations";
export const pressCoverageURL = "https://api.now-u.com/api/v1/press_coverage";
export const faqsURL = "https://api.now-u.com/api/v1/faqs";
export const blogsURL = "https://api.now-u.com/api/v1/blogs";
export const appleStoreURL = "https://apps.apple.com/us/app/now-u/id1516126639";
export const googleStoreURL =
    "https://play.google.com/store/apps/details?id=com.nowu.app";
export const privacyPolicyURL =
    "http://share.now-u.com/legal/now-u_privacy_policy.pdf";
export const termsAndConditionsURL =
    "https://share.now-u.com/legal/now-u_users_Ts&Cs.pdf";
export const partnershipGuideURL =
    "https://share.now-u.com/partners/now-u_charity_collaboration_&_partnership_guide.pdf";
export const proposeCampaignUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSfPKOVlzOOV2Bsb1zcdECCuZfjHAlrX6ZZMuK1Kv8eqF85hIA/viewform";

export const topNavLinks = [
  { display: "FAQ", path: "/faqs" },
  { display: "Blog", path: "/blog" },
  { display: "Newsletter", modal: "NewsletterSignupModal" },
];
export const bottomNavLinks = [
  { display: "Campaigns", path: "/campaigns" },
  { display: "Now-u app", path: "/now-u-app" },
  { display: "About us", path: "/aboutus" },
  { display: "Get in touch", path: "/get-in-touch" },
  { display: "Press", path: "/press" },
  { display: "Privacy Policy", external: privacyPolicyURL },
];

export const mobileNavLinks = [
  { display: "Campaigns", path: "/campaigns" },
  { display: "Now-u app", path: "/now-u-app" },
  { display: "About us", path: "/aboutus" },
  { display: "Blog", path: "/blog" },
  { display: "Get in touch", path: "/get-in-touch" },
  { display: "Press", path: "/press" },
  { display: "FAQ", path: "/faqs" },
  { display: "Newsletter", modal: "NewsletterSignupModal" },
  { display: "Privacy Policy", external: privacyPolicyURL },
];

export const Months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const footerLinksLeft = [
  {id: 1, name: "Campaigns", href: "/campaigns"},
  {id: 2, name: "Now-u app", href: "/now-u-app"},
  {id: 3, name: "About us", href: "/aboutus"},
  {id: 4, name: "Get in touch", href: "/get-in-touch"},
  {id: 5, name: "Press", href: "/press"},
];

export const footerLinksRight = [
  {id: 1, name: "FAQ", href: "/faqs"},
  {id: 2, name: "Blog", href: "/blog"},
  {id: 3, name: "Newsletter", href: "/"},
  {id: 4, name: "Privacy Notice", href: privacyPolicyURL},
  {id: 5, name: "Ts & Cs", href: termsAndConditionsURL},
];
