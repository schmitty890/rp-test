console.log('the test works!');

var sensor = require('node-dht-sensor');

sensor.read(11, 4, function (err, temperature, humidity) {
  if (!err) {
    console.log(`temp: ${temperature}°C, humidity: ${humidity}%`);
  }
});

// const { Board, Thermometer } = require('johnny-five');
// const board = new Board();

// board.on('ready', () => {
//   const thermometer = new Thermometer({
//     controller: 'DHT11_I2C_NANO_BACKPACK',
//   });
//   console.log(thermometer);
//   console.log('yes we got here');
//   thermometer.on('change', () => {
//     const { celsius, fahrenheit, kelvin } = thermometer;
//     console.log('Thermometer');
//     console.log('  celsius      : ', celsius);
//     console.log('  fahrenheit   : ', fahrenheit);
//     console.log('  kelvin       : ', kelvin);
//     console.log('--------------------------------------');
//   });
// });
