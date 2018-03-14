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
      message: 'Choose an state key name? must be lowercase with space',
      default: 'object alpha'
    },
    {
      type: 'list',
      name: 'mode',
      message: 'select mode to generate code',
      choices: ['module', 'modal', 'loading', 'generalProp'],
      default: 'module'
    },
    {
      type: 'input',
      name: 'secondObject',
      message: 'Choose an name for the object ? must be lowercase with space',
      default: 'upload loading',
      when: function (prompt) {
        return (prompt.mode === 'loading' || prompt.mode === 'modal' || prompt.mode === 'generalProp');
      }
    },
    {
      type: 'list',
      name: 'type',
      message: 'select type of variable',
      choices: ['string', 'int', 'bool'],
      default: 'string',
      when: function (prompt) {
        return (prompt.mode === 'generalProp');
      }
    }];
    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  convertName(option, name='objectName') {
    var split = this.props[name].split(' ');
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

  findDefaultForType(type) {
    switch (type) {
      case 'string':
        return '\'\'';
      case 'int':
        return '0';
      case 'bool':
        return 'false';
      default:
        return '\'\'';
    }
  }

  writing() {
    switch (this.props.mode) {
      case 'loading': {
        this.fs.copyTpl(
          this.templatePath('Loading.js'),
          this.destinationPath('template/' + this.convertName('upperCamel') + '/' + this.convertName('upperCamel') + 'Loading.js'),
          {
            lowerCamel: this.convertName('lowerCamel'),
            upperCamel: this.convertName('upperCamel'),
            loadingLowerCamel: this.convertName('lowerCamel', 'secondObject'),
            loadingUpperUnderscore: this.convertName('UPPERUnderscore', 'secondObject'),
            loadingUpperCamel: this.convertName('upperCamel', 'secondObject')
          }
        );
        break;
      }      
      case 'modal': {
        this.fs.copyTpl(
          this.templatePath('Modal.js'),
          this.destinationPath('template/' + this.convertName('upperCamel') + '/' + this.convertName('upperCamel') + 'Modal.js'),
          {
            lowerCamel: this.convertName('lowerCamel'),
            upperCamel: this.convertName('upperCamel'),
            lowerSlash: this.convertName('slash'),
            objectLowerCamel: this.convertName('lowerCamel', 'secondObject'),
            objectUpperCamel: this.convertName('upperCamel', 'secondObject'),
            objectUpperUnderscore: this.convertName('UPPERUnderscore', 'secondObject'),
            objectLowerSlash: this.convertName('slash', 'secondObject')
          }
        );
        break;
      }
      case 'module': {
        this.fs.copyTpl(
          this.templatePath('Object.scss'),
          this.destinationPath('template/' + this.convertName('upperCamel') + '/' + this.convertName('upperCamel') + '.scss'),
          {name: this.convertName('slash')}
        );
        this.fs.copyTpl(
          this.templatePath('ObjectContainer.js'),
          this.destinationPath('template/' + this.convertName('upperCamel') + '/' + this.convertName('upperCamel') + 'Container.js'),
          {
            lowerCamel: this.convertName('lowerCamel'),
            upperCamel: this.convertName('upperCamel')
          }
        );
        this.fs.copyTpl(
          this.templatePath('ObjectState.js'),
          this.destinationPath('template/' + this.convertName('upperCamel') + '/' + this.convertName('upperCamel') + 'State.js'),
          {
            lowerCamel: this.convertName('lowerCamel'),
            upperCamel: this.convertName('upperCamel'),
            upperUnderscore: this.convertName('UPPERUnderscore')
          }
        );
        this.fs.copyTpl(
          this.templatePath('ObjectView.js'),
          this.destinationPath('template/' + this.convertName('upperCamel') + '/' + this.convertName('upperCamel') + 'View.js'),
          {
            lowerCamel: this.convertName('lowerCamel'),
            upperCamel: this.convertName('upperCamel')
          }
        );
        this.fs.copyTpl(
          this.templatePath('_specs_/ObjectState.spec.js'),
          this.destinationPath('template/' + this.convertName('upperCamel') + '/_specs_/' + this.convertName('upperCamel') + 'State.spec.js'),
          {
            upperCamel: this.convertName('upperCamel'),
            lowerCamel: this.convertName('lowerCamel'),
            upperUnderscore: this.convertName('UPPERUnderscore')
          }
        );
        this.fs.copyTpl(
          this.templatePath('OtherSnippets.js'),
          this.destinationPath('template/' + this.convertName('upperCamel') + '/' + 'OtherSnippets.js'),
          {
            lowerCamel: this.convertName('lowerCamel'),
            upperCamel: this.convertName('upperCamel'),
            lowerSlash: this.convertName('slash')
          }
        );
        break;
      }
      case 'generalProp': {
        this.fs.copyTpl(
          this.templatePath('generalProp.js'),
          this.destinationPath('template/' + this.convertName('upperCamel') + '/' + 'OtherSnippets.js'),
          {
            lowerCamel: this.convertName('lowerCamel'),
            upperCamel: this.convertName('upperCamel'),
            upperUnderscore: this.convertName('UPPERUnderscore'),
            objectLowerCamel: this.convertName('lowerCamel', 'secondObject'),
            objectUpperCamel: this.convertName('upperCamel', 'secondObject'),
            objectUpperUnderscore: this.convertName('UPPERUnderscore', 'secondObject'),
            objectLowerSlash: this.convertName('slash', 'secondObject'),
            typeLower: this.convertName('lowerCamel', 'type'),
            typeUpperCamel: this.convertName('upperCamel', 'type'),
            defaultValue: this.findDefaultForType(this.props.type),
            type: this.props.type
          }
        );
      }
    }
  }

  install() {
    //this.installDependencies();
  }
};
