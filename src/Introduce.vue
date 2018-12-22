<template>
<div id="introduce-background">
  <div id="introduce-group">
  </div>

  <div class="spinner1">
    <Spinner />
  </div>
  <div class="null">
    <h2>没有更多了</h2>
  </div>
</div>
</template>

<script>
import Spinner from './Spinner.vue'
import $ from 'jquery'
export default {
    data(){
        return{
         
        }
    },
    created(){
      document.getElementsByClassName('spinner2')[0].style.display = "inline";
    },
    mounted(){
           // $(document).ready(function(){
                          
            document.getElementsByClassName('intro')[0].style.background = 'rgba(246, 250, 21, 0.63)';
            document.getElementsByClassName('foo')[0].style.background = 'rgba(0, 0, 0, 0.377)';
        $(".spinner2").hide();
    
        $(".null").hide();
        var imgId = 1;
        var isHave = 1;
        var isFinished = 1;
        var imgGot = [];
        var imgSrcs = {};
        var a = $("#introduce-background").width();
        function setFont(){
           $(".font > .a").css("font-size",a*0.035);
           $(".font > .b").css("font-size",a*0.035);
           $(".font > .c").css("font-size",a*0.03);
           }


  $(window).resize(function(){
    a = $("#introduce-background").width();
    setFont()
  });

  var documentHeight = parseFloat($(document.body).height());
    var windowHeight = parseFloat($(window).height());
    var scrollTop = parseFloat($(window).scrollTop());
  function Append(){
    if(windowHeight/(windowHeight+scrollTop-documentHeight) >= 0.95) {
      isFinished = 0;
      getJson(imgId);
    }
  }
  Append();
  $(window).scroll(function(){
    if ((isHave == 1)&&(isFinished = 1)){
    documentHeight = parseFloat($(document.body).height());
    windowHeight = parseFloat($(window).height());
    scrollTop = parseFloat($(window).scrollTop());
    Append();
    }
  });
  function setSrc(id,url){
        $('.image'+id).attr('src',url);
      };
  function getJson(imgId1){
    if(imgId1 > 1){
      setSrc(imgId1-1,imgSrcs[imgId1-1]);
      console.log(imgId1);
    }
    $(".spinner1").show();
    $.getJSON( "http://129.204.83.166:8081/getJSON?imgId="+imgId1,function(result){
    //"http://127.0.0.1:8081/getJSON?imgId="+imgId1
      if (imgGot.indexOf(imgId1) == -1){
        imgGot.push(imgId1);
        imgId=imgId1 + 1;
            var imgUrl =  result["url"];
      if(imgUrl == null){
        isHave = 0;
      $(".spinner1").hide();
      $(".null").show();
      setFont();
       }else{
         imgSrcs[imgId1] = imgUrl;
        var title = result["title"];
        var content = result["content"];
        var other = result["other"];
       $("#introduce-group").append(
       "<div class='introduce'><div class='image-box'><img class='image image"+imgId1+"' src='' /></div><div class='font'><div class='a'><b>"+title+"</b></div><div class='b'>"+content+"</div><div class='c'>"+other+"</div></div></div>"
       );
       setFont();
       documentHeight = parseFloat($(document.body).height());
       windowHeight = parseFloat($(window).height());
       scrollTop = parseFloat($(window).scrollTop());
       $(".spinner1").hide();
       isFinished = 1;
       Append();
      };
      }

    });
  }
    //  });
    },

    methods:{
      setSrc: function(id,url){
        $('.image'+id).attr('src',url);
      }
      
    },
    components:{
      Spinner
    }
  }

</script>

<style>
.introduce{
  float: left;
  width: 45%;
  background: rgba(255, 255, 255, 0.719);
  height: 0;
  padding: 1% 1% 55% 1%;
  margin: 1.5%;
  border-radius: 10px;
}
.introduce > .image-box{
  background:url(./img/default.jpg) no-repeat;
  background-size: 100%;
  height: 0;
  padding-bottom: 80.73%; 
  width: 100%;
  border-radius: 10px;
}
.image-box > .image{
  width: 100%;
  border-radius: 10px;
}
.clear{
  clear: both;
}
.introduce > .font{
  width:90%;
  margin: 0 auto;
}
.font > .a{
 margin-bottom: 2%;  
}
.font > .b{
 margin-bottom: 4%;  
 color: rgb(39, 37, 37);
}
.font > .c{
  text-align: right;
 margin-bottom: 2%;  
 color: rgba(155, 0, 0, 0.795);
}

</style>

<style scoped>
#introduce-group{
  width: 100%;
  margin:0 auto;
 overflow: hidden;
 background: rgba(255, 255, 255,0.795);
} 

.null{
  text-align:center;

}

</style>

