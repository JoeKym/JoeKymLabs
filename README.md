# JoeKym Labs™

Official repository for JoeKym Labs™ — a professional web design and development studio. This project is a high-performance **Single Page Application (SPA)** built with React, Vite, and GSAP.

## Structure

- **`/app`**: The core application and marketing site.
  - `src/pages/LandingPage.tsx`: The main corporate marketing presence.
  - `src/App.tsx`: Modern routing logic for the SPA.
- **`render.yaml`**: Configuration for automated hosting on Render.com.

## Development

To run the project locally:

1.  Navigate to the app directory:
    ```bash
    cd app
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```

## Hosting

This project is configured for **Render.com**. It uses the `render.yaml` Blueprint to automatically deploy as a single service with SPA routing (rewriting all requests to `index.html`).

---
© JoeKym Labs™. All rights reserved.
