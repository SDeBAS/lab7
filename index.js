var app = angular.module('myApp', []);




app.controller('namesCtrl', function ($scope)
 {
    $scope.datum = [
        { id: 1000, name: "Debanjan Basu", date:"30/11/2000", time:"20:30",postext:"Hello connections, this is new video on Web Development"},
        { id: 1001, name: "Ayushya Chongder", date: "10/11/2000", time: "1:30", postext: "Hello connections, this is new video on Android Development" },
        { id: 1002, name: "Rajarshi Barman", date: "7/6/2000", time: "12:00", postext: "Hello connections, this is new video on Full Stack Development" },
        { id: 1003, name: "Darpan Deb", date: "12/5/2000", time: "9:45", postext: "Hello connections, this is new video on Software Enginnering" },
        { id: 1004, name: "Sagnik Mukhopadhyay", date: "2/2/2000", time: "18:05", postext: "Hello connections, this is new video on Microprocessor" },
    ];
});