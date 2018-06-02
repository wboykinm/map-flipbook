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
      lat: 19.7483828,
      lon: -72.2045167,
      zoom: 15
    },
    {
      name: 'xela',
      lat: 14.8402311,
      lon: -91.5233408,
      zoom: 15
    },
    {
      name: 'rabat',
      lat: 34.0227644,
      lon: -6.835418,
      zoom: 15
    },
    {
      name: 'wonsan',
      lat: 39.1586581,
      lon: 127.4437262,
      zoom: 15
    },
    {
      name: 'shanghai',
      lat: 31.2298189,
      lon: 121.4830445,
      zoom: 15
    },
    {
      name: 'kolkata',
      lat: 22.5893012,
      lon: 88.3308799,
      zoom: 15
    },
    {
      name: 'yinchuan',
      lat: 38.4692008,
      lon: 106.0908773,
      zoom: 12
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