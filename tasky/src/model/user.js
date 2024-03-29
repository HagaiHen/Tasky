class User {
  constructor(uid = "", firstName, lastName, email, role, imageUrl = null, about = null, phone = null, organizationUID = '', nickname = '') {
    this.uid = uid;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.role = role;
    this.imageUrl = imageUrl;
    this.about = about;
    this.phone = phone;
    this.organizationUID = organizationUID;
    this.nickname = nickname;
  }

  toJSON() {
    return {
      uid: this.uid,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      role: this.role,
      imageUrl: this.imageUrl,
      about: this.about,
      phone: this.phone,
      organizationUID: this.organizationUID,
      nickname: this.nickname,
    };
  }

  static fromJSON(json) {
    return new User(
      json.uid,
      json.firstName,
      json.lastName,
      json.email,
      json.role,
      json.imageUrl,
      json.about,
      json.phone,
      json.organizationUID,
      json.nickname,
    );
  }
}

export default User;