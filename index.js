#!/usr/bin/env node

"use strict"
let puppeteer = require('puppeteer')
let devices = require('puppeteer/DeviceDescriptors')
let thisDate = new Date().toISOString().split('T')[0]

let captureScreenshots = async () => {
  let devicesToEmulate = [
    'iPhone X',
    'Pixel 2',
    'Galaxy S5'
  ]
  
  let locations = [
    {
      name: 'burlington_vt',
      lat: 44.4779434,
      lon: -73.2158233,
      zoom: 15
    }
  ]

  let browser = await puppeteer.launch()
  let page = await browser.newPage()

  // capture a screenshot of each device we wish to emulate (`devicesToEmulate`)
  for (let device of devicesToEmulate) {
    await page.emulate(devices[device])
    for (let site of locations) {
      let url = 'https://www.google.com/maps/@' + site.lat + ',' + site.lon + ',' + site.zoom + 'z'
      await page.goto(url)
      await page.screenshot({path: site.name + '_' + thisDate + '_' + `${device}.png`, fullPage: true})
    }
  }

  await browser.close()
}

captureScreenshots()