# Install "media" express dependencies
echo "Installing users express dependencies"
cd ./media/
pnpm i
cd ../

# install "users" flask dependencies
echo "Installing media flask dependencies"
cd ./users/
pip install -r requirements.txt
cd ../
