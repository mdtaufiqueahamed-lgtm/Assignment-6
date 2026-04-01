🛠️ Project In-Depth Explanation
This project is a high-performance Digital Assets Marketplace application. It focuses on providing a seamless user experience for browsing and purchasing digital tools. Below are the core modules and technical implementations:

1. Component-Based Architecture
The entire UI is broken down into small, reusable React components such as ProductCard, Navbar, Pricing, and Subscribe. This makes the codebase maintainable and scalable.

2. State Management & Logic
Dynamic Data Rendering: Used useEffect and fetch API to retrieve product information from a local products.json file.

Cart Functionality: Implemented a robust cart system using React useState. It includes logic to check if an item already exists in the cart (find method) to prevent duplicates.

Conditional Rendering: The app smartly switches between the Product Grid and the Cart View based on the user's interaction with the toggle buttons.

3. Modern Styling with Tailwind CSS
Responsive Design: Used Tailwind's utility classes (like md:grid-cols-3, flex-col md:flex-row) to ensure the website looks perfect on mobile, tablet, and desktop.

Custom Theming: Implemented a consistent purple-centric color palette (#7C3AED) to give the brand a premium and professional feel.

Interactivity: Added hover scales, transitions, and backdrop-blur for a modern "Glassmorphism" effect in the navigation bar.

4. Key UI Sections Implemented
Hero & Stats: A visually appealing banner followed by a stats section to build user trust.

Product Grid: An interactive display of digital tools with features, pricing, and "Buy Now" triggers.

How It Works: A step-by-step guide explaining the platform's utility.

Pricing Table: A tiered pricing model highlighting the most popular plan.

Newsletter: A full-width, high-conversion subscription section.

Dark Footer: A professional, multi-column dark footer containing site navigation and contact info.
