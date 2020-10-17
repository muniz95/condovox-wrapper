const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  preset: 'ts-jest',
  transform: {
    ...tsjPreset.transform,
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
};