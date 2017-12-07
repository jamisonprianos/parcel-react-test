import React from 'react';
import LoginForm from '../LoginForm';

import './MainContent.scss';

export default class MainContent extends React.Component {

  render = () => {
    const { language } = this.props;
    return (
      <section className="main-content">
        <LoginForm language={language} />
      </section>
    );
  }

}
