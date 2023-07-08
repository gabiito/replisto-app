import { Container } from "@/components/Layout";
import { Navbar } from "./NavBar";

const Header = () => {
  return (
    <header>
      <div className="fixed w-full bg-zinc-50 z-10 shadow-md py-4">
        <Container>
          <Navbar user={null}/>
        </Container>
      </div>
    </header>
  );
};

export default Header;
