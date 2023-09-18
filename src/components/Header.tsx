"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";

function Header() {
  return (
    <header className="flex w-full justify-between pl-11 pr-11 px-5 py-5 fixed z-10 top-0">
      <h1 className="font-bold">PET-SI</h1>
      <div className="flex gap-1">
        <NavigationMenu>
            <NavigationMenuList>
            <NavigationMenuItem>
                <NavigationMenuTrigger>Projetos</NavigationMenuTrigger>
                <NavigationMenuContent className="p-2">
                <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
            </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
        <Button>Login</Button>
      </div>
    </header>
  );
}

export default Header;
