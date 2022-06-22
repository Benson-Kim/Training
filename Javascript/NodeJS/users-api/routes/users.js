import express from "express";
import data from '../MOCK_DATA.json'

const router = express.Router()

router.get('/users', function (req, res) {
    res(data)
})
export default router