/**
 * Created by lx on 2017/6/15.
 */
app.controller('index.ctrl',['$scope',function ($scope) {



}]);
app.controller('message.ctrl', ['$scope', 'messagelist',function ($scope, messagelist) {
    $scope.list = messagelist.getlist1();
    $scope.list2 = messagelist.getlist2();
    $scope.list3 = messagelist.getlist3();
    $scope.Tag = messagelist.gettag();

    $scope.getinfo = function (min, max) {
        return function (item) {
            return item.id >= min && item.id <=max;

        }
    };
}]);
app.controller('case.ctrl',['$scope',function ($scope) {



}]);
app.controller('about.ctrl',['$scope','getInfo',function ($scope,getInfo) {
    $scope.current=1;
    $scope.list=getInfo.getList('certList');
    $scope.bankList=getInfo.getList('bankList');
    $scope.qydt=getInfo.getList('qydt');
    $scope.gsgg=getInfo.getList('gsgg');
    $scope.hydt=getInfo.getList('hydt');
    $scope.mhdt=getInfo.getList('mhdt');



}]);
app.controller('solutions.ctrl',['$scope',function ($scope) {



}]);
app.controller('service.ctrl',['$scope',function ($scope) {



}]);