#!/usr/bin/env node

const fs = require("fs");
const yaml = require("js-yaml");
const ejs = require("ejs");
const md = require("marked");

const root = __dirname + "/../";
const htmlPath = "static/index.html";

const data = yaml.safeLoad(fs.readFileSync(root + "resume.yaml", "utf8"));

fs.writeFileSync(
  root + htmlPath,
  ejs.render(
    fs.readFileSync(root + "resume.ejs", "utf8"),
    Object.assign({ md }, data),
    {}
  )
);

console.log("Written " + htmlPath);
