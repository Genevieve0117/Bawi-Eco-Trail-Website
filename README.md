# Bawi Eco Trail Website

Welcome to the Bawi Eco Trail website project! This project provides an engaging online presence for the Bawi Eco Trail attraction in Batangas, featuring interactive content, live weather, and essential visitor information.

## Project Structure

```
bawi_eco_trail_website/
├── Source/
│   ├── index.html         
│   ├── about.html          
│   ├── visitor-hub.html   
│   ├── facilities-and-amenities.html  
│   ├── contact.html        
│   ├── easter.html         
│   ├── css/
│   │   └── styles.css     
│   └── js/
│       ├── main.js       
│       └── weather.js    
├── 3D/                   
├── Background/            
├── images/                 
├── QR/                   
├── Seal/              
├── Slideshow/            
├── Texture/              
└── package.json          
```

## Key Features

- **Modern Responsive Design:** Mobile-friendly layout with visually appealing containers and justified text.
- **Custom Backgrounds:** Each page can have its own background image using inline styles.
- **Header Logo:** Each page header displays a relevant logo next to the site title.
- **Interactive Gallery:** Home and index pages feature a clickable, auto-cycling image gallery with transparent navigation.
- **Live Weather:** Visitor Info page shows current weather using Open-Meteo API.
- **Large Map Integration:** Facilities and Visitor Info pages display a large, interactive Leaflet map for Bawi Eco Trail's location.
- **Contact Form:** Contact page includes a form (Formspree integration recommended) and info cards, displayed side by side.
- **Card Grid:** Contact info is presented in a card grid layout, now supporting four cards.
- **Dynamic Content:** Visitor info and other details can be loaded from `info.json`.
- **Flip Cards:** Attraction page features large, responsive flip cards with image popout on click.
- **Cycling Facility Images:** Facilities page allows cycling through multiple images for restrooms, pools, lodging, and showers by clicking the images.
- **Image Popouts:** Facility and gallery images can be clicked to view a larger version in a modal popout.
- **Consistent Centered and Justified Layouts:** All main content uses centered containers with justified text for readability.
- **Horizontal and Responsive Layouts:** Sections like "Explore the Beauty of Nature" and "Trail Highlights" are displayed side by side and adapt to screen size.
- **Accessibility:** All images have alt text and navigation is keyboard accessible.

## Setup Instructions

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies (if using npm scripts):
   ```
   npm install
   ```
4. Start a local server (recommended for API and JS features):
   ```
   npm start
   ```
5. Open `src/index.html` or any page in your browser.

## Usage Notes

- **Background Images:** Set per-page using inline styles on `<body>`.
- **Weather API:** No API key needed for Open-Meteo; ensure internet access.
- **Contact Form:** To send form data to your email, use a service like [Formspree](https://formspree.io).
- **Gallery:** Images are loaded from the `images` folder and cycled automatically.
- **Map:** Facilities and Visitor Info pages use Leaflet and OpenStreetMap for location display.
- **Facility Images:** Click on facility images (restroom, pool, lodging, shower) to cycle through available photos.
- **Popout Images:** Click on gallery or facility images to view them in a larger modal popout.
- **Flip Cards:** On the Attraction page, cards flip on hover and images enlarge on click.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for suggestions and improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
