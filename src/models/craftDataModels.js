const db = require('../config/dbconf');
const { DataTypes } = require('sequelize');

// kumpulan data video youtube (tanpa label)
const dataVideo = db.define('dataVideoTable', {
    Youtube_ID: {
        type: DataTypes.STRING(20),
        primaryKey: true
    },
    Judul: {
        type: DataTypes.TEXT
    },
    URL_Tumbnail: {
        type: DataTypes.TEXT
    },
    URL_Video: {
        type: DataTypes.TEXT
    }
},
{
    tableName: 'data_video',
    timestamps: false
});

// const per label
const cans = db.define('cansTable', {
    Youtube_ID: {
        type: DataTypes.STRING(20),
        primaryKey: true
    },
    Judul: {
        type: DataTypes.TEXT
    },
    URL_Tumbnail: {
        type: DataTypes.TEXT
    },
    URL_Video: {
        type: DataTypes.TEXT
    }
},
{
    tableName: 'cans',
    timestamps: false
});

const cardbox = db.define('cardboxTable', {
    Youtube_ID: {
        type: DataTypes.STRING(20),
        primaryKey: true
    },
    Judul: {
        type: DataTypes.TEXT
    },
    URL_Tumbnail: {
        type: DataTypes.TEXT
    },
    URL_Video: {
        type: DataTypes.TEXT
    }
},
{
    tableName: 'cardbox',
    timestamps: false
});

const cloth = db.define('clothTable', {
    Youtube_ID: {
        type: DataTypes.STRING(20),
        primaryKey: true
    },
    Judul: {
        type: DataTypes.TEXT
    },
    URL_Tumbnail: {
        type: DataTypes.TEXT
    },
    URL_Video: {
        type: DataTypes.TEXT
    }
},
{
    tableName: 'cloth',
    timestamps: false
});

const glassBottle = db.define('glassBottleTable', {
    Youtube_ID: {
        type: DataTypes.STRING(20),
        primaryKey: true
    },
    Judul: {
        type: DataTypes.TEXT
    },
    URL_Tumbnail: {
        type: DataTypes.TEXT
    },
    URL_Video: {
        type: DataTypes.TEXT
    }
},
{
    tableName: 'glass_bottle',
    timestamps: false
});

const paper = db.define('paperTable', {
    Youtube_ID: {
        type: DataTypes.STRING(20),
        primaryKey: true
    },
    Judul: {
        type: DataTypes.TEXT
    },
    URL_Tumbnail: {
        type: DataTypes.TEXT
    },
    URL_Video: {
        type: DataTypes.TEXT
    }
},
{
    tableName: 'paper',
    timestamps: false
});

const plasticBag = db.define('plasticBagTable', {
    Youtube_ID: {
        type: DataTypes.STRING(20),
        primaryKey: true
    },
    Judul: {
        type: DataTypes.TEXT
    },
    URL_Tumbnail: {
        type: DataTypes.TEXT
    },
    URL_Video: {
        type: DataTypes.TEXT
    }
},
{
    tableName: 'plastic_bag',
    timestamps: false
});

const plasticBottle = db.define('plasticBottleTable', {
    Youtube_ID: {
        type: DataTypes.STRING(20),
        primaryKey: true
    },
    Judul: {
        type: DataTypes.TEXT
    },
    URL_Tumbnail: {
        type: DataTypes.TEXT
    },
    URL_Video: {
        type: DataTypes.TEXT
    }
},
{
    tableName: 'plastic_bottle',
    timestamps: false
});

const tires = db.define('tiresTable', {
    Youtube_ID: {
        type: DataTypes.STRING(20),
        primaryKey: true
    },
    Judul: {
        type: DataTypes.TEXT
    },
    URL_Tumbnail: {
        type: DataTypes.TEXT
    },
    URL_Video: {
        type: DataTypes.TEXT
    }
},
{
    tableName: 'tires',
    timestamps: false
});

const eWaste = db.define('eWasteTable', {
    Youtube_ID: {
        type: DataTypes.STRING(20),
        primaryKey: true
    },
    Judul: {
        type: DataTypes.TEXT
    },
    URL_Tumbnail: {
        type: DataTypes.TEXT
    },
    URL_Video: {
        type: DataTypes.TEXT
    }
},
{
    tableName: 'e_waste',
    timestamps: false
});

const electricCable = db.define('electricCableTable', {
    Youtube_ID: {
        type: DataTypes.STRING(20),
        primaryKey: true
    },
    Judul: {
        type: DataTypes.TEXT
    },
    URL_Tumbnail: {
        type: DataTypes.TEXT
    },
    URL_Video: {
        type: DataTypes.TEXT
    }
},
{
    tableName: 'electric_cable',
    timestamps: false
});

