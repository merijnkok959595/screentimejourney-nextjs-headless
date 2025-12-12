"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import "../css/euclid-circular-a-font.css";
import "../css/style.css";
import HomeHeader from "../../components/Header";
import DefaultHeader from "../../components/Common/DefaultHeader";

import { ModalProvider } from "../context/QuickViewModalContext";
import { CartModalProvider } from "../context/CartSidebarModalContext";
import { ReduxProvider } from "@/redux/provider";
import QuickViewModal from "@/components/Common/QuickViewModal";
import CartSidebarModal from "@/components/Common/CartSidebarModal";
import { PreviewSliderProvider } from "../context/PreviewSliderContext";
import PreviewSliderModal from "@/components/Common/PreviewSlider";

import PreLoader from "@/components/Common/PreLoader";
import AnnouncementBar from "@/components/Common/AnnouncementBar";
import WatiWidget from "@/components/Common/WatiWidget";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        {loading ? (
          <PreLoader />
        ) : (
          <>
            <ReduxProvider>
              <CartModalProvider>
                <ModalProvider>
                  <PreviewSliderProvider>
                    <AnnouncementBar />
                    {isHomePage ? <HomeHeader /> : <DefaultHeader />}
                    {children}

                    <QuickViewModal />
                    <CartSidebarModal />
                    <PreviewSliderModal />
                  </PreviewSliderProvider>
                </ModalProvider>
              </CartModalProvider>
            </ReduxProvider>
            <WatiWidget />
          </>
        )}
      </body>
    </html>
  );
}
