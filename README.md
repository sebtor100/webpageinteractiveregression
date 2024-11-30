
# Interactive Regression Application

An interactive web-based tool to explore and visualize regression concepts, built using **HTML**, **CSS**, and **JavaScript**. This application provides an intuitive and engaging experience for learning linear and polynomial regression.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [How It Works](#how-it-works)
- [User Interface](#user-interface)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [License](#license)

---

## Overview

The **Interactive Regression Application** is designed to help users understand regression concepts interactively. By plotting points on a canvas and fitting linear or polynomial regression curves, users can dynamically see the corresponding equations, Mean Squared Error (MSE), and how the models adjust to changes in the data. This tool is ideal for students, educators, and data enthusiasts.

---

## Features

- **Interactive Point Plotting**:
  - Add points by clicking on the canvas.
  - Points can be dynamically updated and removed.

- **Regression Curve Fitting**:
  - **Linear Regression**:
    - Fit a straight line (y = mx + b) using the least-squares method.
  - **Polynomial Regression**:
    - Fit a polynomial curve (up to degree 5) by selecting the degree from a dropdown menu.

- **MSE Calculation**:
  - Displays MSE for both linear and polynomial regressions for easy comparison.

- **Dynamic Equation Display**:
  - Real-time equations for linear and polynomial regression are displayed on the canvas.

- **Reset Functionality**:
  - Clear the canvas, reset points, equations, and MSE to start fresh.

- **Responsive Design**:
  - Optimized for various screen sizes and devices.

---

## How It Works

1. **Plot Points**:
   - Click anywhere on the canvas to add points.
   - Points dynamically update the regression models.

2. **Select Regression Type**:
   - Use the dedicated buttons to fit a linear or polynomial regression model.
   - Select the degree of the polynomial (2 to 5) using the dropdown menu.

3. **View Results**:
   - Equations for the regression models are displayed on the canvas.
   - MSE values for both models are displayed above the controls.

4. **Reset**:
   - Click the "Start Again" button to reset the canvas and begin a new session.

---

## User Interface

### **Canvas**:
- Interactive canvas with a structured grid layout for easy visualization of data points and regression curves.

### **Controls**:
- Buttons for fitting linear or polynomial regressions.
- Dropdown menu to select the degree of polynomial regression.
- A "Start Again" button to reset the session.

### **MSE and Equation Display**:
- Displays real-time updates of regression equations and MSE values for both linear and polynomial models.

---

## Technologies Used

- **HTML**: Provides the structure of the web page.
- **CSS**: Adds styling and responsiveness to the user interface.
- **JavaScript**: Implements interactivity, regression calculations, and MSE computation.
- **Math.js**: Handles matrix operations for polynomial regression.

---

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/interactive-regression-app.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd interactive-regression-app
   ```

3. **Open the Application**:
   - Open the `index.html` file in a web browser.

4. **Start Exploring**:
   - Interact with the canvas, fit regression models, and explore the features.

---

Feel free to contribute to this project by creating pull requests or submitting issues. Let's make learning regression more interactive and fun!

