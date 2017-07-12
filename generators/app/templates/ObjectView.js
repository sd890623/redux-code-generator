import PropTypes from 'prop-types';
import React, { Component } from 'react';
import bindAll from 'lodash/bindAll';
import { translate } from 'react-i18next';
import './<%= upperCamel %>.scss';
import Title from '../../components/Title/Title';

class <%= upperCamel %>View extends Component {
  constructor(props) {
    super(props);
    bindAll(this, []);
  }

  render() {
    const { t } = this.props;
    return (
      <div>
        <Title
          title={t('common:<%= lowerCamel %>.title')}
          subtitle={t('common:<%= lowerCamel %>.subtitle')}
        />
      </div>
    );
  }
}

<%= upperCamel %>View.propTypes = {
  t: PropTypes.func.isRequired,
  get<%= upperCamel %>: PropTypes.func.isRequired,
  <%= upperCamel %>: PropTypes.string.isRequired
};

export default translate(['common'], { wait: true })(<%= upperCamel %>View);
