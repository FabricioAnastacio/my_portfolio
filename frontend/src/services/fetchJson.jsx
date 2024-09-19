export const fetchJson = () => {
  fetch('./portfolio.json')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};
