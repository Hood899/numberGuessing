let forme = document.getElementById('temperatureForm');

forme.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const fromUnit = document.getElementById('fromUnit').value;
  const toUnit = document.getElementById('toUnit').value;
  const temperature = parseInt(document.getElementById('temperature').value);
  
  const convertedTemperature = convertTemperature(temperature, fromUnit,  toUnit);
  const resultElement = document.getElementById('result');
  resultElement.textContent = `Resulta :  ${convertedTemperature.toFixed(2)} ${toUnit}`;
});

function convertTemperature(temperature, fromUnit,  toUnit) {
  if (fromUnit === 'fahrenheit') {
    if (toUnit === 'celcius') {
      return (temperature - 32) * 5 / 9;
    } else if (toUnit === 'kelvin') {
      return (temperature - 32) * 5 / 9 + 273.5;
    }
  } else if (fromUnit === 'celcius') {
    if (toUnit === 'fahrenheit') {
      return (temperature * 9 / 5) + 32;
    } else if (toUnit === 'kelvin') {
      return (temperature + 273.5 );
    }
  } else if (fromUnit === 'kelvin') {
    if (toUnit === 'fahrenheit') {
      return (temperature - 273.5 ) * 9 / + 32;
    } else if (toUnit === 'celcius') {
       return (temperature + 273.5 );
    }
  }
  
  return NaN;
}