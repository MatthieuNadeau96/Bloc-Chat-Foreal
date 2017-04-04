(function() {
    function ModalCtrl(Room, $uibModalInstance) {
        
        this.cancel = function() {
            $uibModalInstance.dismiss();
        };
        
        this.createRoom = function(newRoom) {
            Room.newRoom(newRoom);
            $uibModalInstance.dismiss();
        };
    }
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();