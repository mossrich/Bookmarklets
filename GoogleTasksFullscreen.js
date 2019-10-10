//Navigates to Google tasks with only tasks showing on first click. The screen will be blank in some browsers when it fully loads. 
//Once page loads, click again to remove the styling that hides the task list. 

//To install the bookmarklet, remove line breaks from the script below and paste it into a new bookmark on your bookmarks bar. 
//Make sure the 'javascript:' text at the beginning is preserved. 

javascript: var L='https://tasks.google.com/embed/?origin=https://calendar.google.com&fullWidth=1'; 
if(!window.location.href.startsWith('https://tasks.google.com/embed/')){
  window.location = L
}else{
  document.querySelector('body').style.display=null; 
}
