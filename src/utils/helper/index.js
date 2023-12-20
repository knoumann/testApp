export const LARGE = 'large';
export const SMALL = 'small';

export const millisToMinutesAndSeconds = millis => {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
};

export function convertINRtoUSD(amount) {
  const usdAmount = amount / 83.18;
  return `$ ${usdAmount.toFixed(1)}`; // Adjust as needed based on your precision requirements
}

export const DateFn = dateString => {
  var getDate = new Date(dateString);
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return (
    getDate.getDate() +
    '-' +
    monthNames[getDate.getMonth()].slice(0, 3) +
    '-' +
    getDate.getFullYear()
  );
};

export const randomNumbers = () => {
  let arr = [1, 5];
  // Get a random index from the array
  let randomIndex = Math.floor(Math.random() * arr.length);
  // Get the corresponding element from the array
  return arr[randomIndex];
};

export const randomImage = ['https://picsum.photos/200'];
