import * as fs from 'fs'

const today = new Date();
const localLang = 'en-US';

const longDateOptions: Intl.DateTimeFormatOptions = {
  weekday: 'long',  
  year: 'numeric',
  month: 'long', 
  day: 'numeric'
};

const shortDateOptions: Intl.DateTimeFormatOptions = {
  weekday: 'short',  
  year: 'numeric',
  month: 'short', 
  day: 'numeric'
};

const todaysDateLong = today.toLocaleString(localLang, longDateOptions);
const todaysDateShort = today.toLocaleString(localLang, shortDateOptions);

fs.readFile('template.md', 'utf8', ((err, data) => {
  if (err) {
    return console.log(err);
  }
  var result = data.replace('[Date Placeholder]', todaysDateLong);

  fs.writeFile(`${todaysDateShort}.md`, result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}));
