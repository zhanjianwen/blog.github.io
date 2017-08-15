/**
 * Created by lx on 2017/6/14.
 */
//1.angular模块
var app=angular.module('obj',['ui.router']);

//angular config

app.config(['$stateProvider','$urlRouterProvider','$locationProvider',function ($stateProvider,$urlRouterProvider,$locationProvider) {
    $locationProvider.hashPrefix('');
    $stateProvider.state('index',{
        url:'/index',
        views:{
            "mainview":{
                templateUrl:'./tpls/index.tpl.html',
                controller:'index.ctrl'
            }
        }
    }).state('message',{
        url:'/message',
        views:{
            "mainview":{
                templateUrl:'./tpls/message.tpl.html',
                controller:'message.ctrl'
            }
        }
    }).state('case',{
        url:'/case',
        views:{
            "mainview":{
                templateUrl:'./tpls/case.tpl.html',
                controller:'case.ctrl'
            }
        }
    }).state('solutions',{
        url:'/solutions',
        views:{
            "mainview":{
                templateUrl:'./tpls/solutions.tpl.html',
                controller:'solutions.ctrl'
            }
        }
    }).state('service',{
        url:'/service',
        views:{
            "mainview":{
                templateUrl:'./tpls/service.tpl.html',
                controller:'service.ctrl'
            }
        }
    }).state('about',{
        url:'/about',
        views:{
            "mainview":{
                templateUrl:'./tpls/about.tpl.html',
                controller:'about.ctrl'
            }
        }
    }).state('message.design', {
        url: '/design',
        views: {
            "messageview": {
                templateUrl: './tpls/message/message_design.tpl.html',
                controller: 'message.ctrl'
            }
        }
    }).state('message.program', {
        url: '/program',
        views: {
            "messageview": {
                templateUrl: './tpls/message/message_program.tpl.html',
                controller: 'message.ctrl'
            }
        }
    }).state('message.build', {
        url: '/build',
        views: {
            "messageview": {
                templateUrl: './tpls/message/message_build.tpl.html',
                controller: 'message.ctrl'
            }
        }
    }).state('message.phone', {
        url: '/phone',
        views: {
            "messageview": {
                templateUrl: './tpls/message/message_phone.tpl.html',
                controller: 'message.ctrl'
            }
        }
    }).state('message.experience', {
        url: '/experience',
        views: {
            "messageview": {
                templateUrl:'./tpls/message/message_experience.tpl.html',
                controller: 'message.ctrl'
            }
        }
    }).state('message.problem', {
        url: '/problem',
        views: {
            "messageview": {
                templateUrl: './tpls/message/message_problem.tpl.html',
                controller: 'message.ctrl'
            }
        }
    }).state('message.WEB', {
        url: '/WEB',
        views: {
            "messageview": {
                templateUrl: './tpls/message/message_WEB.tpl.html',
                controller: 'message.ctrl'
            }
        }
    }).state('about.certificate',{
        url:'/certificate',
        views:{
            "aboutview":{
                templateUrl:'./tpls/about/about.certificate.html',
                controller:'about.ctrl'
            }
        }
    }).state('about.news',{
        url:'/news',
        views:{
            "aboutview":{
                templateUrl:'./tpls/about/about.news.html',
                controller:'about.ctrl'
            }
        }
    }).state('about.jobs',{
        url:'/jobs',
        views:{
            "aboutview":{
                templateUrl:'./tpls/about/about.jobs.html',
                controller:'about.ctrl'
            }
        }
    }).state('about.pay',{
        url:'/pay',
        views:{
            "aboutview":{
                templateUrl:'./tpls/about/about.pay.html',
                controller:'about.ctrl'
            }
        }
    }).state('about.contact',{
        url:'/contact',
        views:{
            "aboutview":{
                templateUrl:'./tpls/about/about.contact.html',
                controller:'about.ctrl'
            }
        }
    }).state('about.leituo',{
        url:'/leituo',
        views:{
            "aboutview":{
                templateUrl:'./tpls/about/about.leituo.html',
                controller:'about.ctrl'
            }
        }
    }).state('about.detail',{
        url:'/detail',
        views:{
            "aboutview":{
                templateUrl:'./tpls/about/about.detail.html',
                controller:'about.ctrl'
            }
        }
    });
    $urlRouterProvider.otherwise('/index');
}])
;
app.directive('iheader',function () {
    return {
        restrict:'ECMA',
        templateUrl:'./tpls/index.header.html',
        link:function () {
            var mySwiper = new Swiper ('.swiper-container', {
                direction: 'horizontal',
                loop: true,
                // 分页器
                pagination: '.swiper-pagination',
                // 滚动条
                scrollbar: '.swiper-scrollbar',
                slidesPerView : 'auto',
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                loopedSlides :4,
                onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
                    swiperAnimateCache(swiper); //隐藏动画元素
                    swiperAnimate(swiper); //初始化完成开始动画
                },
                onSlideChangeEnd: function(swiper){
                    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
                },
                paginationClickable: true,
                spaceBetween: 30,
                centeredSlides: true,
                autoplay: 4000,
                autoplayDisableOnInteraction: false

            }) ;
        }
    }
});
//angular run()