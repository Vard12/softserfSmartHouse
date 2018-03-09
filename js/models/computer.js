// Computer model
function Computer(name,model,bgColor,ram){
    Properties.call(this,name,model,bgColor);
    this._ram = ram;
}

Computer.prototype = Object.create(new Properties());

Computer.prototype.constructor = Computer;

Computer.prototype.setRam = function(ram){
    this._ram = ram;
};

Computer.prototype.getRam = function(){
    return this._ram;
};
