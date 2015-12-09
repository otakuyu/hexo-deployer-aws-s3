'use strict';

var s3deployer = require("./libs/deployer.js")
hexo.extend.deployer.register('s3', s3deployer);