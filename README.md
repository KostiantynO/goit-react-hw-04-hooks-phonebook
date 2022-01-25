I can use `git clone https://github.com/goitacademy/react-homework-template`

But I copied the zip.

```shell
mkdir goit-react-hw-04-hooks-phonebook
cd !$
code .

cp -r ../react-homework-template-main/ ./
npm i
npm i -D prettier eslint styled-components nanoid prop-types react-icons react-toastify

git remote add origin https://github.com/KostiantynO/goit-react-hw-04-hooks-phonebook.git
```

`package.json`

```
  "homepage": "https://KostiantynO.github.io/goit-react-hw-04-hooks-phonebook",
```

`jsconfig.json`

```json
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"],
  "exclude": ["node_modules", "build"]
}
```

```gitignore
.eslintcache
```
