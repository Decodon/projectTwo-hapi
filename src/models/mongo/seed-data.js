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

  candidates: {
    _model: "Candidate",
    lisa: {
      firstName: "Lisa",
      lastName: "Simpson",
      office: "President",
    },
    donald: {
      firstName: "Donald",
      lastName: "Simpson",
      office: "President",
    },
  },

  donations: {
    _model: "Donation",
    one: {
      amount: 40,
      method: "paypal",
      donor: "->users.bart",
      candidate: "->candidates.lisa",
    },
    two: {
      amount: 90,
      method: "direct",
      donor: "->users.marge",
      candidate: "->candidates.lisa",
    },
    three: {
      amount: 430,
      method: "paypal",
      donor: "->users.homer",
      candidate: "->candidates.donald",
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
      latitude: "40.25",
      longitude: "40.25",
      religion: "Catholic Church",
      explorer: "->users.bart",
      counties: "->counties.cork",
    },
    two: {
      latitude: "50.54678",
      longitude: "60.261",
      religion: "Church of Ireland",
      explorer: "->users.marge",
      counties: "->counties.dublin",
    },
    three: {
      latitude: "70.25",
      longitude: "80",
      religion: "Islam",
      explorer: "->users.homer",
      counties: "->counties.longford",
    },
  },
};
