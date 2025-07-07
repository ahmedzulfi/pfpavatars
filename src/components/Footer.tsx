"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full">
      {/* CTA Section */}
    

      {/* Footer */}
      <footer className="w-full border-t border-neutral-950 ">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-5 gap-6 text-sm text-neutral-400">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 font-bold mb-2 text-white">
              <span>👤</span> <span>pfpavtars</span>
            </div>
            <p className="text-neutral-500">Upgrade Your Profile Picture</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-white">Product</h4>
            <ul className="space-y-1">
              <li>
                <Link href="#" className="hover:text-white transition">
                  Before & After
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-white">Company</h4>
            <ul className="space-y-1">
              <li>
                <Link href="#" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-white">Legal</h4>
            <ul className="space-y-1">
              <li>
                <Link href="#" className="hover:text-white transition">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-white">Contact</h4>
            <p className="text-neutral-400">hello@pfpavtars</p>
          </div>
        </div>

        <div className="text-center py-4 text-xs text-neutral-600 border-t border-neutral-800">
          © 2025 pfpavtars. All rights reserved.
          <br />
          Made by{" "}
          <Link
            href="https://x.com/AhmedZulfiqr"
            className="underline hover:text-white transition"
          >
            Ahmed Zulfiqar
          </Link>
        </div>
      </footer>
    </div>
  );
}
