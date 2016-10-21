module.exports = {
    error: function(res, data) {
      res.status(200);
        return res.json({
          "status":"error",
          data: data || {}
        });
    }
};
