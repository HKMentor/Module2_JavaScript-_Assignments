# 📱 Responsive Slider Project

## 📖 About
This project is a **responsive image slider** with thumbnails and overlay text. It is designed to adapt smoothly across devices such as **desktop, tablet, and mobile**.

---

## 🎨 Features
- Responsive design using **CSS Media Queries**
- Image slider with left/right navigation arrows
- Thumbnails with tooltip and horizontal scroll on small screens
- Hero section with responsive typography

---

## ⚙️ Media Queries Used
1. **@media (max-width: 992px)**
   - Slider becomes vertical
   - Thumbnails change to horizontal scroll
   - Tooltip position adjusted

2. **@media (max-width: 600px)**
   - Smaller logo and navbar text
   - Reduced hero section font sizes
   - Smaller slider and thumbnail images
   - Compact overlay text and arrows

---

## 💡 Interview Questions with Answers

### 1. What are media queries in CSS and why are they used?
- Media queries allow us to apply CSS styles based on screen size or resolution.
- They are used to make websites **responsive**.

### 2. What is the difference between max-width and min-width in media queries?
- `max-width`: applies styles when screen is **equal to or smaller** than the given size.  
- `min-width`: applies styles when screen is **equal to or larger** than the given size.

### 3. Why do we use flex-direction: column; in responsive design?
- It stacks elements **vertically**, which improves readability on small screens.

### 4. How does overflow-x: auto help in thumbnails?
- It allows **horizontal scrolling** when content overflows.
- Prevents layout breaking and improves mobile usability.

### 5. Why do we adjust font sizes for mobile devices?
- Smaller screens need **smaller fonts** for readability and proper fit.

---

## 🚀 How to Run
1. Clone this repository
2. Open `index.html` in browser
3. Resize the screen to see responsive effects
