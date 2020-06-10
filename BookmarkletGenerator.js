// A bookmarklet that can generate another bookmarklet to re-fill a form with current values.  

// To install: 
// Paste the script below into a new bookmark named 'Bookmarklet Generator' on your bookmarks bar - it may be necessary to remove line breaks in some browsers. 
// Make sure 'javascript:' is preserved at the beginning of the URL

//To use: 
//1. Browse to a page with a form, and fill it with values you want to preserve
//2. Click the 'Bookmarklet Generator' on your bookmarks bar - a window will open that has links for each form with child elements
//3. One of the links will have values you want to preserve - drag it to your bookmarks bar and rename it, if desired. 
//4. Next time you navigate to that page, click the 'Form 0' link and your form will be re-filled with the same values. 

javascript:(function(){
newwin = window.open('', 'codewin', 'HEIGHT=250,WIDTH=600,resizable=1');
var doc = newwin.document;
doc.title = 'Bookmarklet Generator';
doc.write('Drag the link for the form to your bookmarks toolbar<br/><table>');
for(var f=0; f < document.forms.length; f++){
	if(document.forms[f].elements.length > 0) {
		var formName = document.forms[f].id ? document.forms[f].id : 'form ' + f;
		doc.write('<a href="javascript:(function(){f=document.forms[' + f + '];');
		var formValues = '';
		for(var i=0; i < document.forms[f].elements.length; i++) {
			var e = document.forms[f].elements[i];
			if(!e.name || e.type == "hidden" || e.type == "submit" ) continue;
			if( e.type == "radio" && e.checked ) {
				formValues += 'f[\'' + e.name + '\'].checked=true';
			}else {
				var value = e.value;value = value.replace('"', '\\"');
				formValues += 'f[\'' + e.name + '\'].value=\''+value+'\'';
			}
			formValues += ';\n';
		}
		doc.write(formValues + '})()">' + formName + '</a><br/>' + formValues + '<br/><br/>' );
	}
}
doc.close();
newwin.focus();})()
