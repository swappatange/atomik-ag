import React from "react";
import { motion } from "framer-motion";

// Single-file React component for atomik-ag.com
// Assumes Tailwind CSS is available and Framer Motion is installed.
// Replace placeholder images and logo imports with your real assets.

export default function AtomikLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-green-50 text-gray-900 antialiased">
      {/* NAV */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Replace with: <img src="/path/to/logo.png" alt="Atomik" className="h-10" /> */}
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-bold">A</div>
          <div>
            <h1 className="text-lg font-semibold">Atomik</h1>
            <p className="text-xs text-gray-600">Simplifying Every Acre, Empowering Every Farmer</p>
          </div>
        </div>

        <nav className="hidden md:flex gap-6 items-center text-sm">
          <a href="#features" className="hover:text-green-600">Features</a>
          <a href="#products" className="hover:text-green-600">Products</a>
          <a href="#about" className="hover:text-green-600">About</a>
          <a href="#contact" className="px-4 py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-700">Contact</a>
        </nav>

        <button className="md:hidden p-2 rounded-md border">Menu</button>
      </header>

      {/* HERO */}
      <main className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.section initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Agritech tools that make field decisions easy</h2>
          <p className="mt-4 text-lg text-gray-700">From soil insights to precise inputs — Atomik helps small and medium farms plan, monitor and maximise yields with data-driven simplicity.</p>

          <div className="mt-6 flex gap-4">
            <a href="#products" className="inline-flex items-center gap-2 px-5 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700">Explore Products</a>
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 border border-green-600 text-green-600 rounded-lg">Request Demo</a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg shadow">
              <h4 className="font-semibold">Quick Setup</h4>
              <p className="text-sm text-gray-600">Onboard in minutes with simple hardware & mobile app pairing.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <h4 className="font-semibold">Trusted by Farmers</h4>
              <p className="text-sm text-gray-600">Tools built from real field experience and validated outcomes.</p>
            </div>
          </div>
        </motion.section>

        <motion.figure className="bg-white rounded-xl shadow p-6 flex items-center justify-center" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
          {/* Replace placeholder SVG with a cleaned transparent logo or product mockup */}
          <img src="/logo-transparent.png" alt="Atomik logo" className="max-h-60 object-contain" />
        </motion.figure>
      </main>

      {/* FEATURES */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold">What we offer</h3>
        <p className="text-gray-600 mt-2">Integrated hardware, easy-to-use app and farm advisory — designed for Indian farms of all sizes.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow">
            <h4 className="font-semibold">Soil & Moisture Sensors</h4>
            <p className="text-sm text-gray-600 mt-2">Real-time field metrics to schedule irrigation and inputs precisely.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h4 className="font-semibold">Crop Advisory</h4>
            <p className="text-sm text-gray-600 mt-2">AI-backed recommendations tailored to your crop, variety and stage.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h4 className="font-semibold">Market Connect</h4>
            <p className="text-sm text-gray-600 mt-2">Help selling produce at fair prices through our partner network.</p>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="max-w-7xl mx-auto px-6 py-12 bg-gradient-to-b from-transparent to-white">
        <h3 className="text-2xl font-bold">Products & Solutions</h3>
        <p className="text-gray-600 mt-2">Hardware devices and subscription-based insights that grow with your farm.</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/** Card example - duplicate/replace with real items **/}
          <div className="p-6 bg-white rounded-lg shadow flex flex-col">
            <div className="h-48 bg-green-50 rounded-lg flex items-center justify-center">Device mockup</div>
            <h4 className="mt-4 font-semibold">Atomik Sensor Kit</h4>
            <p className="text-sm text-gray-600 mt-2">Plug-and-play sensors for soil moisture, temperature and EC.</p>
            <div className="mt-auto pt-4">
              <a href="#contact" className="text-green-600 font-medium">Get quote →</a>
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg shadow flex flex-col">
            <div className="h-48 bg-green-50 rounded-lg flex items-center justify-center">App mockup</div>
            <h4 className="mt-4 font-semibold">Atomik Mobile App</h4>
            <p className="text-sm text-gray-600 mt-2">Farm dashboard, alerts and advisory in local languages.</p>
            <div className="mt-auto pt-4">
              <a href="#contact" className="text-green-600 font-medium">Request demo →</a>
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg shadow flex flex-col">
            <div className="h-48 bg-green-50 rounded-lg flex items-center justify-center">Service mockup</div>
            <h4 className="mt-4 font-semibold">Field Support</h4>
            <p className="text-sm text-gray-600 mt-2">On-ground agronomists and partner-extension support.</p>
            <div className="mt-auto pt-4">
              <a href="#contact" className="text-green-600 font-medium">Contact sales →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold">About Atomik</h3>
            <p className="text-gray-700 mt-4">Atomik was founded with a single mission: to make modern agritech accessible to every farmer. We combine simple devices, easy workflows and a local-first advisory model to help farmers increase productivity and profitability.</p>

            <ul className="mt-6 grid grid-cols-1 gap-3 text-gray-600">
              <li>• Local language support and field onboarding</li>
              <li>• Pay-as-you-grow subscription models</li>
              <li>• Data privacy and farmer ownership of information</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h4 className="font-semibold">Our Impact</h4>
            <p className="text-gray-600 mt-2">Reached 10,000+ acres in pilot regions, delivered measurable water savings and yield gains across multiple crops.</p>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <div>
                <div className="text-2xl font-bold">10k+</div>
                <div className="text-xs text-gray-500">Acres covered</div>
              </div>
              <div>
                <div className="text-2xl font-bold">15%</div>
                <div className="text-xs text-gray-500">Avg. water savings</div>
              </div>
              <div>
                <div className="text-2xl font-bold">12%</div>
                <div className="text-xs text-gray-500">Avg. yield gain</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold">Get in touch</h3>
        <p className="text-gray-600 mt-2">Request a demo, ask about pricing, or partner with us.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <form className="p-6 bg-white rounded-lg shadow">
            <label className="block text-sm font-medium">Name</label>
            <input className="mt-1 w-full border rounded-md px-3 py-2" placeholder="Your name" />

            <label className="block text-sm font-medium mt-4">Phone / WhatsApp</label>
            <input className="mt-1 w-full border rounded-md px-3 py-2" placeholder="Mobile number" />

            <label className="block text-sm font-medium mt-4">Message</label>
            <textarea className="mt-1 w-full border rounded-md px-3 py-2" rows={4} placeholder="How can we help?"></textarea>

            <div className="mt-4">
              <button type="button" className="px-4 py-2 bg-green-600 text-white rounded-md">Send</button>
            </div>
          </form>

          <div className="p-6 bg-white rounded-lg shadow">
            <h4 className="font-semibold">Contact info</h4>
            <p className="text-gray-600 mt-2">Email: <a href="mailto:hello@atomik-ag.com" className="text-green-600">hello@atomik-ag.com</a></p>
            <p className="text-gray-600 mt-1">Phone: +91-XXXXXXXXXX</p>

            <div className="mt-6">
              <h5 className="font-medium">Office</h5>
              <p className="text-gray-600 text-sm">Bengaluru, India (or replace with your HQ address)</p>
            </div>

            <div className="mt-6">
              <h5 className="font-medium">Follow us</h5>
              <div className="mt-2 flex gap-3">
                <a href="#" className="text-sm">Twitter</a>
                <a href="#" className="text-sm">LinkedIn</a>
                <a href="#" className="text-sm">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t mt-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-600">© {new Date().getFullYear()} Atomik AG — All rights reserved.</div>
          <div className="flex gap-4 text-sm">
            <a href="#privacy" className="hover:text-green-600">Privacy</a>
            <a href="#terms" className="hover:text-green-600">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
