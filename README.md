# PICrafter

PICrafter is a React-based web application that allows users to search, view, and edit images. It provides a seamless experience for image crafting with features like search functionality, image editing, and dark mode support.

## Features

- **Search Images**: Search for stunning images using the Unsplash API.
- **View Image Details**: View detailed information about an image, including the photographer's name, dimensions, and likes.
- **Edit Images**: Add text, shapes, and customize images using the Fabric.js library.
- **Dark Mode**: Toggle between light and dark themes for a personalized experience.
- **Responsive Design**: Fully responsive design for desktop and mobile devices.

## File Structure

## Screenshots

### Home Page (Light Mode)
![Home Page (Light Mode)](ScreenshotsForReadMe\HomePageLight.png)

### Home Page (Dark Mode)
![Home Page (Dark Mode)](ScreenshotsForReadMe\HomePageDark.png)

### Search Page (Light Mode)
![Search Page (Light Mode)](ScreenshotsForReadMe\SearchPageLight.png)

### Search Page (Dark Mode)
![Search Page (Dark Mode)](ScreenshotsForReadMe\SearchPageDark.png)

### Image Details Page (Light Mode)
![Image Details Page (Light Mode)](ScreenshotsForReadMe\DisplayPageLight.png)

 ### Image Details Page (Dark Mode)
![Image Details Page (Dark Mode)](ScreenshotsForReadMe\DisplayPageDark.png)

### Edit Image Page (Light Mode)
![Edit Image Page (Light Mode)](ScreenshotsForReadMe\EditPageLight.png)

### Edit Image Page (Dark Mode)
![Edit Image Page (Dark Mode)](ScreenshotsForReadMe\EditPageDark.png)

### About Page
![About Page](ScreenshotsForReadMe\AboutPage.png)

### Contact Page
![Contact Page](ScreenshotsForReadMe\ContactPage.png)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   
   ```sh
   git clone https://github.com/your-username/picrafter.git
   cd picrafter
   ```
2. Install dependencies:

    ```
    npm install
    ```
### Running the Application

1.  Start the development Server:
```
npm start
```

2. Open your browser and navigate to [http://localhost:3000]( http://localhost:3000)
    Building for Production
    To create a production build, run:
```
npm run build
```
The build files will be generated in the [build/] directory.

## API Integration
This project uses the Unsplash API for fetching images. To use the API, you need to replace the client_id in the [src/components/searchPage/search.js] file with your own Unsplash API key.

## Deployment
You can deploy the application to any static hosting service like Netlify, Vercel, or GitHub Pages.

## License
This project is licensed under the MIT License. See the LICENSE file for details.