// Feature flag check
function isEnabled(flag) {
  return flags[flag] === true;
}

const flags = { newCheckout: true, oldBanner: false };

function checkout() {
  if (isEnabled("newCheckout")) {
    renderNewCheckout();
  } else {
    renderOldCheckout();
  }
}

function renderNewCheckout() {
  console.log("new checkout flow");
}

function renderOldCheckout() {
  console.log("old checkout flow");
}

checkout();
// retrigger
