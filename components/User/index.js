import React, {
  useCallback,
  useState,
  useEffect,
  useRef
} from 'react'
import Link from 'next/link'
import moment from 'moment'
import {
  isArray,
  size,
  isEmpty,
  trim
} from 'lodash'
import {
  Card,
  Tabs,
  Timeline,
  Collapse,
  Upload,
  Button,
  Input,
  Message,
  Skeleton
} from 'antd'
import { getToken } from '../../utils/token'
import ListItem from '../../common/ListItem'
import Paging from '../../common/Paging'
import {
  UserWrapper
} from './style'

const { Meta } = Card
const { TabPane } = Tabs
const { Panel } = Collapse

function User({
  userInfo = {},
  favorData = {},
  commentData = [],
  getUser,
  getUserFavors,
  getUserComments,
  history,
  updateUserInfo,
  updatePass,
  updateAvatar
}) {
  const {
    username = '',
    nickname = '',
    email = '',
    avatar = '',
    create_time
  } = userInfo || {}

  const {
    count: favorCount = 0,
    rows: favorLits = [],
    offset: favorOffset = 0,
    limit: favorLimit = 10
  } = favorData || {}

  const uploadState = useRef()
  uploadState.current = false
  const oldPassEle = useRef()
  const newPassEle = useRef()
  const confirmPassEle = useRef()
  const [favorLoading, setFavorLoading] = useState(true)
  const [commentLoading, setCommentLoading] = useState(true)
  const [mail, setMail] = useState('')
  const [nkname, setNkname] = useState('')

  const beforeUpload = useCallback ((file) => {
    uploadState.current = true
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg'
    if (!isJpgOrPng) {
      Message.error('只能上传jpeg、png、jpg格式图片')
      uploadState.current = false
    }
    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
      Message.error('图片大小必须在2M内')
      uploadState.current = false
    }
    return false
  }, [])

  const uploadAvatar = useCallback(({file = {}}) => {
    const formData = new FormData()
    formData.append('file', file)
    if (uploadState.current) {
      updateAvatar(formData)
    }
  }, [updateAvatar, uploadState])

  const handleChangeTab = useCallback((activeKey) => {
    const key = Number(activeKey)
    switch (key) {
      case 2:
        if (isEmpty(favorData) || isEmpty(favorData.rows)) {
          setFavorLoading(() => true)
        } else {
          setFavorLoading(() => false)
        }
        getUserFavors()
        break
      case 3:
        if (isEmpty(commentData)) {
          setCommentLoading(() => true)
        } else {
          setCommentLoading(() => false)
        }
        getUserComments()
        break
      default:
        break
    }
  }, [commentData, favorData, getUserComments, getUserFavors])

  const handleChangeEmail = useCallback((e) => {
    const val = e.currentTarget.value
    setMail(() => val)
  }, [])

  const handleChangeNickname = useCallback((e) => {
    const val = e.currentTarget.value
    setNkname(() => val)
  }, [])

  /**
   * 修改基本信息
   */
  const handleSaveInfo = useCallback(() => {
    const data = {
      email: trim(mail) || '',
      nickname: trim(nkname) || ''
    }
    updateUserInfo(data)
  }, [mail, nkname, updateUserInfo])

  /**
   * 修改密码
   */
  const handleSavePass = useCallback(() => {
    const old_password = trim(oldPassEle.current.state.value) || ''
    const new_password = trim(newPassEle.current.state.value) || ''
    const confirm_password = trim(confirmPassEle.current.state.value) || ''

    if (old_password && new_password && confirm_password) {
      updatePass({
        old_password,
        new_password,
        confirm_password
      })
    } else {
      Message.warning('请填写完整信息再操作')
    }
    
  }, [updatePass])

  const changeFavorPage = (page) => {
    getUserFavors({offset: (Number(page) - 1)*favorLimit, limit: favorLimit})
  }

  useEffect(() => {
    const refresh_token = getToken('refresh_token')
    const access_token = getToken('access_token')
    if (!refresh_token || !access_token) {
      history.push('/login')
    }

    getUser()

    if (!isEmpty(favorData) && !isEmpty(favorData.rows)) {
      setFavorLoading(() => false)
    }
    if (!isEmpty(commentData)) {
      setCommentLoading(() => false)
    }
    setMail(() => email)
    setNkname(() => nickname)
  }, [commentData, favorData, email, nickname, history, getUser])

  return(
    <UserWrapper className="animated slideInLeft">
      <div className="head-box">
        <Card>
          <div className="change-avatar">
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              multiple={false}
              beforeUpload={beforeUpload}
              onChange={uploadAvatar}>
                {
                  avatar
                  ? <img src={avatar} alt="avatar" />
                  : (
                    <div>
                      <img src={'../../static/imgs/default-avatar.jpg'} alt="avatar" />
                      <div className="upload-icon">
                        <i className="fa fa-upload"></i>
                        <div className="ant-upload-text">修改头像</div>
                      </div>
                    </div>
                  )
                }
            </Upload>
          </div>
          <Meta
            title={
              <>
                <i className="fa fa-user"></i>&nbsp;用户名:&nbsp;{username}
              </>
            }
            description={
              <ul className="user-info">
                <li>
                  <i className="fa fa-address-book-o"></i><span className="label">昵称:</span>
                  {nickname || '暂无'}
                </li>
                <li>
                  <i className="fa fa-envelope"></i><span className="label">邮箱:</span>
                  {email || '暂无'}
                </li>
                <li>
                  <i className="fa fa-clock-o"></i><span className="label">创建时间:</span>
                  {moment(create_time).format('YYYY-MM-DD')}
                </li>
              </ul>
            }
          />
        </Card>
      </div>
      <div className="main-box">
        <Tabs
          type="card"
          defaultActiveKey="1"
          onChange={handleChangeTab}>
          <TabPane tab="用户中心" key="1">
            <form autoComplete="off">
              <ul className="user-center">
                <li className="clearfix">
                  <div className="left">
                    用户名
                  </div>
                  <div className="right">
                    {username}
                  </div>
                </li>
                <li className="clearfix">
                  <div className="left">
                    邮箱
                  </div>
                  <div className="right">
                    <Input
                      onChange={handleChangeEmail}
                      value={mail}
                      autoComplete="off"
                      placeholder="请输入邮箱" />
                  </div>
                </li>
                <li className="clearfix">
                  <div className="left">
                    昵称
                  </div>
                  <div className="right">
                    <Input
                      onChange={handleChangeNickname}
                      value={nkname}
                      autoComplete="off"
                      placeholder="请输入昵称" />
                  </div>
                </li>
                <li className="clearfix">
                  <div className="left">
                    <Button
                      type="primary"
                      onClick={handleSaveInfo}>修改信息</Button>
                  </div>
                </li>
              </ul> 
            </form>
            <form>
              <ul className="user-center">
                <li className="clearfix">
                  <div className="left">
                    旧密码
                  </div>
                  <div className="right">
                    <Input
                      ref={oldPassEle}
                      type="password"
                      required
                      autoComplete="off"
                      placeholder="不修改密码可以不填写" />
                  </div>
                </li>
                <li className="clearfix">
                  <div className="left">
                    新密码
                  </div>
                  <div className="right">
                    <Input
                      ref={newPassEle}
                      type="password"
                      required
                      autoComplete="off"
                      placeholder="不修改密码可以不填写" />
                  </div>
                </li>
                <li className="clearfix">
                  <div className="left">
                    确认密码
                  </div>
                  <div className="right">
                    <Input
                      ref={confirmPassEle}
                      type="password"
                      required
                      autoComplete="off"
                      placeholder="不修改密码可以不填写" />
                  </div>
                </li>
                <li className="clearfix">
                  <div className="left">
                    <Button
                      type="danger"
                      onClick={handleSavePass}>重置密码</Button>
                  </div>
                </li>
              </ul>
            </form>
          </TabPane>
          <TabPane tab="我的收藏" key="2">
            <Skeleton
              avatar={{size: 100, shape: 'square'}}
              active
              title={{ rows: 2 }}
              paragraph={{ rows: 5 }}
              loading={favorLoading}>
              <ul className="user-collect clearfix">
                {
                  isArray(favorLits) && size(favorLits) > 0 ? (
                    favorLits.map(item => (<li key={`list_${item.id}`}><ListItem {...item} /></li>))
                  ) : null
                }
              </ul>
              <div className="paging">
                <Paging
                  total={favorCount}
                  current={Number(favorOffset) / favorLimit + 1}
                  defaultPageSize={favorLimit}
                  changePage={changeFavorPage} / >
              </div>
            </Skeleton>
          </TabPane>
          <TabPane tab="我的评论" key="3">
            <Skeleton
              avatar={{size: 100, shape: 'square'}}
              active
              title={{ rows: 2 }}
              paragraph={{ rows: 5 }}
              loading={commentLoading}>
              <Timeline mode="alternate">
                {
                  isArray(commentData) && size(commentData) > 0 ? (
                      commentData.map(item => (
                        <Timeline.Item key={`timeline_${item.id}`}>
                        <Collapse
                          accordion
                          bordered={false}>
                          <Panel header={<Link href={`/article/${item.id}`}><a>{item.title}</a></Link>} key={item.id}>
                            <ul className="comment-list">
                              {
                                item.comment_list.map((comment) => (
                                  <li key={`li_${comment.id}`}><Link href={`/article/${item.id}`}><a>{comment.content}</a></Link></li>
                                ))
                              }
                            </ul>
                          </Panel>
                        </Collapse>
                      </Timeline.Item>
                      ))
                    ) : null
                }
              </Timeline>
            </Skeleton>
          </TabPane>
        </Tabs>
      </div>
    </UserWrapper>
  )
}

export default User
