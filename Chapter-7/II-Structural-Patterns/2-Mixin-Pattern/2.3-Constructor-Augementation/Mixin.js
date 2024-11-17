const Mixin = superclass => 
    class extends superclass {
        driveForward() {
            console.log('drive forward');
        }
        driveBackward() {
            console.log('drive backward');
        }
        driveSideways() {
            console.log('drive sideways');
        }
    }

export default Mixin;