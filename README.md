# TV Show Discovery App

A web application inspired by StumbleUpon that allows users to discover random TV shows through API calls. Users can explore new content and customize their experience by banning specific attributes they don't want to see.

## Features

- **Random TV Show Discovery**: Click the "Discover" button to fetch a random TV show from the TVMaze API
- **Show Information Display**: Each show displays:
  - Show image
  - Show name
  - Genres (clickable)
  - Language (clickable)
  - Network (clickable)
- **Ban List System**: 
  - Click any attribute to add it to your ban list
  - Banned attributes are excluded from future results
  - Click ban list items to remove them
- **Smart Filtering**: The app automatically skips shows that match banned attributes
- **Responsive Design**: Clean, modern UI that works on different screen sizes

## How to Use

1. **Discover Shows**: Click the "Discover" button to see a random TV show
2. **Ban Attributes**: Click on any genre, language, or network to ban it from future results
3. **Manage Ban List**: View your banned attributes at the bottom of the page
4. **Remove Bans**: Click on any banned attribute to remove it from the ban list

## Technologies Used

- **React**: Frontend framework
- **Vite**: Build tool and development server
- **TVMaze API**: Free public API for TV show data
- **CSS**: Custom styling for modern UI

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/shubhivermax/Week5CodePathProject.git
cd Week5CodePathProject
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

## API Information

This app uses the [TVMaze API](https://www.tvmaze.com/api), a free public API that provides comprehensive TV show data including:
- Show information (name, image, summary)
- Genres and categories
- Network and language information
- Cast and crew details

## Project Structure

```
src/
├── App.jsx          # Main application component
├── App.css          # Application styles
├── main.jsx         # Application entry point
└── index.css        # Global styles
```

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Note**: This project was created as part of a coding bootcamp assignment to demonstrate API integration, state management, and user interaction in React applications.
