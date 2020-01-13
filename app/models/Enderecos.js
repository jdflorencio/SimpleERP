module.exports = (sequelize, DataTypes) => {
  const Enderecos = sequelize.define('enderecos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    clientesId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    bairro : {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: {
          args: [1,60],
          msg: "Esse campo tem que ter entre 1 á 60 caracteres"
        }
      }
    },
    numero : {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: {
          args: [1,10],
          msg: "Esse campo tem que ter entre 1 á 10 caracteres"
        }
      }
    },
    complemento : {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: {
          args: [1,100],
          msg: "Esse campo tem que ter entre 1 á 100 caracteres"
        }
      }
    },
    cidade : {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: {
          args: [1,100],
          msg: "Esse campo tem que ter entre 1 á 6x caracteres"
        }
      }
    },
    uf : {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isIn: {
          args: [[
          'AC',
          'AL',
          'AP',
          'AM',
          'BA',
          'CE',
          'DF',
          'ES',
          'GO',
          'MA',
          'MT',
          'MS',
          'MG',
          'PA',
          'PB',
          'PR',
          'PE',
          'PI',
          'RJ',
          'RN',
          'RS',
          'RO',
          'RR',
          'SC',
          'SP',
          'SE',
          'TO']
        ],
        msg: "Esse estado federativo não existe!"
      }
    }
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: DataTypes.DATE
  });
  
  Enderecos.associate  = function(models) {
    Enderecos.belongsTo(models.users, {foreignkey: 'clientesId', as: 'clientes'})
  }
  return Enderecos;
}