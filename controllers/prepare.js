app.controller('prepare', function($scope,sharedProperties) {
    $("#album-preview").append(sharedProperties.getObject());
});