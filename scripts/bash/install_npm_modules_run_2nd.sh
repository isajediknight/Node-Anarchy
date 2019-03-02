#!/bin/bash/

# This script will install any missing npm modules
# to run the code for Node-Anarchy Node JS CMS

# This script also may not need to be run if
# git clone correctly got all needed modules

# How to run:
# Change To
#   /Node-Anarchy/servers/
# bash ./../scripts/bash/install_npm_modules_run_2nd.sh
# this will install "node_modules" to the correct directory

npm ls > temp.txt

npm_minimist="False"

# Has npm minimist been installed?
npm_minimist_installed=$(cat temp.txt | grep -w "minimist")
if [ "" == "$npm_minimist_installed" ]; then
  npm install minimist
  npm_minimist_action="True"
else
  echo "npm minimist already installed"
fi

rm temp.txt
