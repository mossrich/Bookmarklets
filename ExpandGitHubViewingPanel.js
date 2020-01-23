//Viewing a whole file with long lines is difficult in GitHub because the viewing window is narrow and the horizontal scroll bar is on the bottom. 
//This bookmarklet expands the viewable code area to grow with the window, or goes to github.com if the container is not found on the page
javascript: (document.getElementsByClassName('container-lg')[2] || location.replace('https://github.com/')).style.maxWidth = "100%"; void(0);
