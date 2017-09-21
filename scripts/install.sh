#!/bin/bash/

# This script will install the needed baseline modules
# to run the code for Node-Anarchy Node JS CMS

# How to run:
# bash ./install.sh

# Create list of installed packages via apt-get
apt-mark showauto > temp.txt
apt-mark showmanual >> temp.txt

vim_action="False"

# Has curl been installed?  If not install it
vim_installed=$(cat temp.txt | grep -w "vim")
if [ "" == "$vim_installed" ]; then
  sudo apt-get --force-yes --yes install vim
  vim_action="True"
else
  echo "vim already installed"
fi

curl_action="False"

# Has curl been installed?  If not install it
curl_installed=$(cat temp.txt | grep -w "curl")
if [ "" == "$curl_installed" ]; then
  sudo apt-get --force-yes --yes install curl
  curl_action="True"
else
  echo "curl already installed"
fi

git_action="False"

# Has git been installed?  If not install it
git_installed=$(cat temp.txt | grep -w "git")
if [ "" == "$git_installed" ]; then
  sudo apt-get --force-yes --yes install git
  git_action="True"
else
  echo "git already installed"
fi

openssh_server_action="False"

openssh_server_installed=$(cat temp.txt | grep -w "openssh-server")
if [ "" == "$openssh_server_installed" ]; then
  sudo apt-get --force-yes --yes install openssh-server
  openssh_server_action="True"
else
  echo "openssh-server already installed"
fi

# Remove the temporary file we used to see what was installed
rm -rf temp.txt

nvm_action="False"

# Has nvm been installed?  If not install it
if [ ! -d "/home/$USER/.nvm" ]; then
  # If desired change the nvm version being installed from the URL below
  curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.4/install.sh | bash
  bash --login
  echo "Please note that to use nvm immediately a new bash prompt was launched"
else
  echo "nvm already installed"
fi

clear

echo "--------------------------------------------"
echo "||      Installing Necesary Software      || "
echo "--------------------------------------------"
if [ "False" == "$vim_action" ]; then
  echo "|        vim |       was already installed |"
else
  echo "|        vim |          has been installed |"
fi

echo "--------------------------------------------"
if [ "False" == "$curl_action" ]; then
  echo "|       curl |       was already installed |"
else
  echo "|       curl |          has been installed |"
fi

echo "--------------------------------------------"
if [ "False" == "$git_action" ]; then
  echo "|        git |       was already installed |"
else
  echo "|        git |          has been installed |"
fi

echo "--------------------------------------------"
if [ "False" == "$openssh_server_action" ]; then
  echo "| ssh server |       was already installed |"
else
  echo "| ssh server |          has been installed |"
fi

echo "--------------------------------------------"
if [ "False" == "$nvm_action" ]; then
  echo "|        nvm |       was already installed |"
else
  echo "|        nvm |          has been installed |"
fi

echo "--------------------------------------------"

