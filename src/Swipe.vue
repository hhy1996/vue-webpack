<template>
  <div id='swipe-background'>
  <div id='box'>
  <div id='slider' class='swipe'>
    <div class='swipe-wrap'>
      <div class='wrap'>
          <img src="./img/1.png"/>
      </div>
      <div class='wrap'>
        <img src="./img/2.png"/>
      </div>
      <div class='wrap'>
        <img src="./img/3.png"/>
      </div>   
    </div>
  </div>
</div>
<div class='button-box'>
  <div class="button" id="button-first" @click="slideTo(2)" >

  </div>
  <div class="button" @click="slideTo(1)">
    
    </div>
    <div class="button" id="button-last" @click="slideTo(0)">
    
      </div>
</div>
</div>
</template>

<script>
import Swipe from './js/swipe'
import getDom from './js/get'


export default {
    data(){
        return{
           mySwipe: '' 
        }
    },
    created(){

    },
    mounted(){
      var button = document.getElementsByClassName('button');
      var buttonLength =  button.length;
       button[buttonLength-1].style.background = "rgba(230, 227, 50, 0.719)";
      this.mySwipe =new Swipe(getDom('slider'),{
        startSlide: 0,
        speed: 400,
        auto: 3000,
        continuous: true,
        disableScroll: false,
        stopPropagation: false,
        //滑动时的回调函数
        callback: function(index, elem) {
          for(let i = 0;i<buttonLength;i++){
            button[i].style.background = "rgba(247, 244, 108, 0.5)";
            }
            button[buttonLength-1-index].style.background = "rgba(230, 227, 50, 0.719)";
          },   
        transitionEnd: function(index, elem) {}
        }
      );

    },
    methods:{
      slideTo: function (buttonid){
        this.mySwipe.slide(buttonid,400);
      }
    }
  }

</script>


<style scoped>
  .swipe{
   
    overflow: hidden;
    visibility: hidden;
    position: relative;
    max-width:100%;
  }
  .swipe-wrap{  
    overflow: hidden;
    position: relative;

  }
  .swipe-wrap>div{
    float: left;
    position: relative;

  }
  img{
    width: 100%;
    border-radius: 5px;
  }
  #box{
    margin:0 auto;
    width: 100%;
    background: rgba(255, 255, 255, 0); 
    border-radius: 5px;
  }
  #swipe-background{
    max-width: 600px ;
    width: 100%;
    margin:0 auto;
  }
  .button{
    background: rgba(247, 244, 108, 0.5);
    padding: 2% 8%;
float: right;
border-radius: 8px;
margin: 0px 1%;
  }
  .button-box{
    width: 100%;
    background: rgba(255, 255, 255);
     overflow: hidden;
     margin-bottom: 2.5%;
  }
</style>

