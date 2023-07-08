import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Container } from "@/components/Layout";
import { footerDisclaimer } from "@/components/Footer"
import { socialLinks } from "@/constants";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow pt-28 bg-zinc-100">
        <Container>
          {children}
        </Container>
      </main>
      <Footer disclaimer={footerDisclaimer} socialLinks={socialLinks} />
    </div>
  );
};

export default RootLayout;
