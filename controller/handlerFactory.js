const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const APIFeatures = require('../utils/apiFeatures');

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(new AppError('No listings found!', 404));
    }

    res.status(204).json({
      status: 'success',
      data: 'null'
    });
  });

exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!doc) {
      return next(new AppError('No document found!', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        doc
      }
    });
  });

exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const newDoc = await Model.create(req.body);
    

    res.status(201).json({
      status: 'sucess',
      data: {
        data: newDoc
      }
    });
  });

exports.getOne = (Model, popOptions) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    if (popOptions) query = query.populate(popOptions);
    const doc = await query;

    if (!doc) {
      return next(new AppError('No document found!', 404));
    }

    res.status(200).json({
      status: 'sucess',
      results: doc.length,
      data: {
        data: doc
      }
    });
  });

exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    //Allow nested GET REVIEWS ON TOUR (HACK)
    let filter = {};
    if (req.params.listingId) filter = { listing: req.params.listingId };

    // execute query
    const features = new APIFeatures(Model.find(filter), req.query).filter().sort().limitFields().pagination();
    const doc = await features.query;

    res.status(200).json({
      status: 'sucess',
      results: doc.length,
      data: {
        data: doc
      }
    });
  });
