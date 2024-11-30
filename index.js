console.log('the test works!');

const { Board, Thermometer } = require('johnny-five');
const board = new Board();

board.on('ready', () => {
  const thermometer = new Thermometer({
    controller: 'DHT11_I2C_NANO_BACKPACK',
  });

  thermometer.on('change', () => {
    const { celsius, fahrenheit, kelvin } = thermometer;
    console.log('Thermometer');
    console.log('  celsius      : ', celsius);
    console.log('  fahrenheit   : ', fahrenheit);
    console.log('  kelvin       : ', kelvin);
    console.log('--------------------------------------');
  });
});
