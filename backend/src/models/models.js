import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Song = sequelize.define('Song', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  album: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  releaseDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  coverImg: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  cloudinatyPulibcId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cludinarySecureUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  timestamps: true,
  tableName: 'songs'
}
)

export const Artist = sequelize.define('Artist', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bio: {
    type: DataTypes.TEXT,
    allowNull: true,
    defaultValue: 'No bio available',
  },
  coverImg: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: null
  }
}, {
  timestamps: true,
  tableName: 'artist'
})

export const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true,
  tableName: 'users'
})

// REALATIONS
Artist.hasMany(Song, { foreignKey: 'artistId', as: 'songs' })
Song.belongsTo(Artist, { foreignKey: 'artistId' })

User.hasMany(Artist, { foreignKey: 'userId' })
Artist.belongsTo(User, { foreignKey: 'userId' })

sequelize.sync()