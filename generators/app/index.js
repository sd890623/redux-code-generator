'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);
  }
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the code ' + chalk.red('generator-redux-modules') + ' generator!'
    ));

    const prompts = [{
      type: 'input',
      name: 'objectName',
      message: 'Choose an object name? must be lowercase with space',
      default: 'object alpha'
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  convertName(option) {
    var split = this.props.objectName.split(' ');
    var result = '';
    for (var i = 0; i < split.length; i++) {
      switch (option) {
        case 'slash': {
          if (i === split.length - 1) {
            result += split[i];
          } else {
            result += split[i] + '-';
          }
          break;
        }
        case 'upperCamel': {
          result += split[i].charAt(0).toUpperCase() + split[i].slice(1);
          break;
        }
        case 'lowerCamel': {
          if (i === 0) {
            result += split[i];
          } else {
            result += split[i].charAt(0).toUpperCase() + split[i].slice(1);
          }
          break;
        }
        case 'UPPERUnderscore': {
          if (i === split.length - 1) {
            result += split[i].toUpperCase();
          } else {
            result += split[i].toUpperCase() + '_';
          }
          break;
        }
        default:
          result = 'error';
          break;
      }
    }
    return result;
  }

  writing() {
    this.fs.copyTpl(
      // SCSS
      this.templatePath('Object.scss'),
      this.destinationPath('template/' + this.convertName('upperCamel') + '/' + this.convertName('upperCamel') + '.scss'),
      {name: this.convertName('slash')}
    );
    this.fs.copyTpl(
      // SCSS
      this.templatePath('ObjectContainer.js'),
      this.destinationPath('template/' + this.convertName('upperCamel') + '/' + this.convertName('upperCamel') + 'Container.js'),
      {
        lowerCamel: this.convertName('lowerCamel'),
        upperCamel: this.convertName('upperCamel')
      }
    );
    this.fs.copyTpl(
      // SCSS
      this.templatePath('ObjectState.js'),
      this.destinationPath('template/' + this.convertName('upperCamel') + '/' + this.convertName('upperCamel') + 'State.js'),
      {
        lowerCamel: this.convertName('lowerCamel'),
        upperCamel: this.convertName('upperCamel'),
        upperUnderscore: this.convertName('UPPERUnderscore')
      }
    );
    this.fs.copyTpl(
      // SCSS
      this.templatePath('ObjectView.js'),
      this.destinationPath('template/' + this.convertName('upperCamel') + '/' + this.convertName('upperCamel') + 'View.js'),
      {
        lowerCamel: this.convertName('lowerCamel'),
        upperCamel: this.convertName('upperCamel')
      }
    );
    this.fs.copyTpl(
      // SCSS
      this.templatePath('_specs_/ObjectState.spec.js'),
      this.destinationPath('template/' + this.convertName('upperCamel') + '/_specs_/' + this.convertName('upperCamel') + 'State.spec.js'),
      {
        upperCamel: this.convertName('upperCamel'),
        lowerCamel: this.convertName('lowerCamel'),
        upperUnderscore: this.convertName('UPPERUnderscore')
      }
    );
    this.fs.copyTpl(
      // SCSS
      this.templatePath('OtherSnippets.js'),
      this.destinationPath('template/' + this.convertName('upperCamel') + '/' + 'OtherSnippets.js'),
      {
        lowerCamel: this.convertName('lowerCamel'),
        upperCamel: this.convertName('upperCamel'),
        lowerSlash: this.convertName('slash')
      }
    );
  }

  install() {
    //this.installDependencies();
  }
};
