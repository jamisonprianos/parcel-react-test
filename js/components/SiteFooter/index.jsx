import React from 'react';
import translate from '../../lib/lang';

import './SiteFooter.scss';

export default class SiteFooter extends React.Component {

  _getCopyrightYears = () => {
    const startYear = 2017;
    const year = (new Date).getFullYear();
    const copyrightYears = year === startYear ? startYear : `${startYear}-${year}`;
    return copyrightYears;
  }

  render = () => {
    const { language } = this.props;
    const _ = translate(language);
    return (
      <footer className="site-footer">
        <span className="copyright-notice">&copy; {this._getCopyrightYears()} Jamison Prianos. {_('ALL_RIGHTS_RESERVED')}.</span>
      </footer>
    );
  }

}
