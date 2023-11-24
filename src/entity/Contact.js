module.exports = class Contact {

    /**
     * @var Id du contact
     */
    id;

    /**
     * @var Email du contact
     */
    email;

    /**
     * @var Civilité (enum  1 pour Monsieur, 2 pour Madame)
     */
    civility;

    /**
     * @var Nom du contact
     */
    lastname;

    /**
     * @var Prénom du contact
     */
    firstname;

    /**
     * @var Téléphone portable du contact
     */
    mobile;

    /**
     * @var Téléphone du contact
     */
    phone;

    /**
     * @var Info sur le contact
     */
    info;


    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
        return this;
    }

    getCivility() {
        return this.civility;
    }

    setCivility(civility) {
        this.civility = civility;
        return this;
    }

    getLastname() {
        return this.lastname;
    }

    setLastname(lastname) {
        this.lastname = lastname;
        return this;
    }

    getFirstname() {
        return this.firstname;
    }

    setFirstname(firstname) {
        this.firstname = firstname;
        return this;
    }
    
    getMobile() {
        return this.mobile;
    }

    setMobile(mobile) {
        this.mobile = mobile;
        return this;
    }

    getPhone() {
        return this.phone;
    }

    setPhone(phone) {
        this.phone = phone;
        return this;
    }

    getInfo() {
        return this.info;
    }

    setInfo(info) {
        this.info = info;
        return this;
    }

};