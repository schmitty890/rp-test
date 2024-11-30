console.log('the test works!');

const sensor = require('node-dht-sensor').promises;

async function readDHT11() {
  try {
    const res = await sensor.read(11, 4); // 11 for DHT11, 4 for GPIO pin
    console.log(
      `Temperature: ${res.temperature.toFixed(
        1
      )}°C, Humidity: ${res.humidity.toFixed(1)}%`
    );
  } catch (err) {
    console.error('Failed to read sensor data:', err);
  }
}

readDHT11();

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
