import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import PageBanner from '../components/common/PageBanner';
import CourtFeeCalculator from '../components/CourtFeeCalculator';
import { courtFeeData } from '../data';

const CourtFeeCalculatorPage = () => {
  return (
    <div className="court-fee-page">
      <Header />
      <PageBanner />
      <div className="discription-wrap">
        <p className="text">
          {courtFeeData.intro.map((paragraph, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <>
                  <br />
                  <br />
                </>
              )}
              {paragraph}
            </React.Fragment>
          ))}
        </p>
      </div>
      <CourtFeeCalculator />
      <Footer />
    </div>
  );
};

export default CourtFeeCalculatorPage;
