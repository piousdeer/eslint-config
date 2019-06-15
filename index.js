module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],

  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },

  env: {
    es6: true,
    node: true,
    browser: true
  },

  rules: {
    /*
      Rules 'no-unused-vars', 'no-use-before-define', 'camelcase', 'func-call-spacing', 'indent'
      and 'no-array-constructor' are set to 'off' because they're handled by @typescript-eslint/eslint-plugin.
    */

    // Possible Errors
    'no-extra-parens': 'error',
    'no-misleading-character-class': 'error',
    'no-prototype-builtins': 'error',
    'require-atomic-updates': 'error',

    // Best Practices
    'array-callback-return': 'error',
    'curly': ['warn', 'multi-line'],
    'dot-location': ['warn', 'property'],
    'dot-notation': 'warn',
    'eqeqeq': ['error', 'always', {
      'null': 'ignore'
    }],
    'no-caller': 'error',
    'no-else-return': 'warn',
    'no-empty-function': 'warn',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'warn',
    'no-floating-decimal': 'warn',
    'no-implicit-coercion': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-multi-spaces': ['warn', {
      'ignoreEOLComments': true
    }],
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-proto': 'error',
    'no-return-assign': 'warn',
    'no-return-await': 'warn',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': 'error',
    'no-unused-vars': 'off',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-concat': 'warn',
    'no-useless-return': 'error',
    'no-with': 'error',
    'prefer-promise-reject-errors': 'error',
    'radix': 'warn',
    'yoda': 'warn',

    // Variables
    'no-shadow': 'error',
    'no-use-before-define': 'off',

    // Stylistic Issues
    'array-bracket-newline': ['warn', 'consistent'],
    'array-bracket-spacing': 'warn',
    'block-spacing': 'warn',
    'brace-style': ['warn', '1tbs', {
      'allowSingleLine': true
    }],
    'camelcase': 'off',
    'comma-dangle': 'warn',
    'comma-spacing': 'warn',
    'comma-style': 'warn',
    'computed-property-spacing': 'warn',
    'eol-last': 'warn',
    'func-call-spacing': 'off',
    'function-paren-newline': ['warn', 'consistent'],
    'indent': 'off',
    'jsx-quotes': ['warn', 'prefer-single'],
    'key-spacing': 'warn',
    'keyword-spacing': 'warn',
    'lines-between-class-members': 'warn',
    'new-cap': ['warn', {
      'newIsCap': true,
      'capIsNew': false
    }],
    'new-parens': 'warn',
    'no-array-constructor': 'off',
    'no-mixed-operators': ['error', {
      'groups': [
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof']
      ]
    }],
    'no-multiple-empty-lines': ['warn', {
      'max': 1,
      'maxEOF': 0
    }],
    'no-new-object': 'error',
    'no-tabs': 'warn',
    'no-trailing-spaces': 'warn',
    'no-unneeded-ternary': ['warn', {
      'defaultAssignment': false
    }],
    'no-whitespace-before-property': 'warn',
    'object-curly-spacing': ['warn', 'always'],
    'one-var': ['warn', {
      'initialized': 'never'
    }],
    'operator-linebreak': ['warn', 'after'],
    'padded-blocks': ['warn', {
      'blocks': 'never',
      'switches': 'never',
      'classes': 'never'
    }],
    'quotes': ['warn', 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],
    'semi': ['warn', 'never'],
    'semi-spacing': 'warn',
    'space-before-blocks': 'warn',
    'space-before-function-paren': 'warn',
    'space-in-parens': 'warn',
    'space-infix-ops': 'warn',
    'space-unary-ops': 'warn',
    'spaced-comment': ['warn', 'always', {
      'line': {
        'markers': ['*package', '!', '/', ',', '=']
      },
      'block': {
        'balanced': true,
        'markers': ['*package', '!', ',', ':', '::', 'flow-include'],
        'exceptions': ['*']
      }
    }],
    'template-tag-spacing': 'warn',

    // ECMAScript 6
    'arrow-body-style': 'warn',
    'arrow-parens': ['warn', 'as-needed', {
      'requireForBlockBody': false
    }],
    'arrow-spacing': 'warn',
    'generator-star-spacing': ['warn', 'after'],
    'no-duplicate-imports': 'warn',
    'no-useless-computed-key': 'warn',
    'no-useless-constructor': 'warn',
    'no-useless-rename': 'warn',
    'no-var': 'error',
    'object-shorthand': ['warn', 'always', {
      'avoidExplicitReturnArrows': true
    }],
    'prefer-arrow-callback': 'warn',
    'prefer-const': 'error',
    'prefer-destructuring': ['warn', {
      'array': false
    }],
    'prefer-numeric-literals': 'warn',
    'prefer-rest-params': 'error',
    'prefer-spread': 'warn',
    'prefer-template': 'off',
    'rest-spread-spacing': 'warn',
    'template-curly-spacing': 'warn',
    'yield-star-spacing': 'warn',

    // @typescript-eslint/eslint-plugin
    '@typescript-eslint/adjacent-overload-signatures': 'warn',
    '@typescript-eslint/array-type': 'warn',
    '@typescript-eslint/camelcase': ['warn', {
      'properties': 'never'
    }],
    '@typescript-eslint/class-name-casing': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': ['error', {
      'accessibility': 'no-public'
    }],
    '@typescript-eslint/func-call-spacing': 'warn',
    '@typescript-eslint/indent': ['warn', 2, {
      'SwitchCase': 1
    }],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/member-delimiter-style': ['warn', {
      'multiline': {
        'delimiter': 'comma',
        'requireLast': false
      },
      'singleline': {
        'delimiter': 'comma',
        'requireLast': false
      }
    }],
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-use-before-define': ['error', {
      'functions': false,
      'classes': true
    }],
    '@typescript-eslint/no-var-requires': 'off' // Conflicts with JavaScript+Node.
  }
}
