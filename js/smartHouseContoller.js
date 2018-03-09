"use strict";

//------------------------------- view -------------------------------------------------
function SmartHouseView(smartHouse) {
    this._smartHouse = smartHouse
}

SmartHouseView.prototype.render = function () {
    let root = document.body.querySelector(".root"),
        smartHouse = document.createElement("section"),
        bottomContainer = document.createElement("section"),
        btnWrap = document.createElement("div"),
        addressBlock = document.createElement("div"),
        computerBlock = document.createElement("div"),
        fridgeBlock = document.createElement("div"),
        smartHouseTitle = document.createElement("h1");


    smartHouse.className = "smartHouse";
    bottomContainer.className = "bottomContainer";
    computerBlock.className = "bottomContainer__comp";
    fridgeBlock.className = "bottomContainer__fridge";
    smartHouseTitle.className = "smartHouse__title";
    addressBlock.className = "smartHouse__address";
    btnWrap.className = "btnWrap";

    smartHouseTitle.innerText = "Smart house by Nahornyi Vadim";

    root.appendChild(smartHouse);
    smartHouse.appendChild(smartHouseTitle);
    smartHouse.appendChild(btnWrap);
    smartHouse.appendChild(bottomContainer);
    bottomContainer.appendChild(addressBlock);
    bottomContainer.appendChild(fridgeBlock);
    bottomContainer.appendChild(computerBlock);
};

function BtnView(smartHouse) {
    this._smartHouse = smartHouse;
}

BtnView.prototype.render = function () {
    let btnWrap = document.body.querySelector(".btnWrap"),

        btn = document.createElement("a"),
        btnFridje = btn.cloneNode(true),
        btnComputer = btn.cloneNode(true);

    btn.className = "btn";
    btnFridje.classList.add("btn", "fridje");
    btnComputer.classList.add("btn", "comp");

    btn.innerText = "add address";
    btnFridje.innerText = "add fridje";
    btnComputer.innerText = "add computer";

    btnWrap.appendChild(btn);
    btnWrap.appendChild(btnFridje);
    btnWrap.appendChild(btnComputer);
    btnWrap.appendChild(btnComputer);


    let btns = document.body.querySelectorAll(".btn");
    for (let i = 0; i < btns.length; i++) {
        btns[i].setAttribute("href", "#");
    }
};

function HouseAddressView(smartHouse) {
    this._smartHouse = smartHouse;
    this.clickHandler = function () {
        let addAddressBtn = document.body.querySelector(".btn");
        addAddressBtn.addEventListener("click", () => {
            this._smartHouse.setAddress(prompt("Enter home address","Anfield Rd, Liverpool L4 0TH, Великобритания"));
            this.render();
        })
    }
}

HouseAddressView.prototype.render = function () {
    let houseAddress = document.createElement("address"),
        houseAddressCont = document.body.querySelector(".smartHouse__address");
    houseAddress.className = "houseAddress";

    if (houseAddressCont.children.length === 0) {
        houseAddressCont.appendChild(houseAddress);
    } else {
        houseAddressCont.replaceChild(houseAddress, houseAddressCont.firstChild);
    }

    if (this._smartHouse.getAddress() === undefined || this._smartHouse.getAddress().trim() === "") {
        document.querySelector(".houseAddress").innerHTML = "Адрес не указан";
    } else {
        document.querySelector(".houseAddress").innerHTML = this._smartHouse.getAddress();
    }
};

