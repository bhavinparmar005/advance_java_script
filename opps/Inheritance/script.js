class laptop {
  constructor(
    name,
    model,
    color,
    proccessser,
    screenSize,
    ramRom,
    price,
    warranty
  ) {
    (this.compnyName = name),
      (this.model = model),
      (this.color = color),
      (this.proccessser = proccessser),
      (this.screenSize = screenSize),
      (this.ramRom = ramRom),
      (this.price = price),
      (this.warranty = warranty);
  }

  information() {
    console.log(`
          Company Name: ${this.compnyName},
          Model: ${this.model},
          color:${this.color},
          proccesser:${this.proccessser},
          screen-Size:${this.screenSize},
          ram-rom:${this.ramRom},
          price:${this.price},
          warranty:${this.warranty}
          `);
  }
}
class hello extends laptop {
  constructor(
    name,
    model,
    color,
    proccessser,
    screenSize,
    ramRom,
    price,
    warranty,
    microsoftLifeTimeSubscrption,
    graphicseCard,
    offer
  ) {
    super(name, model, color, proccessser, screenSize, ramRom, price, warranty);

    (this.microsoftLifeTimeSubscrption = microsoftLifeTimeSubscrption),
      (this.graphicseCard = graphicseCard),
      (this.offer = offer);
  }
  information1() {
    super.information();
    console.log(`
          microsoftLifeTimeSubscrption:${this.microsoftLifeTimeSubscrption},
          graphicseCard:${this.graphicseCard},
          offer:${this.offer}
          `);
  }
}

let hp = new hello(
  "hp",
  "EliteBook 840",
  "Silver",
  "Intel CORE i7-8generation",
  "14 Inch",
  "8GB/16GB SSD",
  "₹80000",
  "3 year",
  "yes - 2020",
  "Integrated",
  "10% discount"
);

hp.information1();

document.getElementById("name").textContent = hp.compnyName;
document.getElementById("model").textContent = hp.model;
document.getElementById("color").textContent = hp.color;
document.getElementById("color").textContent = hp.color;
document.getElementById("Proccesser").textContent = hp.proccessser;
document.getElementById("screenSize").textContent = hp.screenSize;
document.getElementById("ramRom").textContent = hp.ramRom;
document.getElementById("price").textContent = hp.price;
document.getElementById("warranty").textContent = hp.warranty;
document.getElementById("microsoftLifeTimeSubscrption").textContent =
  hp.microsoftLifeTimeSubscrption;
document.getElementById("graphicseCard").textContent = hp.graphicseCard;
document.getElementById("offer").textContent = hp.offer;
