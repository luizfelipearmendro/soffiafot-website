import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen bg-background flex flex-col">
    <Header />
    <main className="flex-1 pt-16 md:pt-20">{children}</main>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Layout;
