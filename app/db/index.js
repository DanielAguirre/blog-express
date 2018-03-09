const mongoose = require('mongoose');

const bookModel = mongoose.model('User');

const User = {
  findOne: id => userModel.findOne({ _id: id }).exec(),

  find: query => userModel.find(query).exec(),

  save(data) {
    return userModel.create(data, function(err, data)  {
      console.log(err, data);
    });
  },

  update(id, modifications) {
    return userModel.findByIdAndUpdate(id, { $set: modifications }, { new: true }).exec();
  },
};

module.exports = User;