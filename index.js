'use strict';

var s3deployer = require("./lib/deployer.js")
hexo.extend.deployer.register('s3', s3deployer);