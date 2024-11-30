console.log('the test works!');

// var sensor = require('node-dht-sensor');

// sensor.read(11, 4, function (err, temperature, humidity) {
//   if (!err) {
//     console.log(`temp: ${temperature}°C, humidity: ${humidity}%`);
//   }
// });

const sensor = require('node-dht-sensor').promises;

async function exec() {
  try {
    const res = await sensor.read(11, 4);
    console.log(
      `temp: ${res.temperature.toFixed(1)}°C, ` +
        `humidity: ${res.humidity.toFixed(1)}%`
    );
  } catch (err) {
    console.error('Failed to read sensor data:', err);
  }
}

exec();

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
