import trialDivision from '../trialDivison';

describe('trialDivison', () => {
  it('should find prime numbers', () => {
    expect(trialDivision(1)).toBeFalsy();
    expect(trialDivision(2)).toBeTruthy();
    expect(trialDivision(3)).toBeTruthy();
    expect(trialDivision(4)).toBeFalsy();
    expect(trialDivision(5)).toBeTruthy();
    expect(trialDivision(11)).toBeTruthy();
    expect(trialDivision(12)).toBeFalsy();
    expect(trialDivision(14)).toBeFalsy();
    expect(trialDivision(191)).toBeTruthy();
    expect(trialDivision(192)).toBeFalsy();
    expect(trialDivision(199)).toBeTruthy();
    expect(trialDivision(200)).toBeFalsy();
    expect(trialDivision(400)).toBeFalsy();
    expect(trialDivision(401)).toBeTruthy();
    expect(trialDivision(1001234123412411)).toBeFalsy();
  });
});
