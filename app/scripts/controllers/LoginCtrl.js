(function() {
    function LoginCtrl($uibModalInstance, $cookies) {
        this.setUsername = function() {
            $cookies.blocChatCurrentUser = this.newUsername;
            
            $uibModalInstance.close();
        };
        
        this.createUsername = function() {
            $cookies.put('blocChatCurrentUser', this.username);
            $uibModalInstance.close();
        };
    }
    
    angular
        .module('blocChat')
        .controller('LoginCtrl', ['$uibModalInstance', '$cookies', LoginCtrl]);
})();