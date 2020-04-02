const presets = [
    [
      "@babel/env",
      {
        useBuiltIns: "entry", 
        corejs: "3.4.1" 
      }
    ],
  ];
  
  module.exports = { presets };