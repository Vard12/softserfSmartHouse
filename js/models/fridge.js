// Fridje model
function Fridge(name, model, bgColor, type) {
    Properties.call(this, name, model, bgColor);
    this._type = type;
}

Fridge.prototype = Object.create(new Properties());

Fridge.prototype.constructor = Fridge;

Fridge.prototype.setType = function (type) {
    this._type = type;
};

Fridge.prototype.getType = function () {
    return this._type;
};
