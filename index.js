#!/usr/bin/env node

"use strict"
let puppeteer = require('puppeteer')
let devices = require('puppeteer/DeviceDescriptors')
let thisDate = new Date().toISOString().split('T')[0]
  
let getLocations = async () => {
  let locations = [
    {
      name: 'burlington_vt',
      lat: 44.4779434,
      lon: -73.2158233,
      zoom: 15
    },
    {
      name: 'lower_manhattan',
      lat: 40.7234041,
      lon: -73.9953599,
      zoom: 15
    },
    {
      name: 'san_jose',
      lat: 37.3346792,
      lon: -121.8918011,
      zoom: 15
    },
    {
      name: 'lyndonville_vt',
      lat: 44.5334054,
      lon: -72.0029341,
      zoom: 15
    },
    {
      name: 'cap_haitien',
      lat: 19.7483828,,
      lon: -72.2045167,
      zoom: 15
    }
  ]

  let browser = await puppeteer.launch()
  let page = await browser.newPage()

  for (let site of locations) {
    let url = 'https://www.google.com/maps/@' + site.lat + ',' + site.lon + ',' + site.zoom + 'z'
    await page.setViewport({
      width: 1280,
      height: 900
    })
    await page.goto(url)
    await page.screenshot({path: site.name + '_' + thisDate + '.png', fullPage: true})
  }

  await browser.close()
}

getLocations()