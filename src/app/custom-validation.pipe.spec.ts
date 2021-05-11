import { CustomValidationPipe } from './custom-validation.pipe';

describe('CustomValidationPipe', () => {
  const pipe = new CustomValidationPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('validate "109"', () => {
    // 0 = validated
    expect(pipe.transform('109')).toBe(0);
  });
  it('validate "test"', () => {
    // Not an integer error number
    expect(pipe.transform('test')).toBe(1);
  });
  it('validate "11"', () => {
    // Too short error number
    expect(pipe.transform('11')).toBe(2);
  });
});
