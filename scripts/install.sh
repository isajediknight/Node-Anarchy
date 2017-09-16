#!/bin/bash/

# Create list of installed packages via apt-get
apt-mark showauto > temp.txt
apt-mark showmanual >> temp.txt

# Has curl been installed?  If not install it
curl_installed=$(cat temp.txt | grep -w "curl")
if [ "" == "$curl_installed" ]; then
  sudo apt-get --force-yes --yes install curl
fi

# Has git been installed?  If not install it
git_installed=$(cat temp.txt | grep -w "git")
if [ "" == "$git_installed" ]; then
  sudo apt-get --force-yes --yes install git
fi

openssh_server_installed=$(cat temp.txt | grep -w "openssh-server")
if [ "" == "$openssh_server_installed" ]; then
  sudo apt-get --force-yes --yes install openssh-server
fi

# Remove the temporary file we used to see what was installed
rm -rf temp.txt

# Recreate temp.txt so we can see if nvm is installed.
# If it's not installed install it
nvm > temp.txt

# Has nvm been installed?  If not install it
nvm_installed=$(cat temp.txt | grep -w "No command")
if [ "" == "$nvm_instgalled" ]; then
  # If desired change the nvm version being installed from the URL below
  curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.4/install.sh | bash
fi

# Delete temporary file
#rm -rf temp.txt

