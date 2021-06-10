document.getElementById("file_image").onchange = function(e) {
    let reader = new FileReader();
    reader.onload = function(){
     let preview = document.getElementById('preview'),
           image = document.getElementById('prevImage');
 
     image.src = reader.result;
     image.class = "imagen";
     
     preview.append(image);
   };
  
   reader.readAsDataURL(e.target.files[0]);
 }
    document.getElementById('selectImage').addEventListener("change", function(){ 
    document.getElementById('prevImage').src=this.value;
  });