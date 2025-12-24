let expression = "";
let result = 0;

const expressionEl = document.getElementById("expression");
const resultEl = document.getElementById("result");

function appendNumber(num) {
    expression += num;
    updateDisplay();
}

function appendOperator(op) {
    expression += ` ${op} `;
    updateDisplay();
}

function appendDot() {
    expression += ".";
    updateDisplay();
}

function updateDisplay() {
    expressionEl.innerText = expression;
}

function clearAll() {
    expression = "";
    resultEl.innerText = "0";
    updateDisplay();
}


function calculate() {
        result = eval(expression);
        resultEl.innerText = result;

        saveHistory(expression, result);
        expression = result.toString();
        updateDisplay();
}

function toggleHistory() {
    const panel = document.getElementById("historyPanel");

    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        renderHistory();
        panel.style.display = "block";
    }
}
function renderHistory() {
    const history = JSON.parse(localStorage.getItem("calc_history")) || [];
    const list = document.getElementById("historyList");

    list.innerHTML = "";

    if (history.length === 0) {
        list.innerHTML = "<li>Chưa có lịch sử</li>";
        return;
    }

    history.reverse().forEach(item => {
        const li = document.createElement("li");
        li.innerText = `[${item.timestamp}] ${item.expression} = ${item.result}`;
        list.appendChild(li);
    });
}
function saveHistory(expression, result) {
    const history = JSON.parse(localStorage.getItem("calc_history")) || [];

    history.push({
        timestamp: new Date().toLocaleString(),
        expression: expression,
        result: result
    });

    localStorage.setItem("calc_history", JSON.stringify(history));
}


