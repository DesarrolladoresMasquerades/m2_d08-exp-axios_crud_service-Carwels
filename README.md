[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=7042079&assignment_repo_type=AssignmentRepo)
# ExpressJS server boilerplate

<img src="https://buttercms.com/static/images/tech_banners/webp/ExpressJS.b7bdb4190ea4.webp" alt="ExpressJS" width="500"/>

<hr>

ExpressJS backend boilerplate including:

- **Views Template**: Handlebars
- **CSS Engine**: SCSS - Node-sass-middleware
- **ODM**: Mongoose
- **UI Framework**: Bootstrap

Pre-populated with Express middlewares:

- **Logger**: morgan
- **HTTP POST Params**: body-parser
- **Cookies**: cookie-parser

Facilities:

- Gitignore file
- Seeds file
- Error handling

## Directory structure

```

express-generator/
├── app.js
├── package.json
├── .gitignore
├── routes
│   │── index.js
│   └── base.routes.js
├── models
│   └── user.model.js
├── utils
│   └── index.js
├── middlewares
│   └── index.js
├── views
│   │── layout.hbs
│   │── errors
│   │   │── not-found.hbs
│   │   └── server-error.hbs
│   │── pages
│   │   └── index.hbs
│   └── partials
├── public
│   ├── img
│   ├── js
│   │   └── script.js
│   └── css
│       └── styles.sass
├── config
│   │── db.config.js
│   │── debug.config.js
│   │── hbs.config.js
│   │── locals.config.js
│   │── middleware.config.js
│   │── sass.config.js
│   └── views.config.js
└── bin
    ├── seeds.js
    └── www

```

## Install

- Run `npm i` on the root directory

## Run

- Create a `.env` file on the root directory to link the MongoDB URI (`MONGODB_URI`) and port (`PORT`)
- Run `npm run dev` command on the root directory
