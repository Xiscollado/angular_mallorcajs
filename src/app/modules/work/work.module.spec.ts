import { WorkModule } from './work.module';

describe('WorkModule', () => {
  let workModule;

  beforeEach(() => {
    workModule = new WorkModule();
  });

  it('should create an instance', () => {
    expect(workModule).toBeTruthy();
  })
});
