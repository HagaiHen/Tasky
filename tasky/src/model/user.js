class User {
  constructor(uid = "", firstName, lastName, email, role, imageUrl = null) {
    this.uid = uid;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.role = role;
    this.imageUrl = imageUrl;
  }

  toJSON() {
    return {
      uid: this.uid,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      role: this.role,
      imageUrl: this.imageUrl,
    };
  }

  static fromJSON(json) {
    return new User(
      json.uid,
      json.firstName,
      json.lastName,
      json.email,
      json.role,
      json.imageUrl
    );
  }
}

export default User;
