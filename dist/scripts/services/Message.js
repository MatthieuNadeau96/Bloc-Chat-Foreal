(function() {
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
        Messages.all = messages;
    
        return {
            getByRoomId: function(roomId) {
                return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
            },
            send: function(newMessage) {
                messages.$add(newMessage);
                newMessage.sentAt = firebase.database.ServerValue.TIMESTAMP;
            }
        };
    }
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})