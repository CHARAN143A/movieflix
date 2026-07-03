"use client";

import Container from "@/components/ui/Container";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/95 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-10">
            <Logo />

            <div className="hidden lg:block">
              <NavLinks />
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            <SearchBar />

            <div className="hidden lg:block">
              <UserMenu />
            </div>

            <div className="lg:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}