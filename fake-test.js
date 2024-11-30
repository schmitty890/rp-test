console.log('fake test');

var sensor = require('node-dht-sensor');

sensor.initialize({
  test: {
    fake: {
      temperature: 21,
      humidity: 60,
    },
  },
});

sensor.read(11, 4, function (err, temperature, humidity) {
  if (!err) {
    console.log(
      `temp: ${temperature.toFixed(1)}°C, ` +
        `humidity: ${humidity.toFixed(1)}%`
    );
  }
});
