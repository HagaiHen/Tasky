class Company {
    constructor(name, teams = [], manager = null, logo = null, website = null, id = null) {
      this.id = id;
      this.name = name;
      this.teams = teams;
      this.manager = manager;
      this.logo = logo;
      this.website = website;
    }
  
    updateName(name) {
      this.name = name;
    }
  
    setManager(manager) {
      this.manager = manager;
    }
  
    setLogo(logo) {
      this.logo = logo;
    }
  
    setWebsite(website) {
      this.website = website;
    }
  
    addTeam(team) {
      this.teams.push(team);
    }
  
    removeTeam(team) {
      const index = this.teams.indexOf(team);
      if (index !== -1) {
        this.teams.splice(index, 1);
      }
    }
  
    getTeams() {
      return this.teams;
    }
  
    getManager() {
      return this.manager;
    }
  
    getLogo() {
      return this.logo;
    }
  
    getWebsite() {
      return this.website;
    }
  }
  