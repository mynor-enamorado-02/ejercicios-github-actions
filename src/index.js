const _ = require('lodash');
const express = require('express');

function sumArray(numbers) {
  return _.sum(numbers);
}

function averageArray(numbers) {
  return _.mean(numbers);
}

if (require.main === module) {
  const app = express();
  const PORT = process.env.PORT || 3000;
  
  app.get('/', (req, res) => {
    const numbers = [1, 2, 3, 4, 5];
    const result = {
      sum: sumArray(numbers),
      average: averageArray(numbers),
      timestamp: new Date().toISOString()
    };
    res.json(result);
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = { sumArray, averageArray };