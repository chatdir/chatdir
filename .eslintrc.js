module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jest": true,
        "node": true
      },
    "parser":"babel-eslint",
    "extends": [
        "eslint:recommended", 
        "plugin:import/errors",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "prettier",
        "prettier/react"
    ],
    "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
      "import",
      "react",
      "jsx-a11y"
    ],
    "rules": {
      "linebreak-style": [
          "error",
          "unix"
      ],
      "react/prop-types": 0
    },
    "settings": {
        "react": {
          "version": "16.5.3"
        } 
      }
};