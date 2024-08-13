Car Dealer App
Description
The Car Dealer App is a web application developed with Next.js, React, and Tailwind CSS that allows users to filter vehicles based on type and model year. The application provides a simple and intuitive interface to explore different vehicle types and model years.

Features
Home Page: Displays a welcome message and a link to the filter page.
Filter Page: Allows users to select vehicle type and model year to search for vehicles.
Results Page: Shows a list of vehicles filtered based on the selections made on the filter page.
Project Structure
pages/index.js: The home page of the application.
pages/filter.js: The filter page for selecting vehicle type and model year.
pages/result/[makeId]/[year].js: The results page that displays vehicles based on the selections.
components/Layout.js: Common layout for all pages, including header and footer.
public/globals.css: Global stylesheet for the application.
Dependencies
next: React framework for building web applications.
react: Library for building user interfaces.
react-dom: Library for rendering React components.
tailwindcss: CSS framework for styling.
autoprefixer: Adds browser prefixes for CSS.
postcss: Tool for processing CSS.
Setup
Clone the repository:

bash
Copiar código
git clone https://github.com/your-username/car-dealer-app.git
Navigate to the project directory:

bash
Copiar código
cd car-dealer-app
Install dependencies:

bash
Copiar código
npm install
Start the development server:

bash
Copiar código
npm run dev
Access the application at http://localhost:3000.

Scripts
npm run dev: Starts the development server.
npm run build: Builds the application for production.
npm run start: Starts the application in production mode.
npm run lint: Runs the linter to check for code issues.
npm run format: Formats the code with Prettier.
Contribution
Feel free to open issues and pull requests for improvements or fixes.

License
This project is licensed under the MIT License.