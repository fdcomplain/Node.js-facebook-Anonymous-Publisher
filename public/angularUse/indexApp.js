var app = angular.module("indexApp",[]);

app.controller("indexBody", function($scope){
    $scope.statementList = [
        "我是誰，不關你的事。",
        "此系統為自動發文，即不經審查，請使用者注意用詞。",
        "暫時不紀錄IP。",
        "此靠北系統送出的言論與系統開發人員與管理員毫無任何關係。",
    ];
});