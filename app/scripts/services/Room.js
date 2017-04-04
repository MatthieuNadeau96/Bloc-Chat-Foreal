(function() {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        
        return{
            all: rooms,
            newRoom: function(newRoomText){
                rooms.$add({
                    name: newRoomText
                })
            }
        };
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();