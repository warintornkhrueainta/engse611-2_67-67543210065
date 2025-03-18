const tabButtons = document.querySelectorAll('.tab-btn');

tabButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Remove active class from all buttons and panes
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    
    document.querySelectorAll('.tab-pane').forEach(pane => {
      pane.classList.remove('active');
    });
    
    // Add active class to current button and corresponding pane
    this.classList.add('active');
    const tabId = this.getAttribute('data-tab');
    document.getElementById(tabId).classList.add('active');
  });
});