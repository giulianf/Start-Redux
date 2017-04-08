import React from 'react';
import ImageHome from './ImageHome';
import Features from './Features';
import HowWorks from './HowWorks';
import MoreFeatures from './MoreFeatures';
import DownloadApp from './DownloadApp';
import Newsletter from './Newsletter';

const HomeContent = React.createClass({
  render() {
    return (
      <div>
        {/* Image Home page  */}
        <ImageHome/>
        {/* Features section */}
        <Features/>
        {/* How it works section */}
        <HowWorks />
        {/* More features section */}
        <MoreFeatures/>
        {/* Download application Android or apple section */}
        <DownloadApp/>
        {/* Newsletter section */}
        <Newsletter />

      </div>
    )
  }
});

export default HomeContent;
