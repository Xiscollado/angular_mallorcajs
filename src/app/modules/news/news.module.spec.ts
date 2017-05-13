import { NewsModule } from './news.module';

describe('NewsModule', () => {
  let newsModule;

  beforeEach(() => {
    newsModule = new NewsModule;
  });

  it('should create an instance', () => {
    expect(newsModule).toBeTruthy();
  })
});
