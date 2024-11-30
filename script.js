const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const fitLinear = document.getElementById("fitLinear");
const fitPoly = document.getElementById("fitPoly");
const degreeSelector = document.getElementById("degree");
const linearMSEDisplay = document.getElementById("linearMSE");
const polyMSEDisplay = document.getElementById("polyMSE");
const reset = document.getElementById("reset");

let points = [];
let linearEquation = "";
let polynomialEquation = "";

// Draw a point
function drawPoint(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
}

// Redraw all points and text
function redrawPoints() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const point of points) {
        drawPoint(point.x, point.y);
    }
    displayEquations();
}

// Display regression equations on the canvas
function displayEquations() {
    ctx.fillStyle = "black";
    ctx.font = "14px Arial";
    if (linearEquation) {
        ctx.fillText(`Linear: ${linearEquation}`, 10, 20);
    }
    if (polynomialEquation) {
        ctx.fillText(`Polynomial: ${polynomialEquation}`, 10, 40);
    }
}

// Add point on canvas click
canvas.addEventListener("click", (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    points.push({ x, y });
    redrawPoints();
});

// Linear regression
function fitLinearRegression() {
    if (points.length < 2) return alert("Add at least 2 points!");
    
    const n = points.length;
    const xSum = points.reduce((sum, p) => sum + p.x, 0);
    const ySum = points.reduce((sum, p) => sum + p.y, 0);
    const xySum = points.reduce((sum, p) => sum + p.x * p.y, 0);
    const x2Sum = points.reduce((sum, p) => sum + p.x * p.x, 0);

    const slope = (n * xySum - xSum * ySum) / (n * x2Sum - xSum * xSum);
    const intercept = (ySum - slope * xSum) / n;

    linearEquation = `y = ${slope.toFixed(2)}x + ${intercept.toFixed(2)}`;

    redrawPoints();
    drawLine(slope, intercept);

    const linearMSE = calculateMSE((x) => slope * x + intercept);
    linearMSEDisplay.textContent = `Linear MSE: ${linearMSE.toFixed(2)}`;
}

// Polynomial regression
function fitPolynomialRegression() {
    if (points.length < 2) return alert("Add at least 2 points!");

    const degree = parseInt(degreeSelector.value);
    const X = points.map((p) =>
        Array.from({ length: degree + 1 }, (_, i) => p.x ** i)
    );
    const Y = points.map((p) => [p.y]);

    try {
        // Solve for coefficients using pseudo-inverse (X^T * X)^(-1) * X^T * Y
        const XT = math.transpose(X);
        const XTX = math.multiply(XT, X);
        const XTY = math.multiply(XT, Y);
        const coefficients = math.multiply(math.inv(XTX), XTY);

        polynomialEquation = coefficients
            .map((coef, i) => `${coef[0].toFixed(2)}x^${i}`)
            .reverse()
            .join(" + ");

        redrawPoints();
        drawCurve(coefficients);

        const polyMSE = calculateMSE((x) => {
            return coefficients.reduce((sum, c, i) => sum + c[0] * x ** i, 0);
        });
        polyMSEDisplay.textContent = `Polynomial MSE: ${polyMSE.toFixed(2)}`;
    } catch (error) {
        alert("Error fitting polynomial regression. Try fewer points or a lower degree.");
    }
}

// Draw line for linear regression
function drawLine(slope, intercept) {
    ctx.beginPath();
    ctx.moveTo(0, intercept);
    ctx.lineTo(canvas.width, slope * canvas.width + intercept);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();
}

// Draw curve for polynomial regression
function drawCurve(coefficients) {
    ctx.beginPath();
    ctx.moveTo(0, coefficients[0][0]);

    for (let x = 1; x <= canvas.width; x++) {
        const y = coefficients.reduce((sum, c, i) => sum + c[0] * x ** i, 0);
        ctx.lineTo(x, y);
    }

    ctx.strokeStyle = "green";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();
}

// Calculate and display MSE
function calculateMSE(predictFn) {
    return points.reduce((sum, p) => sum + (p.y - predictFn(p.x)) ** 2, 0) / points.length;
}

// Reset functionality
reset.addEventListener("click", () => {
    points = [];
    linearEquation = "";
    polynomialEquation = "";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    linearMSEDisplay.textContent = "Linear MSE: N/A";
    polyMSEDisplay.textContent = "Polynomial MSE: N/A";
});

// Event listeners for buttons
fitLinear.addEventListener("click", fitLinearRegression);
fitPoly.addEventListener("click", fitPolynomialRegression);
