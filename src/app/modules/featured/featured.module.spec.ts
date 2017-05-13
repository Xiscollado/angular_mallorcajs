import { FeaturedModule } from './featured.module';

describe('FeaturedModule', () => {
  let featuredModule;

  beforeEach(() => {
    featuredModule = new FeaturedModule();
  });

  it('should create an instance', () => {
    expect(featuredModule).toBeTruthy();
  })
});
