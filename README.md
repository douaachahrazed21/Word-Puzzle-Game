# 🎮 Word Puzzle Game

A fun and interactive word puzzle game where players must complete levels by solving word-based challenges. The game features multiple levels, a win/loss system, and progression tracking using `localStorage`.

---

## 📌 Features
- 🔠 **Multiple Levels**: Players progress through different word puzzles.
- 💾 **Progress Tracking**: The game remembers the current level using `localStorage`.
- 🎉 **Win/Loss System**: Players either proceed to the next level or retry the same level upon failure.
- ⚠️ **Completion Alert**: When all levels are completed, the game notifies the player and resets progress.

---

## 🚀 How to Play
1. Click on letters to fill in the blanks and complete the word.
2. If you get the correct answer:
   - You advance to the next level.
   - If it's the final level, you receive a **congratulatory alert** and return to the main menu.
3. If you enter the wrong word:
   - You are redirected to the **loss page** and can retry the same level.

---

## 🛠️ Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/word-puzzle-game.git
   ```
2. Open the `index.html` file in a browser.

---

## 📂 File Structure
```
📂 word-puzzle-game
├── 📄 index.html          # Main menu
├── 📄 thegame.html        # The game page
├── 📄 winpage.html        # Win page
├── 📄 lostpage.html       # Loss page
├── 📄 stylemain.css       # Main styles
├── 📄 thegame.js          # Game logic
├── 📄 winpage.js          # Win page logic
├── 📄 lostpage.js         # Loss page logic
├── 📄 mainpage.js         # Navigation logic
└── 📄 README.md           # Project documentation
```

---

## 🖥️ Technologies Used
- HTML
- CSS
- JavaScript (Vanilla JS, `localStorage` for progress tracking)

---

## 📢 Contributions
Contributions are welcome! Feel free to fork the project, create a feature branch, and submit a pull request.

---

## 📜 License
This project is licensed under the MIT License. Feel free to modify and use it as you like.

Happy coding! 🎮✨

