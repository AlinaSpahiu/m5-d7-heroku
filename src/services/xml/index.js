const express = require("express")
const {xml2js} = require("xml-js")
const axios = require("axios")

const xmlRouter = express.Router()

xmlRouter.get("/", async (req, res, next) =>{
 const {ip} = req.query
 try{
     const xmlResponse = await axios.get(
         `http://www.geoplugin.net/xml.gp?ip=${ip}` )
         console.log("RESPONSE: ", response)
     const xml = response.data
     console.log(xml)

     const parsedJS = xml2js(xml)
 }catch(error){
    next(error)
 }
})

module.exports = xmlRouter