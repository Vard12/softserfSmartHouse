// Properties model
function Properties(name,model,bgColor){
    this._name = name;
    this._model = model;
    this._bgColor = bgColor;
    this._state = false;
}

Properties.prototype.setName = function(name){
    this._name = name;
};

Properties.prototype.setModel = function(model){
    this._model = model;
};

Properties.prototype.setBgColor = function(bgColor){
    this._bgColor = bgColor;
};

Properties.prototype.setState = function(){
    this._state = this._state !== true;
};

Properties.prototype.getState = function(){
    return this._state;
};

Properties.prototype.getName = function(){
    return this._name;
};

Properties.prototype.getModel = function(){
    return this._model;
};

Properties.prototype.getBgColor = function(){
    return this._bgColor;
};