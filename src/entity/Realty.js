module.exports = class Realty {

    /**
     * @var Id du bien
     */
    id;

    /**
     * @var Id de l'utilisateur (agent immobilier)
     */
    id_user;


    /**
     * @var Id du contact (proprietaire du bien)
     */
    id_contact;

    
    /**
     * @var Adresse du bien
     */
    address1;
    address2;
    zipcode;
    town;

    /**
     * @var Information sur l'adresse (ex : proche commerce, gare, etc)
     */
    info_address;

    /**
     * @var type de bien (1:maison, 2appartement, 3 bureau, 4: garage, 5: autres)
     */
    type;

    /**
     * @var prix du bien
     */
    price;

    /**
     * @var surface du bien
     */
    area;

    /**
     * @var nombre de piece du bien
     */
    room;

    /**
     * @var info sur le bien (ex : travaux à prevoir)
     */
    info;

    getId() {
        return this.id;
    }

    getIdUser() {
        return this.id_user;
    }

    setIdUser(id_user) {
        this.id_user = id_user;
        return this;
    }

    getIdContact() {
        return this.id_contact;
    }

    setIdContact(id_contact) {
        this.id_contact = id_contact;
        return this;
    }
    
    getAddress1() {
        return this.address1;
    }

    setAddress1(address1) {
        this.address1 = address1;
        return this;
    }

    getAddress2() {
        return this.address2;
    }

    setAddress2(address2) {
        this.address2 = address2;
        return this;
    }


    getZipcode() {
        return this.zipcode;
    }

    setZipcode(zipcode) {
        this.zipcode = zipcode;
        return this;
    }

    getTown() {
        return this.town;
    }

    setTown(town) {
        this.town = town;
        return this;
    }

    getInfoAddress() {
        return this.info_address;
    }

    setInfoAddress(info_address) {
        this.info_address = info_address;
        return this;
    }

    getType() {
        return this.type;
    }

    setType(type) {
        this.type = type;
        return this;
    }
    
    getPrice() {
        return this.price;
    }

    setPrice(price) {
        this.price = price;
        return this;
    }

    getArea() {
        return this.area;
    }

    setArea(area) {
        this.area = area;
        return this;
    }

    getRoom() {
        return this.room;
    }

    setRoom(room) {
        this.room = room;
        return this;
    }

    getInfo() {
        return this.info;
    }

    setInfo(info) {
        this.info = info;
        return this;
    }
}