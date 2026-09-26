/** Progressive court fee slabs under Section 69, National Civil Procedure (Code) Act, 2017. */
export const COURT_FEE_SLABS = [
  { max: 25_000, rate: null, flat: 500, label: 'Upto 25,000', feeLabel: 'Rs. 500/- (Five hundred rupees only)' },
  { max: 50_000, rate: 0.05, label: '25,001 to 50,000', feeLabel: '5% of the amount' },
  { max: 100_000, rate: 0.035, label: '50,001 to 1,00,000', feeLabel: '3.5% of the amount' },
  { max: 500_000, rate: 0.02, label: '1,00,001 to 5,00,000', feeLabel: '2% of the amount' },
  { max: 2_500_000, rate: 0.015, label: '5,00,001 to 25,00,000', feeLabel: '1.5% of the amount' },
  { max: Infinity, rate: 0.01, label: 'More than 25,00,000', feeLabel: '1% of the amount' },
];

/**
 * Calculate court fee for a monetary civil claim (progressive / cumulative).
 * @param {number} claimAmount
 * @returns {{ fee: number, breakdown: Array<{ label: string, portion: number, amount: number }> } | null}
 */
export function calculateCourtFee(claimAmount) {
  const amount = Number(claimAmount);
  if (!Number.isFinite(amount) || amount <= 0) return null;

  const breakdown = [];
  let remaining = amount;
  let previousMax = 0;
  let fee = 0;

  for (const slab of COURT_FEE_SLABS) {
    if (remaining <= 0) break;

    const slabWidth = slab.max === Infinity ? remaining : slab.max - previousMax;
    const portion = Math.min(remaining, slabWidth);

    let slabFee = 0;
    if (slab.flat != null && previousMax === 0) {
      slabFee = slab.flat;
    } else if (slab.rate != null) {
      slabFee = Math.round(portion * slab.rate * 100) / 100;
    }

    if (portion > 0) {
      const rateLabel =
        slab.flat != null && previousMax === 0
          ? 'Flat'
          : `${Number((slab.rate * 100).toFixed(2))}%`;
      breakdown.push({
        label: slab.label,
        portion,
        amount: slabFee,
        rate: rateLabel,
      });
      fee += slabFee;
      remaining -= portion;
    }

    previousMax = slab.max;
  }

  return {
    fee: Math.round(fee * 100) / 100,
    breakdown,
  };
}

/** Format NPR with Indian/Nepali grouping (e.g. 25,00,000). */
export function formatNepaliCurrency(value, { withSymbol = true } = {}) {
  const num = Number(value);
  if (!Number.isFinite(num)) return withSymbol ? 'Rs. 0' : '0';

  const fixed = Number.isInteger(num) ? String(Math.round(num)) : num.toFixed(2);
  const [intPart, decPart] = fixed.split('.');
  const lastThree = intPart.slice(-3);
  const other = intPart.slice(0, -3);
  const grouped = other
    ? `${other.replace(/\B(?=(\d{2})+(?!\d))/g, ',')},${lastThree}`
    : lastThree;

  const formatted = decPart ? `${grouped}.${decPart}` : grouped;
  return withSymbol ? `Rs. ${formatted}` : formatted;
}
