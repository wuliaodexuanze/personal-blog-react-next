import { combineReducers } from 'redux'
import { headerReducer } from '../containers/Header/store'
import { homeReducer } from '../containers/Home/store'
import { articleReducer } from '../containers/Article/store'
import { contentListReducer } from '../containers/ContentList/store'
import { sideReducer } from '../containers/Side/store'
import { tagsReducer } from '../containers/Tags/store'
import { userReducer } from '../containers/User/store'

const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  article: articleReducer,
  contentList: contentListReducer,
  side: sideReducer,
  tags: tagsReducer,
  user: userReducer
});

export default reducer;