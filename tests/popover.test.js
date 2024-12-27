import Popover from '../src/index';

test('should create and remove popover on click', () => {
  document.body.innerHTML = '<button class="popover-button"></button>';
  const button = document.querySelector('.popover-button');
  const popover = new Popover(button, 'Test Title', 'Test Content');

  button.click();
  expect(document.querySelector('.popover')).not.toBeNull();

  button.click();
  expect(document.querySelector('.popover')).toBeNull();
});
