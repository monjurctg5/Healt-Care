import React from 'react';
import QuickLinks from '../QuickLinks/QuickLinks';
import Services from '../Services/Services';

let banner = "https://previews.123rf.com/images/pitinan/pitinan1711/pitinan171100292/90593810-health-insurance-concept-doctor-in-hospital-with-health-insurance-related-icons-in-modern-graphic-in.jpg"
const Home = () => {
    return (
        <div className="">
             <img src={banner} alt=""  height="500px"  width="100%"/>
            <div>
                <QuickLinks></QuickLinks>
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;