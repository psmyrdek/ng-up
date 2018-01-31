<p align="center">
  <img src="https://raw.githubusercontent.com/psmyrdek/ng-up/master/images/logo.png"/>
</p>

<h1 align="center">Up! - Angular Upgrade Toolkit</h1>

<p align="center">Make migration to Angular smoother.</p>

<p align="center">
  <a href="https://travis-ci.org/psmyrdek/ng-up">
    <img alt="Travis" src="https://travis-ci.org/psmyrdek/ng-up.svg?branch=master">
  </a>
  <a href="https://www.npmjs.com/package/ng-up">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/ng-up.svg">
  </a>
</p>

## Installation

`npm install -g ng-up`

## What's inside

⚡️ Up! is a toolkit which helps you migrate your existing AngularJS projects to Angular framework.

🚀 It contains various modules responsible for solving different challenges of migration process.

🔥 Each functionality can be tested using `dry run` mode, so you file system stays untouched until you decide to do so.

## Update templates

#### What problem does it solve?

Down the road of migration process you can easily find many time-consuming challenges, and one of them is updating the syntax of standard directives (`ng-if`, `ng-repeat`, etc...). Knowing the fact that migration is not about introducing any functional changes in your project, Up! tries to update different parts of your template to keep the same behavior of your components as in AngularJS environment.

#### Command

```
ng-up template
```

#### Options

```
-p, --pattern [glob]                 Pattern - glob (default: **/*.html)
-s, --stripTagPrefix [strip]         Strip tag prefix (default: data)
-a, --aliasForThis [alias]           Alias for this (default: $ctrl)
-f, --format [format]                Format (syntax) of template (default: html)
-b, --bindToCurlyBraces [bind]       Transform ng-bind to curly braces binding (default: false)
-c, --classListToRemove [classList]  Comma separated list of classes to remove (default: ng-hide)
-d, --dry                            Dry run - see command output
-h, --help                           output usage information
```

#### Example usage

```
ng-up template -p '**/*.pug' -f 'pug' -a 'vm'
```

#### How it works

Up! reads the content of files matching pattern you've passed to `ng-up template` command, and applies various transformations to be aligned to new Angular syntax (i.e. updating standard directives, removing scope references).

Before - `simple.component.html`:

```
<div>
    <p ng-if="vm.showDetails">Some details</p>
    <ul>
        <li ng-repeat="item in vm.items"></li>
    </ul>
</div>
```

After - `simple.component-ngup.html`:

```
<div>
    <p *ngIf="showDetails">Some details</p>
    <ul>
        <li *ngFor="let item of items"></li>
    </ul>
</div>
```

[Read more about transformation details](https://github.com/psmyrdek/create-angular-template)

## Create providers

#### What problem does it solve?

Hybrid apps based on `@angular/upgrade` can inject already existing AngularJS services into new Angular codebase. To achieve this, you have to manually prepare factory providers for each injectable (i.e. AngularJS service). Up! gives you the possibility to create this kind of providers automatically.

#### Command

```
ng-up provider
```

#### Options

```
-n, --name <serviceName>  Name of AngularJS service
-d, --dry                 Dry run - see command output
-h, --help                output usage information
```

#### Example usage

```
ng-up provider -n AmazingService
```

#### How it works

Up! creates new file based on service name you pass to `ng-up provider` command. Content of this file looks as follows:


```
import { InjectionToken } from "@angular/core";

export const AMAZING_SERVICE_TOKEN = new InjectionToken<any>('AMAZING_SERVICE');

export function AmazingServiceFactory(injector: any) {
    return injector.get('AmazingService')
}

export const AmazingServiceProvider = {
    provide: AMAZING_SERVICE_TOKEN,
    deps: ['$injector'],
    useFactory: AmazingServiceFactory
}
```
Name of the file matches service for which you're creating this provider: `amazing-service.provider.js`

Having this file created, now you can import it and include as a provider inside of Angular module - `AmazingService` is ready to use!

### Components (to be released)

_Create facade directives (using UpgradeComponents) for your existing AngularJS components._

soon...

## Special thanks to

Front-End Team @ [SmartRecruiters](www.smartrecruiters.com)
