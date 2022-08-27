$(function(){

    $('a.btn').click(function () { 
        $(this).closest('div').find('ul').slideToggle(500,function(){
            var a=$(this).closest('div').find('a.btn').text();
            if(a=='+'){
                $(this).closest('div').find('a.btn').text('x');
            }
            else{
                $(this).closest('div').find('a.btn').text('+');
            }
        });    
    }); 

    $('span.fa-bars').click(function(){
        $(this).closest('body').find('section.hidden').slideDown(500);
    });

    $('.hidden .cross').click(function(){
        $(this).closest('section.hidden').slideUp(500);
    });

});
var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    
    // autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
  });
  
  var swiper = new Swiper('.blog-slider2', {
    spaceBetween: 30,
    effect: 'fade',
    
    // autoHeight: true,
    pagination: {
      el: '.blog-slider2__pagination',
      clickable: true,
    }
  });
  
  Vue.component('quote-left', {
    template: '#quote-left',
    methods: {} });
  
  Vue.component('quote-right', {
    template: '#quote-right',
    methods: {} });
  
  new Vue({
    el: '#app' });
  
    Vue.component('quote-left2', {
      template: '#quote-left2',
      methods: {} });
    
    Vue.component('quote-right2', {
      template: '#quote-right2',
      methods: {} });
    
    new Vue({
      el: '#app2' });
  
      Vue.component('quote-left3', {
        template: '#quote-left3',
        methods: {} });
      
      Vue.component('quote-right3', {
        template: '#quote-right3',
        methods: {} });
      
      new Vue({
        el: '#app3' });
  
        Vue.component('quote-left4', {
          template: '#quote-left4',
          methods: {} });
        
        Vue.component('quote-right4', {
          template: '#quote-right4',
          methods: {} });
        
        new Vue({
          el: '#app4' });
  
  
      
    
    