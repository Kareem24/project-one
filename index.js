const date = new Date();
const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
const weekday = days[date.getDay()];
const time = date.getTime();
console.log(time);
const day = document.querySelector('.week');
const seconds = document.querySelector('.sec');
day.textContent = weekday;
seconds.textContent = time

