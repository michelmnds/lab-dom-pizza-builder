// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};
// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  const mushrmoomList = document.querySelectorAll('.mushroom');

  mushrmoomList.forEach((mushroom) => {
    if (state.mushrooms) {
      mushroom.style.visibility = 'visible';
    } else {
      mushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  const peperList = document.querySelectorAll('.green-pepper');

  peperList.forEach((peper) => {
    if (state.greenPeppers) {
      peper.style.visibility = 'visible';
    } else {
      peper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  const whiteSauce = document.querySelector('.sauce');

  if (state.whiteSauce) {
    whiteSauce.classList.add('sauce-white');
  } else {
    whiteSauce.classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  const crust = document.querySelector('.crust');

  if (state.glutenFreeCrust) {
    crust.classList.add('crust-gluten-free');
  } else {
    crust.classList.remove('crust-gluten-free');
  }
}

function renderButtons() {
  const btnList = document.querySelectorAll('.btn');

  for (const element in state) {
    btnList.forEach((btn) => {
      const formatedBtn = btn.innerHTML
        .toLowerCase()
        .replace(/ /, '')
        .replace(/-/, '');

      const formatedElement = element.toLowerCase();

      if (formatedBtn == formatedElement && !state[element]) {
        btn.classList.remove('active');
      } else if (formatedBtn == formatedElement && state[element]) {
        btn.classList.add('active');
      }
    });
  }
}

function renderPrice() {
  const asideTotalPrice = document.querySelector('.panel.price strong');

  let totalPrice = 10;

  for (const element in state) {
    if (!state[element]) {
      totalPrice - ingredients[element].price;
    } else {
      totalPrice += ingredients[element].price;
    }
  }

  asideTotalPrice.innerHTML = `$${totalPrice}`;
}

renderEverything();

const pepBtn = document.querySelector('.btn.btn-pepperoni');

pepBtn.addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

const mushBtn = document.querySelector('.btn.btn-mushrooms');

mushBtn.addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

const pprBtn = document.querySelector('.btn.btn-green-peppers');
pprBtn.addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

const sauceBtn = document.querySelector('.btn.btn-sauce');

sauceBtn.addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

const crustBtn = document.querySelector('.btn.btn-crust');

crustBtn.addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
