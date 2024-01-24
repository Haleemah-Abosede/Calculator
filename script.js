display = document.querySelector(".display");
buttons = document.querySelectorAll("button");

calculate = (btnValue) => {};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    calculate(e.target.dataset.value);
  });
});

add = (a, b) => {
  return a + b;
};
substract = (a, b) => {
  return a - b;
};
multiply = (a, b) => {
  return a * b;
};
divide = (a, b) => {
  return a / b;
};
