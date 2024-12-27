import './styles.css';

class Popover {
    constructor(triggerElement, title, content) {
      this.triggerElement = triggerElement;
      this.title = title;
      this.content = content;
  
      this.popover = null;
      this.init();
    }
  
    init() {
      this.triggerElement.addEventListener('click', () => this.togglePopover());
    }
  
    togglePopover() {
      if (this.popover) {
        this.removePopover();
      } else {
        this.createPopover();
      }
    }
  
    createPopover() {
      this.popover = document.createElement('div');
      this.popover.className = 'popover';
      this.popover.innerHTML = `
        <div class="popover-header">${this.title}</div>
        <div class="popover-body">${this.content}</div>
      `;
  
      document.body.appendChild(this.popover);
  
      const { top, left, width } = this.triggerElement.getBoundingClientRect();
      const { offsetHeight, offsetWidth } = this.popover;
  
      this.popover.style.top = `${top - offsetHeight}px`;
      this.popover.style.left = `${left + width / 2 - offsetWidth / 2}px`;
    }
  
    removePopover() {
      this.popover.remove();
      this.popover = null;
    }
  }
  
  export default Popover;
  
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.popover-button');
    new Popover(button, 'HA-HA-HA', 'это была ловушка джовушкера');
  });
  