// function FridgeView(smartHouse) {
//     this._smartHouse = smartHouse;
// }
//
// FridgeView.prototype.addFridges = function () {
//     let smartHouse = document.body.querySelector(".bottomContainer"),
//         fridgeCollection = this._smartHouse.getFridge(),
//         name = null,
//         type = null,
//         model = null,
//         bgColor = null,
//         state = null;
//     for (let i = 0; i < fridgeCollection.length; i++) {
//         name = fridgeCollection[i].getName();
//         type = fridgeCollection[i].getType();
//         model = fridgeCollection[i].getModel();
//         bgColor = fridgeCollection[i].getBgColor();
//         state = fridgeCollection[i].getState();
//         let fridge = document.createElement("div"),
//             stateBtn = document.createElement("a");
//         fridge.classList = "fridge";
//         stateBtn.classList = "stateBtn";
//         stateBtn.setAttribute("href", "#");
//         fridge.innerHTML = name + "<br>" + type + "<br>" + model;
//         if (state === false) {
//             stateBtn.classList.add("off");
//         } else {
//             stateBtn.classList.add("on");
//         }
//         fridge.appendChild(stateBtn);
//         fridge.style.backgroundColor = bgColor;
//         smartHouse.appendChild(fridge);
//     }
// };
// FridgeView.prototype.render = function () {
//     let self = this;
//     let fridgeBtn = document.body.querySelector(".btn.fridje"),
//         fridge = document.createElement("div");
//
//     fridge.classList = "fridge";
//
//     fridgeBtn.addEventListener("click", () => {
//         this.addFridges();
//         this.render();
//     });
//
//     if (document.body.querySelectorAll(".fridge .stateBtn").length !== 0) {
//         let stateBtn = document.body.querySelectorAll(".fridge .stateBtn");
//         for (let i = 0; i < stateBtn.length; i++) {
//             stateBtn[i].addEventListener('click', function () {
//                 let state = self._smartHouse.getFridge()[i].getState();
//                 if (state) {
//                     self._smartHouse.getFridge()[i].setState();
//                     stateBtn.classList.add("off");
//                     this.innerText = "off";
//                 } else {
//                     self._smartHouse.getFridge()[i].setState();
//                     stateBtn.classList.add("on");
//                     this.innerText = "on";
//                 }
//             });
//         }
//     }
// };
//
function ComputerView(smartHouse) {
    this._smartHouse = smartHouse;
    this.clickHandler = function () {
        let computerBtn = document.body.querySelector(".btn.comp");
        computerBtn.addEventListener("click", () => {
            this._smartHouse.setComputer(
                new Computer(
                    prompt("введите имя компьютера", "Apple"),
                    prompt("введите модель компьютера", "macBook pro"),
                    prompt("введите цвет компьютера", "#eee"),
                    prompt("размер ram", "8гб")));
            this.render();
        });
    };
    this.stateClickHandler = function () {
        function indexElement(child) {
            let i = 0;
            while ((child = child.previousSibling) != null)
                i++;
            return i;
        }

        let bottomContainerComp = document.querySelector(".bottomContainer__comp");

        bottomContainerComp.addEventListener("click",  (e) => {
            if (e.target.classList.contains("stateBtn")) {
                let indexElem = e.target.parentElement;
                let q = indexElement(indexElem);
                let state = this._smartHouse.getComputer()[q].getState();
                if (state) {
                    this._smartHouse.getComputer()[q].setState();
                    e.target.classList.toggle("on");
                    e.target.innerText = "off";
                } else {
                    this._smartHouse.getComputer()[q].setState();
                    e.target.classList.toggle("on");
                    e.target.innerText = "on";
                }
            }
        });
    }
}

ComputerView.prototype.render = function () {
    let self = this,
        computer = document.createElement("div"),
        computerCon = document.body.querySelector(".bottomContainer__comp"),
        computerCollection = this._smartHouse.getComputer(),
        name = null,
        ram = null,
        model = null,
        bgColor = null,
        state = null;

    computer.classList = "computer";

    for (let i = 0; i < computerCollection.length; i++) {
        name = computerCollection[i].getName();
        ram = computerCollection[i].getRam();
        model = computerCollection[i].getModel();
        bgColor = computerCollection[i].getBgColor();
        state = computerCollection[i].getState();
        let stateBtn = document.createElement("a");

        stateBtn.classList = "stateBtn";
        stateBtn.setAttribute("href", "#");
        computer.innerHTML = name + "<br>" + ram + "<br>" + model;

        if (state === false) {
            stateBtn.innerText = "off";
        } else {
            stateBtn.classList.toggle("on");
            stateBtn.innerText = "on";
        }

        computer.appendChild(stateBtn);
        computer.style.backgroundColor = bgColor;
        computerCon.appendChild(computer);
    }
};
// create objects
let smartHouse = new SmartHouse();

let smartHouseView = new SmartHouseView(smartHouse);
smartHouseView.render();

let btnView = new BtnView(smartHouse);
btnView.render();

let houseAddressView = new HouseAddressView(smartHouse);
houseAddressView.render();
houseAddressView.clickHandler();

// let fridgeCtrl = new FridgeView(smartHouse);
// fridgeCtrl.render();

let computerView = new ComputerView(smartHouse);
computerView.clickHandler();
computerView.stateClickHandler();
computerView.render();


