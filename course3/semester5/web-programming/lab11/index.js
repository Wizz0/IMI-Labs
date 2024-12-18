const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const app = express();

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './music.db'
});


const Singer = sequelize.define('Singer', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

const Album = sequelize.define('Album', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  release: {
    type: DataTypes.INTEGER
  }
});

const Song = sequelize.define('Song', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

Singer.hasMany(Album, { foreignKey: 'id_singer' });
Album.belongsTo(Singer, { foreignKey: 'id_singer' });
Album.hasMany(Song, { foreignKey: 'id_album' });
Song.belongsTo(Album, { foreignKey: 'id_album' });


sequelize.sync().then(async () => {
  try {
    const singer1 = await Singer.create({ name: 'Blink-182' });
    const singer2 = await Singer.create({ name: 'Green Day' });

    const album1 = await Album.create({ title: 'Enema of the State', release: 1999, id_singer: singer1.id });
    const album2 = await Album.create({ title: 'Dookie', release: 1994, id_singer: singer2.id });

    const song1 = await Song.create({ title: 'Adam\'s song', id_album: album1.id });
    const song2 = await Song.create({ title: 'What\'s my age again', id_album: album1.id });
    const song3 = await Song.create({ title: 'When I come around', id_album: album2.id });
    const song4 = await Song.create({ title: 'Basket case', id_album: album2.id });

  } catch (error) {
    console.error(error);
  }

}).catch(error => console.error(error));

app.listen(3000);