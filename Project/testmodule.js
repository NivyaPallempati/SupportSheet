var app=angular.module("supportsystem",["ngRoute"]);
app.config(function($routeProvider,$locationProvider)
{
$routeProvider.when("/",{
    templateUrl:"login.html"
})
.when("/dashboard",{
    templateUrl:"dashboard.html",
    controller:"dashboardCtrl"
})
.when("/login",{
    templateUrl:"login.html"
});
$locationProvider.html5Mode(true);
$locationProvider.hashPrefix('!');
});


app.controller('loginController',['$scope','$rootScope','$location',function($scope,$rootScope,$location){
    if(userList==null)
    var userList=[];
    $rootScope.enableAction=false;
    $scope.validate=function()
    {
        var user=new Object();
        user.username=$scope.username;
        user.password=$scope.password;
        userList.push(user);
        console.log(userList);
    if($scope.username==="berickso" && $scope.password==="welcome")
    {
        $rootScope.enableAction=true;
        alert("success");
        $rootScope.loggedInUser = true;
         $location.path("/dashboard");
        //$scope.showloginform=false;
    }
}
}
]);

app.controller('dashboardCtrl',['$scope','$rootScope',function($scope,$rootScope)
{ 
     if($rootScope.loggedInUser !=false)
     {
        //
     }
     if($scope.clientList==null)
    $scope.clientList=[];
    $scope.addClient=function()
    {
        var client=new Object();
        client.No=$scope.clientList.length+1;
        client.customer=$scope.customers;
        client.CertificateSent=$scope.CertificateSent;
        client.Partners=$scope.Partners;
        client.Products=$scope.Products;
        client.NumberofLicenses=$scope.NumberofLicenses;
        client.LicenseProcurementDate=$scope.LicenseProcurementDate;
        client.SupportRenewalDate=$scope.SupportRenewalDate;
        client.Status=$scope.Status;
        client.Users=$scope.Users;
        client.Contact=$scope.Contact;
        client.Email=$scope.Email;
        client.Action="";
        $scope.clientList.push(client);
        console.log($scope.clientList);
    }
}]);