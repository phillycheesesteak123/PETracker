const express = require('express');
const { globalAgent } = require('https');
const path = require('path');
const port = process.env.PORT || 5000;
const {pool} = require('pg');
const { Pool } = require('pg/lib');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});