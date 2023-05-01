


$(document).ready(function(){
    $(".primary").fadeOut(1000).fadeIn(1000).slideUp().slideDown();
   // $("p").hide('slide',{direction:'left'},1000);
   $("#home p").slideUp().slideDown();
})

$("button").on("click",function(){

       
       
        $(".primary").slideUp().slideDown().html("<h1>Content-Writer|</h1><h1>Public-Speaker</h1>")
        setTimeout(function(){

                $(".primary").fadeOut().fadeIn().css('color','#ff7611');
                $("#home p").css('color','#1fa3d7');

        } , 1000);

        setTimeout(function(){
               
                $(".primary").css('color','#1fa3d7');
                $("#home p").css('color','#ff7611');
               

        } , 3000);
        setTimeout(function(){
                $(".primary").text("Full-Stack Web Developer")
        },5000)
   
   
});


// skills section

var arr1 = ["https://c8.alamy.com/comp/2F42FE5/orange-3d-html5-icon-isolated-on-white-background-2F42FE5.jpg","https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png","https://thumbs.dreamstime.com/b/javascript-logo-editorial-illustrative-white-background-javascript-logo-editorial-illustrative-white-background-eps-download-208329460.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrad5oSzQQS8lqC3ogPcaIRfrud01uDkj9BA&usqp=CAU","https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png","https://www.freeiconspng.com/uploads/c--logo-icon-8.png","https://cdn.freebiesupply.com/logos/thumbs/1x/java-1-logo.png","https://cdn.freebiesupply.com/logos/large/2x/bootstrap-4-logo-png-transparent.png"]

var arr2 = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl2u4hi1WetHZw4YkwfFHCf4pQMCLFTyB1vw&usqp=CAU","jujj80.png","jujj50.png","jujj50.png","jujj10.jfif","jujj80.png","jujj50.png","jujj80.png"];

$("#flip-button").click(function() {
        for(var i = 0;i<8;i++){
        $('.img'+ (i+1) ).toggleClass("flipped");
        if ($('.img'+ (i+1)).hasClass("flipped")) {
          $('.img'+ (i+1)).attr("src", arr2[i]);
          $('.img'+ (i+1)).attr("alt", "Image 2");
        } else {
          $('.img'+ (i+1)).attr("src", arr1[i]);
          $('.img'+ (i+1)).attr("alt", "Image 1");
        }
}
      });

       
      