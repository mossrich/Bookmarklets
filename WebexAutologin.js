//1. First click (if an HTML document is loaded) - Navigates to the webex URL if the login form is not showing. 
//2. Second click (after page loads) - fill name and email, then fire events to trigger Vue.js validation and enable the Join button
//3. Third click - pushes the 'Join Now' button  

// To install: 
// Change the parameters in the script below and remove line breaks, then paste into a new bookmark on your bookmarks bar. 
// Make sure 'javascript:' is preserved at the beginning of the URL

javascript: (function(n,e,L){
  if(!window.document || window.document.getElementsByClassName('el-input__inner').length==0){
    window.location = L
  }else{ 
    var inputs=window.document.getElementsByClassName('el-input__inner');
    inputs[0].value=n; 
    inputs[1].value=e; 
    var  evt = document.createEvent('HTMLEvents');
    evt.initEvent('input', true, true);
    inputs[0].dispatchEvent(evt);
    inputs[1].dispatchEvent(evt);
    setTimeout(window.document.getElementsByClassName('el-button')[5].click(), 2000);}}
)('My Name','Email.Address@example.com','https://www.webex.com/meet/yourURLhere')
