# ADHD Helper

## Project Overview
ADHD Helper is a web application designed to assist users in managing their tasks and to-do lists. The application allows users to create, rename, and remove lists, providing a simple and intuitive interface.

## Files and Directories
- **js/main.js**: Contains the JavaScript code for the application, including the `createList` function which creates a to-do list object and updates the UI.
- **css/tailwind.css**: This file will contain the Tailwind CSS styles, generated from the Tailwind CSS build process.
- **index.html**: The main HTML file for the project, serving as the entry point for the web application and linking to the CSS and JavaScript files.
- **package.json**: The configuration file for npm, listing dependencies (including Tailwind CSS) and scripts for building and running the project.
- **tailwind.config.js**: The configuration file for Tailwind CSS, allowing customization of the default Tailwind styles and settings.

## Installation Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   cd ADHD-Helper
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Build the Tailwind CSS:
   ```
   npx tailwindcss -i ./css/tailwind.css -o ./css/output.css --watch
   ```

4. Open `index.html` in your browser to view the application.

## Usage
- To create a new to-do list, enter a name and description in the input fields and click the "Create List" button.
- You can rename or remove lists using the provided buttons in the UI.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.