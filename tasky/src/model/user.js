class User {
  constructor(userId="", name, email, role, imageUrl = null) {
    (this.userId = userId), (this.name = name);
    this.email = email;
    this.role = role;
    this.imageUrl = imageUrl;
  }

  toJSON() {
    return {
      userId: this.userId,
      name: this.name,
      email: this.email,
      role: this.role,
      imageUrl: this.imageUrl,
    };
  }

  static fromJSON(json) {
    return new User(
      json.userId,
      json.name,
      json.email,
      json.role,
      json.imageUrl
    );
  }
}

export default User;