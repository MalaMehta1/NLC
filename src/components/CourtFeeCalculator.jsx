import React, { useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import SectionHeader from './common/SectionHeader';
import { courtFeeData } from '../data';
import {
  COURT_FEE_SLABS,
  calculateCourtFee,
  formatNepaliCurrency,
} from '../utils/courtFee';

const CourtFeeCalculator = () => {
  const [rawAmount, setRawAmount] = useState('');
  const [submittedAmount, setSubmittedAmount] = useState(null);
  const [error, setError] = useState('');

  const result = useMemo(() => {
    if (submittedAmount == null) return null;
    return calculateCourtFee(submittedAmount);
  }, [submittedAmount]);

  const parseAmount = (value) => {
    const cleaned = String(value).replace(/,/g, '').trim();
    if (!cleaned) return NaN;
    return Number(cleaned);
  };

  const handleCalculate = (event) => {
    event.preventDefault();
    const amount = parseAmount(rawAmount);

    if (!Number.isFinite(amount) || amount <= 0) {
      setError('Please enter a valid claim amount greater than zero.');
      setSubmittedAmount(null);
      return;
    }

    setError('');
    setSubmittedAmount(amount);
  };

  const handleReset = () => {
    setRawAmount('');
    setSubmittedAmount(null);
    setError('');
  };

  return (
    <section className="court-fee-section">
      <div className="court-fee-section__inner container">
        <SectionHeader
          titleTxt="Court Fee Calculator"
          subTitleTxt="Estimate civil court fees under Section 69 of Nepal’s National Civil Procedure (Code) Act, 2017."
        />

        <div className="court-fee-layout">
          <div className="court-fee-panel court-fee-panel--form">
            <form className="court-fee-form" onSubmit={handleCalculate} noValidate>
              <div className="court-fee-form__intro">
                <h3>Calculate your court fee</h3>
                <p>Enter the value or claimed amount of the civil suit in Nepali Rupees.</p>
              </div>

              <div className="field-wrap">
                <label className="label" htmlFor="claim-amount">
                  {courtFeeData.form.label}
                </label>
                <input
                  id="claim-amount"
                  className="input-field"
                  type="text"
                  inputMode="decimal"
                  autoComplete="off"
                  placeholder={courtFeeData.form.placeholder}
                  value={rawAmount}
                  onChange={(e) => {
                    setRawAmount(e.target.value);
                    if (error) setError('');
                  }}
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? 'claim-amount-error' : undefined}
                />
                {error ? (
                  <p id="claim-amount-error" className="error" role="alert">
                    {error}
                  </p>
                ) : null}
              </div>

              <div className="court-fee-form__actions">
                <button type="submit" className="btn btn-primary court-fee-form__submit">
                  {courtFeeData.form.calculate}
                </button>
                <button
                  type="button"
                  className="btn court-fee-form__reset"
                  onClick={handleReset}
                >
                  {courtFeeData.form.reset}
                </button>
              </div>

              {result ? (
                <div className="court-fee-result" aria-live="polite">
                  <p className="court-fee-result__label">{courtFeeData.form.resultLabel}</p>
                  <p className="court-fee-result__amount">
                    {formatNepaliCurrency(result.fee)}
                  </p>
                  <p className="court-fee-result__claim">
                    For claim amount {formatNepaliCurrency(submittedAmount)}
                  </p>

                  {result.breakdown.length > 0 ? (
                    <div className="court-fee-breakdown">
                      <h4>{courtFeeData.form.breakdownLabel}</h4>
                      <ul>
                        {result.breakdown.map((row) => (
                          <li key={row.label}>
                            <span>
                              {row.label}
                              <em>
                                {row.rate === 'Flat'
                                  ? 'Flat fee'
                                  : `${row.rate} on ${formatNepaliCurrency(row.portion)}`}
                              </em>
                            </span>
                            <strong>{formatNepaliCurrency(row.amount)}</strong>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              ) : null}

              <p className="court-fee-form__note">{courtFeeData.note}</p>
            </form>
          </div>

          <div className="court-fee-panel court-fee-panel--info">
            <h3 className="court-fee-info-title">{courtFeeData.howTitle}</h3>
            <p className="court-fee-info-text">{courtFeeData.howText}</p>

            <div className="court-fee-table-wrap" role="region" aria-label="Court fee rate table">
              <table className="court-fee-table">
                <thead>
                  <tr>
                    <th scope="col">Amount</th>
                    <th scope="col">Court Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {COURT_FEE_SLABS.map((slab, index) => (
                    <tr key={slab.label}>
                      <td>
                        <span className="court-fee-table__index">
                          {String.fromCharCode(97 + index)}.
                        </span>{' '}
                        {slab.label}
                      </td>
                      <td>{slab.feeLabel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <ul className="court-fee-keypoints">
              {courtFeeData.keyPoints.map((point) => (
                <li key={point.title} className="court-fee-keypoint">
                  <strong>{point.title}</strong>
                  <p>{point.text}</p>
                </li>
              ))}
            </ul>

            <NavLink to="/contact" className="btn btn-primary court-fee-cta">
              Get free consultation
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourtFeeCalculator;
