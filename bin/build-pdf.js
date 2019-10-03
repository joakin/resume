#!/usr/bin/env node

const path = require("path");
const puppeteer = require("puppeteer");

const input = "./static/index.html";
const output = "./static/resume.pdf";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`file://${path.resolve(input)}`, {
    waitUntil: "networkidle0"
  });
  await page.pdf({
    path: output,
    format: "A4",
    scale: 0.75,
    printBackground: true,
    margin: {
      top: "1cm",
      left: "1cm",
      right: "1cm",
      bottom: "1cm"
    }
  });

  await browser.close();
})();
