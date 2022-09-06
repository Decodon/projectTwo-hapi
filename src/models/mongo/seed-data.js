export const seedData = {
  users: {
    _model: "User",
    homer: {
      firstName: "Homer",
      lastName: "Simpson",
      email: "homer@simpson.com",
      password: "secret",
    },
    marge: {
      firstName: "Marge",
      lastName: "Simpson",
      email: "marge@simpson.com",
      password: "secret",
    },
    bart: {
      firstName: "Bart",
      lastName: "Simpson",
      email: "bart@simpson.com",
      password: "secret",
    },
  },

  counties: {
    _model: "Counties",
    antrim: {
      name: "Antrim",
      province: "Ulster",
    },
    armagh: {
      name: "Armagh",
      province: "Ulster",
    },
    carlow: {
      name: "Carlow",
      province: "Leinster",
    },
    cavan: {
      name: "Cavan",
      province: "Ulster",
    },
    clare: {
      name: "Clare",
      province: "Munster",
    },
    cork: {
      name: "Cork",
      province: "Munster",
    },
    derry: {
      name: "Derry",
      province: "Ulster",
    },
    donegal: {
      name: "Donegal",
      province: "Ulster",
    },
    down: {
      name: "Down",
      province: "Ulster",
    },
    dublin: {
      name: "Dublin",
      province: "Leinster",
    },
    fermanagh: {
      name: "Fermanagh",
      province: "Ulster",
    },
    galway: {
      name: "Galway",
      province: "Connacht",
    },
    kerry: {
      name: "Kerry",
      province: "Munster",
    },
    kildare: {
      name: "Kildare",
      province: "Leinster",
    },
    kilkenny: {
      name: "Kilkenny",
      province: "Leinster",
    },
    laois: {
      name: "Laois",
      province: "Leinster",
    },
    leitrim: {
      name: "Leitrim",
      province: "Connacht",
    },
    longford: {
      name: "Longford",
      province: "Leinster",
    },
    louth: {
      name: "Louth",
      province: "Leinster",
    },
    mayo: {
      name: "Mayo",
      province: "Connacht",
    },
    meath: {
      name: "Meath",
      province: "Leinster",
    },
    monaghan: {
      name: "Monaghan",
      province: "Ulster",
    },
    offaly: {
      name: "Offaly",
      province: "Leinster",
    },
    roscommon: {
      name: "Roscommon",
      province: "Connacht",
    },
    sligo: {
      name: "Sligo",
      province: "Connacht",
    },
    tipperary: {
      name: "Tipperary",
      province: "Munster",
    },
    tyrone: {
      name: "Tyrone",
      province: "Ulster",
    },
    waterford: {
      name: "Waterford",
      province: "Munster",
    },
    westmeath: {
      name: "Westmeath",
      province: "Leinster",
    },
    wexford: {
      name: "Wexford",
      province: "Leinster",
    },
    wicklow: {
      name: "Wicklow",
      province: "Leinster",
    },
  },

  placemarkers: {
    _model: "Placemarkers",
    one: {
      lat: "52.160858",
      lng: "-7.152420",
      religion: "Catholic Church",
      explorer: "->users.bart",
      counties: "->counties.cork",
    },
    two: {
      lat: "52.149220",
      lng: "-6.994620",
      religion: "Church Of Ireland",
      explorer: "->users.marge",
      counties: "->counties.dublin",
    },
    three: {
      lat: "52.161290",
      lng: "-7.231540",
      religion: "Islam",
      explorer: "->users.homer",
      counties: "->counties.longford",
    },
  },
};
