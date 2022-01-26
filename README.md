I can use `git clone https://github.com/goitacademy/react-homework-template.git`

But I copied the zip.

```shell
mkdir goit-react-hw-04-hooks-phonebook
cd !$
code .

# capital R is a MUST HAVE, because .github folder will not be copied otherwise.
cp -R ../react-homework-template-main/ ./

npm i
npm i -D prettier eslint styled-components nanoid prop-types react-icons react-toastify

git remote add origin https://github.com/KostiantynO/goit-react-hw-04-hooks-phonebook.git

gca "initial"
gph

cp -R ../react-homework-template-main/.github/ ./
```

`package.json`

```json
  "homepage": "https://KostiantynO.github.io/goit-react-hw-04-hooks-phonebook",

  "lint-staged": {
    "*.{js,jsx}": "eslint --cache --fix",
    "*.{js,jsx,css,sass,md}": "prettier --write"
  }
```

`jsconfig.json`

```json
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "exclude": ["node_modules", "build"],
  "include": ["src"]
}
```

`.gitignore`

```
.eslintcache
```
