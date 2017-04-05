(function() {
    function BlocChatCookies($cookies, $uibModal) {
        
        var currentUser = $cookies.get('blocChatCurrentUser');
        
        if (!currentUser || currentUser == '') {
            $uibModal.open({
                templateUrl: '/templates/login.html',
                size: 'sm',
                controller: 'LoginCtrl as login',
                keyboard: false,
                backdrop: 'static'
            });
        }
    }
    
    angular 
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();