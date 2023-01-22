function langName(name, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
       tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
       tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(name).style.display = "block";
    elmnt.style.backgroundColor = color;
 }
 // Get the element with id="defaultOpen" and click on it
 document.getElementById("defaultOpen").click();


//  var minOffset = 200;
// var maxOffset = 600;

// $('.handle').mousedown(function(ev, handler) {
//   $(document).mousemove(function(ev, handler) {
//     var offset = ev.pageX;
    
//     offset = offset < minOffset ? minOffset : offset;
//     offset = offset > maxOffset ? maxOffset : offset;
    
//     $('.sidebar').css('width', offset);
//     $('.content').css('marginLeft', offset + 10);
//   });
// });

// $(document).mouseup(function(e) {
//   $(document).unbind('mousemove');
// });