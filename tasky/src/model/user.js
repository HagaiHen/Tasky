class User {
  constructor(name, email, role, imageUrl = null) {
    this.name = name;
    this.email = email;
    this.role = role;
    this.imageUrl = imageUrl;
  }

  toJSON() {
    return {
      name: this.name,
      email: this.email,
      role: this.role,
      imageUrl: this.imageUrl,
    };
  }

  static fromJSON(json) {
    return new User(json.name, json.email, json.role, json.imageUrl);
  }
}
