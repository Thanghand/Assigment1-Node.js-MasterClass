const BaseEntity = require('./baseEntity');

module.exports = UserEntity;

function UserEntity(){
    BaseEntity.call(this);

    this.username = "";
    this.email = "";
    this.password = "";
    this.phone = "";
    this.isLogin = false;
    this.address =  {
        street: "",
        city: "",
        zipCode: 0
    }
}