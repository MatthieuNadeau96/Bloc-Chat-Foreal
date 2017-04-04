(function() {
    function HomeCtrl(Room, Message, $uibModal) {
        
        this.rooms = Room.all;
        this.currentRoom = null;
        this.currentUser = null;
        
        this.addRoom = function() {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                size: 'sm',
                controller: 'ModalCtrl as modal'
            });
        }
        
        this.setCurrentRoom = function(room) {
            this.currentRoom = room;
            this.messages = Message.getByRoomId(this.currentRoom.$id);
//            this.currentUser = $cookies.blocChatCurrentUser;
        };
        
        this.sendMessage = function() {
            this.newMessage.roomId = this.currentRoom.$id;
            this.newMessage.username = this.currentUser;
            Message.send(this.newMessage);
        };
        
    }
    
    angular 
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();