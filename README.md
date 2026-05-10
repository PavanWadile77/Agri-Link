# 🌾 AgriLink

**AgriLink** is a premium, farmer-first mobile application designed to bridge the gap between rural agriculture and the modern supply chain. Built with **React Native** and **Expo**, it empowers farmers with real-time market intelligence, a digital identity, and direct access to agri-retailers.

---

## 🚀 Key Features

### 👤 Digital Farmer Identity
*   **Farmer Card**: A secure digital ID containing farm metrics, soil types, and current crop logs.
*   **QR Verification**: Instant offline verification for government schemes and shop transactions.

### 📈 Market Intelligence (Mandi Rates)
*   **Real-time Prices**: Live APMC Mandi rates filtered by State, District, and Taluka.
*   **Cascading Search**: High-speed search interface to find specific crops and markets across India.
*   **Trend Visualization**: Sparkline charts and live indicators (Up/Down) for price volatility.

### 🛒 Agri-Shop Ecosystem
*   **Requirement Matching**: Retailers can view nearby farmer needs (seeds, fertilizers) in real-time.
*   **Direct Bidding**: Seamless interaction between farmers and retailers for the best input prices.

### 🎨 Premium UI/UX
*   **Glassmorphism Theme**: A modern, sleek design with a dark-mode emerald and amber palette.
*   **Interactive Prototype**: A built-in Single Page Application (SPA) for rapid visual demonstration.

---

## 🛠 Tech Stack

*   **Framework**: React Native (Expo)
*   **Navigation**: React Navigation (Native Stack & Bottom Tabs)
*   **State Management**: Redux Toolkit
*   **Icons**: Lucide React Native
*   **Design**: Glassmorphism (Vanilla CSS / Tailwind)

---

## 📂 Project Structure

```text
├── src
│   ├── components      # Reusable UI elements (GlassCard, FarmerCard)
│   ├── screens         # App screens (Dashboard, PriceChecker, Auth)
│   ├── store           # Redux global state management
│   └── theme           # Design tokens and color palette
├── App.js              # Entry point & Navigation setup
├── prototype.html      # Fully interactive web-based demo
└── package.json        # Dependencies and scripts
```

---

## 🏃‍♂️ Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/PavanWadile77/Agri-Link.git
    cd Agri-Link
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Start the development server**:
    ```bash
    npx expo start
    ```

4.  **Run the Prototype**:
    Simply open `prototype.html` in any modern browser to view the interactive SPA.

---

## 🗺 Roadmap

- [ ] **Phase 2**: Integration with Firebase for real-time Auth & Database.
- [ ] **Phase 3**: AI-based crop disease detection using Gemini API.
- [ ] **Phase 4**: Secure UPI payment gateway for shop orders.

---

## 📄 License
Confidential - All Rights Reserved.

---
*Built with ❤️ by Antigravity for Pavan Wadile.*
