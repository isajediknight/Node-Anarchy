#!/bin/bash/

# Create list of installed packages via apt-get
apt-mark showauto > temp.txt
apt-mark showmanual >> temp.txt

# Has curl been installed?  If not install it
vim_installed=$(cat temp.txt | grep -w "vim")
if [ "" == "$vim_installed" ]; then
  sudo apt-get --force-yes --yes install vim
else
  echo "vim already installed"
fi

# Has curl been installed?  If not install it
curl_installed=$(cat temp.txt | grep -w "curl")
if [ "" == "$curl_installed" ]; then
  sudo apt-get --force-yes --yes install curl
else
  echo "curl already installed"
fi

# Has git been installed?  If not install it
git_installed=$(cat temp.txt | grep -w "git")
if [ "" == "$git_installed" ]; then
  sudo apt-get --force-yes --yes install git
else
  echo "git already installed"
fi

openssh_server_installed=$(cat temp.txt | grep -w "openssh-server")
if [ "" == "$openssh_server_installed" ]; then
  sudo apt-get --force-yes --yes install openssh-server
else
  echo "openssh-server already installed"
fi

# Remove the temporary file we used to see what was installed
rm -rf temp.txt


# Has nvm been installed?  If not install it
if [ ! -d "/home/$USER/.nvm" ]; then
  # If desired change the nvm version being installed from the URL below
  curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.4/install.sh | bash
  bash --login
else
  echo "nvm already installed"
fi

