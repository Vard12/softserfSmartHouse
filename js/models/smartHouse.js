// Smart House model
function SmartHouse(address, fridge, computer) {
    this._address = address;
    this._fridje = [];
    this._computer = [];
    function validateFridge(){
        if(fridge!==undefined){
            this._fridje.push(fridge);
        }
    }
    validateFridge();
    function validateComputer(){
        if(computer!==undefined){
            this._fridje.push(computer);
        }
    }
    validateComputer();
}

SmartHouse.prototype.setAddress = function (address) {
    this._address = address;
};

SmartHouse.prototype.setFridge = function (fridge) {
    this._fridje.push(fridge);
};

SmartHouse.prototype.setComputer = function (computer) {
    this._computer.push(computer);
};

SmartHouse.prototype.getAddress = function () {
    return this._address;
};

SmartHouse.prototype.getFridge = function () {
    return this._fridje;
};

SmartHouse.prototype.getComputer = function () {
    return this._computer;
};
