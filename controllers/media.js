const db = require('../database/models');
const {
  RESPONSE_STATUS,
  STATUS_CODE,
} = require('../constants/response-status');
exports.media = async (req, res) => {
  try {
    const media = await db.Media.findAll({ where: { userId: null } });
    return res.status(STATUS_CODE.SUCCESS).json(media);
  } catch (err) {
    console.log(err);
  }
};

exports.addMediaByUser = async (req, res) => {
  try {
    const { imageId, userId } = req.body;

    const result = await db.Media.update(
      { userId },
      { where: { id: imageId } }
    );
    return res.status(STATUS_CODE.SUCCESS).json(result);
  } catch (err) {
    console.log(err);
  }
};

exports.assignedMediaByUser = async (req, res) => {
  try {
    const { userId } = req.body;

    const assignedMedia = await db.Media.findAll({ where: { userId: userId } });
    return res.status(STATUS_CODE.SUCCESS).json(assignedMedia);
  } catch (err) {
    console.log(err);
  }
};
