import React from 'react';
import translate from '../../lib/lang';
import { Button, Flag } from 'semantic-ui-react';

import './SiteHeader.scss';

export default class SiteHeader extends React.Component {

  componentDidMount = () => {
    const { language } = this.props;
    const _ = translate(language);
    document.title = _('APPLICATION_TITLE');
  }

  render = () => {
    const { language, setLanguage } = this.props;
    const _ = translate(language);
    return (
      <header className="site-header">
        <h1>{_('APPLICATION_TITLE')}</h1>
        <div className="authentication-buttons">
          <Flag name="us" onClick={() => setLanguage('en-US')} />
          <Flag name="es" onClick={() => setLanguage('es')} />
          <Button basic inverted>{_('LOGIN_LINK')}</Button>
          <Button positive>{_('SIGNUP_LINK')}</Button>
        </div>
      </header>
    );
  }

}
