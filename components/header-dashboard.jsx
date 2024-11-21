"use client";
import {
  useContext,
  useState,
} from 'react';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Context } from '@/context/context';

const Header = () => {
  const [show, setShow] = useState(false);
  const { user } = useContext(Context);
  const name = user?.data?.name.replace(/ .*/, "");

  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className={`hidden md:flex flex-col gap-6 text-lg font-medium md:flex-row md:items-center md:gap-5`}>
        <Link href="/dashboard" className="text-muted-foreground hover:text-foreground">
          Hi, {name} 👋
        </Link>
        <Link href="/dashboard" className="text-muted-foreground hover:text-foreground">Dashboard</Link>
        <Link href="/dashboard/users" className="text-muted-foreground hover:text-foreground">Users</Link>
        <Link href="/dashboard/create-gamer" className="text-muted-foreground hover:text-foreground">+Gamer</Link>
        <Link href="/dashboard/create-channel" className="text-muted-foreground hover:text-foreground">+Channel</Link>
        <Link href="/dashboard/create-channel-src" className="text-muted-foreground hover:text-foreground">+Iframe</Link>
        <Link href="/dashboard/gamers" className="text-muted-foreground hover:text-foreground">=Gamers</Link>
        <Link href="/dashboard/channels" className="text-muted-foreground hover:text-foreground">=Channel</Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden" onClick={() => setShow(!show)}>
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" open={show} onOpenChange={setShow}>
          <nav className="grid gap-6 text-lg font-medium">
            <Link href="/dashboard" className="text-muted-foreground hover:text-foreground">Dashboard</Link>
            <Link href="/dashboard/users" className="text-muted-foreground hover:text-foreground">Users</Link>
            <Link href="/dashboard/create-gamer" className="text-muted-foreground hover:text-foreground">+Gamer</Link>
            <Link href="/dashboard/create-channel" className="text-muted-foreground hover:text-foreground">+Channel</Link>
            <Link href="/dashboard/create-channel-src" className="text-muted-foreground hover:text-foreground">+Iframe</Link>
            <Link href="/dashboard/gamers" className="text-muted-foreground hover:text-foreground">=Gamers</Link>
            <Link href="/dashboard/channels" className="text-muted-foreground hover:text-foreground">=Channel</Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
