<template>
<div id="router-background">
    <div class="router-button-group">
        <div class="intro router-button" @click="pushToIntro" @mousedown="downIntro">
       
        </div>
        <div class="split">
       
        </div>
        <div class="foo router-button" @click="pushToFoo" @mousedown="downFoo">
       
        </div>
    </div>

 <div class="spinner2">
        <Spinner />
    </div>
   <router-view></router-view>

       <div class="space">
    </div>

</div>
</template>

<script>
import Spinner from './Spinner.vue'
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const Introduce = ()=>{

      return  import(/* webpackChunkName: "group-introduce" */ './Introduce.vue').then();
    
}
const Foo = ()=>{
    return import(/* webpackChunkName: "group-foo" */ './Foo.vue').then();
}

/*
const Foo = resolve => {
    console.log("Foo1");
    require.ensure(['./Foo.vue'], () => {
        resolve(require('./Foo.vue'));
        console.log("Foo2");
  },'Foo')
};
const Introduce = resolve => {
    console.log("Introduce1");
    require.ensure(['./Introduce.vue'], () => {
        resolve(require('./Introduce.vue'));
        console.log("Introduce2");
  },'Introduce')
};
*/
const nullTemplate = {
    template:'<div>null</div>'
}
const routes = [
    {
        path:"/",
        component: Introduce
    },
    {
        path:"/foo",
        component: Foo 
    },

];
var router = new VueRouter({
        routes
    })
export default {
    data(){
        return{

        }
    },
    created(){

    },
    mounted(){
        document.getElementsByClassName('intro')[0].style.background = 'rgba(246, 250, 21, 0.63)';
        document.getElementsByClassName('foo')[0].style.background = 'rgba(0, 0, 0, 0.377)';
  
    },
    methods:{
      pushToFoo:function(){

          this.$router.push({
              path:'/foo',
          });
      },
      downFoo: function(){

          var fooBackground = document.getElementsByClassName('foo')[0].style.background;
          if(fooBackground.indexOf('0, 0, 0') >= 0){
              this.oldFoo = 'rgba(0, 0, 0, 0.377)';
              document.getElementsByClassName('foo')[0].style.background = 'rgba(70, 71, 1, 0.822)';
          }
      },
      
        pushToIntro:function(){

          this.$router.push({
              path:'/',
          });
      },
      downIntro: function(){
        var introBackground = document.getElementsByClassName('intro')[0].style.background;
          if(introBackground.indexOf('0, 0, 0') >= 0 ){  
              this.oldIntro = 'rgba(0, 0, 0, 0.377)';
               document.getElementsByClassName('intro')[0].style.background = 'rgba(70, 71, 1, 0.822)';
          }
      },

    },
    components:{
        Spinner
    },
    router
}

</script>
>

<style scoped>
#router-background{
  width: 100%;
  max-width: 600px;
  background:rgba(105, 105, 104, 0.151);
  margin: 0 auto;
  padding: 0.15%;
}
.router-button-group{
    position: fixed;
    overflow: hidden;
      width: 100%;
      max-width: 600px;
  background:rgba(0, 0, 0, 0.692);
  margin: 0 auto;
  bottom: 0;
}
.router-button{
    width: 30%;
    height: 0;
    padding-bottom: 7%;
   
    float: left;
    margin: 1% 9.95% 1% 9.95%;
}
.intro{

   border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
    border-top-left-radius: 100%;
  border-bottom-left-radius: 100%;
}
.foo{
 
  border-top-right-radius: 100%;
  border-bottom-right-radius: 100%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

}
.split{
    float: left;
    height: 0;
    padding-bottom: 6%;
    width:0.2%;
    background: rgba(255, 255, 255, 0.808);
    margin: 1.5% 0px 1.5% 0px;
}
.space{
    width: 100%;
    background: rgba(199, 196, 196, 0.719);
    padding-bottom: 9%;
    height: 0;
}
</style>
