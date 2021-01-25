# angular-link-lib

This project describes how to make an Angular library source part of an application build so it's not necessary to rebuild the library at every change to test it in an application.

## Add a dev configuration

`angular.json`

```json
{
  "projects": {
    "my-application": {
      "projectType": "application",
      "schematics": {},
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "options": {
            ...
            "stylePreprocessorOptions": {
              "includePaths": [
                "src/styles",
                "node_modules/@olop/ng-scroll/styles"
              ]
            }
          },
          "configurations": {
            "dev": {
              "tsConfig": "tsconfig.app.dev.json",
              "stylePreprocessorOptions": {
                "includePaths": [
                  "src/styles",
                  "../angular-utility/projects/scroll/styles"
                ]
              }
            },
            ...
          }
        },
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "options": {
            "browserTarget": "my-application:build"
          },
          "configurations": {
            "dev": {
              "browserTarget": "my-application:build:dev"
            },
            ...
          }
        }
      }
    }
  }
}
```

## Overwrite the tsconfig

`tsconfig.app.dev.json`

```json
{
  "extends": "./tsconfig.app.json",
  "compilerOptions": {
    "paths": {
      "@olop/ng-attach": ["../angular-utility/projects/attach/src/public-api"],
      "@olop/ng-scroll": ["../angular-utility/projects/scroll/src/public-api"],
      "@olop/ng-translate": ["../angular-utility/projects/translate/src/public-api"],
      "@olop/ng-with": ["../angular-utility/projects/with/src/public-api"]
    }
  }
}
```

## Serve

If I need to work on the library `@olop/ng-scroll`, I link my local node module with the command:

```sh
npm run link:scroll
```

The I run my application with the command:

```sh
ng serve --configuration dev
```