console.log('the test works!');

// var sensor = require('node-dht-sensor');

// sensor.read(11, 4, function (err, temperature, humidity) {
//   console.log(temperature);
//   console.log(humidity);
//   if (!err) {
//     console.log(`temp: ${temperature}°C, humidity: ${humidity}%`);
//   } else {
//     console.log('an error has occured');
//     console.log(err);
//   }
// });

const sensor = require('node-dht-sensor').promises;
sensor.setMaxRetries(10);
sensor.initialize(11, 4);
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
