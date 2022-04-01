module.exports = {
  extends: [
    '@bsc/eslint-config/base-react-jsx',
    '@bsc/eslint-config/base-typescript',
    '@bsc/eslint-config/perf-react-jsx',
    'plugin:prettier/recommended',
  ],
  globals: {
    JSX: false,
  },
  rules: {
    'prettier/prettier': 'warn',
    // Typescript rules that have equivalent regular eslint rules.
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'warn',
    'no-undef': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'warn',
      {
        functions: true,
        classes: true,
        variables: true,
      },
    ],
    // Typescript rules marked as warn until Typescript is used properly.
    '@typescript-eslint/no-inferrable-types': 'warn',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/ban-types': 'warn',
    // Eslint import plugin currently does not support package.json exports resolution.
    // Ignore internal libraries using exports field for now.
    'import/no-unresolved': [
      'error',
      {
        commonjs: true,
        caseSensitive: true,
        ignore: ['vtb-app/store'],
      },
    ],
    // TODO: These rules need to be fixed.
    'array-callback-return': ['warn', { allowImplicit: true }],
    'arrow-body-style': ['warn', 'as-needed', { requireReturnForObjectLiteral: false }],
    camelcase: 'warn',
    'consistent-return': 'warn',
    'default-case': ['warn', { commentPattern: '^no default$' }],
    'dot-notation': [
      'warn',
      {
        allowKeywords: true,
        allowPattern: '',
      },
    ],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-confusing-arrow': ['off', { allowParens: true }],
    'no-continue': 'off',
    'no-else-return': ['warn', { allowElseIf: false }],
    'no-lonely-if': 'warn',
    'no-mixed-operators': 'warn',
    'no-nested-ternary': 'off',
    'no-param-reassign': [
      'warn',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc',
          'accumulator',
          'e',
          'ctx',
          'req',
          'request',
          'res',
          'response',
          'staticContext',
        ],
      },
    ],
    'no-plusplus': 'warn',
    'no-prototype-builtins': 'warn',
    'no-restricted-globals': ['warn', 'isFinite', 'isNaN'],
    'no-return-assign': ['warn', 'except-parens'],
    'no-underscore-dangle': [
      'warn',
      {
        allow: ['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'],
        allowAfterThis: false,
        allowAfterSuper: false,
        enforceInMethodNames: true,
      },
    ],
    'no-var': 'warn',
    'object-shorthand': [
      'warn',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    'one-var': ['warn', 'never'],
    'operator-assignment': ['warn', 'always'],
    'prefer-const': [
      'warn',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      },
    ],
    'prefer-destructuring': [
      'warn',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: true,
        },
      },
      { enforceForRenamedProperties: false },
    ],
    'prefer-template': 'warn',
    quotes: [
      'warn',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: false,
      },
    ],
    radix: 'warn',
    'vars-on-top': 'warn',
    // React rules.
    'class-methods-use-this': 'warn',
    'lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: false }],
    'max-classes-per-file': ['warn', 1],
    'react/jsx-curly-brace-presence': [
      'warn',
      {
        props: 'never',
        children: 'never',
      },
    ],
    'react/jsx-fragments': ['warn', 'syntax'],
    'react/jsx-no-bind': [
      'warn',
      {
        ignoreRefs: false,
        allowArrowFunctions: false,
        allowBind: false,
      },
    ],
    'react/no-this-in-sfc': 'warn',
    'react/no-unused-state': 'warn',
    'react/no-unused-prop-types': 'warn',
    'react/sort-comp': 'warn',
    'react/state-in-constructor': ['warn', 'always'],
    'react/static-property-placement': ['warn', 'static public field'],
    'max-lines': ['error', { max: 300 }],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
  },
}
