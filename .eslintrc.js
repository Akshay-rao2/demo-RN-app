module.exports = {
  "parser": "babel-eslint",
  "extends": [
      "eslint-config-airbnb"
  ],
  "plugins": [
      "react",
      "react-native"
  ],
  "rules": {
    "react/prop-types": 0, // TODO: add PropTypes and enable this rule
    "react/destructuring-assignment": [1, "always", { "ignoreClassFields": true }],
      "react/jsx-filename-extension": [1, { "extensions": [".js"] }],
      // "id-match": [2, "^[a-z]+([A-Z][a-z]+)*$"],
      "import/no-extraneous-dependencies": [
        "error",
        {
          "devDependencies": [
            "**/__tests__/**",
            "./src/redux/store.js"
          ]
        }
      ]
  },
  "root": true,
  "settings": {
    "import/resolver": "react-native"
  },
  "env": {
      "jest": true
  },
  "globals": {
    "navigator": true
  }
};

