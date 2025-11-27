// Investor site JS: contact button and card click animation
document.addEventListener('DOMContentLoaded', function(){
  const contactBtn = document.getElementById('contactInvestor');
  if(contactBtn){
    contactBtn.addEventListener('click', function(){
      const mail = 'founders@empiresports.io';
      window.location.href = 'mailto:' + mail + '?subject=Request%20Investor%20Access';
    });
  }
  document.querySelectorAll('.card').forEach(c=>{
    c.addEventListener('click', function(){
      c.style.transform = 'translateY(-6px)';
      setTimeout(()=> c.style.transform = '', 300);
    });
  });
});
