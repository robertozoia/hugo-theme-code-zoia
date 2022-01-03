#!/bin/bash

NODE_ENV=production npx tailwindcss -i assets/css/tailwind.css -o assets/css/styles.css --minify
