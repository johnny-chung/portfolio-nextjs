"use client";
import React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/app/_components/ui/navigation-menu";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarClose,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  SidebarProvider,
  SidebarSeparator,
} from "@/app/_components/ui/sidebar";

import { useLang } from "@/app/_providers/LangProvider";
import Link from "next/link";
import { ChevronUp, LogInIcon, LogOutIcon } from "lucide-react";
import { Button } from "@/app/_components/ui/button";

//import { signIn, signOut, useSession } from "next-auth/react";
import { TooltipButton } from "@/app/_components/ui/toottip-button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu";

import Image from "next/image";
import logo from "@/public/logo/logo-medium.png";
import LanguageBtn from "@/app/_components/common/LanguageBtn";
const navMenuContent: {
  title: string;
  href: string;
  components: {
    title: string;
    href: string;
    description: string;
  }[];
}[] = [
  {
    title: "home",
    href: "/",
    components: [{ title: "aboutMe", href: "/about-me", description: "" }],
  },
  {
    title: "goodmanDev",
    href: "/goodman-dev",
    components: [
      {
        title: "softwareDevelopment",
        href: "/goodman-dev",
        description: "goodmanDevDesc",
      },
    ],
  },
  {
    title: "myProjects",
    href: "/my-projects",
    components: [
      {
        title: "latestProjects",
        href: "/my-projects?sort=latest",
        description: "seeLatestProjects",
      },
    ],
  },
  {
    title: "blog",
    href: "/blog",
    components: [
      {
        title: "blog",
        href: "/blog?sort=latest",
        description: "seeLatestPosts",
      },
    ],
  },
];

export default function Navbar() {
  const { langPack } = useLang();
  //const { data: session } = useSession();
  return (
    <header className="fixed inset-x-0 top-0 z-50 shadow-md h-9 md:h-13">
      <nav className="w-full h-9 md:h-13 bg-background">
        <div className="hidden md:flex w-full items-center justify-between mb-2">
          <Button variant="ghost" className="mx-2" asChild>
            <Link href="/">
              <Image
                src={logo}
                alt="Logo"
                height={28}
                style={{ width: "auto" }}
              />
              <span className="sr-only">home</span>
            </Link>
          </Button>
          <NavBarWeb langPack={langPack} />
          <LanguageBtn />
        </div>
        <div className="w-full flex justify-end md:hidden">
          <SidebarTrigger className="mt-1 mr-1" />
          <NavBarMobile langPack={langPack} />
        </div>
      </nav>
    </header>
  );
}

function NavBarWeb({ langPack }: { langPack: any }) {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        {navMenuContent.map((mainMenu, idx) => (
          <NavigationMenuItem key={idx} className="mx-2">
            <NavigationMenuTrigger className="rounded-none">
              {langPack[mainMenu.title]}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              {mainMenu.title === "home" ? (
                <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="from-muted/50 to-muted flex h-full w-full rounded-none flex-col justify-end bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mt-4 mb-2 text-lg font-medium">
                          {langPack.goodman}
                        </div>
                        <p className="text-muted-foreground text-sm leading-tight">
                          {langPack.subTitle}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  {mainMenu.components.map((subMenu, idx) => (
                    <ListItem
                      href={subMenu.href}
                      title={langPack[subMenu.title]}
                      key={idx}
                    >
                      {langPack[subMenu.description]}
                    </ListItem>
                  ))}
                </ul>
              ) : (
                <ul className="grid w-[300px] gap-4">
                  {mainMenu.components.map((subMenu, idx) => (
                    <ListItem
                      href={subMenu.href}
                      title={langPack[subMenu.title]}
                      key={idx}
                    >
                      {langPack[subMenu.description]}
                    </ListItem>
                  ))}
                </ul>
              )}
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href} className="focus:shadow-md">
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

function NavBarMobile({ langPack }: { langPack: any }) {
  //const { data: session } = useSession();
  return (
    <Sidebar side="right">
      <SidebarClose />
      <SidebarContent>
        <LanguageBtn />
        {navMenuContent.map((mainMenu, idx) => (
          <SidebarGroup key={idx}>
            <SidebarGroupLabel> {langPack[mainMenu.title]}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {mainMenu.components.map((subMenu, idx) => (
                  <SidebarMenuItem key={idx} className="ml-2">
                    <SidebarMenuButton asChild>
                      <Link href={subMenu.href}>
                        <span>{langPack[subMenu.title]}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
            <SidebarSeparator />
          </SidebarGroup>
        ))}
      </SidebarContent>
      {/* <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="cursor-pointer mb-2">
                  {langPack.account}
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                {session?.user ? (
                  <DropdownMenuItem>
                    <Button
                      variant="ghost"
                      className="cursor-pointer w-full"
                      onClick={() => signOut({ redirectTo: "/" })}
                    >
                      <p>{langPack.logout}</p>
                    </Button>
                  </DropdownMenuItem>
                ) : (
                  <>
                    <DropdownMenuItem asChild>
                      <Button
                        asChild
                        variant="ghost"
                        className="cursor-pointer w-full"
                      >
                        <Link href="/member/signup">{langPack.signup}</Link>
                      </Button>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Button
                        variant="ghost"
                        className="cursor-pointer w-full"
                        onClick={() => signIn("auth0", { redirectTo: "/" })}
                      >
                        <p>{langPack.login}</p>
                      </Button>
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter> */}
    </Sidebar>
  );
}
