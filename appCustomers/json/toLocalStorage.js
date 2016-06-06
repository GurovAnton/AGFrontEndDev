var data = [{
  "name": "Anton",
  "email": "anton@gmail.com",
  "telephone": "0952004515",
  "adress": {
    "street": "street str",
    "city": "Kiev",
    "state": "Kiev",
    "zip": "02140"
  }
},
  {
    "name": "Anton1",
    "email": "anton@gmail.com",
    "telephone": "0952004515",
    "adress": {
      "street": "street str",
      "city": "Kiev",
      "state": "Kiev",
      "zip": "02140"
    }
  },
    {
      "name": "Anton",
      "email": "anton@gmail.com",
      "telephone": "0952004515",
      "adress": {
        "street": "street str",
        "city": "Kiev",
        "state": "Kiev",
        "zip": "02140"
      }
    }
];
localStorage.setItem('data', JSON.stringify(data));
