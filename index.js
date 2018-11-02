#!/usr/bin/env node

"use strict"
let puppeteer = require('puppeteer')
let devices = require('puppeteer/DeviceDescriptors')
let sites = require('./sites.json')

let thisDate = new Date().toISOString().split('T')[0]
  
let getLocations = async () => {
  let locations = sites

  let browser = await puppeteer.launch()
  let page = await browser.newPage()

  for (let site of locations) {
    let url = 'https://www.google.com/maps/@' + site.lat + ',' + site.lon + ',' + site.zoom + 'z'
    await page.setViewport({
      width: 1280,
      height: 900
    })
    await page.goto(url)
    await page.screenshot({path: 'img/' + site.name + '.' + thisDate + '.png', fullPage: true})
  }

  await browser.close()
}

getLocations()