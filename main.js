// Get the current year for the copyright
$('#year').text(new Date().getFullYear());

// Random Price Generator
let prices = [...$(".card-footer h3")];

$.each([...prices], (i, price) => {
  $(price).text(`$${(Math.floor(Math.random() * 40 + 10))}`);
  console.log(price)
});

