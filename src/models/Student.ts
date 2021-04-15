import { Sequelize, DataTypes, Model } from 'sequelize'
import sequelize from '../config/database';

class Student extends Model {}

Student.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    created_by: {
        type: DataTypes.STRING,
        // field: 'created_by',
        defaultValue: 'admin'
    },
    created_at: {
        type: DataTypes.BIGINT,
        // field: 'created_at',
        defaultValue: Sequelize.NOW,
    },
    modified_by: {
        type: DataTypes.STRING,
        // field: 'modified_by',
        defaultValue: 'admin'
    },
    modified_at: {
        type: DataTypes.BIGINT,
        // field: 'modified_at',
        defaultValue: Sequelize.NOW,
    },
    is_deleted: {
        type: DataTypes.BOOLEAN,
        // field: 'is_deleted',
        defaultValue: false
    }
},{
    sequelize,
    underscored: true,
    tableName: 'student',
    modelName: 'Student'
})

console.log(Student === sequelize.models.Student);