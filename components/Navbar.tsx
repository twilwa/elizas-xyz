"use client";

import { Rocket } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="container mx-auto">
        <div className="flex-1">
          <Link href="/" className="flex items-center space-x-2">
            <Rocket className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">
              Elizas<span className="text-primary">.xyz</span>
            </span>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/marketplace" className="hover:text-primary">
                Marketplace
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="hover:text-primary">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}