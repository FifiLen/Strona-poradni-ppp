// import "../styles/global.css";
// import Footer from "../components/Footer";
// import { GoogleTagManager } from "@next/third-parties/google";
// import { DM_Sans } from "next/font/google";
// import Nav from "../components/Nav";
// import { AccessibilityProvider } from "../components/AccessibilityContext";
// import AccessibilityControls from "../components/Dostepnosc";

// const dmSans = DM_Sans({ subsets: ["latin"], weight: ["500"] });

// export const metadata = {
//   title: "Poradnia Psychologiczno Pedagogiczna Magnolia",
//   keywords: [
//     "Poradnia psychologiczna",
//     "Zajęcia WWRD",
//     "Poradnia Rybnik",
//     "PPP-Rybnik",
//     "Psycholog Rybnik",
//     "Diagnoza",
//   ],
//   description:
//     "Miejsce, w którym osiągniesz sukces i staniesz na szczycie swoich możliwości",
// };

// const Rootlayout = ({ children }) => {
//   return (
//     <html lang="en">
//       <body className={`bg-white overflow-x-hidden ${dmSans.className} `}>
//         <AccessibilityProvider>
//           <main className="overflow-x-hidden">
//             <AccessibilityControls />
//             <Nav />
//             {children}
//           </main>

//           <Footer />
//         </AccessibilityProvider>
//       </body>
//       <GoogleTagManager gtmId="G-0QW3ZG23F5" />
//     </html>
//   );
// };

// export default Rootlayout;
// app/layout.js
import "../styles/global.css";
import { DM_Sans } from "next/font/google";
import { AccessibilityProvider } from "../components/AccessibilityContext";
import { GoogleTagManager } from "@next/third-parties/google";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["500"] });

export const metadata = {
  title: "Poradnia Psychologiczno Pedagogiczna Magnolia",
  keywords: [
    "Poradnia psychologiczna",
    "Zajęcia WWRD",
    "Poradnia Rybnik",
    "PPP-Rybnik",
    "Psycholog Rybnik",
    "Diagnoza",
  ],
  description:
    "Miejsce, w którym osiągniesz sukces i staniesz na szczycie swoich możliwości",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`bg-white overflow-x-hidden ${dmSans.className}`}>
        <AccessibilityProvider>{children}</AccessibilityProvider>
        <GoogleTagManager gtmId="G-0QW3ZG23F5" />
      </body>
    </html>
  );
};

export default RootLayout;
