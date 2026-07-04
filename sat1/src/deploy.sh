echo "pull the latest code from the repository"
git pull origin main
 
 echo "install dependencies"
npm install 
 echo "build the project"
npm run build       

echo "restart the application"
systemctl restart nginx 