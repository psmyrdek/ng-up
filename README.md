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

### Installation

`npm install -g ng-up`

### Templates

_Update your existing templates with new syntax._

Usage:

```
ng-up template
```

Options:

```
-p, --pattern [glob]                 Pattern - glob (default: **/*.html)
-s, --stripTagPrefix [strip]         Strip tag prefix (default: data)
-a, --aliasForThis [alias]           Alias for this (default: $ctrl)
-f, --format [format]                Format (syntax) of template (default: html)
-b, --bindToCurlyBraces [bind]       Transform ng-bind to curly braces binding (default: false)
-c, --classListToRemove [classList]  Comma separated list of classes to remove (default: ng-hide)
-h, --help                           output usage information
```

Example usage:

```
ng-up template -p '**/*.pug' -f 'pug' -a 'vm'
```

[Transformation details](https://github.com/psmyrdek/create-angular-template)

### Providers

_Create Angular providers for AngularJS services._

Usage:

```
ng-up provider
```

Options:

```
-n, --name <serviceName>  Name of AngularJS service
-h, --help                output usage information
```

Example usage:

```
ng-up provider -n AmazingService
```

### Components (to be released)

_Create facade directives (using UpgradeComponents) for your existing AngularJS components._

soon...

## Special thanks to

Front-End Team @ [SmartRecruiters](www.smartrecruiters.com)
