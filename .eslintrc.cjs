module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'indent': ['error', 2], // Indentación de 2 espacios
    'linebreak-style': ['error', 'unix'], // Estilo de salto de línea Unix
    'semi': ['warn', 'always'], // Uso obligatorio de punto y coma
    'no-console': 'warn', // Advertencia al usar console.log
    'no-unused-vars': 'error', // Advertencia al tener variables no utilizadas
},
}
