import React, {
  useRef,
  useCallback,
  useEffect,
  useState
} from 'react'
import Link from 'next/link'
import {
  isEmpty,
  isArray,
  size,
  trim
} from 'lodash'
import moment from 'moment'
import {
  Empty,
  message
} from 'antd'
import {
  getToken
} from '../../utils/token'
import Crumbs from '../Crumbs'
import Paging from '../Paging'
import {
	ArticleWrapper,
	MarkDownWrapper
} from './style'

function Article({
  detail = {},
  OrsoArticle = {},
  commentsData = {},
  getComments,
  router,
  like,
  dislike,
  addComment,
  support,
  oppose,
  getDetail
}) {

  const articleId = router.query.id

  const {
		title = '',
		classify={},
		user = [],
		tags = [],
		image = '',
		content = '',
		fav_nums = 0,
    create_time = 0,
    fav_state
  } = detail || {}

  const {
    count = 0,
    rows = [],
    offset = 0,
    limit = 10
  } = commentsData || {}

  const {
    nextArticle,
    prevArticle
  } = OrsoArticle || {}

  const [currentUrl, setCurrentUrl] = useState('')
  const favorEle = useRef()
  const commentEle = useRef()
  // 收藏
  const handleLike = useCallback(() => {
    if (fav_state) {
      dislike(articleId);
    } else {
      like(articleId)
    }
  }, [dislike, fav_state, like, articleId]);

  // 评论
  const handleAddComment = useCallback( async () => {
    const ele = commentEle.current;
    const val = trim(ele.value);
    if (val) {
      const comment = await addComment(articleId, val)
      if (comment && comment.error_code === 0) {
        message.success(comment.msg);
        setTimeout(() => {
          getComments(articleId);
        }, 1000);
        ele.value = '';
      }
    }
  }, [addComment, getComments, articleId])

  // 评论支持
  const handleSupport = useCallback((e) => {
    e.preventDefault();
    const index = e.currentTarget.getAttribute('data-index');
    support(articleId, commentsData, index);
  }, [articleId, commentsData, support]);

  // 评论反对
  const handleOppose = useCallback((e) => {
    e.preventDefault();
    const index = e.currentTarget.getAttribute('data-index');
    oppose(articleId, commentsData, index);
  }, [articleId, oppose, commentsData]);

	const crumbsData = [{
		name: '主页',
		path: '/'
	}, ]

	if (!isEmpty(classify)) {
    const path = classify.path
    const newClassify = {
      ...classify,
      path: `/blog${path}`
    }
		crumbsData.push(newClassify)
		crumbsData.push({
			name: title
		})
  }

  useEffect(() => {
    const token = getToken('access_token')
    if (token) {
      getDetail(articleId)
      getComments(articleId)
    }

    setCurrentUrl(() => window.location.href)

    window.addEventListener('scroll', () => {
      const favEle = favorEle.current;
      const docTop = document.documentElement.scrollTop;
      const nowTop = docTop + 'px';
      favEle && (favEle.style.cssText = `top:${nowTop}`);
    }, false);

    return () => {
      window.removeEventListener('scroll', () => {});
    }
  }, [articleId, getComments, getDetail])

  const changePage = (page) => {
    getComments(articleId, {offset: (Number(page) - 1)*limit, limit})
  }

	return (
    <ArticleWrapper>
      <div
        ref={favorEle}
        className={fav_state ? 'favor active animated zoomIn delay-1s' : 'favor animated zoomIn delay-1s'}
        onClick={handleLike}
        title="收藏">
        <i className="fa fa-fire"></i>
        <span className="text">
          {
            fav_state ? '已收藏' : '收藏'
          }
        </span>
      </div>
        <div className="top">
          <Crumbs crumbs={crumbsData} />
          <div className="title">
          <h1 title={title}>{title}</h1>
            <div className="subtitle">
              <div className="item">
                <i className="fa fa-user"></i>
                <Link href="/about">
                  <a rel="category tag" title="作者">{user && user.username}</a>
                </Link>
              </div>
              <div className="item" title="收藏">
                <i className="fa fa-star"></i>{fav_nums}
              </div>
              <div className="item" title="发布时间">
                <i className="fa fa-clock-o"></i>
                {moment(create_time).format('YYYY-MM-DD')}
              </div>
              <div className="item tag">
                <i className="fa fa-tags"></i>
                {
                  tags.map(item => (
                    <Link
                    key={`tag_${item.id}`}
                    href={`/tags/${item.id}`}
                    >
                      <a
                        title={item.name}
                        rel="category tag">
                        {item.name}&nbsp;
                      </a>
                    </Link>
                  ))
                }
              </div>
            </div>
          </div>
          {
            image && (
              <img src={image.display} alt={title} />
            )
          }
          <MarkDownWrapper
            dangerouslySetInnerHTML={{
              __html: content
            }}>
          </MarkDownWrapper>
          <div className="postcopyright">
            <strong>版权保护: </strong>
            转载请保留链接:&nbsp;
            <a href={currentUrl} title={title}>{currentUrl}</a>
          </div>
          <div
            onClick={handleLike}
            className={fav_state ? 'bottom-favor active': 'bottom-favor'}>
            <i className="fa fa-fire"></i>
            <span className="text">
              {
                fav_state ? '已收藏' : '收藏'
              }
            </span>
          </div>
        </div>
        <ul className="paging clearfix">
          <li className="first">上一篇：{
            isEmpty(prevArticle)
            ? '没有了'
            : (
              <Link
              href={`/article/${prevArticle.id}`}
              >
                <a
                  title={prevArticle.title}>
                  {prevArticle.title}
                </a>
              </Link>
            )
          }</li>
          <li className="last">下一篇：{
            isEmpty(nextArticle)
            ? '没有了'
            : (
              <Link
              href={`/article/${nextArticle.id}`}
              >
                <a
                  title={nextArticle.title}>
                  {nextArticle.title}
                </a>
              </Link>
            )
          }</li>
        </ul>
      <div className="comment">
        <div className="comment-title">评论内容</div>
        <textarea
          ref={commentEle}
          className="text"
          placeholder="请输入评论内容">
        </textarea>
        <button
          onClick={handleAddComment}
          type="button"
          className="comment-btn">提交评论</button>
      </div>
      <div className="comment-list">
        <h2 className="list-title">评论列表</h2>
        {
          !isArray(rows) || size(rows) === 0 ? <Empty description="暂无评论" /> : (
            <>
              <ul>
                {
                  rows.map((item, index) => (
                    <li className="item" key={`li_${item.id}`}>
                      <div className="head">
                        <span>#{Number(offset) + index + 1}楼</span>
                        <span>{moment(item.create_time).format('YYYY-MM-DD h:mm:ss')}</span>
                        <span>{item.user && item.user.username}</span>
                      </div>
                      <div className="text">
                      <p>{item.content}</p>
                        <div className="text-bottom">
                        <a
                          onClick={handleSupport}
                          data-index={index}
                          href="/"
                          className={item.comment_state === 1 ? 'active': ''}>
                          {
                            item.comment_state === 1 ? '已支持' : '支持'
                          }
                          (<span>{item.like_nums}</span>)
                        </a>
                        <a
                          onClick={handleOppose}
                          data-index={index}
                          href="/"
                          className={item.comment_state === -1 ? 'active': ''}>
                          {
                            item.comment_state === -1 ? '已反对' : '反对'
                          }
                          (<span>{item.dislike_nums}</span>)
                        </a>
                        </div>
                      </div>
                    </li>
                  ))
                }
              </ul>
              <Paging
                total={count}
                current={Number(offset) / limit + 1}
                defaultPageSize={limit}
                changePage={changePage} / >
            </>
          )
        }
      </div>
    </ArticleWrapper>
	)
}

export default Article;