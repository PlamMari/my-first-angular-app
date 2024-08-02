import { SecondCustomPipe } from './second-custom.pipe';

describe('SecondCustomPipe', () => {
  it('create an instance', () => {
    const pipe = new SecondCustomPipe();
    expect(pipe).toBeTruthy();
  });
});
