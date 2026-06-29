import Container from "@/components/ui/Container";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Navigation */}
          <NavLinks />

          {/* Search */}
          <SearchBar />
        </div>
      </Container>
    </header>
  );
}