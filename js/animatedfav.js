document.head = document.head || document.getElementsByTagName('head')[0];
function changeFavicon(src) {
    var link = document.createElement('link'), oldLink = document.getElementById('dynamic-favicon');
    link.id = 'dynamic-favicon';
    link.rel = 'shortcut icon';
    link.href = src;
    if (oldLink) {
        document.head.removeChild(oldLink);
    }   `   `
    document.head.appendChild(link);
    }
function animate(){
    if ( typeof animate.i == 'undefined' ) {
        animate.i = 0;
    }
    switch(animate.i) {
        case 0:
            changeFavicon("data:image/gif;base64,R0lGODlhEAAQAPIAAAwFc5xwAuYqAOZzAOakAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAFACwAAAAAEAAQAAADOliw3K0uykbIjPXSanUdQ3cRIChipCCEI6iyUpC+RBA49rzWdpOTpdpExqncIrZkMrZcKBmKHvJYSAAAOw==");
            break;
        case 1:
            changeFavicon("data:image/gif;base64,R0lGODlhEAAQAPIAAAwFc5xwAuYqAOZzAOakAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAFACwAAAAAEAAQAAADO1iw3K0uykXIjNVeRkbd1CBqVyd6ZScI6GSubRSoMBEEzk2z9t3ophFOMstUhrmb0idTMpYMBTO5KCQAADs=");
            break;
        case 2:
            changeFavicon("data:image/gif;base64,R0lGODlhEAAQAPIAAAwFc5xwAuYqAOZzAOakAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAFACwAAAAAEAAQAAADOViw3K0uykWmJNU2nDUgA+aBQthdg6CeEamGU+CWRBA49hzaN5ODg2AtxuH0cLykRLlgAhS2Za+QAAA7");
            break;
        case 3:
            changeFavicon("data:image/gif;base64,R0lGODlhEAAQAPIAAAwFc5xwAuYqAOZzAOakAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAFACwAAAAAEAAQAAADO1iw3K0uykXIjNVeRkbd1CBqVyd6ZScI6GSubRSoMBEEzk2z9t3ophFOMstUhrmb0idTMpYMBTO5KCQAADs=");
            break;
        case 4:
            changeFavicon("data:image/gif;base64,R0lGODlhEAAQAPIAAAwFc5xwAuYqAOZzAOakAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAFACwAAAAAEAAQAAADOliw3K0uykbIjPXSanUdQ3cRIChipCCEI6iyUpC+RBA49rzWdpOTpdpExqncIrZkMrZcKBmKHvJYSAAAOw==");
            break;
        case 5:
            changeFavicon("data:image/gif;base64,R0lGODlhEAAQAPIAAAwFc5xwAuYqAOZzAOakAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAFACwAAAAAEAAQAAADO1iw3K0uSkfIpPWyOvLlQ6cRYWhNnCCIaKiyUUCqKxEEzj2/9t3opJJtIqsYcbGb0pdkApYMhfOHLCQAADs=");
            break;
    }
    animate.i = animate.i + 1;
    if(animate.i == 6){
        animate.i = 0;
    }
}
setInterval(animate,500);