import React from 'react';

import SiteHeader from '../SiteHeader';
import SiteFooter from '../SiteFooter';
import MainContent from '../MainContent';

import 'semantic-ui-css/semantic.min.css';
import './SiteStructure.scss';

export default class SiteStructure extends React.Component {

  constructor(props) {
    super(props);
    this.state = { language: 'en-US' };
  }

  _setLanguage = (language) => {
    this.setState({ language });
  }

  render = () => {
    return (
      <div className="wrap-application">
        <SiteHeader language={this.state.language} setLanguage={this._setLanguage} />
        <MainContent language={this.state.language} />
        <SiteFooter language={this.state.language} />
      </div>
    );
  }

}
