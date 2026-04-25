import BPSLoanEligibilityCalculator from "./BPS"; // আপনার ফাইলের লোকেশন অনুযায়ী পাথ ঠিক করে নেবেন

// SEO এবং Open Graph (OG) Tags এখানে থাকবে
export const metadata = {
  title: "BPS Calculator | Nayan Sarkar",
  description: "Calculate Basis Points (BPS) easily with this tool.",
  openGraph: {
    title: "BPS Calculator - Nayan Sarkar",
    description: "Calculate Basis Points (BPS) easily with this tool.",
    url: "https://nayanbd.com/calculator/bps/",
    siteName: "NayanBD",
    images: [
      {
        url: "http://localhost:3000/nayan_sarkar.png",
        width: 100,
        height: 100,
        alt: "BPS Calculator Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <BPSLoanEligibilityCalculator />
    </>
  );
}
