const mongoose =require('mongoose');
const bcrypt =require('bcrypt');
const jwt =require('jsonwebtoken');
const config =require('./../config/config').get(process.env.NODE_ENV);

const SALT_I=10;