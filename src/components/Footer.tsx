// components/FooterSection.tsx
"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full">
      {/* CTA Section */}
      <section className="w-full py-20  pt-5 flex justify-center items-center px-5">
        <div className="rounded-2xl bg-gradient-to-r from-[#ffedc9] via-[#fcdba3] to-[#f5c57f] p-12 text-center max-w-[90%]  md:w-[1250px]  w-full">
          <h2 className="text-black/85 text-2xl md:text-4xl font-bold mb-4">
            Ready to transform your profile pic?
          </h2>
          <p className="text-gray-900 mb-6">
            Create your unique avatar in seconds.
          </p>
          <button className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition">
            Create Your Avatar
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-5 gap-6 text-sm text-gray-700">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 font-bold mb-2">
              <span>👤</span> <span>pfpavtars</span>
            </div>
            <p className="text-gray-500">Upgrade Your Profile Picture</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Product</h4>
            <ul className="space-y-1">
              <li><Link href="#">Before & After</Link></li>
              <li><Link href="#">How It Works</Link></li>
              <li><Link href="#">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-1">
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Legal</h4>
            <ul className="space-y-1">
              <li><Link href="#">Terms</Link></li>
              <li><Link href="#">Privacy</Link></li>
              <li><Link href="#">Cookies</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <p>hello@pfpavtars</p>
          </div>
        </div>

        <div className="text-center py-4 text-xs text-gray-500 border-t">
          © 2025 pfpavtars All rights reserved. <br />
          Made by <Link href="https://liinks.co/charlie" className="underline">Charlie</Link> from <Link href="https://liinks.co" className="underline">Liinks</Link>
        </div>
      </footer>
    </div>
  );
}
