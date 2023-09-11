
if [ $# -lt 2 ]; then
    echo '\nPlease provide the following parameters \n\nProject name: New name you would like the project to be renamed to \nBundle identifier: Set custom bundle identifier for both ios and android eg. "com.example.app"'
else

echo '📝 Renaming project'

PROJECT_NAME=$1
BUNDLE_IDENTIFIER=$2


npx react-native-rename $PROJECT_NAME -b $BUNDLE_IDENTIFIER
yarn clean
cd ios && pod install && cd ..


echo '✅ Renamed successfully!'

fi