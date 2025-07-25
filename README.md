# 🎬 MovieApp — Explore & Track Movies Easily

A modern and responsive movie search application built using **React** and the **OMDb API**. Search your favorite movies, get detailed information, and manage your personal favorites — all with a clean and intuitive UI.

![MovieApp Banner](https://github.com/sharad641/movie_app/blob/main/public/1.png)

---

## 🔗 Live Preview

| 🔍 Home Search Page | 🎞️ Movie Details Page |
|--------------------|------------------------|
| ![Home](https://github.com/sharad641/movie_app/blob/main/public/1.png) | ![Details](https://github.com/sharad641/movie_app/blob/main/public/2.png) |

---

## 🚀 Features

- 🔍 Real-time movie search using OMDb API
- 📄 Detailed view for each movie (plot, actors, IMDb rating, etc.)
- 💖 Add or remove movies from your favorites list
- 🎨 Light/Dark mode toggle for better user experience
- 📱 Fully responsive design for mobile and desktop
- ⚡ Built with React Hooks and modern component architecture

---

## 🛠️ Tech Stack

- **Frontend**: React.js, JSX, CSS
- **API**: [OMDb API](https://www.omdbapi.com/)
- **Environment Config**: `.env` for API key
- **Tooling**: Vite / Create React App

---

## 📁 Project Structure

```bash
movie_app/
├── public/
│   ├── 1.png
│   ├── 2.png
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── SearchBar.js
│   │   ├── MovieCard.js
│   │   ├── MovieDetails.js
│   │   └── Favorites.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── .env
├── package.json
└── README.md

⚙️ Setup Instructions
1. Clone the Repository
git clone https://github.com/sharad641/movie_app.git
cd movie_app
2. Install Dependencies
npm install

3. Add Your OMDb API Key
Get a free API key from: https://www.omdbapi.com/apikey.aspx

Create a .env file in the root directory:

REACT_APP_OMDB_API_KEY=your_api_key_here
4. Start the App
npm start
App runs locally at http://localhost:3000
📌 Future Improvements
🔐 Add login/authentication for personalized lists

🎯 Filter movies by genre, rating, or year

🌐 Add infinite scroll or pagination

📝 Enable user-submitted reviews or comments

📲 Convert app to a PWA (Progressive Web App)


🙋‍♂️ Author
Sharad S
🔗 GitHub Profile


---

You can now copy and paste this into your `README.md` file in your GitHub repo. Let me know if you want:

- Badges (stars, forks, license)
- Deployment steps (Netlify, Vercel)
- A version using `Tailwind CSS` or custom themes

Happy coding! 🎥💻
