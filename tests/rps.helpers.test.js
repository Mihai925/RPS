describe('getRPSOutcome', function() {
    it('detects invalid inputs', function() {
        expect(getRPSOutcome(['R','P','S'], 'INVALID', 'INVALID')).toBe('INVALID');
        expect(getRPSOutcome(['R','P','S'], 'R', 'Q')).toBe('INVALID');
        expect(getRPSOutcome(['R','P','S'], 'F', 'A')).toBe('INVALID');
    }),
    it('detects when player wins', function() {
        expect(getRPSOutcome(['R','P','S'], 'R', 'S')).toBe('WIN');
        expect(getRPSOutcome(['R','P','S'], 'P', 'R')).toBe('WIN');
        expect(getRPSOutcome(['R','P','S'], 'S', 'P')).toBe('WIN');
    }),
    it('detects when player loses', function() {
        expect(getRPSOutcome(['R','P','S'], 'R', 'P')).toBe('LOSE');
        expect(getRPSOutcome(['R','P','S'], 'P', 'S')).toBe('LOSE');
        expect(getRPSOutcome(['R','P','S'], 'S', 'R')).toBe('LOSE');
    });
});