const glass = db.define('glassTable', {
    Youtube_ID: {
        type: DataTypes.STRING(20),
        primaryKey: true
    },
    Judul: {
        type: DataTypes.TEXT
    },
    URL_Tumbnail: {
        type: DataTypes.TEXT
    },
    URL_Video: {
        type: DataTypes.TEXT
    }
},
{
    tableName: 'glass',
    timestamps: false
});

const metal = db.define('metalTable', {
    Youtube_ID: {
        type: DataTypes.STRING(20),
        primaryKey: true
    },
    Judul: {
        type: DataTypes.TEXT
    },
    URL_Tumbnail: {
        type: DataTypes.TEXT
    },
    URL_Video: {
        type: DataTypes.TEXT
    }
},
{
    tableName: 'metal',
    timestamps: false
});

const medicalMask = db.define('medicalMaskTable', {
    Youtube_ID: {
        type: DataTypes.STRING(20),
        primaryKey: true
    },
    Judul: {
        type: DataTypes.TEXT
    },
    URL_Tumbnail: {
        type: DataTypes.TEXT
    },
    URL_Video: {
        type: DataTypes.TEXT
    }
},
{
    tableName: 'medical_mask',
    timestamps: false
});

const organicWaste = db.define('organicWasteTable', {
    Youtube_ID: {
        type: DataTypes.STRING(20),
        primaryKey: true
    },
    Judul: {
        type: DataTypes.TEXT
    },
    URL_Tumbnail: {
        type: DataTypes.TEXT
    },
    URL_Video: {
        type: DataTypes.TEXT
    }
},
{
    tableName: 'organic_waste',
    timestamps: false
});

const phoneCase = db.define('phoneCaseTable', {
    Youtube_ID: {
        type: DataTypes.STRING(20),
        primaryKey: true
    },
    Judul: {
        type: DataTypes.TEXT
    },
    URL_Tumbnail: {
        type: DataTypes.TEXT
    },
    URL_Video: {
        type: DataTypes.TEXT
    }
},
{
    tableName: 'phone_case',
    timestamps: false
});

const foodOrganic = db.define('foodOrganicTable', {
    Youtube_ID: {
        type: DataTypes.STRING(20),
        primaryKey: true
    },
    Judul: {
        type: DataTypes.TEXT
    },
    URL_Tumbnail: {
        type: DataTypes.TEXT
    },
    URL_Video: {
        type: DataTypes.TEXT
    }
},
{
    tableName: 'food_organic',
    timestamps: false
});

const spoon = db.define('spoonTable', {
    Youtube_ID: {
        type: DataTypes.STRING(20),
        primaryKey: true
    },
    Judul: {
        type: DataTypes.TEXT
    },
    URL_Tumbnail: {
        type: DataTypes.TEXT
    },
    URL_Video: {
        type: DataTypes.TEXT
    }
},
{
    tableName: 'spoon',
    timestamps: false
});

const styrofoam = db.define('styrofoamTable', {
    Youtube_ID: {
        type: DataTypes.STRING(20),
        primaryKey: true
    },
    Judul: {
        type: DataTypes.TEXT
    },
    URL_Tumbnail: {
        type: DataTypes.TEXT
    },
    URL_Video: {
        type: DataTypes.TEXT
    }
},
{
    tableName: 'styrofoam',
    timestamps: false
});

const miscellaneousTrash = db.define('miscellaneousTrashTable', {
    Youtube_ID: {
        type: DataTypes.STRING(20),
        primaryKey: true
    },
    Judul: {
        type: DataTypes.TEXT
    },
    URL_Tumbnail: {
        type: DataTypes.TEXT
    },
    URL_Video: {
        type: DataTypes.TEXT
    }
},
{
    tableName: 'miscellaneous_trash',
    timestamps: false
});

const plastic = db.define('plasticTable', {
    Youtube_ID: {
        type: DataTypes.STRING(20),
        primaryKey: true
    },
    Judul: {
        type: DataTypes.TEXT
    },
    URL_Tumbnail: {
        type: DataTypes.TEXT
    },
    URL_Video: {
        type: DataTypes.TEXT
    }
},
{
    tableName: 'plastic',
    timestamps: false
});

const vegetation = db.define('vegetationTable', {
    Youtube_ID: {
        type: DataTypes.STRING(20),
        primaryKey: true
    },
    Judul: {
        type: DataTypes.TEXT
    },
    URL_Tumbnail: {
        type: DataTypes.TEXT
    },
    URL_Video: {
        type: DataTypes.TEXT
    }
},
{
    tableName: 'vegetation',
    timestamps: false
});

module.exports = { 
    dataVideo, 
    cans, 
    cardbox, 
    cloth, 
    glassBottle, 
    paper, 
    plasticBag, 
    plasticBottle, 
    tires,
    eWaste,
    electricCable,
    glass,
    metal,
    medicalMask,
    organicWaste,
    phoneCase,
    foodOrganic,
    spoon,
    styrofoam,
    miscellaneousTrash,
    plastic,
    vegetation
};