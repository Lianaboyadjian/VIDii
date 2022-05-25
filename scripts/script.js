// JavaScript Document
console.log("Howdy!");


var tekstveld = document.querySelector("section.gbinfotekst");
var tekstveldTitel = document.querySelector("section.gbinfotekst h3");
var tekstveldP = document.querySelector("section.gbinfotekst p");




/* info veld sluiten */
var tekstveldButton = document.querySelector("section.gbinfotekst button");

tekstveldButton.addEventListener("click", wegMetDieInfo);

function wegMetDieInfo() {
    tekstveld.classList.remove("toon-info");
}




/* drukken op gameBoyClassicButton */
var gameBoyClassicButton = document.querySelector("button.gbclassic");
gameBoyClassicButton.addEventListener("click", laatGameBoyClassicTekstZien);

function laatGameBoyClassicTekstZien() {
    tekstveld.classList.add("toon-info");
    tekstveldTitel.textContent = "Gameboy Classic";
    tekstveldP.textContent = '"Een Game Boy is een draagbare spelcomputer ontwikkeld door het Japanse bedrijf Nintendo. De eerste Game Boy had een 8-bit-processor en een klein zwart-wit lcd-scherm. De handheld werkte met cartridges, die tot de laatste Game Boy zouden worden gebruikt."';
}

/* drukken op gameBoyLightButton */
var gameBoyLightButton = document.querySelector("button.gblight");
gameBoyLightButton.addEventListener("click", laatGameBoyLightTekstZien);

function laatGameBoyLightTekstZien() {
    tekstveld.classList.add("toon-info");
    tekstveldTitel.textContent = "Gameboy Light";
    tekstveldP.textContent = '"De Game Boy Light is een draagbare spelcomputer van Nintendo en de tweede uitbreiding van de oorspronkelijke Game Boy en heeft nog een zwart-wit lcd-scherm. De spelcomputer is, enkel in Japan, op de markt gekomen in 1998.De Game Boy Light heeft een backlight, waar de naam van de handheld naar verwijst."';
}

/* drukken op gameBoyColorButton */
var gameBoyColorButton = document.querySelector("button.gbcolor");
gameBoyColorButton.addEventListener("click", laatGameBoyColorTekstZien);

function laatGameBoyColorTekstZien() {
    tekstveld.classList.add("toon-info");
    tekstveldTitel.textContent = "Gameboy Color";
    tekstveldP.textContent = '"De Game Boy werd in de jaren negentig vervangen door onder andere het kleinere model Game Boy Pocket en in 1998 door de Game Boy Color. Deze versie kwam in vrolijke kleuren en kon kleuren op het scherm tonen. Daarnaast had de Game Boy Color een flink verbeterde processor en sneller werkgeheugen."';
}

/* drukken op gameBoyAdvanceButton */
var gameBoyAdvanceButton = document.querySelector("button.gbadvance");
gameBoyAdvanceButton.addEventListener("click", laatGameBoyAdvanceTekstZien);

function laatGameBoyAdvanceTekstZien() {
    tekstveld.classList.add("toon-info");
    tekstveldTitel.textContent = "Gameboy Advance";
    tekstveldP.textContent = '"De Game Boy Advance (vaak afgekort met GBA) is een draagbare spelcomputer van Nintendo geïntroduceerd in 2001. De Game Boy Advance is de opvolger van de Game Boy Color. Het was de eerste handheld met een 32 bits-processor."';
}

/* drukken op gameBoyAdvancespButton */
var gameBoyAdvancespButton = document.querySelector("button.gbadvancesp");
gameBoyAdvancespButton.addEventListener("click", laatGameBoyAdvancespTekstZien);

function laatGameBoyAdvancespTekstZien() {
    tekstveld.classList.add("toon-info");
    tekstveldTitel.textContent = "Gameboy Advance SP";
    tekstveldP.textContent = '"De Game Boy Advance SP werd op de markt gebracht als verbeterde versie van de originele Game Boy Advance uit 2001. De SP beschikt over een ingebouwde schermverlichting, een oplaadbare lithium-ionbatterij en een geheel nieuw ontwerp. De spelcomputer is nu opvouwbaar, om zowel ruimte te besparen alsmede het lcd-scherm te beschermen wanneer het apparaat niet gebruikt wordt. SP staat voor Special Project."';
}



/* MAAK GEEL */
var deGeelMaakButton = document.querySelector(".button-wrapper > section:nth-of-type(2) button");

deGeelMaakButton.addEventListener("click", maakGbGeel);

function maakGbGeel() {
    document.documentElement.classList.toggle("is-geel");
}


