import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Jobs from './Jobs.js';
import CreateJobs from './CreateJobs.js';



const MainNavigator = createStackNavigator({
    Jobs: {screen: Jobs},
    CreateJobs: {screen: CreateJobs},
});

const Main = createAppContainer(MainNavigator);

export default Main;