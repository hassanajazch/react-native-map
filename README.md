
## Development:
react-native-maps library with custom Markers based on location.

* Initialize with specific user location
* Fetch locations, I have implemented a service which will fetch locations via Axios call
* Separate components for Map View (Class Component )and Markers View (Functional Component)

## Preview:
![alt text](https://github.com/hassanajazch/react-native-map/blob/master/assets/app_view.png)


#### Running Step
- Install node v12.18.0
- `npm install -g expo-cli`
- `npm install`
- Run Application in Expo - `npm start`

#### Code Style
- Perfectly follow Single Responsibility rule
- Build Separate components based on responsibility
- Use `ESLint` to follow specific standards
- Add `prettier` to keep code ident
- Use TRY - Catch to never miss any error

#### Testing (Needs to be implemented)
- I have used `JEST` for testing
- Use AAA pattern for writing unit test (Arrange, Act, Assert)