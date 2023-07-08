const express = require('express')
const http = require('https')
const cheerio = require('cheerio')
const home = require('./home')
const path = require('path');
const routers = express.Router()

console.log(__dirname);

routers.use('/home',home)

module.exports = routers