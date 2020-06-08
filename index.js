var h3 = document.getElementsByTagName("h3"),
    para = document.getElementsByTagName("p"),
    pieces = document.getElementsByClassName("piece"),
    gallery = document.getElementsByClassName("gallery")[0],
    wrapper = document.getElementsByClassName("wrapper")[0],
    close = document.getElementsByClassName("close")[0],
    collapse = document.getElementsByClassName("collapse")[0],
    left = document.getElementsByClassName("left")[0],
    right = document.getElementsByClassName("right")[0];

    // Array.prototype.forEach.call(pieces,function(item){
    //     item.onmouseenter = () =>{
    //
    //     }
    //
    // })
   let x;
   for(let i=0;i<pieces.length;i++){
     x = i;
     pieces[i].onmouseenter = () =>{
       x = i;
      h3[x].style.display = "none";
      para[x].style.display = "none";
     }
     pieces[i].onmouseleave = () =>{
      h3[x].style.display = "block";
      para[x].style.display = "block";
     }
     pieces[i].onclick = () =>{
       gallery.style.display="block";
       wrapper.style.display="none";
       let m = x+1;
       let img = m + ".jpeg" ;
       // console.log(img);
       bgImg = 'url(' +'"'+ 'img/' + img+ '"' + ')';
       // console.log(bgImg);
       gallery.style.backgroundImage = bgImg;
       gallery.style.backgroundSize = "100%";
       close.onmouseenter = () =>{
         collapse.style.display = "block";
       }
       close.onmouseleave = () =>{
         collapse.style.display = "none";
       }
       close.onclick = () =>{
         gallery.style.display = "none";
         wrapper.style.display = "block";
       }

      left.onclick = () =>{
        m--;
        if(m<=0){
          m = 10;
        }
        // console.log(m);
        img = m + ".jpeg" ;
        // console.log(img);
        bgImg = 'url(' +'"'+ 'img/' + img+ '"' + ')';
        // console.log(bgImg);
        gallery.style.backgroundImage = bgImg;
        gallery.style.backgroundSize = "100%";
      }
      right.onclick = () =>{
        m++;
        if(m>10){
          m = 1;
        }
        // console.log(m);
        img = m + ".jpeg" ;
        // console.log(img);
        bgImg = 'url(' +'"'+ 'img/' + img+ '"' + ')';
        // console.log(bgImg);
        gallery.style.backgroundImage = bgImg;
        gallery.style.backgroundSize = "100%";
      }

     }
   }
